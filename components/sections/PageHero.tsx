import { SectionLabel, Heading } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function PageHero({ label, title, subtitle, centered = true }: PageHeroProps) {
  return (
    <section className="pt-32 pb-20 bg-mesh relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-red-400/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <div className={centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
          <Animate>
            <SectionLabel>{label}</SectionLabel>
            <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl mb-5 text-gray-900">
              {title}
            </Heading>
            {subtitle && (
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed">{subtitle}</p>
            )}
          </Animate>
        </div>
      </div>
    </section>
  );
}
