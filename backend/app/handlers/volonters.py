from fastapi import APIRouter

router = APIRouter(prefix="/volonteer", tags=['volonteers'])

@router.get("/")
async def read_volonteer():
    return {"message": "Hello, Volonteer!"}
