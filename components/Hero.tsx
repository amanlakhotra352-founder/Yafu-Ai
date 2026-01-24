
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Hero: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let timer: number;
    
    const initVanta = () => {
      // Robust check for window objects and ref
      if (window.VANTA && window.VANTA.RINGS && window.THREE && vantaRef.current && !vantaEffect.current) {
        try {
          vantaEffect.current = window.VANTA.RINGS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xfff8de,
            color: 0xff7444,
            backgroundAlpha: 1.0
          });
        } catch (err) {
          console.warn("Vanta initialization failed, retrying...", err);
          timer = window.setTimeout(initVanta, 500);
        }
      } else if (!vantaEffect.current) {
        timer = window.setTimeout(initVanta, 100);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      if (timer) clearTimeout(timer);
    };
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div 
        ref={vantaRef} 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ background: '#FFF8DE' }}
      ></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#576A8F]/10 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img 
                key={i} 
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#FFF8DE]" 
                src={`https://picsum.photos/seed/${i+25}/40/40`} 
                alt="user avatar" 
              />
            ))}
          </div>
          <p className="text-[10px] sm:text-xs font-bold text-[#576A8F]/80 tracking-tight">Trusted by 100+ businesses</p>
          <div className="flex gap-0.5 ml-1">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF7444] fill-[#FF7444]" />)}
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom duration-1000 text-[#576A8F] leading-[1.05] drop-shadow-sm">
          Scale Your Business <br className="hidden sm:block" />
          <span className="text-gradient">with AI That Works</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl lg:text-2xl text-[#576A8F]/80 mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-200 font-medium px-4 leading-relaxed">
          Unlock 24/7 operations with human-grade voice agents, intelligent chatbots, and high-conversion funnels engineered for modern growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-300 px-6 sm:px-0">
          <button 
            onClick={(e) => scrollTo(e, '#booking')} 
            className="btn-gradient w-full sm:w-auto px-12 py-5 rounded-full text-xl font-bold flex items-center justify-center gap-3 group outline-none active:scale-95 transition-all shadow-xl shadow-[#FF7444]/20"
          >
            Start Free Strategy Call
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>
          <div className="flex flex-col items-center sm:items-start">
             <p className="text-xs sm:text-sm text-[#576A8F]/60 font-bold italic tracking-wide">Limited availability for Q2 2024</p>
             <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF7444]/20 to-transparent mt-1 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
