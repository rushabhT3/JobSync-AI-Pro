from abc import ABC, abstractmethod
from typing import Any, Dict, Optional
from sqlmodel import create_engine, Session
from sqlalchemy import Engine
from .config import DatabaseConfig, DatabaseType


class IDatabaseConnection(ABC):
    @abstractmethod
    def get_engine(self) -> Engine:
        pass

    @abstractmethod
    def get_session(self) -> Session:
        pass

    @abstractmethod
    def create_tables(self, metadata: Any) -> None:
        pass

    @abstractmethod
    def close(self) -> None:
        pass


class PostgreSQLConnection(IDatabaseConnection):
    def __init__(self, config: DatabaseConfig):
        self.config = config
        self._engine: Optional[Engine] = None

    def get_engine(self) -> Engine:
        if not self._engine:
            self._engine = create_engine(
                self.config.connection_string,
                pool_size=self.config.pool_size,
                max_overflow=self.config.max_overflow,
                echo=self.config.echo,
            )
        return self._engine

    def get_session(self) -> Session:
        return Session(self.get_engine())

    def create_tables(self, metadata: Any) -> None:
        metadata.create_all(self.get_engine())

    def close(self) -> None:
        if self._engine:
            self._engine.dispose()


class SQLiteConnection(IDatabaseConnection):
    def __init__(self, config: DatabaseConfig):
        self.config = config
        self._engine: Optional[Engine] = None

    def get_engine(self) -> Engine:
        if not self._engine:
            self._engine = create_engine(
                self.config.connection_string,
                echo=self.config.echo,
                connect_args={"check_same_thread": False},
            )
        return self._engine

    def get_session(self) -> Session:
        return Session(self.get_engine())

    def create_tables(self, metadata: Any) -> None:
        metadata.create_all(self.get_engine())

    def close(self) -> None:
        if self._engine:
            self._engine.dispose()


class DatabaseConnectionFactory:
    @staticmethod
    def create_connection(config: DatabaseConfig) -> IDatabaseConnection:
        if config.db_type == DatabaseType.POSTGRESQL:
            return PostgreSQLConnection(config)
        elif config.db_type == DatabaseType.SQLITE:
            return SQLiteConnection(config)
        else:
            raise ValueError(f"Unsupported database type: {config.db_type}")
