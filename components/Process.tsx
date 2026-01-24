
import React from 'react';
import { Search, Compass, Cpu, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    icon: <Search className="w-6 h-6" />,
    description: 'We dive deep into your business goals, bottlenecks, and current lead flow to find the perfect automation opportunities.',
    color: '#FF7444'
  },
  {
    number: '02',
    title: 'Custom Strategy',
    icon: <Compass className="w-6 h-6" />,
    description: 'Our engineers design a tailored AI blueprint that aligns with your tech stack and specific business objectives.',
    color: '#576A8F'
  },
  {
    number: '03',
    title: 'Implementation',
    icon: <Cpu className="w-6 h-6" />,
    description: 'We build, test, and integrate your AI voice agents and chatbots seamlessly into your existing workflows.',
    color: '#B7BDF7'
  },
  {
    number: '04',
    title: 'Scale & Optimize',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Once live, we monitor performance and continuously refine the models to maximize your ROI and growth.',
    color: '#FF7444'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#FFF8DE]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#576A8F]/20 to-transparent hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#FF7444] font-bold mb-4">The Roadmap</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#576A8F] leading-tight">How We Automate <br/><span className="text-gradient">Your Success</span></h3>
        </div>

        <div className="relative">
          {/* Mobile Line - Adjusted for better alignment */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF7444] via-[#576A8F] to-[#B7BDF7] md:hidden opacity-30"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center gap-10 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Content Card */}
                <div className="flex-1 md:w-1/2 ml-4 md:ml-0">
                  <div className={`glass-card p-6 sm:p-8 rounded-[32px] hover:shadow-2xl transition-all duration-500 group relative overflow-hidden bg-white/40 border border-[#576A8F]/10 hover:-translate-y-2 cursor-default ${idx % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                    {/* Background Number Accent */}
                    <div className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 text-7xl sm:text-8xl font-black text-[#576A8F]/5 group-hover:text-[#FF7444]/10 transition-colors pointer-events-none">
                      {step.number}
                    </div>
                    
                    <div className="relative z-10">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-sm transition-transform duration-500 group-hover:rotate-12"
                        style={{ backgroundColor: `${step.color}20`, color: step.color }}
                      >
                        {step.icon}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#576A8F]">{step.title}</h4>
                      <p className="text-[#576A8F]/70 text-sm sm:text-base leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#FF7444]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Timeline Node - Adjusted for mobile */}
                <div className="absolute left-5 sm:left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-4 border-[#FFF8DE] shadow-xl flex items-center justify-center z-20 transition-all duration-500 hover:scale-125" style={{ borderColor: step.color }}>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: step.color }}></div>
                  </div>
                </div>

                {/* Empty Spacer for Layout */}
                <div className="hidden md:block flex-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA after Roadmap */}
        <div className="mt-20 sm:mt-24 text-center px-4">
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#576A8F] text-[#FFF8DE] font-bold rounded-full overflow-hidden transition-all hover:bg-[#FF7444] hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <span className="relative z-10">Start Your Journey Now</span>
            <TrendingUp className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
