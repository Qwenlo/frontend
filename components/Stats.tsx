import React from 'react';

const stats = [
  { label: 'Uptime', value: '99.9%' },
  { label: 'Lead Gen', value: '5x' },
  { label: 'AI Monitoring', value: '24/7' },
  { label: 'Conversion Rate', value: '85%' },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col items-center md:items-start p-6 border-l-4 border-qwenlo-500 bg-white shadow-sm">
              <span className="font-display text-5xl font-bold text-slate-900 mb-2">{stat.value}</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="stat-desc text-slate-600">
             Our AI systems work 24/7 to identify opportunities, create content, and engage with potential customers across multiple platforms with human-like intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};