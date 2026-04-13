import React from 'react';
import { Zap, Palette, Terminal, FileText, Server, Cpu, Database, Link, Code, Layers, Gauge, Accessibility, Package, Brain } from 'lucide-react';

const ResourcesSection = () => {
  const techStack = {
    frontend: [
      { name: 'Next.js', description: 'React framework with App Router', icon: Zap },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: Palette },
      { name: 'React', description: 'Modern React with hooks', icon: Code },
      { name: 'JavaScript ES6+', description: 'Modern JavaScript features', icon: Terminal }
    ],
    backend: [
      { name: 'FastAPI', description: 'Modern Python web framework', icon: Server },
      { name: 'Gemini AI', description: 'Google\'s language model', icon: Cpu },
      { name: 'SpaCy', description: 'Natural language processing', icon: Brain },
      { name: 'LiteLLM', description: 'Unified LLM interface', icon: Link }
    ],
    infrastructure: [
      { name: 'PDF Processing', description: 'pdfplumber + PyPDF2', icon: FileText },
      { name: 'TF-IDF Analysis', description: 'Text similarity scoring', icon: Database },
      { name: 'RESTful APIs', description: 'Clean API architecture', icon: Link },
      { name: 'Responsive Design', description: 'Mobile-first approach', icon: Layers }
    ]
  };

  const developmentInsights = [
    {
      title: 'SOLID Principles',
      description: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
      code: 'Component-based architecture with clear separation of concerns'
    },
    {
      title: 'Clean Architecture',
      description: 'Layered approach with clear boundaries between UI, business logic, and data access',
      code: 'Modular file structure with reusable components'
    },
    {
      title: 'Performance Optimization',
      description: 'Lazy loading, code splitting, and efficient state management',
      code: 'React optimization patterns and best practices'
    },
    {
      title: 'Accessibility First',
      description: 'Semantic HTML5, ARIA labels, and keyboard navigation',
      code: 'WCAG 2.1 AA compliance throughout'
    }
  ];

  return (
    <div className="bg-[#E5F0D0] rounded-[3rem] p-12 min-h-[700px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCEBC0] rounded-bl-[10rem]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#DCEBC0] rounded-tr-[8rem]" />
      
      <div className="z-10 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display text-[#0E3F35] mb-4">Technical Resources</h2>
          <p className="text-xl text-[#0E3F35]/80 font-body font-light max-w-3xl mx-auto leading-relaxed">
            Built with modern technologies and engineering best practices. 
            Every component crafted with precision, every line of code written with purpose.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-3xl font-medium font-display text-[#0E3F35] mb-8 text-center">Technology Stack</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#E88B7D] font-display">Frontend</h4>
              <div className="space-y-3">
                {techStack.frontend.map((tech, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      {React.createElement(tech.icon, { className: "w-6 h-6 text-[#0E3F35]" })}
                      <div>
                        <h5 className="font-semibold font-display text-[#0E3F35]">{tech.name}</h5>
                        <p className="text-sm text-[#0E3F35]/70">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#E88B7D] font-display">Backend</h4>
              <div className="space-y-3">
                {techStack.backend.map((tech, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      {React.createElement(tech.icon, { className: "w-6 h-6 text-[#0E3F35]" })}
                      <div>
                        <h5 className="font-semibold font-display text-[#0E3F35]">{tech.name}</h5>
                        <p className="text-sm text-[#0E3F35]/70">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#E88B7D] font-display">Infrastructure</h4>
              <div className="space-y-3">
                {techStack.infrastructure.map((tech, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      {React.createElement(tech.icon, { className: "w-6 h-6 text-[#0E3F35]" })}
                      <div>
                        <h5 className="font-semibold font-display text-[#0E3F35]">{tech.name}</h5>
                        <p className="text-sm text-[#0E3F35]/70">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Insights */}
        <div className="mb-16">
          <h3 className="text-3xl font-medium font-display text-[#0E3F35] mb-8 text-center">Engineering Principles</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {developmentInsights.map((insight, index) => (
              <div key={index} className="bg-[#0E3F35] text-white p-6 rounded-2xl">
                <h4 className="text-xl font-semibold font-display text-[#E88B7D] mb-3">{insight.title}</h4>
                <p className="text-white/90 font-body mb-4">{insight.description}</p>
                <div className="bg-black/20 p-3 rounded-lg font-mono text-sm text-[#E5F0D0]">
                  {insight.code}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="text-center">
          <h3 className="text-2xl font-medium font-display text-[#0E3F35] mb-6">Component Architecture</h3>
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-[#E88B7D] text-white p-4 rounded-xl">
                <h5 className="font-semibold font-display mb-2">UI Layer</h5>
                <p className="text-sm">React Components</p>
              </div>
              <div className="bg-[#0E3F35] text-white p-4 rounded-xl">
                <h5 className="font-semibold font-display mb-2">Business Logic</h5>
                <p className="text-sm">API Services</p>
              </div>
              <div className="bg-[#5A6B65] text-white p-4 rounded-xl">
                <h5 className="font-semibold font-display mb-2">Data Layer</h5>
                <p className="text-sm">AI Processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center">
          <p className="text-[#0E3F35]/70 font-body italic leading-relaxed max-w-2xl mx-auto">
            "Code is poetry written in logic. Architecture is the rhythm that makes it sing."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
