
import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, Target, Send, Loader2 } from 'lucide-react';

const Booking: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Capture the name for personalization
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
    <section id="booking" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF7444]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-[32px] sm:rounded-[48px] p-6 sm:p-8 lg:p-16 relative border-[#576A8F]/10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center text-left">
            <div>
              <div className="mb-6 sm:mb-8">
                <span className="text-3xl lg:text-4xl font-extrabold tracking-tighter text-[#576A8F]">
                  Yafu <span className="text-gradient">AI</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight leading-tight text-[#576A8F]">
                Ready to Transform Your <br />
                <span className="text-gradient">Business with AI?</span>
              </h2>

              <p className="text-base sm:text-lg text-[#576A8F]/70 mb-6 sm:mb-8 leading-relaxed font-medium">
                Fill out the form to get a custom strategy. We'll show you exactly how Yafu AI can automate your growth.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-[#576A8F] font-bold">
                  <ShieldCheck className="w-5 h-5 text-[#FF7444] shrink-0" />
                  No commitment required
                </div>
                <div className="flex items-center gap-3 text-sm text-[#576A8F] font-bold">
                  <Clock className="w-5 h-5 text-[#B7BDF7] shrink-0" />
                  Fast response within 24 hours
                </div>
                <div className="flex items-center gap-3 text-sm text-[#576A8F] font-bold">
                  <Target className="w-5 h-5 text-[#576A8F] shrink-0" />
                  Custom AI blueprint included
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-[#576A8F]/10 shadow-lg">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 sm:py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF7444]/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="text-[#FF7444] w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#576A8F]">Thanks, {submittedName}!</h3>
                  <p className="text-[#576A8F]/70 font-medium text-base">
                    We have received your request and will provide you with a solution shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="fc3a3490-9892-4b9a-813d-598dee6ebac4" />
                  <input type="hidden" name="subject" value="New Lead from Yafu AI Website" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  
                  <div>
                    <label htmlFor="full-name" className="block text-xs sm:text-sm font-bold text-[#576A8F] mb-1.5 sm:mb-2 uppercase tracking-wider">Full Name</label>
                    <input 
                      id="full-name"
                      name="name"
                      type="text" 
                      required 
                      autoComplete="name"
                      placeholder="John Doe"
                      className="w-full bg-[#FFF8DE]/30 border border-[#576A8F]/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#FF7444] transition-all text-[#576A8F] placeholder:text-[#576A8F]/30 text-base"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-[#576A8F] mb-1.5 sm:mb-2 uppercase tracking-wider">Work Email</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required 
                        autoComplete="email"
                        inputMode="email"
                        placeholder="john@company.com"
                        className="w-full bg-[#FFF8DE]/30 border border-[#576A8F]/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#FF7444] transition-all text-[#576A8F] placeholder:text-[#576A8F]/30 text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-[#576A8F] mb-1.5 sm:mb-2 uppercase tracking-wider">Phone Number</label>
                      <input 
                        id="phone"
                        name="phone"
                        type="number" 
                        required 
                        autoComplete="tel"
                        inputMode="numeric"
                        placeholder="1234567890"
                        className="w-full bg-[#FFF8DE]/30 border border-[#576A8F]/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#FF7444] transition-all text-[#576A8F] placeholder:text-[#576A8F]/30 text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-[#576A8F] mb-1.5 sm:mb-2 uppercase tracking-wider">How can we help?</label>
                    <textarea 
                      id="message"
                      name="message"
                      required 
                      rows={3}
                      placeholder="Tell us about your goals..."
                      className="w-full bg-[#FFF8DE]/30 border border-[#576A8F]/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#FF7444] transition-all text-[#576A8F] resize-none placeholder:text-[#576A8F]/30 text-base"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className={`btn-gradient w-full py-4.5 rounded-xl text-lg font-bold flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed mt-2 active:scale-95 transition-transform`}
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-[#FF7444] text-sm text-center font-bold animate-pulse">Something went wrong. Please try again.</p>
                  )}
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
