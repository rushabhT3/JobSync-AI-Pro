const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://jobsync-ai-pro.onrender.com';

export const analyzeResume = async (formData) => {
  const res = await fetch(`${BACKEND_URL}/analyze`, {
    method: "POST",
    body: formData,
  });
  
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || "Analysis failed");
  }
  
  return res.json();
};

export const getHistory = async () => {
    const res = await fetch(`${BACKEND_URL}/history`);
    if (!res.ok) throw new Error("Failed to fetch history");
    return res.json();
};
