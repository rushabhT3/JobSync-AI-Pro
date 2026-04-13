import React from 'react';
import { Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { formatScore, UI_CONSTANTS } from '../../lib/utils';
import MatchRadar from './RadarChart';

const ScoreDisplay = ({ score }) => {
  const formattedScore = formatScore(score);
  return (
    <div className="bg-white rounded-[2.5rem] p-8 border border-[#E5E5E5] shadow-xl relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-sm font-bold text-[#5A6B65] uppercase tracking-widest mb-2">Match Score</h3>
          <div className="text-8xl font-display text-[#0E3F35] leading-none">{formattedScore}</div>
          <div className="text-xl font-medium text-[#E88B7D] mt-1">% Compatibility</div>
          <p className="mt-4 text-sm text-[#5A6B65] leading-relaxed">
            Based on keyword density, skill matching, and semantic analysis of your resume against the JD.
          </p>
        </div>
        <div className="h-64 w-full flex items-center justify-center">
          <MatchRadar score={score} />
        </div>
      </div>
    </div>
  );
};

const KeywordDisplay = ({ keywords, type = 'matched' }) => {
  const displayKeywords = keywords.slice(0, UI_CONSTANTS.KEYWORDS_DISPLAY_LIMIT);
  const isMatched = type === 'matched';
  
  return (
    <div className={`${isMatched ? 'bg-[#E5F0D0]' : 'bg-[#FBEBE9]'} p-8 rounded-[2rem]`}>
      <h4 className={`flex items-center gap-2 font-bold ${isMatched ? 'text-[#4B7328]' : 'text-[#C04D3B]'} mb-4`}>
        {isMatched ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
        {isMatched ? 'Matched' : 'Missing'}
      </h4>
      <div className="flex flex-wrap gap-2">
        {displayKeywords.map((keyword, index) => (
          <span key={index} className="px-3 py-1 bg-white rounded-lg text-sm font-medium border border-black/5">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

const AnalysisResults = ({ result }) => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-10 fade-in duration-700">
      <ScoreDisplay score={result.score} />
      
      <div className="bg-[#0E3F35] text-[#FDFBF7] rounded-[2.5rem] p-10 shadow-xl">
        <h3 className="text-2xl font-display mb-6 flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-[#E88B7D]" />
          Expert Suggestions
        </h3>
        <p className="text-lg font-light leading-relaxed opacity-90 whitespace-pre-line">
          {result.suggestions}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <KeywordDisplay keywords={result.missing_keywords} type="missing" />
        <KeywordDisplay keywords={result.common_keywords} type="matched" />
      </div>
    </div>
  );
};

export default AnalysisResults;
