import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md border-slate-200 py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group z-50">
            <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center group-hover:bg-qwenlo-600 transition-colors">
              <span className="text-white font-display font-bold text-lg">Q</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">Qwenlo</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Infrastructure', 'Solutions', 'Case Studies'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-slate-600 hover:text-qwenlo-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <a href="#contact" className="group flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 px-5 py-2.5 rounded-sm hover:bg-qwenlo-600 transition-all duration-300">
               Get Started
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>

          <button 
            className="md:hidden p-2 text-slate-900 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Slide-over Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-over Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-40 w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-8 pb-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {['Services', 'Infrastructure', 'Solutions', 'Case Studies'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg font-display font-semibold text-slate-900 border-b border-slate-100 pb-4 hover:text-qwenlo-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 text-center font-semibold text-white bg-slate-900 px-5 py-4 rounded-sm shadow-md hover:bg-qwenlo-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
        
        <div className="mt-auto">
          <p className="text-xs text-slate-400">© 2025 Qwenlo Inc.</p>
        </div>
      </div>
    </>
  );
};