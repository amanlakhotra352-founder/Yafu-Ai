
import React from 'react';
import { SERVICES, iconMap } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#977DFF]/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#0033FF] font-bold mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-[#00003D]">Our AI-Powered Solutions</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <button 
              key={service.id} 
              onClick={(e) => scrollTo(e, '#booking')}
              className="glass-card p-8 rounded-[32px] hover:border-[#0033FF]/40 hover:shadow-lg transition-all duration-500 group block outline-none text-left w-full"
            >
              <div className="w-14 h-14 bg-[#0033FF]/10 rounded-2xl flex items-center justify-center text-[#0033FF] mb-6 group-hover:scale-110 transition-transform">
                {iconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold mb-4 text-[#00003D]">{service.title}</h4>
              <p className="text-[#00003D]/70 text-sm mb-6 leading-relaxed font-medium">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#00003D]/80 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#0033FF] shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
