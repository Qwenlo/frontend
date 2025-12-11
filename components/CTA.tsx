import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GridBackground } from './ui/GridBackground';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Custom Dark Grid for this section only */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="cta-title font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="cta-text text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join hundreds of businesses already leveraging our AI-powered solutions to maximize their growth potential.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="cta-btn px-8 py-4 bg-white text-slate-900 font-bold rounded-sm hover:bg-qwenlo-50 transition-colors duration-300 flex items-center gap-2">
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="cta-btn px-8 py-4 border border-slate-700 text-white font-semibold rounded-sm hover:border-white transition-colors duration-300">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};