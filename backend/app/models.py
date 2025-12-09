from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class AnalysisHistory(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    score: int
    missing_keywords: str  # JSON string
    suggestions: str
    job_title: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
