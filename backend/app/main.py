from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.services.nlp_engine import calculate_match_score
from app.services.llm_suggest import generate_suggestions
from app.services.pdf_parser import extract_text_from_pdf
from app.models import AnalysisHistory
from app.database import engine
from sqlmodel import Session
from datetime import datetime
from dotenv import load_dotenv
import os

# Load .env file
load_dotenv()

FRONTEND_URL = os.getenv("FRONTEND_URL", "")

@asynccontextmanager
async def lifespan(app: FastAPI):
    from app.models import SQLModel
    SQLModel.metadata.create_all(engine)
    yield

app = FastAPI(title="JobSync AI Pro", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "JobSync AI Pro is running!", "version": "2.0"}

@app.post("/analyze")
async def analyze(
    resume_file: UploadFile = File(...),
    jd_file: UploadFile = File(...),
    job_title: str = Form("Software Engineer")
):
    resume_bytes = await resume_file.read()
    jd_bytes = await jd_file.read()

    resume_text = extract_text_from_pdf(resume_bytes)
    jd_text = extract_text_from_pdf(jd_bytes)

    result = calculate_match_score(resume_text, jd_text)
    suggestions = await generate_suggestions(result["missing_keywords"], resume_text, job_title)

    # Save to history
    with Session(engine) as session:
        history = AnalysisHistory(
            score=result["score"],
            missing_keywords=str(result["missing_keywords"]),
            suggestions=suggestions,
            job_title=job_title
        )
        session.add(history)
        session.commit()

    return {
        "score": result["score"],
        "common_keywords": result["common_keywords"],
        "missing_keywords": result["missing_keywords"],
        "missing_with_weight": result["missing_with_weight"],
        "suggestions": suggestions,
        "job_title": job_title,
        "resume_preview": resume_text[:500],
        "jd_preview": jd_text[:300]
    }
