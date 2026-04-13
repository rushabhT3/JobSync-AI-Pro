import logging
from typing import Dict, Any
from ..interfaces import (
    ITextExtractor,
    IAnalysisEngine,
    ISuggestionService,
    IAnalysisRepository,
    AnalysisResult,
)

logger = logging.getLogger(__name__)


class AnalysisOrchestrator:
    def __init__(
        self,
        extractor: ITextExtractor,
        engine: IAnalysisEngine,
        suggestion_service: ISuggestionService,
        repository: IAnalysisRepository,
    ):
        self.extractor = extractor
        self.engine = engine
        self.suggestion_service = suggestion_service
        self.repository = repository

    async def run_analysis(
        self, resume_bytes: bytes, jd_bytes: bytes, job_title: str
    ) -> AnalysisResult:
        logger.info(f"Starting analysis orchestration for: {job_title}")

        resume_text = await self.extractor.extract_text(resume_bytes)
        jd_text = await self.extractor.extract_text(jd_bytes)

        analysis_data = await self.engine.analyze(resume_text, jd_text)

        suggestions = await self.suggestion_service.generate_suggestions(
            analysis_data["missing_keywords"], resume_text, job_title
        )

        result = AnalysisResult(
            score=analysis_data["score"],
            common_keywords=analysis_data["common_keywords"],
            missing_keywords=analysis_data["missing_keywords"],
            missing_with_weight=analysis_data["missing_with_weight"],
            suggestions=suggestions,
            job_title=job_title,
            resume_preview=resume_text[:500],
            jd_preview=jd_text[:300],
        )

        await self.repository.save_analysis(result)

        return result
