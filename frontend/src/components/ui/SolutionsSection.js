import React, { useState } from 'react';
import { Upload, Brain, BarChart3, Target, TrendingUp, RefreshCw, GraduationCap, Briefcase, Globe, ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: 0,
      title: 'Upload Documents',
      description: 'Submit your resume and target job description',
      details: 'Our secure file upload system accepts PDF documents and processes them with advanced text extraction algorithms.',
      icon: Upload,
      color: '#E88B7D'
    },
    {
      id: 1,
      title: 'AI Analysis',
      description: 'Natural language processing extracts key insights',
      details: 'Gemini AI and SpaCy analyze skills, experience, and requirements to identify patterns and matches.',
      icon: Brain,
      color: '#E88B7D'
    },
    {
      id: 2,
      title: 'Similarity Scoring',
      description: 'TF-IDF calculates match percentages',
      details: 'Advanced algorithms calculate precise match scores across multiple dimensions including skills, experience, and qualifications.',
      icon: BarChart3,
      color: '#E88B7D'
    },
    {
      id: 3,
      title: 'Gap Analysis',
      description: 'Identify missing skills and opportunities',
      details: 'Our system highlights skill gaps and provides actionable insights for resume optimization.',
      icon: Target,
      color: '#E88B7D'
    },
    {
      id: 4,
      title: 'Interactive Results',
      description: 'Visualize your match with detailed analytics',
      details: 'Interactive charts and comprehensive reports help you understand your strengths and areas for improvement.',
      icon: TrendingUp,
      color: '#E88B7D'
    }
  ];

  const benefits = [
    {
      title: 'Precision Matching',
      description: 'AI-powered analysis ensures accurate skill matching',
      icon: Target
    },
    {
      title: 'Time Efficiency',
      description: 'Get instant results instead of manual review',
      icon: TrendingUp
    },
    {
      title: 'Data-Driven Insights',
      description: 'Make informed decisions based on analytics',
      icon: BarChart3
    },
    {
      title: 'Competitive Advantage',
      description: 'Stand out with optimized applications',
      icon: Target
    }
  ];

  const useCases = [
    {
      scenario: 'Career Transition',
      solution: 'Identify transferable skills and highlight relevant experience for industry changes',
      icon: RefreshCw
    },
    {
      scenario: 'Recent Graduates',
      solution: 'Bridge academic experience with professional requirements',
      icon: GraduationCap
    },
    {
      scenario: 'Senior Professionals',
      solution: 'Optimize executive resumes for leadership positions',
      icon: Briefcase
    },
    {
      scenario: 'Remote Opportunities',
      solution: 'Tailor applications for distributed work environments',
      icon: Globe
    }
  ];

  return (
    <div className="bg-[#E5F0D0] rounded-[3rem] p-12 min-h-[700px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCEBC0] rounded-bl-[10rem]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#DCEBC0] rounded-tr-[8rem]" />
      
      <div className="z-10 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display text-[#0E3F35] mb-4">How It Works</h2>
          <p className="text-xl text-[#0E3F35]/80 font-body font-light max-w-3xl mx-auto leading-relaxed">
            Transform your job search with intelligent resume analysis. 
            Our AI-powered solution bridges the gap between your skills and your dream career.
          </p>
        </div>

        {/* Interactive Workflow */}
        <div className="mb-16">
          <h3 className="text-3xl font-medium font-display text-[#0E3F35] mb-8 text-center">Analysis Workflow</h3>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {workflowSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-[#0E3F35] text-white scale-105' 
                    : 'bg-white/60 hover:bg-white/80 text-[#0E3F35]'
                }`}
              >
                <div className="mb-2 flex justify-center">
                  {React.createElement(step.icon, { 
                    className: "w-8 h-8",
                    style: { color: activeStep === step.id ? "white" : "#0E3F35" }
                  })}
                </div>
                <h4 className="font-semibold text-sm">{step.title}</h4>
                <div className={`text-xs mt-1 ${activeStep === step.id ? 'text-white/80' : 'text-[#0E3F35]/70'}`}>
                  {step.description}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-white"
                style={{ backgroundColor: workflowSteps[activeStep].color }}
              >
                {React.createElement(workflowSteps[activeStep].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#0E3F35]">
                  {workflowSteps[activeStep].title}
                </h4>
                <p className="text-[#0E3F35]/80 font-body">
                  {workflowSteps[activeStep].description}
                </p>
              </div>
            </div>
            <p className="text-[#0E3F35]/90 font-body leading-relaxed">
              {workflowSteps[activeStep].details}
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-medium font-display text-[#0E3F35] mb-8 text-center">Key Benefits</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-20 h-20 bg-[#E88B7D] rounded-full flex items-center justify-center mx-auto">
                  {React.createElement(benefit.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h4 className="text-lg font-semibold font-display text-[#0E3F35]">{benefit.title}</h4>
                <p className="text-[#0E3F35]/80 font-body text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-medium font-display text-[#0E3F35] mb-8 text-center">Real-World Applications</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#0E3F35] text-white p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  {React.createElement(useCase.icon, { className: "w-6 h-6 text-white" })}
                  <div>
                    <h4 className="text-xl font-semibold font-display text-[#E88B7D] mb-2">{useCase.scenario}</h4>
                    <p className="text-white/90 font-body">{useCase.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow Visualization */}
        <div className="text-center">
          <h3 className="text-2xl font-medium text-[#0E3F35] mb-6">Complete Process Flow</h3>
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {workflowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.id + 1}
                    </div>
                    <p className="text-xs text-[#0E3F35]/80 mt-2 max-w-[100px] text-center">
                      {step.title}
                    </p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block w-8 h-0.5 bg-[#0E3F35]/40"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center">
          <p className="text-[#0E3F35]/70 font-body italic leading-relaxed max-w-2xl mx-auto">
            "The right job is not found, it's created through the perfect alignment of skills and opportunity."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
