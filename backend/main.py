from fastapi import FastAPI
from backend.app.handlers.veterans import router as veteran_router
from backend.app.handlers.volonters import router as volunters_router

app = FastAPI()



app.include_router(router=veteran_router)
app.include_router(router=volunters_router)