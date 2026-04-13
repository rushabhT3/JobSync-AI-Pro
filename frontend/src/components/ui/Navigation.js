import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="text-2xl font-display tracking-wide text-[#0E3F35]">JOBSYNC.</div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-[#0E3F35]/70">
        <a href="#concept" className="hover:text-[#0E3F35]">Concept</a>
        <a href="#solutions" className="hover:text-[#0E3F35]">Solutions</a>
        <a href="#resources" className="hover:text-[#0E3F35]">Resources</a>
      </div>
      <a href="#contact" className="px-6 py-2 rounded-full border border-[#0E3F35] text-[#0E3F35] font-medium hover:bg-[#0E3F35] hover:text-white transition-colors">
        Contact Me!
      </a>
    </nav>
  );
};

export default Navigation;
