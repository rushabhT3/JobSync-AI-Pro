from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional
from pydantic import BaseModel


class AnalysisResult(BaseModel):
    score: int
    common_keywords: List[str]
    missing_keywords: List[str]
    missing_with_weight: List[List[Any]]
    suggestions: str
    job_title: str
    resume_preview: str
    jd_preview: str


class ITextExtractor(ABC):
    @abstractmethod
    async def extract_text(self, file_bytes: bytes) -> str:
        pass


class IAnalysisEngine(ABC):
    @abstractmethod
    async def analyze(self, resume_text: str, jd_text: str) -> Dict[str, Any]:
        pass


class ISuggestionService(ABC):
    @abstractmethod
    async def generate_suggestions(
        self, missing_keywords: List[str], resume_text: str, job_title: str
    ) -> str:
        pass


class IAnalysisRepository(ABC):
    @abstractmethod
    async def save_analysis(self, result: AnalysisResult) -> Any:
        pass

    @abstractmethod
    async def get_history(self, limit: int = 50) -> List[Any]:
        pass
