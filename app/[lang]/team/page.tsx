import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { Section, SectionLabel, Heading } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import { teamMembers } from '@/data/team';
import TeamSocialButton from '@/components/sections/TeamSocialButton';

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Our Team — The Minds Behind AMNXT DIGITAL',
    description: 'Meet the talented team of developers, designers, and marketers driving AMNXT DIGITAL\'s success.',
    alternates: { canonical: `https://AMNXT DIGITAL.com/${lang}/team` },
  };
}

export default async function TeamPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getTranslations(locale);
  const team = t.team;

  return (
    <>
      <PageHero label={team.hero.label} title={team.hero.title} subtitle={team.hero.subtitle} />

      {/* Culture Bar */}
      <section className="bg-gray-950 py-10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-8 justify-around items-center">
            {[
              { value: '80+', label: 'Team Members' },
              { value: '18+', label: 'Nationalities' },
              { value: '100%', label: 'Remote Friendly' },
              { value: '4.9★', label: 'Glassdoor Rating' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <Animate>
            <SectionLabel>Core Team</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl">Exceptional People</Heading>
          </Animate>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <Animate key={member.id} delay={i * 60} direction="up">
              <Link href={`/${locale}/team/${member.slug}`} className="group block h-full">
                <div className="card-base overflow-hidden h-full flex flex-col hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-56 overflow-hidden bg-gray-50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end p-4">
                      <div className="flex gap-2">
                        {(Object.entries(member.social) as [string, string][]).map(([platform, url]) =>
                          url ? (
                            <TeamSocialButton
                              key={platform}
                              platform={platform as 'linkedin' | 'twitter' | 'github' | 'dribbble'}
                              url={url}
                            />
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="font-display font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">{member.name}</h3>
                      <p className="text-sm text-brand-600 font-medium">{member.role}</p>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{member.bio}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Briefcase className="w-3.5 h-3.5" />
                        {member.experience}
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </Animate>
          ))}
        </div>
      </Section>

      {/* Join CTA */}
      <Section className="bg-white">
        <Animate>
          <div className="max-w-3xl mx-auto text-center rounded-[2rem] p-12 text-white bg-gradient-brand">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Want to Join AMNXT DIGITAL?</h2>
            <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
              We're always looking for exceptional talent. Work on exciting projects with a team that cares.
            </p>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors">
              View Open Positions <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Animate>
      </Section>
    </>
  );
}
