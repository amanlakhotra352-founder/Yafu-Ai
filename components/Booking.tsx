
import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, Target, Send, Loader2 } from 'lucide-react';

const Booking: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/amanlakhotra@yafuai.online', {
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
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-[40px] p-8 lg:p-16 relative border-purple-500/20 shadow-[0_0_80px_-20px_rgba(168,85,247,0.3)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
            <div>
              <div className="mb-8">
                <span className="text-3xl lg:text-4xl font-extrabold tracking-tighter text-white">
                  Yafu <span className="text-gradient">AI</span>
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight leading-tight text-white">
                Ready to Transform Your <br />
                <span className="text-gradient">Business with AI?</span>
              </h2>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Fill out the form to get a custom strategy. We'll show you exactly how Yafu AI can automate your growth.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                  No commitment required
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                  Fast response within 24 hours
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Target className="w-5 h-5 text-purple-500 shrink-0" />
                  Custom AI blueprint included
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl bg-white/5 border border-white/10">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <Send className="text-green-500 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Message Received!</h3>
                  <p className="text-gray-400">
                    We'll get back to you at <strong>amanlakhotra@yafuai.online</strong> shortly. 
                    <br />Please check your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="_subject" value="New Lead from Yafu AI Website" />
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input 
                      id="full-name"
                      name="name"
                      type="text" 
                      required 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required 
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">How can we help?</label>
                    <textarea 
                      id="message"
                      name="message"
                      required 
                      rows={4}
                      placeholder="Tell us about your business goals and what automation you're looking for..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-white resize-none placeholder:text-gray-600"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className={`btn-gradient w-full py-4 rounded-xl text-lg font-bold text-white flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed`}
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
                    <p className="text-red-400 text-sm text-center animate-pulse">Something went wrong. Please try emailing amanlakhotra@yafuai.online directly.</p>
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
