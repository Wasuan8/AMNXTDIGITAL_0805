'use client';
import Image from 'next/image';
import { clientLogos } from '@/data/testimonials';

export default function ClientLogos() {
  const doubled = [...clientLogos, ...clientLogos, ...clientLogos];
  
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
              Our Network
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center tracking-tight">
            Trusted by Global <span className="text-blue-600">Innovators</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4 opacity-20"></div>
        </div>
      </div>

      <div className="relative group">
        {/* Premium Gradient Masks for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        <div className="flex overflow-hidden">
          <div
            className="flex gap-12 md:gap-20 items-center py-8 marquee-content"
            style={{
              animation: 'marquee 50s linear infinite',
              width: 'max-content',
            }}
          >
            {doubled.map((logo, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center shrink-0 transition-all duration-700 ease-in-out cursor-pointer hover:scale-110"
                style={{ 
                  filter: 'grayscale(100%) opacity(0.35)', 
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'grayscale(100%) opacity(0.35)';
                }}
              >
                <div className="relative h-10 md:h-12 w-32 md:w-44 px-4">
                  <Image 
                    src={logo.logo} 
                    alt={logo.name} 
                    fill
                    className="object-contain" 
                    sizes="(max-width: 768px) 120px, 180px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .group:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
