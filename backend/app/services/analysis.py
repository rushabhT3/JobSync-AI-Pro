import spacy
from typing import List, Dict, Any
from sklearn.feature_extraction.text import TfidfVectorizer
import logging
from ..interfaces import IAnalysisEngine

logger = logging.getLogger(__name__)

SKILL_DB = {
    "python",
    "javascript",
    "typescript",
    "react",
    "node.js",
    "django",
    "flask",
    "fastapi",
    "aws",
    "docker",
    "kubernetes",
    "terraform",
    "postgresql",
    "mongodb",
    "redis",
    "graphql",
    "next.js",
    "tailwind",
    "git",
    "ci/cd",
    "microservices",
    "tensorflow",
    "pytorch",
    "java",
    "spring boot",
    "go",
    "rust",
    "kotlin",
    "swift",
    "react native",
    "flutter",
    "sql",
    "nosql",
    "azure",
    "gcp",
    "linux",
    "rest",
    "soap",
    "agile",
    "scrum",
    "devops",
    "mlops",
}

try:
    nlp = spacy.load("en_core_web_lg")
except OSError:
    logger.warning(
        "Spacy model 'en_core_web_lg' not found. Keywords might be less accurate."
    )
    nlp = None


class NLPAnalysisEngine(IAnalysisEngine):
    def __init__(self):
        self.stop_pos = {"PRON", "DET", "ADP", "CONJ", "CCONJ", "SCONJ", "PART"}

    def extract_keywords(self, text: str) -> List[str]:
        if not nlp:
            return []

        doc = nlp(text.lower())
        keywords = set()

        for token in doc:
            if token.text in SKILL_DB:
                keywords.add(token.text)

        for token in doc:
            if token.pos_ not in self.stop_pos and not token.is_stop:
                if token.pos_ in {"PROPN", "NOUN"} and len(token.text) > 1:
                    if token.text not in {
                        "project",
                        "experience",
                        "role",
                        "team",
                        "year",
                        "month",
                    }:
                        keywords.add(token.text)

        for chunk in doc.noun_chunks:
            if any(skill in chunk.text for skill in SKILL_DB):
                keywords.add(chunk.text)

        return list(keywords)

    async def analyze(self, resume_text: str, jd_text: str) -> Dict[str, Any]:
        resume_kw = set(self.extract_keywords(resume_text))
        jd_kw = set(self.extract_keywords(jd_text))

        if not jd_kw:
            return {
                "score": 0,
                "common_keywords": [],
                "missing_keywords": [],
                "missing_with_weight": [],
            }

        vectorizer = TfidfVectorizer(stop_words="english")
        try:
            tfidf = vectorizer.fit_transform([resume_text, jd_text])
            feature_names = vectorizer.get_feature_names_out()
            jd_scores = dict(zip(feature_names, tfidf.toarray()[1]))
        except:
            jd_scores = {kw: 1.0 for kw in jd_kw}

        common = resume_kw & jd_kw
        missing = jd_kw - resume_kw

        missing_weighted = sorted(
            [(kw, jd_scores.get(kw.split()[0], 0.5)) for kw in missing],
            key=lambda x: x[1],
            reverse=True,
        )[:15]

        score = int((len(common) / len(jd_kw)) * 100) if jd_kw else 0

        return {
            "score": min(score, 100),
            "common_keywords": list(common)[:20],
            "missing_keywords": [kw for kw, _ in missing_weighted],
            "missing_with_weight": missing_weighted,
        }
