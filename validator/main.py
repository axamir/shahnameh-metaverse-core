from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Optional
import random
import time

app = FastAPI(title="Shahnameh Loyalty Validator", version="0.1.0")

# ---------- Data Models ----------
class ValidationRequest(BaseModel):
    member_address: str
    tribe_symbol: str
    tribe_seal: str
    public_actions: List[str] = []

class LLMResult(BaseModel):
    score: int = Field(ge=0, le=100)

class ValidationResponse(BaseModel):
    final_score: int
    individual_scores: List[LLMResult]

# ---------- Simulated LLM Committee ----------
# در نسخهٔ واقعی، این توابع به APIهای حقیقی متصل می‌شوند
def call_llm_chatgpt(seal: str, actions: List[str]) -> int:
    """Simulate ChatGPT-4 scoring based on keyword matching."""
    positive_keywords = ["support", "help", "community", "contribute", "honesty"]
    negative_keywords = ["betray", "cheat", "abandon", "harm"]
    score = 50
    for action in actions:
        for word in positive_keywords:
            if word in action.lower():
                score += 5
        for word in negative_keywords:
            if word in action.lower():
                score -= 10
    return max(0, min(100, score))

def call_llm_claude(seal: str, actions: List[str]) -> int:
    """Simulate Claude scoring with slight variation."""
    base = call_llm_chatgpt(seal, actions)
    # Add some randomness to simulate different model behavior
    return max(0, min(100, base + random.randint(-8, 8)))

def call_llm_llama(seal: str, actions: List[str]) -> int:
    """Simulate Llama (local) scoring."""
    base = call_llm_chatgpt(seal, actions)
    return max(0, min(100, base + random.randint(-5, 5)))

# ---------- Endpoints ----------
@app.post("/validate", response_model=ValidationResponse)
async def validate_loyalty(request: ValidationRequest):
    if not request.member_address or not request.tribe_symbol:
        raise HTTPException(status_code=400, detail="Missing required fields")

    # تشکیل کمیته و رأی‌گیری
    scores = []
    scores.append(LLMResult(score=call_llm_chatgpt(request.tribe_seal, request.public_actions)))
    scores.append(LLMResult(score=call_llm_claude(request.tribe_seal, request.public_actions)))
    scores.append(LLMResult(score=call_llm_llama(request.tribe_seal, request.public_actions)))

    # میانگین ساده (در نسخهٔ واقعی وزن‌دهی می‌شود)
    final_score = int(sum(s.score for s in scores) / len(scores))

    return ValidationResponse(final_score=final_score, individual_scores=scores)

@app.get("/health")
async def health():
    return {"status": "ok", "version": app.version}
