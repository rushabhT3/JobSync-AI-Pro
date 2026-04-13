"use client";

import { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/ui/Navigation';
import HeroSection from '../components/ui/HeroSection';
import FeatureShowcase from '../components/ui/FeatureShowcase';
import ConceptSection from '../components/ui/ConceptSection';
import SolutionsSection from '../components/ui/SolutionsSection';
import ResourcesSection from '../components/ui/ResourcesSection';
import ContactSection from '../components/ui/ContactSection';
import AnalysisForm from '../components/features/AnalysisForm';
import AnalysisResults from '../components/features/AnalysisResults';
import { analyzeResume } from '../lib/api';

export default function Home() {
  const [files, setFiles] = useState({ resume: null, jd: null });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("resume_file", files.resume);
      formData.append("jd_file", files.jd);
      formData.append("job_title", "Senior Full-Stack Engineer"); // Default or could be a toggle

      const data = await analyzeResume(formData);
      setResult(data);
    } catch (err) {
      alert(err.message || "Analysis failed. Please check if the backend is running.");
    } finally {
      setLoading(false);
    }
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
              <AnalysisResults result={result} />
            )}
          </div>
        </div>
      </main>

      <section id="concept" className="max-w-7xl mx-auto px-6 pb-24">
        <ConceptSection />
      </section>

      <section id="solutions" className="max-w-7xl mx-auto px-6 pb-24">
        <SolutionsSection />
      </section>

      <section id="resources" className="max-w-7xl mx-auto px-6 pb-24">
        <ResourcesSection />
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-24">
        <ContactSection />
      </section>
    </div>
  );
}
