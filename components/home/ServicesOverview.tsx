import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, TrendingUp, Palette, Brain, Cloud, ShoppingBag, Search } from 'lucide-react';
import { Section, SectionLabel, Heading } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import { services } from '@/data/services';
import type { Locale } from '@/lib/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Smartphone, TrendingUp, Palette, Brain, Cloud, ShoppingBag, Search,
};

interface ServicesProps {
  lang: Locale;
  t: Record<string, string>;
}

export default function ServicesOverview({ lang, t }: ServicesProps) {
  const featured = services.slice(0, 6);

  return (
    <Section className="bg-surface-1">
      <div className="text-center mb-14">
        <Animate>
          <SectionLabel>{t.label || 'What We Do'}</SectionLabel>
          <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-4">
            {t.title || 'End-to-End Digital Solutions'}
          </Heading>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
        </Animate>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((service, i) => {
          const Icon = iconMap[service.icon] || Globe;
          return (
            <Animate key={service.id} delay={i * 80} direction="up">
              <div className="group card-base p-7 h-full flex flex-col hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${lang}/services#${service.id}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${service.color} group-hover:gap-2.5 transition-all duration-200`}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Animate>
          );
        })}
      </div>

      <Animate delay={200} className="text-center mt-12">
        <Link href={`/${lang}/services`} className="btn-secondary">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </Animate>
    </Section>
  );
}
