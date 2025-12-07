# Specification: RAG Chatbot Integration

## Goal
Build a Retrieval-Augmented Generation (RAG) chatbot embedded in the Docusaurus book that answers questions about the course content.

## Tech Stack
- **Backend**: FastAPI (Python)
- **Vector DB**: Qdrant Cloud (Free Tier)
- **LLM**: OpenAI (GPT-4o/mini)
- **Database**: Neon Serverless Postgres (for chat logs)
- **Frontend**: React (Docusaurus)

## Architecture

### 1. Ingestion Pipeline
- **Source**: `frontend/docs/**/*.md`
- **Process**:
    1.  Read Markdown files.
    2.  Split into chunks (e.g., 500 tokens, overlapping).
    3.  Generate Embeddings (OpenAI `text-embedding-3-small`).
    4.  Upsert to Qdrant Collection (`course_content`).

### 2. Backend API (`backend/app/`)
- `POST /chat`:
    - Input: `{ message: str, context: Optional[str] }`
    - Logic:
        1.  If `context` (selection) is provided, prioritize it.
        2.  Embed `message`.
        3.  Search Qdrant for semantic neighbors.
        4.  Construct Prompt with `message` + `retrieved chunks`.
        5.  Call OpenAI Chat Completion.
    - Output: `{ reply: str, references: List[str] }`

### 3. Frontend Component
- **Floating Chat Widget**: Fixed at bottom-right.
- **Context Awareness**: "Ask about selection" button appears when user highlights text.

## Data Model (Postgres - Neon)
- **Table**: `chat_history`
    - `id`: UUID
    - `user_message`: Text
    - `bot_response`: Text
    - `timestamp`: DateTime

## Environment Variables
- `OPENAI_API_KEY`
- `QDRANT_URL`
- `QDRANT_API_KEY`
- `DATABASE_URL` (Neon)
