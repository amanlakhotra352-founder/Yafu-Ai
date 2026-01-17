
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button 
          onClick={(e) => scrollTo(e, '#top')} 
          className="flex items-center group outline-none"
          aria-label="Yafu AI Home"
        >
          <span className="text-2xl font-extrabold tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
            Yafu <span className="text-gradient">AI</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => scrollTo(e, link.href)} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors outline-none"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => scrollTo(e, '#booking')} 
            className="btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold text-white outline-none"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-400 hover:text-white p-2 outline-none">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-950 border-b border-white/5 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => scrollTo(e, link.href)}
              className="text-left text-lg font-medium text-gray-400 hover:text-white py-2 outline-none"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => scrollTo(e, '#booking')} 
            className="btn-gradient px-6 py-3 rounded-xl text-center font-semibold text-white outline-none"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
