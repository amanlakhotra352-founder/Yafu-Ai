
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
        ? 'bg-[#FFF8DE] border-b border-[#576A8F]/10 py-3 shadow-md' 
        : mobileMenuOpen 
          ? 'bg-[#FFF8DE] py-3' 
          : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button 
          onClick={(e) => scrollTo(e, '#top')} 
          className="flex items-center group outline-none h-10 relative z-[110]"
          aria-label="Yafu AI Home"
        >
          <span className="text-2xl font-extrabold tracking-tighter text-[#576A8F] transition-transform duration-300 group-hover:scale-105">
            Yafu <span className="text-gradient">AI</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => scrollTo(e, link.href)} 
              className="text-sm font-medium text-[#576A8F]/70 hover:text-[#FF7444] transition-colors outline-none"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => scrollTo(e, '#booking')} 
            className="btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold outline-none"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-[#576A8F] hover:text-[#FF7444] p-3 -mr-3 outline-none transition-colors relative z-[110]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-[#FFF8DE] z-[105] flex flex-col p-6 pt-24 gap-4 animate-in fade-in slide-in-from-top duration-300 overflow-y-auto">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => scrollTo(e, link.href)}
              className="text-left text-3xl font-bold text-[#576A8F] hover:text-[#FF7444] py-4 border-b border-[#576A8F]/5 active:bg-[#576A8F]/5 transition-all"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-8 mt-auto mb-12">
            <button 
              onClick={(e) => scrollTo(e, '#booking')} 
              className="btn-gradient w-full px-6 py-5 rounded-2xl text-center font-bold text-xl outline-none shadow-lg active:scale-[0.98] transition-transform"
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
