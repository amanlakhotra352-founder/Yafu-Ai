
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
    description: 'Never miss a lead with intelligent voice agents that answer calls, qualify prospects, and book appointments 24/7.',
    benefits: ['Increase response rates', 'Reduce missed opportunities', 'Scale customer service'],
    icon: 'PhoneCall'
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    description: 'Engage website visitors instantly with smart chatbots that answer questions, capture leads, and guide customers.',
    benefits: ['Instant customer support', 'Higher engagement', 'Automated lead qualification'],
    icon: 'MessageSquare'
  },
  {
    id: 'websites',
    title: 'Custom Websites',
    description: 'High-converting, professionally designed websites built to showcase your brand and turn visitors into customers.',
    benefits: ['Mobile-responsive', 'SEO-optimized', 'Conversion-focused design'],
    icon: 'Layout'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Laser-focused landing pages designed to maximize conversions for your campaigns, products, or services.',
    benefits: ['Higher ROI on ads', 'Clear messaging', 'Optimized for conversions'],
    icon: 'Zap'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: '247',
    title: '24/7 Availability',
    description: 'Your AI agents never sleep, ensuring no lead is left waiting regardless of the time.',
    icon: 'Clock'
  },
  {
    id: 'qualified',
    title: 'More Qualified Leads',
    description: 'Automated capture and qualification filters out noise and delivers high-intent prospects.',
    icon: 'Users'
  },
  {
    id: 'reduced-costs',
    title: 'Reduced Costs',
    description: 'Slash your customer service and staffing overhead while maintaining elite responsiveness.',
    icon: 'BarChart3'
  },
  {
    id: 'fast-response',
    title: 'Faster Response Times',
    description: 'Instant engagement with every prospect leads to higher trust and conversion rates.',
    icon: 'Zap'
  },
  {
    id: 'scalable',
    title: 'Scalable Growth',
    description: 'Handle 10x the volume without increasing your headcount. AI scales with your ambition.',
    icon: 'Rocket'
  },
  {
    id: 'data-driven',
    title: 'Data-Driven Insights',
    description: 'Deep analytics on customer interactions help you refine your offer and strategy.',
    icon: 'TrendingUp'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Automate showing requests, lead qualification, and property inquiries around the clock.',
    icon: 'Building2'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Seamless appointment scheduling, patient FAQs, and 24/7 front-desk support.',
    icon: 'Stethoscope'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Product recommendations, order tracking, and instant support for high-volume stores.',
    icon: 'ShoppingBag'
  },
  {
    id: 'services',
    title: 'Professional Services',
    description: 'Lead capture, consultation booking, and personalized client communication workflows.',
    icon: 'Briefcase'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Martinez',
    role: 'CEO',
    company: 'Martinez Real Estate',
    content: "Since implementing Yafu AI's voice agent, we've increased our lead response rate by 85% and never miss a potential client call, even at 3 AM.",
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    role: 'Clinic Director',
    company: 'Wellness Heights',
    content: "Our scheduling overhead dropped by 60% after setting up the AI assistant. Patients love the instant answers and easy booking experience.",
    avatar: 'https://picsum.photos/seed/james/100/100'
  },
  {
    id: '3',
    name: 'Elena Rossi',
    role: 'Founder',
    company: 'Luxe Wear',
    content: "The custom landing pages and chatbot have doubled our conversion rate on Facebook ads. Yafu AI truly understands high-performance marketing.",
    avatar: 'https://picsum.photos/seed/elena/100/100'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'How quickly can we get started?',
    answer: 'Most solutions can be fully implemented and integrated within 7 to 14 days after our initial strategy call.'
  },
  {
    id: 'q2',
    question: 'Do I need technical knowledge to use your AI solutions?',
    answer: 'Not at all. We handle all the heavy lifting, from development to integration. We provide a simple dashboard for you to see results.'
  },
  {
    id: 'q3',
    question: 'Can the AI integrate with my existing systems?',
    answer: 'Yes, we specialize in connecting AI agents with popular CRMs, calendars, and communication tools like HubSpot, Zapier, and Google Workspace.'
  },
  {
    id: 'q4',
    question: 'What kind of results can I expect?',
    answer: 'Our clients typically see a 50% reduction in missed leads and a 30-40% increase in lead conversion rates within the first 60 days.'
  },
  {
    id: 'q5',
    question: 'How is this different from hiring more staff?',
    answer: 'AI works 24/7 without fatigue, holiday pay, or training periods. It costs a fraction of a full-time employee while being infinitely more scalable.'
  },
  {
    id: 'q6',
    question: 'What happens during the discovery call?',
    answer: 'We analyze your current lead flow, identify bottlenecks, and map out a custom AI strategy that will deliver the highest ROI for your business.'
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
