import React from 'react';
import { FileText } from 'lucide-react';
import { validateFile } from '../../lib/utils';

const FileUpload = ({ label, file, onFileChange, accept = '.pdf', disabled = false }) => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && !disabled) {
      try {
        validateFile(selectedFile);
        onFileChange(selectedFile);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <label className={`flex items-center justify-between px-6 py-4 bg-[#F8F9FA] rounded-xl cursor-pointer hover:bg-[#F1F3F5] transition group ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <span className="text-sm font-medium text-[#5A6B65] group-hover:text-[#0E3F35]">
        {file ? file.name : label}
      </span>
      <input 
        type="file" 
        className="hidden" 
        accept={accept} 
        onChange={handleFileChange}
        disabled={disabled}
      />
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
        <FileText className="w-4 h-4 text-[#0E3F35]" />
      </div>
    </label>
  );
};

export default FileUpload;
