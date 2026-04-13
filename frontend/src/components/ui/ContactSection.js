import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-[#E5F0D0] rounded-[3rem] p-12 min-h-[600px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCEBC0] rounded-bl-[10rem]" />
      
      <div className="z-10">
        <h2 className="text-4xl font-display text-[#0E3F35] mb-8">Contact Me!</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-[#0E3F35] mb-4">Get in Touch</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span className="text-[#0E3F35]/80 font-body">
                  <strong>Name:</strong> Rushabh Trivedi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span className="text-[#0E3F35]/80 font-body">
                  <strong>Title:</strong> Python Backend & AI/ML Developer | MERN Developer
                </span>
              </div>
              <a href="mailto:rushabhtrivedi03@gmail.com" 
                 className="flex items-center gap-3 text-[#0E3F35]/80 hover:text-[#0E3F35] font-body transition-colors">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span><strong>Email:</strong> rushabhtrivedi03@gmail.com</span>
              </a>
              <a href="tel:+918380048166" 
                 className="flex items-center gap-3 text-[#0E3F35]/80 hover:text-[#0E3F35] font-body transition-colors">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span><strong>Phone:</strong> +918380048166</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span className="text-[#0E3F35]/80 font-body">
                  <strong>Location:</strong> Hyderabad, India
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-[#0E3F35] mb-4">Connect</h3>
            
            <div className="space-y-3">
              <a href="https://rushabh-portfolio-iz62.vercel.app/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-[#0E3F35]/80 hover:text-[#0E3F35] font-body transition-colors">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span><strong>Portfolio:</strong> rushabh-portfolio-iz62.vercel.app</span>
              </a>
              <a href="https://leetcode.com/u/rushabhtrivedi03/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-[#0E3F35]/80 hover:text-[#0E3F35] font-body transition-colors">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span><strong>LeetCode:</strong> rushabhtrivedi03</span>
              </a>
              <a href="https://www.linkedin.com/in/trivedirushabh/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-[#0E3F35]/80 hover:text-[#0E3F35] font-body transition-colors">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span><strong>LinkedIn:</strong> trivedirushabh</span>
              </a>
              <a href="https://github.com/rushabhT3/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-[#0E3F35]/80 hover:text-[#0E3F35] font-body transition-colors">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span><strong>GitHub:</strong> rushabhT3</span>
              </a>
              <a href="https://www.hackerrank.com/rushabhtrivedi03" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-[#0E3F35]/80 hover:text-[#0E3F35] font-body transition-colors">
                <div className="w-2 h-2 bg-[#E88B7D] rounded-full"></div>
                <span><strong>HackerRank:</strong> rushabhtrivedi03</span>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-8 pt-8 border-t border-[#0E3F35]/20">
          <h3 className="text-xl font-medium text-[#0E3F35] mb-3">Professional Summary</h3>
          <p className="text-[#0E3F35]/80 font-body leading-relaxed">
            Innovative Software Development Engineer with specialized expertise in Python (Django/FastAPI) and Node.js (MERN) backend architectures. 
            Proven track record in building scalable microservices, high-throughput Fintech payment gateways, and AI-driven document intelligence systems. 
            Expert in PostgreSQL, Redis, and AWS integrations, with a focus on delivering event-driven solutions for high-concurrency environments.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="text-xl font-medium text-[#0E3F35] mb-3">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Django', 'FastAPI', 'Node.js', 'Express.js', 'React.js', 'Next.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#0E3F35]/80 font-body">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
