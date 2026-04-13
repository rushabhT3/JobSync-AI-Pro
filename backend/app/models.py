from sqlmodel import SQLModel, Field
from datetime import datetime
from typing import Optional


class AnalysisHistory(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    score: int
    missing_keywords: str
    suggestions: str
    job_title: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
