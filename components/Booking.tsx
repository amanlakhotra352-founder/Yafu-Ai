
import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, Target, Send, Loader2, BarChart3 } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const Booking: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    setSubmittedName(name || 'there');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        trackEvent('Conversion', 'Submit Audit Request', 'Booking Form');
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 10000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0033FF]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-[48px] p-8 lg:p-20 relative border-[#0033FF]/10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0033FF]/10 text-[#0033FF] text-xs font-bold uppercase tracking-wider mb-8">
                <Target className="w-3 h-3" /> Limited Openings for Free Audits
              </div>

              <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-[1.1] text-[#00003D]">
                Get Your Custom <br />
                <span className="text-gradient">AI Blueprint</span>
              </h2>

              <p className="text-lg text-[#00003D]/70 mb-10 leading-relaxed font-medium">
                In just 15 minutes, we'll analyze your current sales process and show you exactly where AI can capture more leads and save you 20+ hours a week.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#0033FF]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#00003D]">No Commitment</p>
                    <p className="text-xs text-[#00003D]/60">Purely strategy and value.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#977DFF]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#00003D]">ROI Guarantee</p>
                    <p className="text-xs text-[#00003D]/60">We only build what works.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/40 border border-[#0033FF]/10 rounded-2xl flex items-center gap-4">
                <img src="https://picsum.photos/seed/aman/100/100" alt="Founder" className="w-12 h-12 rounded-full border-2 border-white" />
                <div>
                  <p className="text-sm font-bold text-[#00003D]">"We build systems, not just bots."</p>
                  <p className="text-xs text-[#0033FF] font-bold">Aman Lakhotra, Founder</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-[40px] border border-[#0033FF]/10 shadow-2xl relative">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#0033FF]/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="text-[#0033FF] w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-3 text-[#00003D]">Talk soon, {submittedName}!</h3>
                  <p className="text-[#00003D]/70 font-medium">
                    Our team is reviewing your profile. Expect a personalized AI strategy in your inbox within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="fc3a3490-9892-4b9a-813d-598dee6ebac4" />
                  <input type="hidden" name="subject" value="New AI Audit Request - Yafu AI" />
                  
                  <div>
                    <label className="block text-xs font-black text-[#00003D]/40 mb-2 uppercase tracking-[0.1em]">Your Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required 
                      placeholder="John Doe"
                      className="w-full bg-[#F2E6EE]/30 border-2 border-transparent focus:border-[#0033FF]/20 rounded-2xl px-5 py-4 focus:outline-none transition-all text-[#00003D] text-base font-semibold"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-[#00003D]/40 mb-2 uppercase tracking-[0.1em]">Work Email</label>
                      <input 
                        name="email"
                        type="email" 
                        required 
                        placeholder="john@company.com"
                        className="w-full bg-[#F2E6EE]/30 border-2 border-transparent focus:border-[#0033FF]/20 rounded-2xl px-5 py-4 focus:outline-none transition-all text-[#00003D] text-base font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-[#00003D]/40 mb-2 uppercase tracking-[0.1em]">Phone Number</label>
                      <input 
                        name="phone"
                        type="tel" 
                        required 
                        placeholder="123-456-7890"
                        className="w-full bg-[#F2E6EE]/30 border-2 border-transparent focus:border-[#0033FF]/20 rounded-2xl px-5 py-4 focus:outline-none transition-all text-[#00003D] text-base font-semibold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-[#00003D]/40 mb-2 uppercase tracking-[0.1em]">Business Goal</label>
                    <textarea 
                      name="message"
                      required 
                      rows={3}
                      placeholder="e.g., I want to automate my weekend property inquiries..."
                      className="w-full bg-[#F2E6EE]/30 border-2 border-transparent focus:border-[#0033FF]/20 rounded-2xl px-5 py-4 focus:outline-none transition-all text-[#00003D] text-base font-semibold resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="btn-gradient w-full py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed mt-4 active:scale-[0.98] transition-all"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        Get My Free AI Audit
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#00003D]/40 font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3 inline mr-1" /> Secure & GDPR Compliant
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
