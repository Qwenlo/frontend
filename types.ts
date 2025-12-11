import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface TechStackItem {
  name: string;
  sub: string;
  type: 'core' | 'process' | 'output';
}

export interface StatItem {
  value: string;
  label: string;
}