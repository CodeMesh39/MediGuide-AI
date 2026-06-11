from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.chat import (
    router as chat_router,
)

from app.routes.report import (
    router as report_router,
)

from app.routes.image import (
    router as image_router,
)

from app.routes.emergency import (
    router as emergency_router,
)

app = FastAPI(
    title="MediGuide AI API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    chat_router,
    prefix="/api"
)

app.include_router(
    report_router,
    prefix="/api"
)
app.include_router(
    image_router,
    prefix="/api"
)

app.include_router(
    emergency_router,
    prefix="/api"
)

@app.get("/")
def root():
    return {
        "message": "MediGuide AI Backend Running"
    }
    