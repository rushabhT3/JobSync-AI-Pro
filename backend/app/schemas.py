from pydantic import BaseModel
from typing import List

class AnalysisResponse(BaseModel):
    score: int
    common_keywords: List[str]
    missing_keywords: List[str]
    missing_with_weight: List[tuple]
    suggestions: str
    job_title: str
    resume_preview: str
    jd_preview: str
