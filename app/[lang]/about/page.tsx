import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { Target, Eye, Award, Users, Code, Globe, ArrowRight } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { Section, SectionLabel, Heading, Card } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import Counter from '@/components/ui/Counter';
import { teamMembers } from '@/data/team';
import Image from 'next/image';
import Link from 'next/link';

import { PageProps } from '@/lib/types';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'About AMNXT DIGITAL — Our Story, Mission & Team',
    description: 'Learn about AMNXT DIGITAL, our mission to transform businesses through innovative technology and digital marketing.',
    alternates: { canonical: `https://AMNXT DIGITAL.com/${lang}/about` },
  };
}

const milestones = [
  { year: '2017', title: 'Founded', desc: 'AMNXT DIGITAL was born with a mission to simplify technology for growing businesses.' },
  { year: '2019', title: '100+ Global Clients', desc: 'Reached our first major milestone, establishing a strong presence across 10 regions.' },
  { year: '2021', title: 'AI & ML Lab', desc: 'Pioneered our AI practice, integrating intelligent automation into core business workflows.' },
  { year: '2023', title: 'Strategic Scale', desc: 'Expanded our specialized teams in Web, Mobile, and Digital Strategy to 30+ experts.' },
  { year: '2024', title: 'Innovation Leader', desc: 'Delivered 150+ high-impact projects with a focus on measurable business growth.' },
];

const values = [
  { icon: Target, title: 'Purpose-Driven', desc: 'Every decision we make is guided by what creates the most value for our clients and society.', gradient: 'from-orange-500 to-red-400' },
  { icon: Code, title: 'Technical Excellence', desc: 'We hold ourselves to the highest engineering standards. Good enough is never enough.', gradient: 'from-brand-500 to-brand-600' },
  { icon: Users, title: 'People First', desc: 'Our greatest asset is our team. We invest in growth, wellbeing, and a culture of belonging.', gradient: 'from-orange-400 to-orange-600' },
  { icon: Globe, title: 'Global Mindset', desc: 'We think globally and act locally, bringing world-class expertise to every market we serve.', gradient: 'from-red-500 to-orange-400' },
];

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getTranslations(locale);
  const about = t.about;

  const founders = teamMembers.filter(m => m.role.toLowerCase().includes('founder'));
  const team = teamMembers.filter(m => !m.role.toLowerCase().includes('founder'));

  return (
    <>
      <PageHero label={about.hero.label} title={about.hero.title} subtitle={about.hero.subtitle} />

      {/* Mission & Vision - Enhanced Motion */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, label: 'Mission', text: about.mission, gradient: 'from-orange-600 to-red-400' },
            { icon: Eye, label: 'Vision', text: about.vision, gradient: 'from-brand-600 to-brand-400' },
          ].map(({ icon: Icon, label, text, gradient }, i) => (
            <Animate
              key={label}
              delay={i * 200}
              className="h-full"
            >
              <div className="group relative h-full rounded-[2.5rem] overflow-hidden border border-brand-100 p-10 bg-gradient-to-br from-surface-1 to-white hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-3xl mb-6 text-gray-900">{label}</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">{text}</p>
                <div className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br ${gradient} opacity-[0.03] group-hover:scale-150 transition-transform duration-700`} />
              </div>
            </Animate>
          ))}
        </div>
      </Section>

      {/* Stats - Consistent with Home */}
      <Section className="bg-surface-1">
        <div className="text-center mb-14">
          <Animate>
            <SectionLabel>{about.achievements.label}</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl">{about.achievements.title}</Heading>
          </Animate>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 150, suffix: '+', label: 'Projects Delivered' },
            { value: 100, suffix: '+', label: 'Happy Clients' },
            { value: 7, suffix: '+', label: 'Years Experience' },
            { value: 10, suffix: '+', label: 'Countries Served' },
          ].map((stat, i) => (
            <Animate key={stat.label} delay={i * 100} className="text-center p-8 rounded-3xl glass-premium shadow-sm">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            </Animate>
          ))}
        </div>
      </Section>

      {/* Leadership - Founders Spotlight */}
      <Section className="bg-white">
        <div className="text-center mb-8">
          <Animate>
            <SectionLabel>Our Founders</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl">Meet the Visionaries</Heading>
          </Animate>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-12">
          {founders.map((founder, i) => (
            <Animate key={founder.id} delay={i * 200}>
              <Link href={`/${locale}/team/${founder.slug}`} className="group block">
                <div className="relative rounded-[3rem] overflow-hidden bg-surface-1 border border-brand-100 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
                  <div className="w-40 h-40 rounded-[2rem] overflow-hidden mb-8 ring-8 ring-brand-50 group-hover:ring-brand-100 transition-all duration-500">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">{founder.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{founder.bio}</p>

                  {/* Floating Decorative Elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award size={20} />
                  </div>
                </div>
              </Link>
            </Animate>
          ))}
        </div>

        {/* Other Team Members */}
        <div className="text-center mb-6">
          <Animate>
            <h4 className="text-xl font-display font-bold text-gray-900 mb-4">Specialized Experts</h4>
          </Animate>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.slice(0, 6).map((member, i) => (
              <Animate key={member.id} delay={i * 50}>
                <Link href={`/${locale}/team/${member.slug}`}>
                  <div className="p-4 text-center group">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-transparent group-hover:ring-brand-200">
                      <Image src={member.image} alt={member.name} width={64} height={64} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-bold text-gray-900 truncate">{member.name.split(' ')[0]}</p>
                    <p className="text-[10px] text-gray-400 font-medium truncate">{member.department}</p>
                  </div>
                </Link>
              </Animate>
            ))}
          </div>
        </div>

        <Animate className="text-center mt-8">
          <Link href={`/${locale}/team`} className="btn-secondary group">
            View Full Organization Structure
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Animate>
      </Section>

      {/* Timeline */}
      <Section className="bg-surface-1">
        <div className="text-center mb-14">
          <Animate>
            <SectionLabel>Our Evolution</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl">The Milestones of AMNXT</Heading>
          </Animate>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-400 via-brand-200 to-transparent" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Animate key={m.year} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex gap-8 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-500 flex items-center justify-center text-brand-600 font-bold text-sm shadow-xl shrink-0 z-10">
                        {m.year}
                      </div>
                    </div>
                    <Card className="flex-1 p-8 rounded-3xl hover:border-brand-300 transition-colors">
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{m.title}</h3>
                      <p className="text-gray-500 leading-relaxed italic">"{m.desc}"</p>
                    </Card>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
