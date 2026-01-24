
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#576A8F]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#576A8F]/60 font-bold mb-4">Success Stories</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-[#576A8F]">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-10 rounded-[40px] relative flex flex-col justify-between text-left hover:shadow-lg transition-shadow">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#FF7444]/10" />
              <div>
                <p className="text-[#576A8F]/90 italic mb-8 relative z-10 font-medium text-lg leading-relaxed">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#576A8F]/10 pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-[#B7BDF7]/20 shadow-sm" />
                <div>
                  <p className="font-extrabold text-[#576A8F]">{t.name}</p>
                  <p className="text-xs font-bold text-[#FF7444]/70 uppercase tracking-wider">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
