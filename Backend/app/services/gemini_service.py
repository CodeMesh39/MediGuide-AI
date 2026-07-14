import google.generativeai as genai
import os

from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-3.5-flash"
)
chat_model = genai.GenerativeModel(
    "gemini-3.5-flash"
)

vision_model = genai.GenerativeModel(
    "gemini-3.5-flash"
)
from google.api_core.exceptions import ResourceExhausted

def generate_response(prompt: str):
    try:
        response = chat_model.generate_content(prompt)
        return response.text

    except ResourceExhausted:
        return """
# Gemini Rate Limit Reached

The AI service has temporarily reached its request limit.

Please wait a minute and try again.

This is a Gemini API quota limitation, not a MediGuide AI error.
"""
    except Exception as e:
        return f"Error: {str(e)}"
