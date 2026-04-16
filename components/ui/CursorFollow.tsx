'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onLinkEnter = () => {
      ringRef.current?.classList.add('cursor-ring-hover');
      dotRef.current?.classList.add('cursor-dot-hover');
    };
    const onLinkLeave = () => {
      ringRef.current?.classList.remove('cursor-ring-hover');
      dotRef.current?.classList.remove('cursor-dot-hover');
    };

    document.addEventListener('mousemove', onMove, { passive: true });

    // Track hover on interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onLinkEnter);
      el.addEventListener('mouseleave', onLinkLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onLinkEnter);
        el.removeEventListener('mouseleave', onLinkLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-500 z-[99999] pointer-events-none mix-blend-difference transition-transform duration-[50ms]"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-400/60 z-[99998] pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
        .cursor-ring-hover {
          width: 44px !important;
          height: 44px !important;
          margin: -6px;
          border-color: rgba(14,165,233,0.7) !important;
          background: rgba(14,165,233,0.06);
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .cursor-dot-hover {
          opacity: 0;
        }
      `}</style>
    </>
  );
}
