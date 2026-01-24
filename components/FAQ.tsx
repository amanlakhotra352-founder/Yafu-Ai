
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#FF7444] font-bold mb-4">Knowledge Base</h2>
          <h3 className="text-4xl font-extrabold text-[#576A8F]">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div 
              key={faq.id} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openId === faq.id ? 'border-[#FF7444]/40 shadow-md bg-white' : 'border-[#576A8F]/10'}`}
            >
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#576A8F]/5 transition-colors"
              >
                <span className="font-extrabold text-[#576A8F]">{faq.question}</span>
                {openId === faq.id ? <ChevronUp className="w-5 h-5 text-[#FF7444]" /> : <ChevronDown className="w-5 h-5 text-[#576A8F]/40" />}
              </button>
              <div className={`px-6 transition-all duration-300 ${openId === faq.id ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-[#576A8F]/70 text-sm leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
