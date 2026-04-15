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

interface PageProps { params: Promise<{ lang: string; slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: { images: [{ url: project.image }] },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
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
        <div className="grid md:grid-cols-3 gap-5">
          {project.gallery.map((img, i) => (
            <Animate key={i} delay={i * 80} direction="up">
              <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden group cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </Section>

      {/* CTA + Other Projects */}
      <Section className="bg-surface-1">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Animate direction="left">
            <Card className="p-10 bg-gradient-to-br from-brand-600 to-accent-purple border-0 text-white">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Let's discuss how we can create similar results for your business. Book a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/${locale}/projects`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                >
                  More Projects
                </Link>
              </div>
            </Card>
          </Animate>

          <div>
            <Animate direction="right">
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-6">More Case Studies</h3>
            </Animate>
            <div className="space-y-4">
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 3)
                .map((p, i) => (
                  <Animate key={p.id} delay={i * 80} direction="right">
                    <Link href={`/${locale}/projects/${p.slug}`} className="group block">
                      <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-brand-200 hover:shadow-card transition-all duration-250">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-1">
                          <Image src={p.image} alt={p.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-gray-900 truncate group-hover:text-brand-700 transition-colors">{p.title}</p>
                          <p className="text-xs text-gray-400 truncate mt-0.5">{p.client}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    </Link>
                  </Animate>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
