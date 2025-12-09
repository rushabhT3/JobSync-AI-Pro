import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from typing import List, Dict, Tuple

nlp = spacy.load("en_core_web_lg")

# Curated high-value tech skills
SKILL_DB = {
    "python", "javascript", "typescript", "react", "node.js", "django", "flask", "fastapi",
    "aws", "docker", "kubernetes", "terraform", "postgresql", "mongodb", "redis", "graphql",
    "next.js", "tailwind", "git", "ci/cd", "microservices", "tensorflow", "pytorch", "java",
    "spring boot", "go", "rust", "kotlin", "swift", "react native", "flutter"
}

def extract_keywords(text: str) -> List[str]:
    doc = nlp(text.lower())
    keywords = set()

    # Noun chunks + proper nouns
    for chunk in doc.noun_chunks:
        if any(skill in chunk.text for skill in SKILL_DB):
            keywords.update([t.text for t in chunk if t.text in SKILL_DB])
        else:
            keywords.update([chunk.text])

    # Entities
    for ent in doc.ents:
        if ent.label_ in ["ORG", "PRODUCT", "LANGUAGE", "TECH"]:
            keywords.add(ent.text.lower())

    # Direct skill matches
    for token in doc:
        if token.text in SKILL_DB:
            keywords.add(token.text)

    return list(keywords)[:50]

def calculate_match_score(resume_text: str, jd_text: str) -> Dict:
    resume_kw = extract_keywords(resume_text)
    jd_kw = extract_keywords(jd_text)

    if not jd_kw:
        return {"score": 0, "common_keywords": [], "missing_keywords": [], "missing_with_weight": []}

    # TF-IDF weighting
    vectorizer = TfidfVectorizer(stop_words='english')
    try:
        tfidf = vectorizer.fit_transform([resume_text, jd_text])
        feature_names = vectorizer.get_feature_names_out()
        jd_scores = dict(zip(feature_names, tfidf.toarray()[1]))
    except:
        jd_scores = {kw: 1.0 for kw in jd_kw}

    common = set(resume_kw) & set(jd_kw)
    missing = set(jd_kw) - set(resume_kw)
    missing_weighted = sorted(
        [(kw, jd_scores.get(kw, 0.5)) for kw in missing],
        key=lambda x: x[1], reverse=True
    )[:12]

    score = int((len(common) / len(jd_kw)) * 100)

    return {
        "score": min(score, 100),
        "common_keywords": list(common)[:20],
        "missing_keywords": [kw for kw, _ in missing_weighted],
        "missing_with_weight": missing_weighted
    }
