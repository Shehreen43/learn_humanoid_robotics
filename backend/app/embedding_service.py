from fastapi import APIRouter

router = APIRouter()

@router.post("/embed")
async def create_embedding(text: str):
    # TODO: Integrate real embedding model (e.g., SentenceTransformers, OpenAI)
    mock_embedding = [0.1] * 384
    return {"embedding": mock_embedding}
