import React from 'react';

const ConceptSection = () => {
  const poeticQuotes = [
    {
      quote: "The journey of a thousand miles begins with a single step.",
      poet: "Lao Tzu",
      context: "Your career path starts with the perfect resume match."
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      poet: "Winston Churchill",
      context: "Every application teaches you something valuable."
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      poet: "Eleanor Roosevelt", 
      context: "Your dream job awaits the perfect you."
    }
  ];

  const whyItMatters = [
    {
      title: "Precision Matching",
      description: "In today's competitive landscape, generic applications get lost. Your resume must speak the same language as your dream job.",
      icon: "bullseye"
    },
    {
      title: "Geographic Intelligence", 
      description: "Location matters more than ever. Remote work opportunities, regional skill demands, and local market insights shape your success.",
      icon: "globe"
    },
    {
      title: "AI-Driven Insights",
      description: "Machine learning algorithms see patterns humans miss. Let artificial intelligence be your career compass in this digital age.",
      icon: "brain"
    }
  ];

  return (
    <div className="bg-[#E5F0D0] rounded-[3rem] p-12 min-h-[700px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCEBC0] rounded-bl-[10rem]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#DCEBC0] rounded-tr-[8rem]" />
      
      <div className="z-10 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display text-[#0E3F35] mb-4">The Art of Career Alignment</h2>
          <p className="text-xl text-[#0E3F35]/80 font-body font-light max-w-3xl mx-auto leading-relaxed">
            In today's hyper-connected world, your resume is not just a document; it's your personal manifesto. 
            It must resonate with the rhythm of opportunity, dance with the language of innovation, and sing 
            the song of your unique value proposition.
          </p>
        </div>

        {/* Poetic Inspiration */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-[#0E3F35] mb-8 text-center">Wisdom Through the Ages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {poeticQuotes.map((item, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-3xl font-display text-[#E88B7D] mb-4">"</div>
                <blockquote className="text-[#0E3F35]/90 font-body italic mb-3 leading-relaxed">
                  {item.quote}
                </blockquote>
                <cite className="text-sm text-[#E88B7D] font-body not-italic">
                  <span className="font-semibold">~ {item.poet}</span>
                </cite>
                <p className="text-sm text-[#0E3F35]/60 font-body mt-2 italic">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-[#0E3F35] mb-8 text-center">Why This Matters Now</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whyItMatters.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#E88B7D] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">
                    {item.icon === 'bullseye' && ' bullseye '}
                    {item.icon === 'globe' && ' globe '}
                    {item.icon === 'brain' && ' brain '}
                  </span>
                </div>
                <h4 className="text-lg font-semibold font-display text-[#0E3F35]">{item.title}</h4>
                <p className="text-[#0E3F35]/80 font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#0E3F35] text-white rounded-[2rem] p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-display mb-4 text-[#E88B7D]">Your Story, Perfectly Told</h3>
            <p className="text-lg font-body mb-6 leading-relaxed">
              Like a master poet crafting verses, we help you compose a resume that speaks directly 
              to your chosen path. Every word calibrated, every skill highlighted, every achievement 
              positioned to create the perfect harmony between your ambition and opportunity.
            </p>
            <div className="text-sm font-body italic text-[#E88B7D]">
              "In the middle of difficulty lies opportunity." - Albert Einstein
            </div>
          </div>
        </div>

        {/* Footer Poem */}
        <div className="mt-12 text-center">
          <p className="text-[#0E3F35]/70 font-body italic leading-relaxed max-w-2xl mx-auto">
            Your career is a poem waiting to be written,<br />
            Each line a skill, each stanza a journey,<br />
            Let us help you find the perfect rhythm,<br />
            And make your professional story legendary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConceptSection;
