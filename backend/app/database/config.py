import os
from typing import Dict, Any, Optional
from enum import Enum
import logging

logger = logging.getLogger(__name__)

class DatabaseType(Enum):
    SQLITE = "sqlite"
    POSTGRESQL = "postgresql"

class DatabaseConfig:
    def __init__(self, db_type: DatabaseType, connection_string: str):
        self.db_type = db_type
        self.connection_string = connection_string
        self.pool_size = 5
        self.max_overflow = 10
        self.echo = False

class DatabaseConfigFactory:
    @staticmethod
    def create_from_env() -> DatabaseConfig:
        database_url = os.getenv("DATABASE_URL")
        
        if not database_url:
            logger.info("No DATABASE_URL found, using SQLite")
            return DatabaseConfigFactory.create_sqlite_config()
        
        if database_url.startswith("postgresql://") or database_url.startswith("postgres://"):
            return DatabaseConfigFactory.create_postgresql_config(database_url)
        
        if database_url.startswith("sqlite:///"):
            return DatabaseConfigFactory.create_sqlite_config(database_url)
        
        logger.warning(f"Unknown database URL format: {database_url}, defaulting to SQLite")
        return DatabaseConfigFactory.create_sqlite_config()
    
    @staticmethod
    def create_postgresql_config(connection_string: Optional[str] = None) -> DatabaseConfig:
        if not connection_string:
            connection_string = (
                f"postgresql://{os.getenv('DB_USER', 'postgres')}:"
                f"{os.getenv('DB_PASSWORD', 'password')}@"
                f"{os.getenv('DB_HOST', 'localhost')}:"
                f"{os.getenv('DB_PORT', '5432')}/"
                f"{os.getenv('DB_NAME', 'jobsync')}"
            )
        
        # Fix postgres:// to postgresql:// for SQLAlchemy
        if connection_string.startswith("postgres://"):
            connection_string = connection_string.replace("postgres://", "postgresql://", 1)
        
        config = DatabaseConfig(DatabaseType.POSTGRESQL, connection_string)
        config.pool_size = int(os.getenv("DB_POOL_SIZE", "5"))
        config.max_overflow = int(os.getenv("DB_MAX_OVERFLOW", "10"))
        config.echo = os.getenv("DB_ECHO", "false").lower() == "true"
        
        return config
    
    @staticmethod
    def create_sqlite_config(connection_string: Optional[str] = None) -> DatabaseConfig:
        if not connection_string:
            connection_string = "sqlite:///./database.db"
        
        return DatabaseConfig(DatabaseType.SQLITE, connection_string)
