
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Footer from './components/Footer';
import ContactButtons from './components/ContactButtons';
import { initGA, trackPageView } from './lib/analytics';

const App: React.FC = () => {
  useEffect(() => {
    initGA();
    trackPageView();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#0033FF] selection:text-white">
      {/* Wrapper to ensure global z-index management */}
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <Industries />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      
      <Footer />
      
      {/* Floating Elements */}
      <ContactButtons />
    </div>
  );
};

export default App;
