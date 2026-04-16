import type { Testimonial, FAQ, Stat } from '@/lib/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Al-Rashid',
    role: 'Community Director',
    company: 'Harvey Masjid, USA',
    avatar: 'https://placehold.co/80x80/e8eeff/5a67f5?text=AR',
    text: 'AMNXT DIGITAL built us a beautiful mosque app that has truly connected our community. The donation feature, prayer times, and Quran reader have all been received incredibly well by our congregation.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Ibrahim',
    role: 'Owner',
    company: 'MI 3D Solutions',
    avatar: 'https://placehold.co/80x80/fff8e8/f59e0b?text=MI',
    text: 'The website AMNXT built for us is stunning and fast. We started receiving qualified B2B leads within weeks of launch. The team was professional, responsive, and delivered exactly what they promised.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Idoc Team',
    role: 'Marketing Director',
    company: 'Idoc Cases & Accessories',
    avatar: 'https://placehold.co/80x80/fff0f8/e84393?text=ID',
    text: 'Our Meta ad campaigns managed by AMNXT achieved over 4x ROAS in the first two months. Our social media following grew by 300%+ and the content quality has been exceptional.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Rajesh Patel',
    role: 'Founder',
    company: 'Bulk Case India',
    avatar: 'https://placehold.co/80x80/e8fff5/10b981?text=RP',
    text: 'Moving from WhatsApp-based ordering to a proper B2B platform was a game changer. AMNXT built us a robust e-commerce system with a great admin panel. Our order processing is now fully automated.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Janae G.',
    role: 'Independent Realtor',
    company: 'Janae G Realty',
    avatar: 'https://placehold.co/80x80/fdf2f8/db2777?text=JG',
    text: 'AMNXT helped me build my personal brand as a realtor from scratch. My inbound leads more than doubled and my social media reach exploded. I feel like a legitimate digital business now.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Finstra Team',
    role: 'General Manager',
    company: 'Finstra Cafe & Bistro',
    avatar: 'https://placehold.co/80x80/fff8e8/f59e0b?text=FC',
    text: 'The food photography and videos AMNXT produced for us are absolutely cinematic. Our reels hit 200K+ views and foot traffic has gone up noticeably. Best investment we made for the cafe.',
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
    answer: 'Simply book a free consultation through our website or reach out via our chat widget. We\'ll schedule a discovery call to understand your goals, share relevant case studies, and provide a detailed proposal within 48 hours.',
  },
];

export const stats: Stat[] = [
  { value: 50, label: 'Projects Delivered', suffix: '+' },
  { value: 30, label: 'Happy Clients', suffix: '+' },
  { value: 3, label: 'Years of Excellence', suffix: '+' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%' },
];

export const clientLogos = [
  { name: 'Harvey Masjid', logo: 'https://placehold.co/120x40/e8eeff/5a67f5?text=Harvey+Masjid' },
  { name: 'MI 3D Solutions', logo: 'https://placehold.co/120x40/fff8e8/f59e0b?text=MI+3D' },
  { name: 'Idoc Cases', logo: 'https://placehold.co/120x40/fff0f8/e84393?text=Idoc' },
  { name: 'Bulk Case India', logo: 'https://placehold.co/120x40/e8fff5/10b981?text=BulkCase' },
  { name: 'Alcazar', logo: 'https://placehold.co/120x40/e8f4ff/3b82f6?text=Alcazar' },
  { name: 'Janae G Realtor', logo: 'https://placehold.co/120x40/fdf2f8/db2777?text=Janae+G' },
  { name: 'Finstra Cafe', logo: 'https://placehold.co/120x40/fffbeb/d97706?text=Finstra' },
  { name: 'Wash King LLC', logo: 'https://placehold.co/120x40/f0f4ff/5a67f5?text=WashKing' },
];
