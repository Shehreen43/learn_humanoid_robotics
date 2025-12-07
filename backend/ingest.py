import os
import glob
import uuid
from openai import OpenAI
from dotenv import load_dotenv
from app.qdrant_service import upsert_chunks

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

DOCS_DIR = "../frontend/docs"

def get_markdown_files(directory):
    return glob.glob(os.path.join(directory, "**/*.md"), recursive=True) + \
           glob.glob(os.path.join(directory, "**/*.mdx"), recursive=True)

def chunk_text(text, chunk_size=1000, overlap=100):
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start += (chunk_size - overlap)
    return chunks

def embed_text(text):
    response = client.embeddings.create(
        input=text,
        model="text-embedding-3-small"
    )
    return response.data[0].embedding

def ingest_data():
    files = get_markdown_files(DOCS_DIR)
    print(f"Found {len(files)} markdown files.")
    
    all_chunks = []
    
    for file_path in files:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Simple metadata extraction (filename)
        filename = os.path.basename(file_path)
        
        chunks = chunk_text(content)
        for i, chunk in enumerate(chunks):
            print(f"Processing chunk {i} of {filename}...")
            vector = embed_text(chunk)
            chunk_id = str(uuid.uuid5(uuid.NAMESPACE_DNS, f"{filename}-{i}"))
            
            all_chunks.append({
                "id": chunk_id,
                "vector": vector,
                "payload": {
                    "text": chunk,
                    "source": filename,
                    "chunk_index": i
                }
            })
            
            if len(all_chunks) >= 10: # Batch upsert
                upsert_chunks(all_chunks)
                all_chunks = []

    if all_chunks:
        upsert_chunks(all_chunks)

if __name__ == "__main__":
    ingest_data()
