import Image from 'next/image';
import { Star } from 'lucide-react';
import { Section, SectionLabel, Heading } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import { testimonials } from '@/data/testimonials';

interface TestimonialsProps {
  t: { label: string; title: string };
}

export default function Testimonials({ t }: TestimonialsProps) {
  return (
    <Section className="bg-surface-1 overflow-hidden">
      <div className="text-center mb-14">
        <Animate>
          <SectionLabel>{t.label}</SectionLabel>
          <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl">{t.title}</Heading>
        </Animate>
      </div>

      {/* Masonry-style grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((item, i) => (
          <Animate key={item.id} delay={i * 80} direction="up" className="break-inside-avoid">
            <div className="card-base p-6 hover:-translate-y-1">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{item.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-brand-50 border border-brand-100">
                  <Image src={item.avatar} alt={item.name} width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </Section>
  );
}
