import logging
from typing import Optional
from .config import DatabaseConfig, DatabaseConfigFactory
from .connection import IDatabaseConnection, DatabaseConnectionFactory
from .repository import IAnalysisRepository, AnalysisRepositoryFactory
from ..models import SQLModel

logger = logging.getLogger(__name__)

class DatabaseManager:
    def __init__(self, config: Optional[DatabaseConfig] = None):
        self.config = config or DatabaseConfigFactory.create_from_env()
        self._connection: Optional[IDatabaseConnection] = None
        self._repository: Optional[IAnalysisRepository] = None
    
    @property
    def connection(self) -> IDatabaseConnection:
        if not self._connection:
            self._connection = DatabaseConnectionFactory.create_connection(self.config)
            logger.info(f"Created {self.config.db_type.value} connection")
        return self._connection
    
    @property
    def repository(self) -> IAnalysisRepository:
        if not self._repository:
            self._repository = AnalysisRepositoryFactory.create_repository(self.connection)
            logger.info(f"Created repository for {self.config.db_type.value}")
        return self._repository
    
    def initialize_database(self) -> None:
        try:
            self.connection.create_tables(SQLModel.metadata)
            logger.info(f"Database tables created for {self.config.db_type.value}")
        except Exception as e:
            logger.error(f"Failed to create database tables: {e}")
            raise
    
    def close(self) -> None:
        if self._connection:
            self._connection.close()
            logger.info("Database connection closed")

# Singleton instance for the application
_database_manager: Optional[DatabaseManager] = None

def get_database_manager() -> DatabaseManager:
    global _database_manager
    if not _database_manager:
        _database_manager = DatabaseManager()
    return _database_manager

def get_repository() -> IAnalysisRepository:
    return get_database_manager().repository
