import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="text-2xl font-display tracking-wide text-[#0E3F35]">JOBSYNC.</div>
      <a
        href="#about"
        className="px-6 py-2 rounded-full border border-[#0E3F35] text-[#0E3F35] font-medium hover:bg-[#0E3F35] hover:text-white transition-all duration-500 ease-in-out"
      >
        About
      </a>
    </nav>
  );
};

export default Navigation;
