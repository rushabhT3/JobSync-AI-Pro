from fastapi import FastAPI, UploadFile, File, Form, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging
import os
from .database import get_database_manager, get_repository
from .models import SQLModel
from .services.extraction import PDFTextExtractor
from .services.analysis import NLPAnalysisEngine
from .services.llm_service import GenericLLMService
from .services.orchestrator import AnalysisOrchestrator
from .interfaces import AnalysisResult

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting JobSync AI Pro...")
    db_manager = get_database_manager()
    db_manager.initialize_database()
    yield
    logger.info("Shutting down JobSync AI Pro.")


app = FastAPI(
    title="JobSync AI Pro",
    description="Professional AI-powered ATS resume optimizer",
    version="3.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://job-sync-ai-pro.vercel.app",
        "https://jobsync-ai-pro.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


def get_orchestrator() -> AnalysisOrchestrator:
    # Provider can be set via environment variable, defaults to gemini
    llm_provider = os.getenv("LLM_PROVIDER", "gemini")
    return AnalysisOrchestrator(
        extractor=PDFTextExtractor(),
        engine=NLPAnalysisEngine(),
        suggestion_service=GenericLLMService(llm_provider),
        repository=get_repository(),
    )


@app.get("/")
def home():
    return {
        "message": "JobSync AI Pro API is live",
        "version": "3.0.0",
        "status": "healthy",
    }


@app.post("/analyze", response_model=AnalysisResult)
async def analyze(
    resume_file: UploadFile = File(...),
    jd_file: UploadFile = File(...),
    job_title: str = Form("Software Engineer"),
    orchestrator: AnalysisOrchestrator = Depends(get_orchestrator),
):
    try:
        if not resume_file.filename.endswith(".pdf") or not jd_file.filename.endswith(
            ".pdf"
        ):
            raise HTTPException(
                status_code=400, detail="Only PDF files are supported at this time."
            )

        logger.info(f"Analyzing resume for position: {job_title}")

        resume_bytes = await resume_file.read()
        jd_bytes = await jd_file.read()

        result = await orchestrator.run_analysis(resume_bytes, jd_bytes, job_title)
        return result

    except Exception as e:
        logger.error(f"Analysis endpoint failed: {e}")
        raise HTTPException(
            status_code=500, detail="Internal server error during analysis."
        )


@app.get("/history")
async def get_history(orchestrator: AnalysisOrchestrator = Depends(get_orchestrator)):
    history = await orchestrator.repository.get_history()
    return {"history": history}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
