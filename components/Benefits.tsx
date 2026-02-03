
import React from 'react';
import { BENEFITS, iconMap } from '../constants';

const Benefits: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="py-24 bg-[#0033FF]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="lg:max-w-xl text-left">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#0033FF] font-bold mb-4">The Advantage</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#00003D]">Why Growing Businesses Choose Yafu AI</h3>
          </div>
          <div className="shrink-0">
            <button 
              onClick={(e) => scrollTo(e, '#booking')} 
              className="inline-flex items-center gap-3 text-[#00003D] font-extrabold hover:text-[#0033FF] transition-colors group outline-none"
            >
              See the results in action
              <span className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#0033FF] group-hover:text-white transition-all">
                {iconMap.ArrowUpRight}
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <button 
              key={benefit.id} 
              onClick={(e) => scrollTo(e, '#booking')}
              className="glass-card p-10 rounded-[32px] group hover:bg-white hover:shadow-xl transition-all block outline-none text-left w-full"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0033FF] to-[#977DFF] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {iconMap[benefit.icon]}
              </div>
              <h4 className="text-xl font-extrabold mb-3 text-[#00003D]">{benefit.title}</h4>
              <p className="text-[#00003D]/70 text-sm leading-relaxed font-medium">
                {benefit.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
