
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-orange-500 font-bold mb-4">Specialization</h2>
          <h3 className="text-4xl lg:text-5xl font-bold">Trusted Across Industries</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => (
            <button 
              key={industry.id} 
              onClick={(e) => scrollTo(e, '#booking')}
              className="group relative block outline-none text-left w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              <div className="relative glass-card p-8 rounded-3xl h-full flex flex-col items-center text-center group-hover:border-orange-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-white/5 flex items-center justify-center text-orange-500 mb-6 group-hover:rotate-12 transition-all">
                  {iconMap[industry.icon]}
                </div>
                <h4 className="text-xl font-bold mb-3">{industry.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
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
