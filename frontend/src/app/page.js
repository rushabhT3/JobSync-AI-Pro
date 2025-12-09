"use client";

import { useState } from 'react';
import { analyzeResume } from '../../lib/api';
import MatchRadar from '../../components/RadarChart';
import { Sparkles, Upload, FileText, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  const [files, setFiles] = useState({ resume: null, jd: null });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!files.resume || !files.jd) return alert("Please upload both files");
    
    setLoading(true);
    const formData = new FormData();
    formData.append("resume_file", files.resume);
    formData.append("jd_file", files.jd);
    formData.append("job_title", "Senior Full-Stack Engineer");

    try {
      const data = await analyzeResume(formData);
      setResult(data);
    } catch (err) {
      alert("Analysis failed. Is backend running?");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E5F0D0]">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>{`
          .font-display { font-family: 'Anton', sans-serif; }
          .font-body { font-family: 'Poppins', sans-serif; }
        `}</style>
      </Head>

      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-display tracking-wide text-[#0E3F35]">JOBSYNC.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-[#0E3F35]/70">
          <a href="#" className="hover:text-[#0E3F35]">Concept</a>
          <a href="#" className="hover:text-[#0E3F35]">Solutions</a>
          <a href="#" className="hover:text-[#0E3F35]">Resources</a>
        </div>
        <button className="px-6 py-2 rounded-full border border-[#0E3F35] text-[#0E3F35] font-medium hover:bg-[#0E3F35] hover:text-white transition-colors">
          Contact Us
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* LEFT SIDE (Input) */}
          <div className="space-y-8 sticky top-10">
            <h1 className="text-6xl md:text-8xl font-display leading-[0.9] text-[#0E3F35] uppercase">
              Your Career,<br />
              <span className="text-[#E88B7D]">Simplified.</span>
            </h1>
            <p className="text-xl text-[#5A6B65] font-body font-light max-w-md leading-relaxed">
              Phamily style analysis for your resume. We bridge the gap between your skills and the perfect job description.
            </p>
            
            {!result && (
               <div className="flex flex-col gap-4">
                  <div className="p-8 bg-white rounded-3xl border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-display text-[#0E3F35] mb-6 flex items-center gap-2">
                      <Upload className="w-6 h-6 text-[#E88B7D]" />
                      Start Your Journey
                    </h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-center justify-between px-6 py-4 bg-[#F8F9FA] rounded-xl cursor-pointer hover:bg-[#F1F3F5] transition group">
                        <span className="text-sm font-medium text-[#5A6B65] group-hover:text-[#0E3F35]">
                          {files.resume ? files.resume.name : "Upload Resume (PDF)"}
                        </span>
                        <input type="file" className="hidden" accept=".pdf" onChange={(e) => setFiles({...files, resume: e.target.files[0]})} />
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                           <FileText className="w-4 h-4 text-[#0E3F35]" />
                        </div>
                      </label>

                      <label className="flex items-center justify-between px-6 py-4 bg-[#F8F9FA] rounded-xl cursor-pointer hover:bg-[#F1F3F5] transition group">
                        <span className="text-sm font-medium text-[#5A6B65] group-hover:text-[#0E3F35]">
                          {files.jd ? files.jd.name : "Upload Job Description (PDF)"}
                        </span>
                        <input type="file" className="hidden" accept=".pdf" onChange={(e) => setFiles({...files, jd: e.target.files[0]})} />
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                           <FileText className="w-4 h-4 text-[#0E3F35]" />
                        </div>
                      </label>
                    </div>

                    <button 
                      onClick={handleAnalyze} 
                      disabled={loading}
                      className="w-full mt-8 py-5 bg-[#0E3F35] text-white rounded-2xl font-display text-xl tracking-wide hover:bg-[#092C25] disabled:opacity-70 transition-all flex items-center justify-center gap-3"
                    >
                      {loading ? "Analyzing..." : <>Launch Analysis <ArrowRight className="w-5 h-5" /></>}
                    </button>
                  </div>
               </div>
            )}
          </div>

          {/* RIGHT SIDE (Results) */}
          <div className="relative">
             {!result ? (
               <div className="bg-[#E5F0D0] rounded-[3rem] p-12 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCEBC0] rounded-bl-[10rem] -z-0" />
                  <div className="z-10">
                    <h2 className="text-4xl font-display text-[#0E3F35] mb-4">01.</h2>
                    <h3 className="text-2xl font-medium text-[#0E3F35]">Smart Matching</h3>
                    <p className="mt-4 text-[#0E3F35]/80">Our algorithms parse 100+ data points to ensure your profile resonates with recruiters.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 z-10">
                     <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl">
                        <div className="text-3xl font-display text-[#E88B7D]">98%</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#0E3F35]/60 mt-1">Accuracy</div>
                     </div>
                     <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl">
                        <div className="text-3xl font-display text-[#E88B7D]">2s</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#0E3F35]/60 mt-1">Speed</div>
                     </div>
                  </div>
               </div>
             ) : (
               <div className="space-y-6 animate-in slide-in-from-bottom-10 fade-in duration-700">
                  
                  {/* --- BIGGER CHART SECTION --- */}
                  <div className="bg-white rounded-[2.5rem] p-8 border border-[#E5E5E5] shadow-xl relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Left: Text Data */}
                      <div className="relative z-10">
                        <h3 className="text-sm font-bold text-[#5A6B65] uppercase tracking-widest mb-2">Match Score</h3>
                        <div className="text-8xl font-display text-[#0E3F35] leading-none">{result.score}</div>
                        <div className="text-xl font-medium text-[#E88B7D] mt-1">% Compatibility</div>
                        <p className="mt-4 text-sm text-[#5A6B65] leading-relaxed">
                          Based on keyword density, skill matching, and semantic analysis of your resume against the JD.
                        </p>
                      </div>

                      {/* Right: Big Chart */}
                      {/* CHANGED: Increased height to h-64 (256px) and width to full */}
                      <div className="h-64 w-full flex items-center justify-center relative">
                        {/* Decorative background blob behind chart */}
                        <div className="absolute inset-0 bg-[#F8F9FA] rounded-full scale-90 -z-0" />
                        <div className="w-full h-full z-10">
                          <MatchRadar score={result.score} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div className="bg-[#0E3F35] text-[#FDFBF7] rounded-[2.5rem] p-10 shadow-xl">
                    <h3 className="text-2xl font-display mb-6 flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-[#E88B7D]" />
                      Expert Suggestions
                    </h3>
                    <p className="text-lg font-light leading-relaxed opacity-90 whitespace-pre-line">
                      {result.suggestions}
                    </p>
                  </div>

                  {/* Keywords Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#FBEBE9] p-8 rounded-[2rem]">
                       <h4 className="flex items-center gap-2 font-bold text-[#C04D3B] mb-4">
                         <AlertCircle className="w-5 h-5" /> Missing
                       </h4>
                       <div className="flex flex-wrap gap-2">
                          {result.missing_keywords.slice(0, 6).map((kw, i) => (
                             <span key={i} className="px-3 py-1 bg-white rounded-lg text-sm text-[#C04D3B] font-medium border border-[#E88B7D]/20">{kw}</span>
                          ))}
                       </div>
                    </div>
                    <div className="bg-[#E5F0D0] p-8 rounded-[2rem]">
                       <h4 className="flex items-center gap-2 font-bold text-[#4B7328] mb-4">
                         <CheckCircle className="w-5 h-5" /> Matched
                       </h4>
                       <div className="flex flex-wrap gap-2">
                          {result.common_keywords.slice(0, 6).map((kw, i) => (
                             <span key={i} className="px-3 py-1 bg-white rounded-lg text-sm text-[#4B7328] font-medium border border-[#BBD68C]/20">{kw}</span>
                          ))}
                       </div>
                    </div>
                  </div>
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  );
}