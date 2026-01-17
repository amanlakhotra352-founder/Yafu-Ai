
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We dive deep into your business goals, bottlenecks, and current lead flow to find the perfect automation opportunities.'
  },
  {
    number: '02',
    title: 'Custom Strategy',
    description: 'Our engineers design a tailored AI blueprint that aligns with your tech stack and specific business objectives.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We build, test, and integrate your AI voice agents and chatbots seamlessly into your existing workflows.'
  },
  {
    number: '04',
    title: 'Scale & Optimize',
    description: 'Once live, we monitor performance and continuously refine the models to maximize your ROI and growth.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-pink-500 font-bold mb-4">The Method</h2>
          <h3 className="text-4xl lg:text-5xl font-bold">Your Journey to AI-Powered Growth</h3>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-6 group">
              <div className="text-6xl font-black text-white/5 mb-4 group-hover:text-purple-500/10 transition-colors">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-purple-500/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
