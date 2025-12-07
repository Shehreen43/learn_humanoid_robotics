from fastapi import APIRouter

router = APIRouter()

@router.post("/recommend")
async def get_recommendations(user_profile: dict):
    # Simple rule-based logic placeholder
    software_bg = user_profile.get("softwareBackground", "beginner")
    
    path = []
    if software_bg == "beginner":
        path = ["intro", "python-basics", "ros2-fundamentals"]
    else:
        path = ["intro", "ros2-advanced", "vla-systems"]
        
    return {"recommended_path": path}
