import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { Section, SectionLabel, Heading, Badge, TagList, Card } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import Counter from '@/components/ui/Counter';
import ProjectGallery from '@/components/sections/ProjectGallery';

import { SlugPageProps } from '@/lib/types';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: { images: [{ url: project.image }] },
  };
}

export default async function ProjectDetailPage({ params }: SlugPageProps) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const t = await getTranslations(locale);

  const parseValue = (v: string): number => parseInt(v.replace(/[^0-9]/g, '')) || 0;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-0 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/3 w-72 h-72 bg-brand-400/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <Animate>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-600 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>

            <div className="flex flex-wrap gap-3 mb-6 items-center">
              <Badge variant="brand">{project.category}</Badge>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Calendar className="w-4 h-4" /> {project.year}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Clock className="w-4 h-4" /> {project.duration}
              </span>
            </div>

            <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-5 max-w-4xl">
              {project.title}
            </Heading>
            <p className="text-gray-500 text-xl max-w-2xl mb-8">{project.longDescription}</p>
            <p className="text-sm text-gray-400">Client: <span className="text-gray-700 font-medium">{project.client}</span></p>
          </Animate>
        </div>

        {/* Hero Image */}
        <div className="container-custom mt-12">
          <Animate direction="scale">
            <div className="relative h-72 md:h-96 lg:h-[500px] rounded-t-4xl overflow-hidden shadow-2xl">
              <Image src={project.image} alt={project.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </Animate>
        </div>
      </section>

      {/* Results Stats */}
      <section className="bg-gray-950 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, i) => (
              <Animate key={result.label} delay={i * 100} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                  {/^\d/.test(result.value)
                    ? <><Counter value={parseValue(result.value)} />{result.value.replace(/[0-9]/g, '').trim()}</>
                    : result.value
                  }
                </div>
                <p className="text-sm text-gray-400">{result.label}</p>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Overview: Problem / Solution / Outcome */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { label: 'The Challenge', text: project.problem, color: 'from-red-500 to-orange-400', bg: 'bg-red-50', border: 'border-red-100' },
            { label: 'Our Solution', text: project.solution, color: 'from-brand-500 to-brand-600', bg: 'bg-brand-50', border: 'border-brand-100' },
            { label: 'The Outcome', text: project.outcome, color: 'from-emerald-500 to-teal-400', bg: 'bg-emerald-50', border: 'border-emerald-100' },
          ].map(({ label, text, color, bg, border }, i) => (
            <Animate key={label} delay={i * 100}>
              <div className={`rounded-3xl p-7 h-full border ${bg} ${border}`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${color} text-white text-xs font-semibold mb-5`}>
                  {label}
                </div>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            </Animate>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-surface-1">
        <div className="max-w-3xl mx-auto text-center">
          <Animate>
            <SectionLabel>Tech Stack</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl mb-6">Technologies Used</Heading>
          </Animate>
          <Animate delay={100} className="flex flex-wrap gap-3 justify-center">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-2xl bg-white border border-brand-100 text-brand-700 font-medium text-sm shadow-sm hover:shadow-card hover:border-brand-300 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </Animate>
        </div>
      </Section>

      {/* Gallery */}
      <Section className="bg-white">
        <div className="text-center mb-10">
          <Animate>
            <SectionLabel>Gallery</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl">Project Showcase</Heading>
          </Animate>
        </div>
        <ProjectGallery 
          gallery={project.gallery} 
          title={project.title} 
          category={project.category} 
        />
      </Section>

      {/* Other Projects */}
      <Section className="bg-surface-1 py-20">
        <div className="container-custom">
          <Animate direction="up" className="mb-10 text-center">
            <SectionLabel>Continue Exploring</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl">More Case Studies</Heading>
          </Animate>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p, i) => (
                <Animate key={p.id} delay={i * 100} direction="up">
                  <Link href={`/${locale}/projects/${p.slug}`} className="group block h-full">
                    <Card className="p-0 overflow-hidden h-full border-gray-100 hover:border-brand-200 transition-all duration-300">
                      <div className="relative h-48 w-full">
                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                        <Badge variant="muted" className="mb-3">{p.category}</Badge>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{p.title}</h3>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{p.description}</p>
                        <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                          View Project <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Animate>
              ))}
          </div>
        </div>
      </Section>

      {/* Premium CTA Section */}
      <Section className="bg-white py-0 overflow-hidden">
        <Animate>
          <div 
            className="w-full relative overflow-hidden flex flex-col items-center text-center shadow-2xl p-12 md:p-24"
            style={{
              background: 'white',
              backgroundImage: 'radial-gradient(89.08% 84.62% at 16.54% 78.46%, #ffffff 0%, #f0f9ff 39.58%, #e0f2fe 77.6%, #bae6fd 100%), url("https://assets.codepen.io/16327/noise-e82662fe.png")',
              borderRadius: '3rem',
              boxShadow: '0 40px 100px -20px rgba(125, 211, 252, 0.35), 0 0 1px 1px rgba(125, 211, 252, 0.1) inset'
            }}
          >
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                  Project Collaboration
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight mb-8 leading-tight text-black">
                Ready to Start Your <span className="text-blue-600">Own Journey?</span>
              </h2>
              <p className="text-lg md:text-xl text-black/70 mb-12 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how we can create similar high-impact results for your business. Book a free consultation and get paired with our senior team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-bold shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
                  style={{ background: '#000000', color: '#bae6fd' }}
                >
                  Book Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href={`/${locale}/projects`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-bold border border-black/10 text-black hover:bg-black/5 transition-all duration-300 active:scale-95"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </Animate>
      </Section>
    </>
  );
}
