from abc import ABC, abstractmethod
from typing import List, Any, Optional
from sqlmodel import Session, select
import logging
from ..interfaces import IAnalysisRepository, AnalysisResult
from ..models import AnalysisHistory
from .connection import IDatabaseConnection

logger = logging.getLogger(__name__)


class BaseAnalysisRepository(IAnalysisRepository):
    def __init__(self, connection: IDatabaseConnection):
        self.connection = connection

    def _get_session(self) -> Session:
        return self.connection.get_session()


class PostgreSQLAnalysisRepository(BaseAnalysisRepository):
    async def save_analysis(self, result: AnalysisResult) -> Any:
        try:
            history = AnalysisHistory(
                score=result.score,
                missing_keywords=str(result.missing_keywords),
                suggestions=result.suggestions,
                job_title=result.job_title,
            )

            with self._get_session() as session:
                session.add(history)
                session.commit()
                session.refresh(history)
                return history
        except Exception as e:
            logger.error(f"PostgreSQL repository failed to save analysis: {e}")
            return None

    async def get_history(self, limit: int = 50) -> List[Any]:
        try:
            with self._get_session() as session:
                statement = (
                    select(AnalysisHistory)
                    .order_by(AnalysisHistory.created_at.desc())
                    .limit(limit)
                )
                return session.exec(statement).all()
        except Exception as e:
            logger.error(f"PostgreSQL repository failed to fetch history: {e}")
            return []


class SQLiteAnalysisRepository(BaseAnalysisRepository):
    async def save_analysis(self, result: AnalysisResult) -> Any:
        try:
            history = AnalysisHistory(
                score=result.score,
                missing_keywords=str(result.missing_keywords),
                suggestions=result.suggestions,
                job_title=result.job_title,
            )

            with self._get_session() as session:
                session.add(history)
                session.commit()
                session.refresh(history)
                return history
        except Exception as e:
            logger.error(f"SQLite repository failed to save analysis: {e}")
            return None

    async def get_history(self, limit: int = 50) -> List[Any]:
        try:
            with self._get_session() as session:
                statement = (
                    select(AnalysisHistory)
                    .order_by(AnalysisHistory.created_at.desc())
                    .limit(limit)
                )
                return session.exec(statement).all()
        except Exception as e:
            logger.error(f"SQLite repository failed to fetch history: {e}")
            return []


class AnalysisRepositoryFactory:
    @staticmethod
    def create_repository(connection: IDatabaseConnection) -> IAnalysisRepository:
        # Check connection type by inspecting the connection class
        if connection.__class__.__name__ == "PostgreSQLConnection":
            return PostgreSQLAnalysisRepository(connection)
        elif connection.__class__.__name__ == "SQLiteConnection":
            return SQLiteAnalysisRepository(connection)
        else:
            # Default to base implementation
            return BaseAnalysisRepository(connection)
