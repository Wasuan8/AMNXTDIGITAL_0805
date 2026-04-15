'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import gsap from 'gsap';
import type { Locale } from '@/lib/types';

interface CTABannerProps {
  lang: Locale;
  t: { title: string; subtitle: string; button: string; buttonSecondary: string };
}

export default function CTABanner({ lang, t }: CTABannerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = containerRef.current;
    const outer = outerRef.current;

    if (!main || !outer) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = outer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distance from center (normalized from -1 to 1)
      const centerX = x / rect.width * 2 - 1;
      const centerY = y / rect.height * 2 - 1;

      // Adjust these multipliers to increase/decrease the "pop" intensity
      const rotateX = centerY * -12; // Invert so hovering top lifts top forward
      const rotateY = centerX * 12;

      gsap.to(outer, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 1000, // Enforces deep 3D perspective
        transformOrigin: "center center"
      });
    };

    const handlePointerLeave = () => {
      gsap.to(outer, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    };

    // Attach to the card directly for accurate bounding physics
    outer.addEventListener('pointermove', handlePointerMove);
    outer.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      outer.removeEventListener('pointermove', handlePointerMove);
      outer.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden py-16 md:py-24 flex items-center justify-center min-h-[60vh] w-full perspective-container"
      style={{
        background: '#0e100f',
        backgroundBlendMode: 'color-dodge'
      }}
    >
      <div className="container-custom relative z-10 w-full h-full flex items-center justify-center">
        
        {/* The Entire Banner Graphic Card */}
        <div 
          ref={outerRef}
          className="w-full relative overflow-hidden sm:overflow-visible flex flex-col items-start shadow-2xl p-8 sm:p-14 lg:p-20 transform-style-3d"
          style={{
            background: 'radial-gradient(89.08% 84.62% at 16.54% 78.46%, #ffffff 0%, #e0f2fe 39.58%, #bae6fd 77.6%, #7dd3fc 100%), url("https://assets.codepen.io/16327/noise-e82662fe.png")',
            borderRadius: '3rem',
            boxShadow: '0 25px 50px -12px rgba(125, 211, 252, 0.25)'
          }}
        >
          {/* Left CTA Content */}
          <div className="flex flex-col items-start z-20 text-left w-full lg:w-3/4" style={{ transform: 'translateZ(30px)' }}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight" style={{ color: '#000000' }}>
              {t.title || 'Ready to Build Something Extraordinary?'}
            </h2>
            <p className="text-lg md:text-xl max-w-lg mb-10 leading-relaxed md:pr-10" style={{ color: '#000000', opacity: 0.8 }}>
              {t.subtitle || 'Step into the future with world-class engineering, stunning design, and scalable infrastructure.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-30" style={{ transform: 'translateZ(50px)' }}>
              <Link
                href={`/${lang}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer"
                style={{ 
                  background: '#000000', 
                  color: '#bae6fd',
                  position: 'relative',
                  zIndex: 40
                }}
              >
                <Calendar className="w-5 h-5" />
                {t.button || 'Book a Strategy Call'}
              </Link>
              <Link
                href={`/${lang}/projects`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border hover:bg-black/5 transition-all duration-300 active:scale-95 cursor-pointer"
                style={{ 
                  borderColor: 'rgba(0, 0, 0, 0.2)', 
                  color: '#000000',
                  position: 'relative',
                  zIndex: 40
                }}
              >
                {t.buttonSecondary || 'View Case Studies'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
