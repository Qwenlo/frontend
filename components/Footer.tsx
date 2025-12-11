import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">Q</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">Qwenlo</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Transforming businesses through AI-powered innovation. We provide the infrastructure for the next generation of digital growth.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all">
                 <Twitter size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all">
                 <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all">
                 <Github size={18} />
               </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">AI Lead Generation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">Digital Presence</a></li>
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">Content Creation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">Business Solutions</a></li>
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">Social Bots</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-slate-500 hover:text-qwenlo-600 transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

           {/* Newsletter Column */}
           <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4">Subscribe to our newsletter for the latest AI insights.</p>
            <div className="flex flex-col gap-3">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-qwenlo-500 focus:ring-1 focus:ring-qwenlo-500 transition-all text-sm"
               />
               <button className="w-full px-4 py-3 bg-slate-900 text-white font-semibold rounded-sm hover:bg-qwenlo-600 transition-colors text-sm">
                 Subscribe
               </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © 2025 Qwenlo. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};