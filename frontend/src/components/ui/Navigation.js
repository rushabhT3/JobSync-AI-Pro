'use client';
import React from 'react';

const Navigation = () => {
  const handleAbout = (e) => {
    e.preventDefault();
    const target = document.getElementById('about');
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;
    const duration = 900;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="text-2xl font-display tracking-wide text-[#0E3F35]">JOBSYNC.</div>
      <a
        href="#about"
        onClick={handleAbout}
        className="px-6 py-2 rounded-full border border-[#0E3F35] text-[#0E3F35] font-medium hover:bg-[#0E3F35] hover:text-white transition-all duration-500 ease-in-out"
      >
        About
      </a>
    </nav>
  );
};

export default Navigation;
