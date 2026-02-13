
import React from 'react';
import { Twitter, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#00003D] pt-20 pb-10 text-[#F2E6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1 text-left">
            <button 
              onClick={(e) => scrollTo(e, '#top')} 
              className="mb-6 block outline-none group"
              aria-label="Back to top"
            >
              <img 
                src="logo.png" 
                alt="Yafu AI Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 brightness-0 invert" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const span = e.currentTarget.parentElement?.querySelector('.logo-text');
                  if (span) span.classList.remove('hidden');
                }}
              />
              <span className="logo-text hidden text-2xl font-extrabold tracking-tighter text-[#F2E6EE] transition-transform duration-300 group-hover:scale-105 block">
                Yafu <span className="text-[#0033FF]">AI</span>
              </span>
            </button>
            <p className="text-[#F2E6EE]/70 text-sm font-medium leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI automation that drives real growth and delivers world-class customer experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#977DFF] hover:text-[#00003D] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFCCF2] hover:text-[#00003D] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#00003D] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="font-extrabold mb-6 text-[#F2E6EE]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[#F2E6EE]/70 font-medium">
              <li><button onClick={(e) => scrollTo(e, '#services')} className="hover:text-[#0033FF] transition-colors outline-none">Our Services</button></li>
              <li><button onClick={(e) => scrollTo(e, '#process')} className="hover:text-[#0033FF] transition-colors outline-none">The Process</button></li>
              <li><button onClick={(e) => scrollTo(e, '#benefits')} className="hover:text-[#0033FF] transition-colors outline-none">Key Benefits</button></li>
              <li><button onClick={(e) => scrollTo(e, '#industries')} className="hover:text-[#0033FF] transition-colors outline-none">Industries Served</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h4 className="font-extrabold mb-6 text-[#F2E6EE]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-[#F2E6EE]/70 font-medium">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0033FF]" />
                <a href="mailto:hello@yafu.online" className="hover:text-white transition-colors">hello@yafu.online</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#977DFF]" />
                <a href="https://wa.me/918082127115" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 8082127115</a>
              </li>
              <li>Mumbai, India</li>
            </ul>
          </div>

          {/* Newsletter/Trust */}
          <div className="text-left">
            <h4 className="font-extrabold mb-6 text-[#F2E6EE]">Stay Innovative</h4>
            <p className="text-[#F2E6EE]/70 text-sm font-medium mb-4">
              Join our newsletter for exclusive AI insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-[#0033FF] text-white placeholder:text-white/40" 
              />
              <button type="submit" className="bg-[#0033FF] p-2 rounded-lg hover:brightness-110 transition-all text-white">
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#F2E6EE]/50 font-medium">
            &copy; {new Date().getFullYear()} Yafu AI. Built for the future.
          </p>
          <div className="flex gap-8 text-xs text-[#F2E6EE]/50 font-medium">
            <button onClick={(e) => scrollTo(e, '#booking')} className="hover:text-white transition-colors outline-none">Privacy Policy</button>
            <button onClick={(e) => scrollTo(e, '#booking')} className="hover:text-white transition-colors outline-none">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
