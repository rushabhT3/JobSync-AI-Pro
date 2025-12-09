const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const analyzeResume = async (formData) => {
  const res = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Analysis failed");
  return res.json();
};
