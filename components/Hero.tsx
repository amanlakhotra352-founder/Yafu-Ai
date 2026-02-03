
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
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
      {/* Background Layer with User Specified Gradient */}
      <div 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(200deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 14.286%,rgba(140, 140, 140, 0.01) 14.286%, rgba(140, 140, 140, 0.01) 28.572%,rgba(52, 52, 52, 0.01) 28.572%, rgba(52, 52, 52, 0.01) 42.858%,rgba(38, 38, 38, 0.01) 42.858%, rgba(38, 38, 38, 0.01) 57.144%,rgba(159, 159, 159, 0.01) 57.144%, rgba(159, 159, 159, 0.01) 71.42999999999999%,rgba(71, 71, 71, 0.01) 71.43%, rgba(71, 71, 71, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(337deg, rgba(25, 25, 25, 0.01) 0%, rgba(25, 25, 25, 0.01) 12.5%,rgba(150, 150, 150, 0.01) 12.5%, rgba(150, 150, 150, 0.01) 25%,rgba(84, 84, 84, 0.01) 25%, rgba(84, 84, 84, 0.01) 37.5%,rgba(85, 85, 85, 0.01) 37.5%, rgba(85, 85, 85, 0.01) 50%,rgba(188, 188, 188, 0.01) 50%, rgba(188, 188, 188, 0.01) 62.5%,rgba(80, 80, 80, 0.01) 62.5%, rgba(80, 80, 80, 0.01) 75%,rgba(73, 73, 73, 0.01) 75%, rgba(73, 73, 73, 0.01) 87.5%,rgba(219, 219, 219, 0.01) 87.5%, rgba(219, 219, 219, 0.01) 100%),linear-gradient(203deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(114, 114, 114, 0.01) 25%, rgba(114, 114, 114, 0.01) 50%,rgba(164, 164, 164, 0.01) 50%, rgba(164, 164, 164, 0.01) 75%,rgba(228, 228, 228, 0.01) 75%, rgba(228, 228, 228, 0.01) 100%),linear-gradient(317deg, rgba(139, 139, 139, 0.02) 0%, rgba(139, 139, 139, 0.02) 16.667%,rgba(44, 44, 44, 0.02) 16.667%, rgba(44, 44, 44, 0.02) 33.334%,rgba(166, 166, 166, 0.02) 33.334%, rgba(166, 166, 166, 0.02) 50.001000000000005%,rgba(2, 2, 2, 0.02) 50.001%, rgba(2, 2, 2, 0.02) 66.668%,rgba(23, 23, 23, 0.02) 66.668%, rgba(23, 23, 23, 0.02) 83.33500000000001%,rgba(21, 21, 21, 0.02) 83.335%, rgba(21, 21, 21, 0.02) 100.002%),linear-gradient(328deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 12.5%,rgba(116, 116, 116, 0.03) 12.5%, rgba(116, 116, 116, 0.03) 25%,rgba(214, 214, 214, 0.03) 25%, rgba(214, 214, 214, 0.03) 37.5%,rgba(217, 217, 217, 0.03) 37.5%, rgba(217, 217, 217, 0.03) 50%,rgba(68, 68, 68, 0.03) 50%, rgba(68, 68, 68, 0.03) 62.5%,rgba(118, 118, 118, 0.03) 62.5%, rgba(118, 118, 118, 0.03) 75%,rgba(200, 200, 200, 0.03) 75%, rgba(200, 200, 200, 0.03) 87.5%,rgba(198, 198, 198, 0.03) 87.5%, rgba(198, 198, 198, 0.03) 100%),linear-gradient(97deg, rgba(195, 195, 195, 0.03) 0%, rgba(195, 195, 195, 0.03) 16.667%,rgba(177, 177, 177, 0.03) 16.667%, rgba(177, 177, 177, 0.03) 33.334%,rgba(170, 170, 170, 0.03) 33.334%, rgba(170, 170, 170, 0.03) 50.001000000000005%,rgba(158, 158, 158, 0.03) 50.001%, rgba(158, 158, 158, 0.03) 66.668%,rgba(121, 121, 121, 0.03) 66.668%, rgba(121, 121, 121, 0.03) 83.33500000000001%,rgba(146, 146, 146, 0.03) 83.335%, rgba(146, 146, 146, 0.03) 100.002%),linear-gradient(268deg, rgba(103, 103, 103, 0.03) 0%, rgba(103, 103, 103, 0.03) 25%,rgba(112, 112, 112, 0.03) 25%, rgba(112, 112, 112, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(227, 227, 227, 0.03) 75%, rgba(227, 227, 227, 0.03) 100%),linear-gradient(90deg, hsl(98,0%,0%),hsl(98,0%,0%))'
        }}
      >
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img 
                key={i} 
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white/20" 
                src={`https://picsum.photos/seed/${i+25}/40/40`} 
                alt="user avatar" 
              />
            ))}
          </div>
          <p className="text-[10px] sm:text-xs font-bold text-white/90 tracking-tight">Trusted by 100+ businesses</p>
          <div className="flex gap-0.5 ml-1">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white" />)}
          </div>
        </div>

        <div className="min-h-[180px] sm:min-h-[220px] lg:min-h-[300px] flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 text-white leading-[1.1] drop-shadow-xl max-w-5xl mx-auto">
            <span className="text-gradient typewriter-cursor">{displayText}</span>
          </h1>
        </div>

        <p className="max-w-3xl mx-auto text-base sm:text-xl lg:text-2xl text-white/90 mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-200 font-medium px-4 leading-relaxed mt-8 drop-shadow-md">
          Unlock 24/7 operations with human-grade voice agents, intelligent chatbots, and high-conversion funnels engineered for modern growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-300 px-6 sm:px-0">
          <button 
            onClick={(e) => scrollTo(e, '#booking')} 
            className="btn-gradient w-full sm:w-auto px-12 py-5 rounded-full text-xl font-bold flex items-center justify-center gap-3 group outline-none active:scale-95 transition-all shadow-xl shadow-black/40"
          >
            Book Discovery Call
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
