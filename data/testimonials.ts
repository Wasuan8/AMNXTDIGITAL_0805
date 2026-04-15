import type { Testimonial, FAQ, Stat } from '@/lib/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James Crawford',
    role: 'CTO',
    company: 'NexaBank Financial',
    avatar: 'https://placehold.co/80x80/e8eeff/5a67f5?text=JC',
    text: 'AMNXT DIGITAL transformed our entire digital infrastructure. The new platform handles 10x the traffic with half the operational costs. Their team\'s technical depth and project management are genuinely world-class.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Meera Patel',
    role: 'CEO',
    company: 'ZenVibe Health',
    avatar: 'https://placehold.co/80x80/f8e8ff/9333ea?text=MP',
    text: 'From zero to 500K downloads — AMNXT DIGITAL made it possible. Their AI-powered personalization engine is the core competitive advantage our app has. I wouldn\'t trust another agency with something this critical.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Thomas Blanc',
    role: 'VP Marketing',
    company: 'PulseMedia Global',
    avatar: 'https://placehold.co/80x80/e8fff5/10b981?text=TB',
    text: 'AMNXT DIGITAL delivered a 5x ROAS when our previous agency could barely hit 2x. The data-driven approach, creative quality, and constant optimization made an enormous difference to our bottom line.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sophia Laurent',
    role: 'Founder',
    company: 'LuxeCraft Holdings',
    avatar: 'https://placehold.co/80x80/fff8e8/f59e0b?text=SL',
    text: 'The AR try-on feature AMNXT DIGITAL built has completely changed how our customers shop. Cart abandonment dropped 55% and our customers\' average order value jumped significantly. Truly innovative team.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Kevin Zhang',
    role: 'Head of Product',
    company: 'Orbit Technologies',
    avatar: 'https://placehold.co/80x80/e8f4ff/3b82f6?text=KZ',
    text: 'Building a B2B SaaS platform is incredibly complex. AMNXT DIGITAL not only delivered a rock-solid product but also contributed strategic insights that shaped our roadmap. They feel like an extension of our team.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Amira Hassan',
    role: 'Director of Digital',
    company: 'Skyline Properties',
    avatar: 'https://placehold.co/80x80/fff0f8/e84393?text=AH',
    text: 'The 3D interactive portal AMNXT DIGITAL built has set a new industry standard. Our sales team can\'t imagine going back to static photos. Lead quality has improved dramatically and the sales cycle is faster than ever.',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    question: 'What industries does AMNXT DIGITAL specialize in?',
    answer: 'We work across a wide range of industries including fintech, healthcare, real estate, e-commerce, media, and enterprise SaaS. Our cross-industry experience allows us to apply proven solutions from one vertical to solve challenges in another.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A typical website takes 4-8 weeks, a mobile app takes 3-6 months, and a full enterprise platform takes 6-12 months. We provide detailed timelines during the discovery phase and stick to them.',
  },
  {
    question: 'Do you offer ongoing support after project delivery?',
    answer: 'Absolutely. We offer flexible maintenance and support packages ranging from basic monitoring to fully managed services with dedicated engineers. Most of our clients stay with us long-term for continuous improvement and support.',
  },
  {
    question: 'How does your pricing work?',
    answer: 'We offer project-based fixed pricing, dedicated team models, and retainer arrangements. Pricing depends on scope, timeline, and team composition. We provide transparent, detailed proposals with no hidden costs.',
  },
  {
    question: 'Can AMNXT DIGITAL handle large enterprise projects?',
    answer: 'Yes. We regularly deliver enterprise-scale solutions for companies with millions of users. Our team includes senior architects, engineers, and PMs with deep enterprise experience. We follow SOC 2, GDPR, and HIPAA compliance standards.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile methodology with 2-week sprints, daily standups, and weekly client demos. You\'ll always know where your project stands. We use modern project management tools and provide real-time access to progress dashboards.',
  },
  {
    question: 'Do you offer digital marketing services alongside development?',
    answer: 'Yes, this is one of our key differentiators. We offer fully integrated services — building your product AND marketing it. This means your website is built with marketing optimization built in, and your marketing team understands the product deeply.',
  },
  {
    question: 'How do I get started with AMNXT DIGITAL?',
    answer: 'Simply book a free consultation through our website. We\'ll schedule a discovery call to understand your goals, share relevant case studies, and provide a detailed proposal within 48 hours.',
  },
];

export const stats: Stat[] = [
  { value: 500, label: 'Projects Delivered', suffix: '+' },
  { value: 200, label: 'Happy Clients', suffix: '+' },
  { value: 8, label: 'Years of Excellence', suffix: '+' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%' },
];

export const clientLogos = [
  { name: 'NexaBank', logo: 'https://placehold.co/120x40/f0f4ff/5a67f5?text=NexaBank' },
  { name: 'ZenVibe', logo: 'https://placehold.co/120x40/f8f0ff/9333ea?text=ZenVibe' },
  { name: 'PulseMedia', logo: 'https://placehold.co/120x40/f0fff8/10b981?text=Pulse' },
  { name: 'LuxeCraft', logo: 'https://placehold.co/120x40/fffbeb/f59e0b?text=LuxeCraft' },
  { name: 'OrbitAI', logo: 'https://placehold.co/120x40/f0f9ff/0ea5e9?text=OrbitAI' },
  { name: 'Skyline', logo: 'https://placehold.co/120x40/fdf2f8/db2777?text=Skyline' },
  { name: 'TechCorp', logo: 'https://placehold.co/120x40/f0fdf4/16a34a?text=TechCorp' },
  { name: 'DigitalHub', logo: 'https://placehold.co/120x40/fef2f2/dc2626?text=DigHub' },
];
