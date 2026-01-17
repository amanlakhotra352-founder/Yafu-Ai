
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
    <footer className="bg-gray-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1 text-left">
            <button 
              onClick={(e) => scrollTo(e, '#top')} 
              className="mb-6 block outline-none group"
              aria-label="Back to top"
            >
              <span className="text-2xl font-extrabold tracking-tighter text-white transition-transform duration-300 group-hover:scale-105 block">
                Yafu <span className="text-gradient">AI</span>
              </span>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering small and medium businesses with cutting-edge AI automation that drives real growth and delivers world-class customer experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-left">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500 text-left">
              <li><button onClick={(e) => scrollTo(e, '#services')} className="hover:text-purple-500 transition-colors outline-none">Our Services</button></li>
              <li><button onClick={(e) => scrollTo(e, '#process')} className="hover:text-purple-500 transition-colors outline-none">The Process</button></li>
              <li><button onClick={(e) => scrollTo(e, '#benefits')} className="hover:text-purple-500 transition-colors outline-none">Key Benefits</button></li>
              <li><button onClick={(e) => scrollTo(e, '#industries')} className="hover:text-purple-500 transition-colors outline-none">Industries Served</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-white text-left">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500 text-left">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-500" />
                <a href="mailto:hello@yafuai.online" className="hover:text-white transition-colors">hello@yafuai.online</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <a href="https://wa.me/918082127115" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 8082127115</a>
              </li>
              <li>Mumbai, India</li>
            </ul>
          </div>

          {/* Newsletter/Trust */}
          <div className="text-left">
            <h4 className="font-bold mb-6 text-white">Stay Innovative</h4>
            <p className="text-gray-500 text-sm mb-4">
              Join our newsletter for exclusive AI insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-purple-500" 
              />
              <button type="submit" className="bg-white/10 p-2 rounded-lg hover:bg-purple-500 transition-colors text-white">
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Yafu AI. Built for the future.
          </p>
          <div className="flex gap-8 text-xs text-gray-600">
            <button onClick={(e) => scrollTo(e, '#booking')} className="hover:text-white transition-colors outline-none">Privacy Policy</button>
            <button onClick={(e) => scrollTo(e, '#booking')} className="hover:text-white transition-colors outline-none">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
