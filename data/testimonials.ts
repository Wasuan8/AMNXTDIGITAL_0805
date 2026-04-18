import type { Testimonial, FAQ, Stat } from '@/lib/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Harvey Masjid Lead',
    role: 'Operations Director',
    company: 'Harvey Masjid USA',
    avatar: 'https://placehold.co/80x80/e8eeff/5a67f5?text=HM',
    text: "AMNXT Digital completely revolutionized our community engagement. The iOS and Android platform they built for Harvey Masjid USA handles our donations and kiosk payments flawlessly. It's more than an app; it's a scalable digital infrastructure.",
    rating: 5,
  },
  {
    id: '2',
    name: 'MI 3D Partner',
    role: 'Technical Lead',
    company: 'MI 3D Solutions',
    avatar: 'https://placehold.co/80x80/f8e8ff/9333ea?text=3D',
    text: "For MI 3D Solutions, we needed a presence that reflected industrial precision. AMNXT delivered a modern, precision-focused business website that has successfully converted technical interest into professional service conversations.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Idoc Marketing Head',
    role: 'Marketing Manager',
    company: 'Idoc Cases & Accessories',
    avatar: 'https://placehold.co/80x80/e8fff5/10b981?text=ID',
    text: "The creative content and performance marketing strategy from AMNXT for Idoc Cases has been a game-changer. Our social media growth and brand visibility have reached new heights thanks to their data-driven approach.",
    rating: 5,
  },
  {
    id: '4',
    name: 'Bulk Case Founder',
    role: 'Operations Head',
    company: 'Bulk Case India',
    avatar: 'https://placehold.co/80x80/fff8e8/f59e0b?text=BC',
    text: "Building an e-commerce platform for Bulk Case India required deep operational controls. AMNXT built a rock-solid system with integrated inventory management and automated billing that has scaled our sales effortlessly.",
    rating: 5,
  },
  {
    id: '5',
    name: 'Janae G.',
    role: 'Real Estate Professional',
    company: 'Janae G. Realtor',
    avatar: 'https://placehold.co/80x80/e8f4ff/3b82f6?text=JG',
    text: "The virtual assistance and reel planning from AMNXT have transformed my personal brand. My online presence as a Janae G. Realtor is now polished and intentional, allowing me to focus on my clients while they handle the content.",
    rating: 5,
  },
  {
    id: '6',
    name: 'Finstra Owner',
    role: 'Business Owner',
    company: 'Finstra Cafe & Bistro',
    avatar: 'https://placehold.co/80x80/fff0f8/e84393?text=FC',
    text: "AMNXT transformed the way Finstra Cafe & Bistro looks online. Their food photography and professional videography captured our ambiance perfectly, turning everyday dishes into powerful marketing assets that drive real foot traffic.",
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
