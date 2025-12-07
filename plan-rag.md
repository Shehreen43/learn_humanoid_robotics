# Implementation Plan: RAG Chatbot

## Setup
- [ ] Create `backend/.env` template.
- [ ] Install dependencies: `fastapi`, `uvicorn`, `qdrant-client`, `openai`, `langchain-text-splitters`, `psycopg2-binary`.

## Backend Development
- [ ] **Ingestion Script** (`backend/scripts/ingest.py`):
    - [NEW] Script to crawl `frontend/docs`, chunk text, and push to Qdrant.
- [ ] **Qdrant Service** (`backend/app/qdrant_service.py`):
    - [MODIFY] Implement `search(query_vector)` and `upsert(chunks)`.
- [ ] **Chat Service** (`backend/app/chat_service.py`):
    - [NEW] Implement `generate_response(message, context)`.
- [ ] **Main API** (`backend/app/main.py`):
    - [MODIFY] Add `/api/chat` endpoint.

## Frontend Integration
- [ ] **Chat Widget** (`frontend/src/components/ChatWidget.tsx`):
    - [NEW] React component for chat UI.
- [ ] **Layout Integration**:
    - [MODIFY] Wrap Docusaurus Layout to include `ChatWidget`.

## Verification
- [ ] **Manual Test**: Run ingestion script and verify Qdrant collection count.
- [ ] **Manual Test**: Curl request to `/api/chat` to verify RAG response.
- [ ] **Browser Test**: Open Docusaurus, select text, and ask chatbot.
