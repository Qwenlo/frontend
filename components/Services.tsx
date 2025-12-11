import React from 'react';
import { Target, Monitor, Video, Briefcase, Bot, BarChart3 } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'AI Lead Generation',
    description: 'Automated systems that identify, score, and prioritize potential customers.',
    features: ['Real-time lead scoring', 'Dynamic database', 'Conversion analysis'],
    icon: Target
  },
  {
    title: 'Digital Presence',
    description: 'Stunning websites and mobile apps with conversion-optimized design.',
    features: ['Modern web & mobile', 'SEO optimization', 'Analytics integration'],
    icon: Monitor
  },
  {
    title: 'AI Content Creation',
    description: 'Industry-specific marketing videos and content generated with AI.',
    features: ['AI marketing videos', 'Social media mgmt', 'Performance analytics'],
    icon: Video
  },
  {
    title: 'Business Solutions',
    description: 'Custom CRM & ERP systems tailored to your business needs.',
    features: ['Custom CRM & ERP', 'Web & mobile apps', 'Automated workflows'],
    icon: Briefcase
  },
  {
    title: 'Social Media Bots',
    description: 'Fine-tuned AI bots for multi-platform engagement and analysis.',
    features: ['Multi-platform networks', 'Behavioral analysis', 'Anti-detection'],
    icon: Bot
  },
  {
    title: 'Analytics & Insights',
    description: 'Comprehensive performance tracking with real-time data processing.',
    features: ['Real-time dashboard', 'Conversion tracking', 'Performance optimization'],
    icon: BarChart3
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative border-t border-slate-200 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-header mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl">
            Comprehensive solutions powered by artificial intelligence to accelerate your business growth.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group bg-white p-8 border border-slate-200 hover:border-qwenlo-500 transition-all duration-300 hover:shadow-lg rounded-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-qwenlo-50 group-hover:border-qwenlo-100 transition-colors">
                <service.icon className="w-6 h-6 text-slate-900 group-hover:text-qwenlo-600 transition-colors" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 pt-6 border-t border-slate-100">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <span className="w-1.5 h-1.5 bg-qwenlo-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};