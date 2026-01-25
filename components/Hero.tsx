
import React, { useEffect, useRef, useState } from 'react';
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

  // Typewriter states
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const headlines = [
    "AI Voice Agents That Call, Talk & Close for You",
    "Your Business, Answered 24/7 by AI",
    "Smart AI Voice Agents for Sales & Support",
    "Websites That Don’t Just Look Good — They Convert",
    "AI-Powered Websites Built to Generate Leads",
    "Automate Your Business with AI"
  ];

  useEffect(() => {
    let timer: number;
    
    const initVanta = () => {
      // Fog effect requires VANTA and Three.js to be loaded
      if (window.VANTA && window.VANTA.FOG && vantaRef.current && !vantaEffect.current) {
        try {
          const isMobile = window.innerWidth < 768;
          
          vantaEffect.current = window.VANTA.FOG({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xff7444,
            midtoneColor: 0xb7bdf7,
            lowlightColor: 0x576a8f,
            baseColor: 0xfff8de,
            blurFactor: isMobile ? 0.7 : 0.6,
            speed: isMobile ? 0.8 : 1.2,
            zoom: isMobile ? 0.7 : 1.0
          });
        } catch (err) {
          console.warn("Vanta FOG initialization failed, retrying...", err);
          timer = window.setTimeout(initVanta, 500);
        }
      } else if (!vantaEffect.current) {
        timer = window.setTimeout(initVanta, 100);
      }
    };

    initVanta();

    const handleResize = () => {
      if (vantaEffect.current && vantaEffect.current.resize) {
        vantaEffect.current.resize();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      window.removeEventListener('resize', handleResize);
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Typewriter Logic
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % headlines.length;
      const fullText = headlines[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      // Speed adjustments
      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && displayText === fullText) {
        // Wait 2 seconds before starting to delete
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

        <div className="min-h-[180px] sm:min-h-[220px] lg:min-h-[300px] flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 text-[#576A8F] leading-[1.1] drop-shadow-sm max-w-5xl mx-auto">
            <span className="text-gradient typewriter-cursor">{displayText}</span>
          </h1>
        </div>

        <p className="max-w-3xl mx-auto text-base sm:text-xl lg:text-2xl text-[#576A8F]/80 mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-200 font-medium px-4 leading-relaxed mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
