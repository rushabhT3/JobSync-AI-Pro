import React from 'react';

const HeroSection = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-6xl md:text-8xl font-display leading-[0.9] text-[#0E3F35] uppercase">
        Your Career,<br />
        <span className="text-[#E88B7D]">Simplified.</span>
      </h1>
      <p className="text-xl text-[#5A6B65] font-body font-light max-w-md leading-relaxed">
        Pro style analysis for your resume. We bridge the gap between your skills and the perfect job description.
      </p>
    </div>
  );
};

export default HeroSection;
