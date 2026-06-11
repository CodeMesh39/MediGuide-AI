from fastapi import (
    APIRouter,
    UploadFile,
    File,
)

import os

from app.services.image_service import (
    analyze_medical_image,
)

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)


@router.post(
    "/image/analyze"
)
async def analyze_image(
    file: UploadFile = File(...)
):
    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(
        file_path,
        "wb"
    ) as buffer:
        buffer.write(
            await file.read()
        )

    analysis = (
        analyze_medical_image(
            file_path
        )
    )

    return {
        "filename": file.filename,
        "analysis": analysis,
    }