import React from 'react';
import { Linkedin, Twitter, Globe, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

export const LeadDashboardPreview: React.FC = () => {
  const leads = [
    { name: 'Sarah Miller', company: 'TechFlow Inc.', source: 'LinkedIn', score: 98, status: 'Ready', icon: Linkedin, color: 'text-blue-600' },
    { name: 'David Chen', company: 'Growth AI', source: 'Website', score: 94, status: 'Contacted', icon: Globe, color: 'text-emerald-500' },
    { name: 'James Wilson', company: 'ScaleUp', source: 'Twitter', score: 89, status: 'Analyzing', icon: Twitter, color: 'text-sky-400' },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000">
      {/* Abstract decorative elements behind */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-qwenlo-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

      {/* Main Card */}
      <div className="relative bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white/50">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="font-semibold text-sm text-slate-800">Live Intelligence</span>
          </div>
          <div className="flex gap-2">
             <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">
                AI ACTIVE
             </span>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-50">
          {leads.map((lead, i) => (
            <div key={i} className="p-4 hover:bg-slate-50/80 transition-colors cursor-default group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 leading-none mb-1">{lead.name}</h4>
                    <span className="text-xs text-slate-500">{lead.company}</span>
                  </div>
                </div>
                <div className={`p-1.5 rounded-full bg-white border border-slate-100 shadow-sm ${lead.color}`}>
                   <lead.icon size={14} />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 w-full mr-4">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider font-semibold">
                      <span className="text-slate-400">Match Potential</span>
                      <span className="text-slate-900">{lead.score}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-qwenlo-500 rounded-full"
                        style={{ width: `${lead.score}%` }}
                    ></div>
                  </div>
                </div>
                
                <button className="text-slate-300 hover:text-qwenlo-600 transition-colors bg-white p-1.5 rounded-md border border-slate-100 shadow-sm hover:border-qwenlo-200">
                    <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer of card */}
        <div className="px-5 py-3 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
             <span className="text-xs text-slate-500">Processing stream...</span>
             <span className="text-xs font-medium text-slate-500 flex items-center justify-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-500" />
                Updated just now
             </span>
        </div>
      </div>
      
      {/* Floating stats card 1 */}
      <div className="absolute top-20 -right-8 md:-right-16 bg-white shadow-xl p-4 rounded-xl border border-slate-100 hidden md:block animate-[bounce_4s_infinite]">
         <div className="flex items-center gap-3">
            <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                <ArrowUpRight size={18} className="text-emerald-600" />
            </div>
            <div>
                <div className="text-xs text-slate-500 font-medium">Conversion Rate</div>
                <div className="text-lg font-bold text-slate-900">+142%</div>
            </div>
         </div>
      </div>

       {/* Floating stats card 2 */}
       <div className="absolute bottom-20 -left-8 md:-left-12 bg-white shadow-xl p-3 rounded-xl border border-slate-100 hidden md:flex items-center gap-3 animate-[pulse_3s_infinite]">
            <div className="bg-amber-50 p-2 rounded-lg border border-amber-100">
                <Zap size={16} className="text-amber-500" />
            </div>
            <div>
                <div className="text-xs text-slate-500 font-medium">Daily Leads</div>
                <div className="text-sm font-bold text-slate-900">845 New</div>
            </div>
      </div>
    </div>
  );
};