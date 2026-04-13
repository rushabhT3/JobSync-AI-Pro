import litellm
import os
import logging
from typing import Dict, Any, Optional
from ..interfaces import ISuggestionService

logger = logging.getLogger(__name__)


class LLMConfig:
    def __init__(self, provider: str, model: str, api_key_env: str, **kwargs):
        self.provider = provider
        self.model = model
        self.api_key_env = api_key_env
        self.kwargs = kwargs


class LLMProviderFactory:
    @staticmethod
    def get_config(provider: str) -> LLMConfig:
        configs = {
            "gemini": LLMConfig(
                provider="gemini",
                model="gemini/gemini-3.1-flash-lite-preview",
                api_key_env="GEMINI_API_KEY",
                temperature=1.0,
                reasoning_effort="low",
            )
        }

        if provider not in configs:
            raise ValueError(
                f"Unsupported provider: {provider}. Available: {list(configs.keys())}"
            )

        return configs[provider]


class GenericLLMService(ISuggestionService):
    def __init__(self, provider: str = "gemini"):
        self.config = LLMProviderFactory.get_config(provider)
        self.api_key = os.getenv(self.config.api_key_env)
        self.provider = provider

    async def generate_suggestions(
        self, missing_keywords: list[str], resume_text: str, job_title: str
    ) -> str:
        if not missing_keywords:
            return "Your resume is already highly optimized for this role!"

        if not self.api_key:
            logger.warning(f"{self.config.api_key_env} missing, using fallback message")
            return f"Strategic advice: Focus on highlighting experience with {', '.join(missing_keywords[:5])}."

        prompt = self._build_prompt(missing_keywords, resume_text, job_title)

        try:
            response = await litellm.acompletion(
                model=self.config.model,
                messages=[{"role": "user", "content": prompt}],
                api_key=self.api_key,
                **self.config.kwargs,
            )
            return response.choices[0].message.content.strip()
        except Exception as e:
            logger.error(f"LLM Service failed for {self.provider}: {e}")
            return f"Recommended improvement: Explicitly detail your accomplishments using {', '.join(missing_keywords[:5])}."

    def _build_prompt(
        self, missing_keywords: list[str], resume_text: str, job_title: str
    ) -> str:
        return f"""
        Technical recruiter reviewing {job_title} applications.
        Missing skills from resume: {', '.join(missing_keywords[:10])}
        
        Resume excerpt:
        {resume_text[:2000]}
        
        Add 3 bullet points that:
        - Include 2+ missing keywords
        - Start with action verbs
        - Show measurable results
        
        Bullet points only:
        """


# Backward compatibility
class GeminiSuggestionService(GenericLLMService):
    def __init__(self, model_name: str = "gemini/gemini-3.1-flash-lite-preview"):
        super().__init__("gemini")
        self.config.model = model_name
