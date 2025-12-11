import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { GridBackground } from './ui/GridBackground';
import { LeadDashboardPreview } from './ui/LeadDashboardPreview';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white min-h-[90vh] flex items-center">
      <GridBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-3xl">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-qwenlo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-qwenlo-600"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Next Gen AI Automation</span>
            </div>

            <h1 className="hero-title font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              <span className="block">Transform Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-qwenlo-600 to-slate-900 pb-2">Business with AI</span>
            </h1>

            <p className="hero-desc text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Revolutionize your digital presence with cutting-edge AI automation. We combine intelligent lead generation and advanced marketing strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="hero-btn group relative px-8 py-4 bg-slate-900 text-white font-semibold rounded-sm overflow-hidden flex items-center justify-center gap-2 hover:bg-qwenlo-600 transition-colors duration-300">
                <span>Start Your Transformation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="hero-btn group px-8 py-4 bg-white border border-slate-200 text-slate-900 font-semibold rounded-sm hover:border-slate-900 transition-colors duration-300 flex items-center justify-center gap-2">
                <span>View Case Studies</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Asset */}
          <div className="hero-visual relative lg:block">
             <div className="relative z-10">
                <LeadDashboardPreview />
             </div>
             {/* Gradient glow behind the asset */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-qwenlo-100/40 via-indigo-100/30 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};