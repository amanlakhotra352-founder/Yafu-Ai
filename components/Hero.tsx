import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Sparkles, Calendar } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const headlines = [
    "AI Voice Agents That Qualify & Book Leads.",
    "Websites Engineered for 24/7 Conversions.",
    "Smart Chatbots That Sell While You Sleep.",
    "Automate Your Front Desk with Human-Grade AI."
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % headlines.length;
      const fullText = headlines[i];
      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );
      setTypingSpeed(isDeleting ? 40 : 80);
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const typingTimer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuditClick = (e: React.MouseEvent) => {
    trackEvent('Engagement', 'Click Audit Button', 'Hero CTA');
    scrollTo(e, '#booking');
  };

  return (
    <section id="top" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40"
        style={{ 
          backgroundImage: 'linear-gradient(200deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 14.286%,rgba(140, 140, 140, 0.01) 14.286%, rgba(140, 140, 140, 0.01) 28.572%,rgba(52, 52, 52, 0.01) 28.572%, rgba(52, 52, 52, 0.01) 42.858%,rgba(38, 38, 38, 0.01) 42.858%, rgba(38, 38, 38, 0.01) 57.144%,rgba(159, 159, 159, 0.01) 57.144%, rgba(159, 159, 159, 0.01) 71.429%,rgba(71, 71, 71, 0.01) 71.43%, rgba(71, 71, 71, 0.01) 85.716%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100%), linear-gradient(90deg, #F2E6EE, #F2E6EE)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-[#0033FF]/10 mb-8 animate-in fade-in slide-in-from-bottom duration-700 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#0033FF]" />
          <p className="text-[10px] sm:text-xs font-bold text-[#00003D] uppercase tracking-wider">Built for Service Businesses & Real Estate</p>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-[#00003D] leading-[1.05] mb-8">
          Scale Your Business <br />
          <span className="text-gradient typewriter-cursor">{displayText}</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#00003D]/70 mb-10 font-medium px-4 leading-relaxed">
          Unlock 24/7 growth with human-grade AI agents that capture every lead, book your meetings, and automate your sales process so you can focus on closing deals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6 sm:px-0 mb-16">
          <button 
            onClick={handleAuditClick} 
            className="btn-gradient w-full sm:w-auto px-[42px] py-5 rounded-full text-lg font-bold flex items-center justify-center gap-2 group shadow-xl"
          >
            Get Your Free AI Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={(e) => scrollTo(e, '#services')} 
            className="w-full sm:w-auto px-[42px] py-5 rounded-full text-lg font-bold flex items-center justify-center gap-2 bg-white border border-[#00003D]/10 text-[#00003D] hover:bg-[#F2E6EE]/50 transition-all shadow-sm"
          >
            <Calendar className="w-5 h-5" />
            See Solutions
          </button>
        </div>

        {/* Social Proof Bar */}
        <div className="pt-8 border-t border-[#00003D]/5 inline-flex flex-col items-center">
          <div className="flex -space-x-3 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i} 
                className="w-10 h-10 rounded-full border-4 border-white shadow-sm" 
                src={`https://picsum.photos/seed/user-${i}/100/100`} 
                alt="happy client" 
              />
            ))}
          </div>
          <p className="text-sm font-bold text-[#00003D]/60 flex items-center gap-2">
            Trusted by 100+ businesses scaling with AI 
            <span className="flex text-[#0033FF]">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;