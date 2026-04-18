'use client';
import Image from 'next/image';
import { clientLogos } from '@/data/testimonials';

export default function ClientLogos() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <p className="text-center text-xs text-gray-400 font-medium uppercase tracking-widest mb-8">
        Trusted by Industry Leaders
      </p>
      <div className="relative">
        <div
          className="flex gap-12 items-center"
          style={{
            animation: 'marquee 30s linear infinite',
            width: 'max-content',
          }}
        >
          {doubled.map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-10 shrink-0" style={{ opacity: 0.5, transition: 'opacity 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
            >
              <Image src={logo.logo} alt={logo.name} width={120} height={40} className="h-8 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
