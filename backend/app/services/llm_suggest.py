import litellm
import os
from dotenv import load_dotenv

load_dotenv()

async def generate_suggestions(missing_keywords: list, resume_text: str, job_title: str) -> str:
    if not missing_keywords:
        return "Your resume is already highly optimized!"

    prompt = f"""
You are a senior technical recruiter and resume expert.
The candidate is applying for: {job_title}

Their resume is missing these high-impact keywords: {', '.join(missing_keywords[:8])}

Here is their current resume (first 3000 chars):
{resume_text[:3000]}

Write 3 powerful, achievement-oriented bullet points that naturally include the missing keywords.
Make them sound human, quantifiable, and ATS-friendly.
Focus on impact.
"""

    try:
        response = await litellm.acompletion(
            model="gemini/gemini-1.5-flash",
            messages=[{"role": "user", "content": prompt}],
            api_key=os.getenv("GEMINI_API_KEY"),
            temperature=0.7,
            max_tokens=500
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"Add achievements featuring: {', '.join(missing_keywords[:6])}"
