from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List
import os
from openai import OpenAI
from app.qdrant_service import search
from dotenv import load_dotenv
import psycopg2
from datetime import datetime

load_dotenv()

router = APIRouter()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
DATABASE_URL = os.getenv("DATABASE_URL")

class ChatRequest(BaseModel):
    message: str
    context: Optional[str] = None

class ChatResponse(BaseModel):
    reply: str
    references: List[str]

def log_chat(user_msg, bot_msg):
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        # Ensure table exists
        cur.execute("""
            CREATE TABLE IF NOT EXISTS chat_history (
                id SERIAL PRIMARY KEY,
                user_message TEXT,
                bot_response TEXT,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        cur.execute(
            "INSERT INTO chat_history (user_message, bot_response) VALUES (%s, %s)",
            (user_msg, bot_msg)
        )
        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Logging failed: {e}")

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    user_query = request.message
    selection_context = request.context
    
    retrieved_text = ""
    references = []
    
    # 1. Retrieval Logic
    if selection_context:
        # If user selected text, answer based ONLY on that selection (as requested)
        retrieved_text = f"User Selected Context:\n{selection_context}\n"
        references.append("User Selection")
    else:
        # Otherwise, perform semantic search
        try:
            query_vector = client.embeddings.create(
                input=user_query,
                model="text-embedding-3-small"
            ).data[0].embedding
            
            search_results = search(query_vector=query_vector, limit=3)
            
            for hit in search_results:
                retrieved_text += f"---\nSource: {hit.payload['source']}\n{hit.payload['text']}\n"
                references.append(hit.payload['source'])
        except Exception as e:
            print(f"Search failed: {e}")
            retrieved_text = "Search unavailable."

    # 2. Generation
    system_prompt = (
        "You are an AI assistant for a Humanoid Robotics course. "
        "Answer the user's question using the provided context. "
        "If the context is insufficient, politely state so or use general knowledge with a disclaimer."
    )
    
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": f"Context:\n{retrieved_text}\n\nQuestion: {user_query}"}
    ]
    
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages
    )
    
    reply = completion.choices[0].message.content
    
    # 3. Logging
    log_chat(user_query, reply)
    
    return ChatResponse(reply=reply, references=list(set(references)))
