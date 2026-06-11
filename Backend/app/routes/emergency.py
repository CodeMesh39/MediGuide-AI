from fastapi import APIRouter

from pydantic import BaseModel

from app.services.emergency_service import (
    analyze_emergency,
)

router = APIRouter()


class EmergencyRequest(
    BaseModel
):
    symptoms: str


@router.post(
    "/emergency/check"
)
def emergency_check(
    request: EmergencyRequest
):
    result = analyze_emergency(
        request.symptoms
    )

    return {
        "result": result
    }