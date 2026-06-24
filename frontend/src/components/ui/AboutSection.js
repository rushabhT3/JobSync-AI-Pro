import React from 'react';

const AboutSection = () => {
  const links = [
    { label: 'Portfolio', href: 'https://rushabh-portfolio-iz62.vercel.app/' },
    { label: 'GitHub', href: 'https://github.com/rushabhT3/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trivedirushabh/' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/rushabhtrivedi03/' },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/rushabhtrivedi03' },
  ];

  return (
    <div id="about" className="bg-[#F9EDE8] rounded-[3rem] p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#E88B7D]/20 rounded-bl-[8rem]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0E3F35]/10 rounded-tr-[6rem]" />

      <div className="z-10 relative">
        {/* Manifesto */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-4xl font-display text-[#E88B7D] mb-4">The Art of Career Alignment</h2>
          <p className="text-lg text-[#0E3F35]/75 font-body font-light leading-relaxed">
            Your resume is not just a document — it's your personal manifesto. It must resonate with
            the rhythm of opportunity, dance with the language of innovation, and sing the song of your
            unique value proposition.
          </p>
        </div>

        {/* Two quotes */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <blockquote className="bg-[#0E3F35] p-6 rounded-2xl">
            <div className="text-3xl font-display text-[#E88B7D] mb-2">"</div>
            <p className="text-white/85 font-body italic mb-3 leading-relaxed">
              The journey of a thousand miles begins with a single step.
            </p>
            <cite className="text-sm text-[#E88B7D] font-semibold not-italic">~ Lao Tzu</cite>
          </blockquote>
          <blockquote className="bg-[#E88B7D] p-6 rounded-2xl">
            <div className="text-3xl font-display text-white mb-2">"</div>
            <p className="text-white/90 font-body italic mb-3 leading-relaxed">
              In the middle of difficulty lies opportunity.
            </p>
            <cite className="text-sm text-white font-semibold not-italic">~ Albert Einstein</cite>
          </blockquote>
        </div>

        {/* Closing verse */}
        <div className="bg-[#0E3F35] rounded-2xl p-8 mb-10 text-center">
          <p className="text-[#E88B7D] font-body italic leading-loose max-w-xl mx-auto">
            Your career is a poem waiting to be written,<br />
            Each line a skill, each stanza a journey —<br />
            the right job is not found, it's created<br />
            through the perfect alignment of skills and opportunity.
          </p>
          <p className="mt-5 text-sm text-white/40 font-body not-italic">
            "Code is poetry written in logic. Architecture is the rhythm that makes it sing."
          </p>
        </div>

        {/* Contact */}
        <div className="border-t border-[#0E3F35]/15 pt-8 grid md:grid-cols-2 gap-8 font-body">
          <div>
            <h3 className="text-xl font-display text-[#0E3F35] mb-4">Contact</h3>
            <div className="space-y-2 font-body text-sm text-[#0E3F35]/70">
              <p className="font-semibold text-[#0E3F35]">Rushabh Trivedi</p>
              <p>Python Backend & AI/ML Developer | MERN Developer</p>
              <a href="mailto:rushabhtrivedi03@gmail.com"
                 className="block hover:text-[#E88B7D] transition-colors">
                rushabhtrivedi03@gmail.com
              </a>
              <a href="tel:+918380048166"
                 className="block hover:text-[#E88B7D] transition-colors">
                +91 83800 48166
              </a>
              <p>Hyderabad, India</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display text-[#0E3F35] mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {links.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                   className="px-4 py-1.5 rounded-full border border-[#0E3F35]/25 text-sm text-[#0E3F35]/70 hover:bg-[#E88B7D] hover:text-white hover:border-[#E88B7D] transition-all">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
