from app.services.gemini_service import (
    generate_response,
)


def analyze_emergency(
    symptoms: str
):
    prompt = f"""
You are an emergency medical triage assistant.

Analyze these symptoms:

{symptoms}

Return ONLY in this format:

Severity: Low/Moderate/High/Critical

Risk Score: number from 0-100

Possible Conditions:
- item 1
- item 2

Recommendation:
recommendation text

Important:
If symptoms indicate heart attack, stroke,
breathing difficulty, unconsciousness,
severe bleeding or emergency conditions,
mark severity as Critical.
"""

    return generate_response(
        prompt
    )