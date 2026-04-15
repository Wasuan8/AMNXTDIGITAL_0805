'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Star, Globe, TrendingUp, CheckCircle, Smartphone, Monitor, Sparkles } from 'lucide-react';
import type { Locale } from '@/lib/types';

interface HeroProps {
  lang: Locale;
  t: Record<string, any>;
}

export default function Hero({ lang, t }: HeroProps) {
  const typeRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Blink cursor using GSAP
    let tl = gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Use a simple React-based typer effect instead for reliability if GSAP TextPlugin is missing
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const words = ["Transform", "Architect", "Empower"];
    const typeSpeed = isDeleting ? 75 : 150;

    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex % words.length];

      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-[100vh] w-full bg-[#fcfcfd] overflow-hidden pt-28 pb-10 flex flex-col justify-between">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Background radial gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-20 w-[600px] h-[600px] bg-sky-50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-40 right-[20%] w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container-custom relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-1">

        {/* Left Side: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start lg:pl-10"
        >
          <div className="font-display font-bold leading-[1.05] tracking-tight mb-8">
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[7rem] text-gray-400">
              We
            </h1>
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[7rem] text-brand-600 flex">
              <span className="min-w-[10px]">{typedText}</span>
              <span ref={cursorRef} className="text-brand-500 opacity-80" style={{ transform: 'translateY(-5px)' }}>|</span>
            </h1>
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[7rem] text-gray-800">
              Software
            </h1>
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[7rem] text-outline hover:-translate-y-2 cursor-default transition-transform break-all sm:break-normal">
              Worldwide.
            </h1>
          </div>

          <p className="text-gray-600 text-lg md:text-xl max-w-[480px] leading-relaxed mb-10">
            A fully distributed engineering team delivering web apps, AI systems, and cloud infrastructure to clients on every continent.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mb-12 w-full sm:w-auto">
            <Link
              href={`/${lang}/contact`}
              className="bg-gray-900 text-white font-medium hover:bg-black transition-colors rounded-3xl px-8 py-4 flex items-center justify-center gap-3 w-full sm:w-auto group shadow-lg shadow-gray-200"
            >
              <Smartphone className="w-5 h-5 text-gray-300" />
              <span>Start a Project</span>
            </Link>
            <Link
              href={`/${lang}/projects`}
              className="bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50 transition-colors rounded-3xl px-8 py-4 flex items-center justify-center gap-3 w-full sm:w-auto group shadow-sm"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100 z-[${10 - i}]`}>
                  <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" width={40} height={40} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-gray-800">
              300+ clients worldwide
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i === 5 ? 'fill-amber-400/50 text-amber-400/50' : 'fill-amber-400 text-amber-400'}`} />
                ))}
              </div>
              <span className="font-bold text-gray-900 text-sm">4.9</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:h-[700px] w-full flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[650px] min-h-[400px] md:min-h-[500px] lg:h-[550px] mt-10 lg:mt-0">

            {/* Main Window */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute right-0 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[85%] h-[90%] sm:h-full max-h-[480px] bg-white rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden flex flex-col"
            >
              {/* Fake Chrome bar */}
              <div className="h-12 border-b border-gray-100 flex items-center px-4 bg-gray-50/50 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="mx-auto bg-white border border-gray-200 px-4 py-1.5 rounded-lg text-xs font-medium text-gray-500 shadow-sm flex items-center gap-1.5">
                  <Monitor className="w-3 h-3" />
                  <span>app.AMNXT DIGITAL.com/dashboard</span>
                </div>
              </div>

              <div className="flex-1 flex">
                {/* Sidebar */}
                <div className="w-16 border-r border-gray-100 flex flex-col items-center py-4 gap-4 bg-gray-50/20">
                  <div className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center text-white font-bold text-xs shadow-md">W</div>
                  <div className="w-8 h-8 rounded flex items-center justify-center text-brand-600 bg-brand-50 mt-2"><TrendingUp className="w-4 h-4" /></div>
                  <div className="w-8 h-8 rounded flex items-center justify-center text-gray-400"><Globe className="w-4 h-4" /></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 relative flex flex-col gap-5">
                  <h3 className="font-bold text-gray-900">Project Overview</h3>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="text-xl font-bold text-gray-800">$2.4M</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Revenue</div>
                      <div className="text-[10px] text-emerald-500 flex items-center gap-0.5 mt-1">↑ 12%</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="text-xl font-bold text-gray-800">50K</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Users</div>
                      <div className="text-[10px] text-emerald-500 flex items-center gap-0.5 mt-1">↑ 8%</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-end">
                      <div className="text-lg font-bold text-gray-800">99.9%</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Uptime</div>
                      <div className="text-[10px] text-gray-500 flex items-center gap-0.5 mt-1">SLA met</div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="text-[10px] font-medium text-gray-400 mb-2">Weekly Revenue</div>
                    {/* Fake Chart area */}
                    <div className="relative h-20 w-full flex items-end justify-between px-2">
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartG" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,40 Q20,30 40,50 T80,30 T120,40 T160,20 T200,30 T240,10 L240,80 L0,80 Z"
                          fill="url(#chartG)" stroke="#0ea5e9" strokeWidth="2"
                          transform="scale(2, 1) translate(0, 0)" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-300 mt-2 px-2 uppercase">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    {[
                      { l: 'API Integration', s: '100%' },
                      { l: 'Auth & Security', s: 'Wait' },
                      { l: 'Dashboard UI', s: 'Active', dot: 'bg-brand-500' }
                    ].map((i, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 font-medium text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full ${i.dot || 'bg-gray-200'}`} />
                          {i.l}
                        </div>
                        <div className={i.s === '100%' ? 'text-emerald-500' : 'text-gray-400'}>{i.s}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Floating Banner 1 (Top Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-4 sm:top-10 -left-2 sm:left-0 scale-90 sm:scale-100 origin-left bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-3 px-4 flex items-center gap-3 border border-gray-100 z-10"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Deploy Successful</p>
                <p className="text-[10px] text-gray-400">Production • 2 min ago</p>
              </div>
            </motion.div>

            {/* Floating Banner 2 (Top Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              className="absolute top-20 sm:top-24 right-0 sm:-right-10 scale-90 sm:scale-100 origin-right hidden sm:flex bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-3 px-4 items-center gap-3 border border-gray-100 z-10"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-brand-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">AI Review Done</p>
                <p className="text-[10px] text-gray-400">0 issues found</p>
              </div>
            </motion.div>

            {/* Floating Banner 3 (Mid Left) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-1/4 sm:bottom-1/3 -left-2 sm:-left-10 scale-90 sm:scale-100 origin-left bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-3 px-4 flex items-center gap-3 border border-gray-100 z-10"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-sky-100 border border-white flex items-center justify-center">
                  <Image src="https://i.pravatar.cc/100?img=1" alt="Eng" width={32} height={32} className="rounded-full" />
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-100 border border-white flex items-center justify-center">
                  <Image src="https://i.pravatar.cc/100?img=2" alt="Eng" width={32} height={32} className="rounded-full" />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">6 Engineers Online</p>
                <p className="text-[10px] text-gray-400">3 timezones active</p>
              </div>
            </motion.div>

            {/* Dark Code Box (Bottom Right) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-16 sm:bottom-20 -right-2 sm:right-4 w-52 sm:w-64 scale-75 sm:scale-100 origin-bottom-right hidden md:block bg-[#1e1e24] shadow-2xl shadow-brand-500/20 rounded-2xl p-4 border border-gray-800 overflow-hidden z-20"
            >
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="font-mono text-xs leading-loose text-white/90">
                <span className="text-pink-400">const</span> team <span className="text-cyan-400">=</span> <span className="text-green-300">'AMNXT DIGITAL'</span><br />
                <span className="text-blue-400">await</span> <span className="text-yellow-200">deploy</span>({`{`} <span className="text-gray-400">env:</span> <span className="text-green-300">'production'</span> {`}`})<br />
                <span className="text-gray-500">// ✓ Live in 47 countries</span>
              </div>
            </motion.div>

            {/* Bottom Floating Stats Bar */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-12 sm:-bottom-8 left-2 right-2 sm:left-10 sm:right-10 bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/40 rounded-3xl p-3 sm:p-4 px-2 sm:px-6 grid grid-cols-3 sm:flex justify-between items-center border border-white z-30"
            >
              <div className="text-center px-1 sm:px-4 border-r border-gray-100 flex-1">
                <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-brand-600 to-sky-600 bg-clip-text text-transparent">320+</div>
                <div className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="text-center px-1 sm:px-4 border-r border-gray-100 flex-1">
                <div className="text-lg sm:text-2xl font-bold text-brand-500">10+</div>
                <div className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1">Countries</div>
              </div>
              <div className="text-center px-1 sm:px-4 flex-1">
                <div className="text-lg sm:text-2xl font-bold text-sky-500">98%</div>
                <div className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1">Satisfaction</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Marquees Area */}
      <div className="w-full mt-10 md:mt-16 flex flex-col items-center">

        {/* Timezone Pill */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-full px-6 py-2.5 mb-6 flex items-center gap-4 max-w-[95vw] overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 whitespace-nowrap text-xs font-bold text-gray-800">
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>NY <span className="text-blue-600 font-medium">04:57 AM</span></div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>LDN <span className="text-blue-600 font-medium">09:57 AM</span></div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>DXB <span className="text-blue-600 font-medium">12:57 PM</span></div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>SGP <span className="text-blue-600 font-medium">04:57 PM</span></div>
          </div>
        </div>

        {/* Global Moving Text Bar */}
        <div className="w-full border-t border-b border-gray-100 bg-white/50 backdrop-blur-sm overflow-hidden py-3">
          <div className="flex whitespace-nowrap w-[200%] animate-marquee">
            {[1, 2].map(row => (
              <div key={row} className="flex items-center w-full justify-around shrink-0 text-gray-400 text-sm font-bold uppercase tracking-wider">
                {[
                  "Remote-First", "Every Country", "Web Development", "Mobile Apps",
                  "AI / ML", "Cloud Architecture", "UI/UX Design", "Salesforce Development"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-8 md:gap-12 mx-4">
                    <span>{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-300"></span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
