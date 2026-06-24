import React from 'react';

const FeatureShowcase = () => {
  return (
    <div className="bg-[#E5F0D0] rounded-[3rem] p-12 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCEBC0] rounded-bl-[10rem]" />

      <div className="z-10 space-y-6">
        <h2 className="text-4xl font-display text-[#0E3F35]">01.</h2>
        <h3 className="text-2xl font-medium text-[#0E3F35]">The Clock Is Already Ticking</h3>
        <p className="text-[#0E3F35]/80 font-body leading-relaxed max-w-sm">
          Recruiters decide in seconds. ATS systems filter before any human ever sees your name.
          Your resume needs to win twice — once against the machine, once against the clock.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 z-10">
        <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl">
          <div className="text-4xl font-display text-[#E88B7D]">7s</div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#0E3F35]/60 mt-1 leading-snug">
            Average recruiter<br />scan time
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl">
          <div className="text-4xl font-display text-[#E88B7D]">75%</div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#0E3F35]/60 mt-1 leading-snug">
            Resumes rejected<br />by ATS first
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
