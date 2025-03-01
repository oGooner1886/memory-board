from fastapi import APIRouter
from backend.app.schema.veteran import Veteran



router = APIRouter(prefix="/veteran", tags=['veterans'])


@router.get(
        "/all",
        response_model=list[Veteran]
)
async def read_veteran():
    return {"message": "Hello, Veteran!"}
