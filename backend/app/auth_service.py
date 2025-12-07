from fastapi import APIRouter

router = APIRouter()

@router.post("/signup")
async def signup(user_data: dict):
    # TODO: Integrate BetterAuth or similar real auth provider
    return {"message": "Signup placeholder", "user": user_data}

@router.post("/signin")
async def signin(credentials: dict):
    # TODO: Integrate BetterAuth or similar real auth provider
    return {"message": "Signin placeholder", "token": "mock-token"}
