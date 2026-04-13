import React from 'react';

const FeatureShowcase = () => {
  return (
    <div className="bg-[#E5F0D0] rounded-[3rem] p-12 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCEBC0] rounded-bl-[10rem]" />
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
  );
};

export default FeatureShowcase;
