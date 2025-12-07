from qdrant_client import QdrantClient
from qdrant_client.http import models
import os
from dotenv import load_dotenv

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
COLLECTION_NAME = "course_content"

def ensure_collection():
    collections = client.get_collections()
    names = [c.name for c in collections.collections]
    if COLLECTION_NAME not in names:
        client.create_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),
        )
        print(f"Created collection: {COLLECTION_NAME}")

def upsert_chunks(chunks: list[dict]):
    """
    chunks format: [{'id': str, 'vector': list, 'payload': dict}]
    """
    ensure_collection()
    points = [
        models.PointStruct(
            id=chunk['id'],
            vector=chunk['vector'],
            payload=chunk['payload']
        )
        for chunk in chunks
    ]
    client.upsert(
        collection_name=COLLECTION_NAME,
        points=points
    )
    print(f"Upserted {len(points)} points.")

def search(query_vector: list, limit: int = 5):
    return client.search(
        collection_name=COLLECTION_NAME,
        query_vector=query_vector,
        limit=limit
    )
