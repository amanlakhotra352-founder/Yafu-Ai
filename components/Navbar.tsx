
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bug Fix: Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Industries', href: '#industries' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-[#0033FF]/10 py-3 shadow-md' 
        : mobileMenuOpen 
          ? 'bg-white py-3' 
          : 'bg-white py-3.5 shadow-sm border-b border-black/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button 
          onClick={(e) => scrollTo(e, '#top')} 
          className="flex items-center group outline-none h-9 relative z-[110]"
          aria-label="Yafu AI Home"
        >
          <img 
            src="logo.png" 
            alt="Yafu AI Logo" 
            className="h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to text if image fails to load or path is incorrect
              e.currentTarget.style.display = 'none';
              const span = e.currentTarget.parentElement?.querySelector('.logo-text');
              if (span) span.classList.remove('hidden');
            }}
          />
          <span className="logo-text hidden text-2xl font-extrabold tracking-tighter text-[#00003D]">
            Yafu <span className="text-gradient">AI</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => scrollTo(e, link.href)} 
              className="text-base font-semibold text-[#00003D]/80 hover:text-[#0033FF] transition-colors outline-none"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => scrollTo(e, '#booking')} 
            className="btn-gradient px-5 py-2 rounded-full text-base font-bold outline-none shadow-md"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-[#00003D] hover:text-[#0033FF] p-2 -mr-2 outline-none transition-colors relative z-[110]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[105] flex flex-col p-6 pt-20 gap-4 animate-in fade-in slide-in-from-top duration-300 overflow-y-auto">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => scrollTo(e, link.href)}
              className="text-left text-2xl font-bold text-[#00003D] hover:text-[#0033FF] py-3 border-b border-[#00003D]/5 active:bg-[#00003D]/5 transition-all"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-6 mt-auto mb-10">
            <button 
              onClick={(e) => scrollTo(e, '#booking')} 
              className="btn-gradient w-full px-6 py-4 rounded-2xl text-center font-bold text-lg outline-none shadow-lg active:scale-[0.98] transition-transform"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
