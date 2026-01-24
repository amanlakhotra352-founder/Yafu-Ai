
import React from 'react';
import { INDUSTRIES, iconMap } from '../constants';

const Industries: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
       {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B7BDF7]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#FF7444] font-bold mb-4">Specialization</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-[#576A8F]">Trusted Across Industries</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => (
            <button 
              key={industry.id} 
              onClick={(e) => scrollTo(e, '#booking')}
              className="group relative block outline-none text-left w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7444]/5 to-[#B7BDF7]/5 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              <div className="relative glass-card p-8 rounded-[32px] h-full flex flex-col items-center text-center group-hover:border-[#FF7444]/30 group-hover:bg-white/80 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF8DE] border border-[#576A8F]/10 flex items-center justify-center text-[#FF7444] mb-6 group-hover:rotate-12 transition-all shadow-sm">
                  {iconMap[industry.icon]}
                </div>
                <h4 className="text-xl font-extrabold mb-3 text-[#576A8F]">{industry.title}</h4>
                <p className="text-[#576A8F]/70 text-sm leading-relaxed font-medium">
                  {industry.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
