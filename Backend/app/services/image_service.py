from PIL import Image
import google.generativeai as genai
import tempfile
from google.api_core.exceptions import ResourceExhausted


def analyze_medical_image(image_path: str):
    try:
        image = Image.open(image_path)

        # Convert unsupported formats to RGB
        if image.mode != "RGB":
            image = image.convert("RGB")

        # Save temporary JPEG
        temp_file = tempfile.NamedTemporaryFile(
            suffix=".jpg",
            delete=False
        )

        image.save(
            temp_file.name,
            format="JPEG"
        )

        vision_model = (
    genai.GenerativeModel(
        "gemini-2.5-flash"
    )
)

        prompt = """
You are MediGuide AI.

Analyze this medical image.

Provide:

1. Image Type
2. Important Findings
3. Potential Abnormalities
4. Medical Interpretation
5. Recommendations

Mention clearly:
This is AI-assisted analysis and not a medical diagnosis.
"""

        response = vision_model.generate_content(
            [
                prompt,
                Image.open(temp_file.name)
            ]
        )

        return response.text

    except ResourceExhausted:
        return """
# Gemini Rate Limit Reached

Please wait a minute and try again.
"""

    except Exception as e:
        return f"Image Analysis Error: {str(e)}"