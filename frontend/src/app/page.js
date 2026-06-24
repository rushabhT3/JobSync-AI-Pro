"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from '../components/ui/Navigation';
import HeroSection from '../components/ui/HeroSection';
import FeatureShowcase from '../components/ui/FeatureShowcase';
import AboutSection from '../components/ui/AboutSection';
import AnalysisForm from '../components/features/AnalysisForm';
import AnalysisResults from '../components/features/AnalysisResults';
import { analyzeResume } from '../lib/api';

export default function Home() {
  const [files, setFiles] = useState({ resume: null, jd: null });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "https://jobsync-ai-pro.onrender.com";

  useEffect(() => {
    const warmUp = () => {
      try {
        fetch(`${BACKEND_URL}/`, {timeout: 3000})
        .catch(() => {});
      } catch {}
    }
    warmUp();
  }, [])

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("resume_file", files.resume);
      formData.append("jd_file", files.jd);
      formData.append("job_title", "Senior Full-Stack Engineer");

      const data = await analyzeResume(formData);
      setResult(data);
    } catch (err) {
      alert(err.message || "Analysis failed. Please check if the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFiles({ resume: null, jd: null });
    setResult(null);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E5F0D0]">
      <Head>
        <title>JobSync AI Pro - AI-Powered ATS Resume Optimizer</title>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>{`
          .font-display { font-family: 'Anton', sans-serif; }
          .font-body { font-family: 'Poppins', sans-serif; }
        `}</style>
      </Head>

      <Navigation />

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <HeroSection />
            {!result && (
              <AnalysisForm
                files={files}
                onFilesChange={setFiles}
                onSubmit={handleAnalyze}
                loading={loading}
              />
            )}
          </div>

          <div className="relative">
            {!result ? (
              <FeatureShowcase />
            ) : (
              <div>
                <div className="mb-6 flex justify-end">
                  <button
                    onClick={handleReset}
                    className="px-8 py-4 bg-[#0E3F35] text-white rounded-2xl font-display text-lg tracking-wide hover:bg-[#092C25] transition-all flex items-center gap-3 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Start Over
                  </button>
                </div>
                <AnalysisResults result={result} />
              </div>
            )}
          </div>
        </div>

        <AboutSection />
      </main>
    </div>
  );
}
