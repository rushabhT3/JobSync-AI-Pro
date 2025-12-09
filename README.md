# JobSync AI Pro — AI-Powered ATS Resume Optimiser  

**Beat any Applicant Tracking System in seconds.**  
Upload your resume + job description → Get instant match score, missing keywords & AI-generated bullet points that get you past filters.

Live Demo: http://localhost:3000 (or deploy link once live)

## Features
- PDF resume & JD upload with smart text extraction  
- ATS match score (0–100%) using SpaCy + TF-IDF  
- Confidence-weighted missing keywords detection  
- Real-time interactive radar chart  
- AI rewrite suggestions powered by Google Gemini 1.5 Flash (via LiteLLM)  
- Analysis history saved in SQLite  
- Glassmorphic Next.js + Tailwind UI  

## Tech Stack
**Backend**  
`Python • FastAPI • SpaCy (en_core_web_lg) • LiteLLM • pdfplumber • PyPDF2 • scikit-learn • SQLModel • SQLite`

**Frontend**  
`Next.js 14 (App Router) • Tailwind CSS • Recharts • Lucide Icons`

## Screenshots

| Match Score & Radar | AI Rewrite Suggestions | Missing vs Matched Keywords |
|---------------------|-------------------------|-----------------------------|
| ![Score](screenshots/score.png) | ![Suggestions](screenshots/suggestions.png) | ![Keywords](screenshots/keywords.png) |

## How to Run
```bash
# Backend
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python -m spacy download en_core_web_lg
uvicorn app.main:app --reload

# Frontend
cd frontend
npm run dev
