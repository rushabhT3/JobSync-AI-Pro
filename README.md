# JobSync AI Pro — AI-Powered ATS Resume Optimiser  

## Screenshots

---

## **Screenshots**

### **Whole Application**

<img width="1920" height="1080" alt="Whole Application" src="https://github.com/user-attachments/assets/ff76800a-9792-41bc-bf2c-b6af91ec3718" />

---

### **AI Rewrite Suggestions**

<img width="1920" height="904" alt="AI Rewrite Suggestions" src="https://github.com/user-attachments/assets/fd76f7b1-9b37-412f-97cb-d71da4c1381f" />

---

### **Match Score & Radar**

<img width="1920" height="900" alt="Match Score & Radar" src="https://github.com/user-attachments/assets/c5e5e9d0-6097-4e94-852c-ae4412689004" />

---

**Beat any Applicant Tracking System in seconds.**  
Upload your resume + job description → Get instant match score, missing keywords & AI-generated bullet points that get you past filters.

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
