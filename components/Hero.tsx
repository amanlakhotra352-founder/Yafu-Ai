
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img key={i} className="w-6 h-6 rounded-full border-2 border-gray-950" src={`https://picsum.photos/seed/${i}/40/40`} alt="user" />
            ))}
          </div>
          <p className="text-xs font-medium text-gray-300">Trusted by 100+ high-growth companies</p>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
          </div>
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
          Scale Your Business with <br />
          <span className="text-gradient">AI That Works 24/7</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-400 mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          Transform your operations with intelligent voice agents, custom chatbots, and high-converting funnels designed to capture leads and close deals while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          <button 
            onClick={(e) => scrollTo(e, '#booking')} 
            className="btn-gradient w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold text-white flex items-center justify-center gap-2 group outline-none"
          >
            Book Your Free Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 font-medium italic">Limited slots available this month • No commitment</p>
        </div>

        {/* Visual Element */}
        <div className="mt-16 lg:mt-24 relative max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-4 lg:p-6 shadow-2xl overflow-hidden animate-float">
            <div className="aspect-video bg-gray-900/50 rounded-xl overflow-hidden border border-white/5 relative group">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
                alt="AI Agency Visual" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-2">Real-time Performance</p>
                  <h3 className="text-2xl font-bold">Intelligent Automation Dashboard</h3>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
