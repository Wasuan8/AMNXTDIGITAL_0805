import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Link2, X, Code2, Palette, Briefcase, FolderOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { teamMembers } from '@/data/team';
import { projects } from '@/data/projects';
import { Section, Badge, TagList, Card } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';

import { SlugPageProps } from '@/lib/types';

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return { title: 'Team Member Not Found' };
  return {
    title: `${member.name} — ${member.role} at AMNXT DIGITAL`,
    description: member.bio,
    openGraph: { images: [{ url: member.image }] },
  };
}

const socialIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Link2,
  twitter: X,
  github: Code2,
  dribbble: Palette,
};

const socialColors: Record<string, string> = {
  linkedin: 'hover:text-blue-600 hover:border-blue-200',
  twitter: 'hover:text-sky-500 hover:border-sky-200',
  github: 'hover:text-gray-900 hover:border-gray-300',
  dribbble: 'hover:text-pink-500 hover:border-pink-200',
};

export default async function ProjectDetailPage({ params }: SlugPageProps) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();
  await getTranslations(locale);

  const relatedProjects = projects.slice(0, member.projects > 50 ? 3 : 2);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-brand-400/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <Animate>
            <Link href={`/${locale}/team`} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-600 mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Team
            </Link>
          </Animate>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <Animate direction="left" className="shrink-0">
              <div className="relative">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-4xl overflow-hidden border-4 border-white shadow-brand-lg bg-brand-50">
                  <Image src={member.image} alt={member.name} width={208} height={208} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-purple flex items-center justify-center shadow-brand">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </Animate>

            <Animate direction="right" className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="brand">{member.department}</Badge>
                <Badge variant="muted">{member.experience} exp.</Badge>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-2">{member.name}</h1>
              <p className="text-xl text-brand-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-2xl">{member.longBio}</p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {Object.entries(member.social).map(([platform, url]) => {
                  const Icon = socialIcon[platform];
                  if (!Icon || !url) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium transition-all duration-200 ${socialColors[platform] || 'hover:border-brand-200 hover:text-brand-600'}`}
                    >
                      <Icon className="w-4 h-4" />
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  );
                })}
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-950 py-8">
        <div className="container-custom grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { label: 'Experience', value: member.experience },
            { label: 'Projects Delivered', value: `${member.projects}+` },
            { label: 'Department', value: member.department },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-display font-bold text-gradient">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Projects */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <Animate direction="left">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-accent-purple flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </span>
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-surface-1 border border-brand-100 text-brand-700 text-sm font-medium hover:shadow-card hover:border-brand-300 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bio highlight */}
            <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-purple-50 border border-brand-100 p-6">
              <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm mb-3">
                <Briefcase className="w-4 h-4" />
                Quick Facts
              </div>
              <ul className="space-y-2.5">
                {[
                  `${member.experience} of hands-on experience`,
                  `${member.projects}+ projects successfully delivered`,
                  `Specialist in ${member.skills.slice(0, 2).join(' & ')}`,
                  `Part of the ${member.department} team at AMNXT DIGITAL`,
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </Animate>

          {/* Featured Projects */}
          <Animate direction="right">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
                <FolderOpen className="w-4 h-4 text-white" />
              </span>
              Featured Projects
            </h2>
            <div className="space-y-4">
              {relatedProjects.map((project) => (
                <Link key={project.id} href={`/${locale}/projects/${project.slug}`} className="group block">
                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-brand-200 hover:shadow-card transition-all duration-250">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-surface-1 shrink-0">
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-900 truncate group-hover:text-brand-700 transition-colors">{project.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{project.client}</p>
                      <div className="flex gap-1.5 mt-2 flex-wrap">
                        {project.techStack.slice(0, 3).map((t) => (
                          <span key={t} className="text-xs bg-brand-50 text-brand-600 px-2 py-0.5 rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-sm text-brand-600 font-medium mt-5 hover:gap-3 transition-all"
            >
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </Animate>
        </div>
      </Section>

      {/* Other Team Members */}
      <Section className="bg-surface-1">
        <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">Meet the Rest of the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {teamMembers
            .filter((m) => m.slug !== member.slug)
            .slice(0, 4)
            .map((m, i) => (
              <Animate key={m.id} delay={i * 80}>
                <Link href={`/${locale}/team/${m.slug}`} className="group block">
                  <Card className="p-5 text-center hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-3 bg-brand-50 border border-brand-100">
                      <Image src={m.image} alt={m.name} width={64} height={64} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 group-hover:text-brand-700 transition-colors">{m.name}</h3>
                    <p className="text-xs text-brand-600 mt-0.5">{m.role}</p>
                  </Card>
                </Link>
              </Animate>
            ))}
        </div>
      </Section>

      {/* CTA - Only for Moin, Aadil, and Lisa */}
      {['moin-vhora', 'adil-vhora', 'lisa-vhora'].includes(member.slug) && (
        <Section className="bg-white overflow-hidden py-0">
          <Animate>
            <div 
              className="w-full relative overflow-hidden flex flex-col items-center text-center shadow-2xl p-10 md:p-20"
              style={{
                background: 'white',
                backgroundImage: 'radial-gradient(89.08% 84.62% at 16.54% 78.46%, #ffffff 0%, #f0f9ff 39.58%, #e0f2fe 77.6%, #bae6fd 100%), url("https://assets.codepen.io/16327/noise-e82662fe.png")',
                borderRadius: '3rem',
                boxShadow: '0 40px 100px -20px rgba(125, 211, 252, 0.35), 0 0 1px 1px rgba(125, 211, 252, 0.1) inset'
              }}
            >
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight text-black">
                  Want to Work with {member.name.split(' ')[0]}?
                </h2>
                <p className="text-lg md:text-xl text-black/70 mb-10 leading-relaxed">
                  Step into the future with world-class engineering, stunning design, and scalable infrastructure guided by {member.name.split(' ')[0]}.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
                    style={{ background: '#000000', color: '#bae6fd' }}
                  >
                    Start a Conversation <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href={`/${locale}/projects`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border border-black/20 text-black hover:bg-black/5 transition-all duration-300 active:scale-95"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </Animate>
        </Section>
      )}
    </>
  );
}
