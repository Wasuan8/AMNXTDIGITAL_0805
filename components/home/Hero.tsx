'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles,
  Zap,
  Activity,
  Cpu,
  Globe,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Users,
  BarChart3,
  Award,
  MousePointer2,
  Code2,
  Rocket
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/types';

interface HeroProps {
  lang: Locale;
  t: Record<string, any>;
}

const WordReveal = ({ text }: { text: string }) => {
  const words = text.split(' ');
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.2,
            delay: 0.2 + i * 0.08,
            ease: [0.21, 0.45, 0.32, 0.9]
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero({ lang, t }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tilt animation logic for the whole stage
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-[#fcfcfd] overflow-hidden flex flex-col justify-center items-center perspective-2000 pt-20"
    >
      {/* Background Layer - Centered Organic Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-white/40 z-10" />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
            y: [-30, 30, -30]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-sky-100/30 rounded-[100%] blur-[160px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [50, -50, 50],
            y: [30, -30, 30]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-100/20 rounded-[100%] blur-[140px]" 
        />
      </div>

      <div className="container-custom relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Top Feature Chip */}
        <motion.div
           initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
           animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex items-center gap-2 px-4 py-2 rounded-full glass-premium border border-white/80 mb-10 shadow-sm"
        >
           <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Next Era Digital Solutions</span>
           <div className="px-2 py-0.5 rounded-md bg-orange-500 text-[8px] font-black text-white ml-2">NEW</div>
        </motion.div>

        {/* Landeros-Style Heading */}
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold text-gray-900 leading-[0.85] tracking-tighter">
            <WordReveal text="Scaling Your" /> <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-orange-500 to-red-500">
                Digital Universe
              </span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 1.5, ease: "circOut" }}
                className="absolute -bottom-4 left-0 h-3 bg-gradient-to-r from-brand-500/20 via-orange-500/20 to-transparent rounded-full"
              />
            </span>
          </h1>
        </div>

        {/* Supporting Text */}
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="text-gray-500 text-lg md:text-xl max-w-[640px] text-center leading-relaxed font-medium mb-12"
        >
          We engineer high-performance systems and AI-driven growth strategies that transcend traditional boundaries. Precision-crafted for the next generation.
        </motion.p>

        {/* Primary CTA Group */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center gap-6 mb-24"
        >
          <Link
            href={`/${lang}/contact`}
            className="group relative px-12 py-6 rounded-[2.5rem] overflow-hidden font-bold text-white transition-all duration-500 shadow-[0_25px_60px_-15px_rgba(249,115,22,0.4)] hover:shadow-[0_30px_80px_-20px_rgba(249,115,22,0.6)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-orange-600 to-red-600 group-hover:from-brand-500 group-hover:to-orange-500 group-hover:to-red-500 transition-all duration-500 animate-gradient-xy" />
            <div className="relative flex items-center gap-4 text-xl">
              <span>Book A Free Consult</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
             <MousePointer2 size={12} className="text-orange-500" />
             <span>Join 300+ Industry Leaders</span>
          </div>
        </motion.div>

        {/* Diamond Interactive Icon Grid (Bottom) */}
        {/* <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center translate-y-20">
           <motion.div
             style={{ 
               rotateX, 
               rotateY,
               transformStyle: "preserve-3d"
             }}
             className="relative grid grid-cols-2 gap-8 md:gap-16 rotate-[15deg] md:rotate-0"
           >
              {[
                { icon: Cpu, color: 'brand', label: 'AI CORE' },
                { icon: Code2, color: 'orange', label: 'DEV ENGINE' },
                { icon: Rocket, color: 'red', label: 'SCALE UP' },
                { icon: BarChart3, color: 'cyan', label: 'GROWTH' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1.2 + (i * 0.1), 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15 
                  }}
                  whileHover={{ y: -20, scale: 1.1, rotateX: 10, rotateY: 10 }}
                  className="group w-32 h-32 md:w-44 md:h-44 rounded-[2rem] md:rounded-[3rem] glass-premium border border-white/80 shadow-2xl flex flex-col items-center justify-center gap-4 cursor-pointer relative overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className={cn(
                     "p-4 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-500 group-hover:scale-110",
                     item.color === 'brand' && "bg-brand-50 text-brand-500",
                     item.color === 'orange' && "bg-orange-50 text-orange-500",
                     item.color === 'red' && "bg-red-50 text-red-500",
                     item.color === 'cyan' && "bg-cyan-50 text-cyan-500",
                   )}>
                      <item.icon size={32} />
                   </div>
                   <span className="text-[9px] md:text-[11px] font-black text-gray-400 tracking-widest uppercase group-hover:text-gray-900 transition-colors">
                      {item.label}
                   </span>
                </motion.div>
              ))}
           </motion.div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
