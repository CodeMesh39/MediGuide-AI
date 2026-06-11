from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

import os

from app.services.report_service import (
    extract_pdf_text,
)

from app.services.gemini_service import (
    generate_response,
)

router = APIRouter()


UPLOAD_FOLDER = "uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)


@router.post("/report/analyze")
async def analyze_report(
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

    report_text = extract_pdf_text(
        file_path
    )

    prompt = f"""
You are MediGuide AI.

Analyze the following medical report.

Provide:

1. Simple Summary

2. Important Findings

3. Abnormal Values

4. Possible Concerns

5. Recommended Next Steps

Medical Report:

{report_text}
"""

    analysis = generate_response(
        prompt
    )

    return {
        "analysis": analysis,
        "filename": file.filename,
    }