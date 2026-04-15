import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { Target, Eye, Award, Users, Code, Globe } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { Section, SectionLabel, Heading, Card } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import Counter from '@/components/ui/Counter';
import { teamMembers } from '@/data/team';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'About AMNXT DIGITAL — Our Story, Mission & Team',
    description: 'Learn about AMNXT DIGITAL, our mission to transform businesses through innovative technology and digital marketing.',
    alternates: { canonical: `https://AMNXT DIGITAL.com/${lang}/about` },
  };
}

const milestones = [
  { year: '2017', title: 'Founded', desc: 'AMNXT DIGITAL was born with a mission to democratize enterprise-grade technology.' },
  { year: '2019', title: 'First 100 Clients', desc: 'Reached our first major milestone, serving clients across 10 countries.' },
  { year: '2021', title: 'AI Practice Launch', desc: 'Expanded into AI and automation, pioneering ML solutions for business.' },
  { year: '2023', title: 'Global Expansion', desc: 'Opened offices in 5 new markets, growing to 80+ team members.' },
  { year: '2025', title: '500+ Projects', desc: 'Delivered over 500 successful projects with a 98% satisfaction rate.' },
];

const values = [
  { icon: Target, title: 'Purpose-Driven', desc: 'Every decision we make is guided by what creates the most value for our clients and society.', gradient: 'from-blue-500 to-cyan-400' },
  { icon: Code, title: 'Technical Excellence', desc: 'We hold ourselves to the highest engineering standards. Good enough is never enough.', gradient: 'from-violet-500 to-purple-400' },
  { icon: Users, title: 'People First', desc: 'Our greatest asset is our team. We invest in growth, wellbeing, and a culture of belonging.', gradient: 'from-emerald-500 to-teal-400' },
  { icon: Globe, title: 'Global Mindset', desc: 'We think globally and act locally, bringing world-class expertise to every market we serve.', gradient: 'from-amber-500 to-orange-400' },
];

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getTranslations(locale);
  const about = t.about;

  return (
    <>
      <PageHero label={about.hero.label} title={about.hero.title} subtitle={about.hero.subtitle} />

      {/* Mission & Vision */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, label: 'Our Mission', text: about.mission, gradient: 'from-brand-500 to-brand-600' },
            { icon: Eye, label: 'Our Vision', text: about.vision, gradient: 'from-purple-500 to-violet-600' },
          ].map(({ icon: Icon, label, text, gradient }, i) => (
            <Animate key={label} delay={i * 150}>
              <div className="relative rounded-3xl overflow-hidden border border-brand-100 p-8 bg-gradient-to-br from-surface-1 to-white h-full">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4 text-gray-900">{label}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
                <div className={`absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br ${gradient} opacity-5`} />
              </div>
            </Animate>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-surface-1">
        <div className="text-center mb-14">
          <Animate>
            <SectionLabel>Our Values</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl">The Principles We Live By</Heading>
          </Animate>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc, gradient }, i) => (
            <Animate key={title} delay={i * 100}>
              <Card className="p-6 text-center h-full hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </Card>
            </Animate>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <Animate>
            <SectionLabel>{about.achievements.label}</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl">{about.achievements.title}</Heading>
          </Animate>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 500, suffix: '+', label: 'Projects Delivered' },
            { value: 200, suffix: '+', label: 'Happy Clients' },
            { value: 8, suffix: '+', label: 'Years Experience' },
            { value: 30, suffix: '+', label: 'Countries Served' },
          ].map((stat, i) => (
            <Animate key={stat.label} delay={i * 100} className="text-center p-8 rounded-3xl bg-surface-1 border border-brand-50">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </Animate>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-surface-1">
        <div className="text-center mb-14">
          <Animate>
            <SectionLabel>Our Journey</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl">From Startup to Industry Leader</Heading>
          </Animate>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-purple-200 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <Animate key={m.year} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex gap-6 md:gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-purple flex items-center justify-center text-white font-bold text-sm shadow-brand shrink-0">
                        {m.year}
                      </div>
                    </div>
                    <Card className="flex-1 p-5">
                      <h3 className="font-display font-semibold text-gray-900 mb-1">{m.title}</h3>
                      <p className="text-sm text-gray-500">{m.desc}</p>
                    </Card>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team Preview */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <Animate>
            <SectionLabel>Leadership</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl">Meet Our Leaders</Heading>
          </Animate>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {teamMembers.slice(0, 4).map((member, i) => (
            <Animate key={member.id} delay={i * 100}>
              <Link href={`/${locale}/team/${member.slug}`}>
                <Card className="p-5 text-center hover:-translate-y-2 cursor-pointer group">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 bg-brand-50 border border-brand-100">
                    <Image src={member.image} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-sm mb-0.5">{member.name}</h3>
                  <p className="text-xs text-brand-600">{member.role}</p>
                </Card>
              </Link>
            </Animate>
          ))}
        </div>
        <Animate className="text-center">
          <Link href={`/${locale}/team`} className="btn-secondary">
            View Full Team
            <Award className="w-4 h-4" />
          </Link>
        </Animate>
      </Section>
    </>
  );
}
