
import React from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Layout, 
  Zap, 
  Users, 
  Clock, 
  BarChart3, 
  ArrowUpRight, 
  Rocket, 
  Building2, 
  Stethoscope, 
  ShoppingBag, 
  Briefcase,
  CheckCircle2,
  CalendarDays,
  Settings2,
  TrendingUp
} from 'lucide-react';
import { Service, Testimonial, FAQItem, Industry, Benefit } from './types';

export const SERVICES: Service[] = [
  {
    id: 'voice-agents',
    title: 'AI Voice Agents',
    description: 'A "digital employee" that handles inbound calls, qualifies prospects, and books meetings directly into your calendar 24/7.',
    benefits: ['100% Lead Capture', 'Instant Qualification', 'Zero Training Required'],
    icon: 'PhoneCall'
  },
  {
    id: 'chatbots',
    title: 'AI Sales Chatbots',
    description: 'Advanced conversational AI that lives on your site to answer complex FAQs and convert browsing traffic into scheduled appointments.',
    benefits: ['90% FAQ Automation', 'Lead Magnet Integration', 'CRM Syncing'],
    icon: 'MessageSquare'
  },
  {
    id: 'websites',
    title: 'AI-Optimized Websites',
    description: 'Not just a pretty site—a high-performance sales engine built with SEO and lead-generation architecture at its core.',
    benefits: ['Conversion-First UX', 'Lightning Fast Loads', 'Dynamic AI Content'],
    icon: 'Layout'
  },
  {
    id: 'landing-pages',
    title: 'Growth Funnels',
    description: 'Laser-focused landing pages designed for high-ticket service providers looking to maximize ROI on ad spend.',
    benefits: ['A/B Tested Layouts', 'Clear Value Prop', 'Mobile-First Design'],
    icon: 'Zap'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: '247',
    title: '24/7 Lead Capture',
    description: 'While you sleep, your AI agents are qualifying leads and booking your morning appointments.',
    icon: 'Clock'
  },
  {
    id: 'qualified',
    title: 'High-Intent Prospects',
    description: 'Stop wasting time on "tyre kickers". Our AI filters for intent so you only talk to ready-to-buy clients.',
    icon: 'Users'
  },
  {
    id: 'reduced-costs',
    title: '80% Less Overhead',
    description: 'Replace expensive receptionist services and entry-level sales roles with reliable, scalable AI.',
    icon: 'BarChart3'
  },
  {
    id: 'fast-response',
    title: 'Instant Speed-to-Lead',
    description: 'Engage leads in under 30 seconds. Statistics show this increases conversion rates by over 300%.',
    icon: 'Zap'
  },
  {
    id: 'scalable',
    title: 'Unlimited Scalability',
    description: 'Handle 1 or 1,000 calls simultaneously without ever needing to hire another person.',
    icon: 'Rocket'
  },
  {
    id: 'data-driven',
    title: 'Sales Intelligence',
    description: 'Get full transcripts and sentiment analysis on every interaction to know exactly what your customers want.',
    icon: 'TrendingUp'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'real-estate',
    title: 'Real Estate & Renting',
    description: 'AI handles showing requests and qualifies buyer/seller leads instantly, even on weekends.',
    icon: 'Building2'
  },
  {
    id: 'healthcare',
    title: 'Medical & Dental',
    description: 'Automate appointment scheduling and patient inquiries to free up your front-desk staff.',
    icon: 'Stethoscope'
  },
  {
    id: 'ecommerce',
    title: 'High-Ticket E-com',
    description: 'Expert AI support that guides customers through complex purchasing decisions 24/7.',
    icon: 'ShoppingBag'
  },
  {
    id: 'services',
    title: 'Home & Pro Services',
    description: 'For contractors, lawyers, and consultants who need to book consultations without picking up the phone.',
    icon: 'Briefcase'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Martinez',
    role: 'Managing Director',
    company: 'Martinez Estates',
    content: "We used to miss 40% of our weekend calls. With Yafu AI's Voice Agent, every single inquiry is now qualified and booked into our calendar automatically.",
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    role: 'Founder',
    company: 'Smile Design Clinic',
    content: "The AI chatbot handles 90% of our patient FAQs. My staff is happier, and our monthly bookings have increased by 22% since launch.",
    avatar: 'https://picsum.photos/seed/james/100/100'
  },
  {
    id: '3',
    name: 'Elena Rossi',
    role: 'Growth Lead',
    company: 'Luxe Home Services',
    content: "The custom landing pages Yafu built doubled our lead flow from Google Ads. They truly understand the science of high-conversion design.",
    avatar: 'https://picsum.photos/seed/elena/100/100'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'Will the AI sound natural to my customers?',
    answer: 'Yes. We use state-of-the-art human-grade voice models with natural inflection, pauses, and sentiment detection to ensure a professional experience.'
  },
  {
    id: 'q2',
    question: 'How much does it cost compared to a human employee?',
    answer: 'A single AI agent typically costs about 1/10th of a full-time receptionist salary while working 3x as many hours with zero downtime.'
  },
  {
    id: 'q3',
    question: 'Can it really book appointments in my calendar?',
    answer: 'Absolutely. We integrate directly with Google Calendar, Calendly, and most CRM-based scheduling tools like HubSpot or GoHighLevel.'
  },
  {
    id: 'q4',
    question: 'Is it hard to set up?',
    answer: 'We handle everything. From technical architecture to script writing and integration, your system is delivered "turn-key" in under 14 days.'
  },
  {
    id: 'q5',
    question: 'Is my data and my customers data secure?',
    answer: 'Security is our priority. We use enterprise-grade encryption and comply with all major data protection standards to keep your business safe.'
  }
];

export const iconMap: Record<string, React.ReactNode> = {
  PhoneCall: <PhoneCall className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  ArrowUpRight: <ArrowUpRight className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  CalendarDays: <CalendarDays className="w-6 h-6" />,
  Settings2: <Settings2 className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />
};
