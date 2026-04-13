import React from 'react';
import { Upload, ArrowRight } from 'lucide-react';
import FileUpload from '../ui/FileUpload';

const AnalysisForm = ({ files, onFilesChange, onSubmit, loading }) => {
  return (
    <div className="p-8 bg-white rounded-3xl border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-display text-[#0E3F35] mb-6 flex items-center gap-2">
        <Upload className="w-6 h-6 text-[#E88B7D]" />
        Start Your Journey
      </h3>
      
      <div className="space-y-4">
        <FileUpload
          label="Upload Resume (PDF)"
          file={files.resume}
          onFileChange={(file) => onFilesChange({...files, resume: file})}
          disabled={loading}
        />
        <FileUpload
          label="Upload Job Description (PDF)"
          file={files.jd}
          onFileChange={(file) => onFilesChange({...files, jd: file})}
          disabled={loading}
        />
      </div>

      <button 
        onClick={onSubmit} 
        disabled={loading || !files.resume || !files.jd}
        className="w-full mt-8 py-5 bg-[#0E3F35] text-white rounded-2xl font-display text-xl tracking-wide hover:bg-[#092C25] disabled:opacity-70 transition-all flex items-center justify-center gap-3"
      >
        {loading ? "Analyzing..." : (
          <>
            Launch Analysis
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </div>
  );
};

export default AnalysisForm;
