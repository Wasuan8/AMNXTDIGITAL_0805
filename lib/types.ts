export type Locale = 'en' | 'hi' | 'ar';

export interface PageProps {
  params: { lang: Locale };
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  client: string;
  duration: string;
  year: number;
  techStack: string[];
  results: { label: string; value: string }[];
  problem: string;
  solution: string;
  outcome: string;
  gallery: string[];
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  longBio: string;
  image: string;
  skills: string[];
  experience: string;
  projects: number;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
