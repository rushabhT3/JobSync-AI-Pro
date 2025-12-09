
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const analyzeResume = async (formData) => {
  const res = await fetch(`${BACKEND_URL}/analyze`, {
    method: "POST",
    body: formData,
  });
  console.log(res);
  if (!res.ok) throw new Error("Analysis failed");
  return res.json();
};
