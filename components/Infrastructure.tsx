import React from 'react';
import { Cpu, Share2, Layers, Zap } from 'lucide-react';
import { GridBackground } from './ui/GridBackground';

export const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="py-24 bg-white relative overflow-hidden">
      <GridBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="infra-header text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
             <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Under The Hood</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">AI Infrastructure</h2>
          <p className="text-xl text-slate-600">
            Our cutting-edge AI technology stack powers everything we do, from content generation to lead analysis.
          </p>
        </div>

        {/* Tech Stack Visualization */}
        <div className="infra-grid grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          
          {/* Column 1: Core Engine */}
          <div className="infra-col-1 md:col-span-1 flex flex-col gap-6">
            <div className="p-6 border border-slate-200 bg-white shadow-sm rounded-sm h-full flex flex-col justify-between group hover:border-indigo-500 transition-all">
              <div>
                <div className="w-10 h-10 bg-indigo-50 rounded-sm flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Core AI Engine</h3>
                <p className="text-sm text-slate-500">Central processing unit for all automated decisions.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded">ver 4.2.0</span>
              </div>
            </div>
          </div>

          {/* Column 2: Processing Pipeline */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="infra-item-mid p-5 border border-slate-200 bg-slate-50/50 rounded-sm hover:bg-white hover:shadow-sm transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-900">Video Pipeline</span>
                <Layers className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-sm font-mono text-slate-500">FFmpeg + AI</div>
            </div>
            <div className="infra-item-mid p-5 border border-slate-200 bg-slate-50/50 rounded-sm hover:bg-white hover:shadow-sm transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-900">Voice Synthesis</span>
                <Zap className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-sm font-mono text-slate-500">ElevenLabs</div>
            </div>
            <div className="infra-item-mid p-5 border border-slate-200 bg-slate-50/50 rounded-sm hover:bg-white hover:shadow-sm transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-900">Lead Scoring</span>
                <BarChart className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-sm font-mono text-slate-500">Custom ML Models</div>
            </div>
            <div className="infra-item-mid p-5 border border-slate-200 bg-slate-50/50 rounded-sm hover:bg-white hover:shadow-sm transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-900">Automation</span>
                <Share2 className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-sm font-mono text-slate-500">Multi-Platform API</div>
            </div>
          </div>

          {/* Column 3: Output */}
          <div className="infra-col-3 md:col-span-1">
             <div className="p-6 border border-slate-900 bg-slate-900 text-white shadow-lg rounded-sm h-full flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Results</h3>
                <p className="text-slate-300 text-sm">High-conversion leads delivered directly to your CRM.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for icon
const BarChart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
);
const Target = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);