from fastapi import FastAPI
from app import auth_service, qdrant_service, embedding_service, learning_path_service, chat_service

app = FastAPI(title="AI Robotics Book Backend")

# Enable CORS for frontend
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_service.router, prefix="/auth", tags=["Auth"])
app.include_router(qdrant_service.router, prefix="/qdrant", tags=["Qdrant"])
app.include_router(embedding_service.router, prefix="/embedding", tags=["Embedding"])
app.include_router(learning_path_service.router, prefix="/learning-path", tags=["Learning Path"])
app.include_router(chat_service.router, prefix="/api", tags=["Chat"])

@app.get("/")
async def root():
    return {"message": "AI Robotics Book Backend Running"}
