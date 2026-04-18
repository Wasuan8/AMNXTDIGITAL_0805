import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { Globe, Smartphone, TrendingUp, Palette, Brain, Cloud, ShoppingBag, Search, Check, ArrowRight } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { Section, SectionLabel, Heading, Badge } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import { services } from '@/data/services';
import Link from 'next/link';

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Services — Web Dev, Mobile Apps, AI & Digital Marketing',
    description: 'Explore AMNXT DIGITAL\'s full range of IT and digital marketing services tailored to accelerate your growth.',
    alternates: { canonical: `https://AMNXT DIGITAL.com/${lang}/services` },
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Smartphone, TrendingUp, Palette, Brain, Cloud, ShoppingBag, Search,
};

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive into your goals, challenges, and vision to define the perfect strategy.' },
  { step: '02', title: 'Strategy', desc: 'Build a comprehensive roadmap with clear milestones, tech stack, and timelines.' },
  { step: '03', title: 'Design', desc: 'Create stunning, user-centered designs validated with real users before development.' },
  { step: '04', title: 'Development', desc: 'Build with precision using agile sprints, daily demos, and continuous testing.' },
  { step: '05', title: 'Launch', desc: 'Deploy with confidence using our rigorous QA, staging, and monitoring processes.' },
  { step: '06', title: 'Growth', desc: 'Continuously optimize and evolve your product based on data and user feedback.' },
];

import CTABanner from '@/components/home/CTABanner';

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getTranslations(locale);
  const servicesT = t.services;

  return (
    <>
      <PageHero label={servicesT.hero.label} title={servicesT.hero.title} subtitle={servicesT.hero.subtitle} />

      {/* Services Grid */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <Animate key={service.id} delay={i * 80} direction="up">
                <div id={service.id} className="group card-base p-8 h-full flex flex-col hover:-translate-y-1">
                  <div className="flex items-start gap-5 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-xl text-gray-900 mb-1">{service.title}</h2>
                      <Badge variant="muted">{service.features.length} Features</Badge>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed mb-6 flex-1">{service.description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className={`w-4 h-4 ${service.color} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${locale}/contact?service=${service.id}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${service.color} group-hover:gap-3 transition-all duration-200 mt-auto`}
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Animate>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-surface-1">
        <div className="text-center mb-14">
          <Animate>
            <SectionLabel>Our Process</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl">How We Deliver Excellence</Heading>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
              A proven, battle-tested process refined over 500+ projects to ensure consistent, exceptional outcomes.
            </p>
          </Animate>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <Animate key={step.step} delay={i * 80}>
              <div className="relative card-base p-6 hover:-translate-y-1 h-full overflow-hidden group">
                <span className="absolute -top-4 -right-2 text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500/10 to-red-500/10 select-none group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-colors duration-300">
                  {step.step}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </Section>

      <CTABanner lang={locale} t={servicesT.cta as any} />
    </>
  );
}
