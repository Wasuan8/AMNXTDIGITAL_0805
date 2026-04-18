'use client';

import { motion } from 'framer-motion';
import { Rocket, Zap, Shield, Trophy, Activity, CheckCircle2, Star, Target } from 'lucide-react';
import { Section, SectionLabel, Heading } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import { cn } from '@/lib/utils';

interface WhyUsProps {
  t: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
}

const icons = [Rocket, Zap, Shield, Trophy];
const accents = [
  'brand',
  'orange',
  'red',
  'cyan'
];

const stats = [
  '99.9% Uptime',
  '2x Performance',
  'ISO Certified',
  '150+ Clients'
];

export default function WhyUs({ t }: WhyUsProps) {
  return (
    <Section className="bg-white relative overflow-hidden py-24 md:py-32">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Animate direction="up">
            <SectionLabel className="mx-auto mb-6">Why Choose AMNXT</SectionLabel>
            <Heading as="h2" className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Engineering <span className="text-gradient"> Excellence</span> <br /> 
              at Every Scale
            </Heading>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
              We combine deep technical expertise with a relentless focus on business outcomes to deliver digital solutions that actually move the needle.
            </p>
          </Animate>
        </div>

        {/* Floating Glass Grid */}
        <div className="grid md:grid-cols-2 lg:gap-8 gap-6 max-w-6xl mx-auto">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            const accent = accents[i];
            const stat = stats[i];

            return (
              <Animate key={item.title} delay={i * 100} direction="up" className="h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative h-full glass-premium p-10 rounded-[3rem] border border-white/80 shadow-2xl overflow-hidden transition-all duration-500"
                >
                  {/* Internal Glow Effect */}
                  <div className={cn(
                    "absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                    accent === 'brand' && "bg-brand-500",
                    accent === 'orange' && "bg-orange-500",
                    accent === 'red' && "bg-red-500",
                    accent === 'cyan' && "bg-cyan-500"
                  )} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      {/* Icon Ring */}
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                        accent === 'brand' && "bg-brand-50 text-brand-600 shadow-[0_0_20px_rgba(168,85,247,0.2)]",
                        accent === 'orange' && "bg-orange-50 text-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.2)]",
                        accent === 'red' && "bg-red-50 text-red-600 shadow-[0_0_20px_rgba(239,68,68,0.2)]",
                        accent === 'cyan' && "bg-cyan-50 text-cyan-600 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                      )}>
                        <Icon size={32} />
                      </div>

                      {/* Micro-Stat Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-sm">
                        <Activity size={10} className="text-gray-400" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed font-medium mb-8">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                      <span>Learn our methodology</span>
                      <Target size={14} className={cn(
                        accent === 'brand' && "text-brand-500",
                        accent === 'orange' && "text-orange-500",
                        accent === 'red' && "text-red-500",
                        accent === 'cyan' && "text-cyan-500"
                      )} />
                    </div>
                  </div>

                  {/* Decorative Subtle Grid overlay inside card */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                    style={{ backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)` , backgroundSize: '24px 24px' }} 
                  />
                </motion.div>
              </Animate>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
