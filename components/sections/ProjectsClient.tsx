'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Section, SectionLabel, Heading, Badge, TagList } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/types';

interface ProjectsClientProps {
  lang: Locale;
  t: {
    label: string;
    title: string;
    subtitle: string;
    filters: Record<string, string>;
    cta: any;
  };
}

import CTABanner from '@/components/home/CTABanner';

export default function ProjectsClient({ lang, t }: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-red-400/10 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Animate>
            <SectionLabel>{t.label}</SectionLabel>
            <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl mb-5 text-gray-900">{t.title}</Heading>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">{t.subtitle}</p>
          </Animate>
        </div>
      </section>

      {/* Filter Tabs */}
      <Section className="bg-white pt-0">
        <Animate className="flex flex-wrap gap-2 justify-center mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                'px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-250',
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-brand-600 via-orange-500 to-red-500 text-white shadow-brand scale-105'
                  : 'bg-white text-gray-600 border border-gray-100 hover:border-orange-200 hover:text-orange-600 hover:shadow-sm'
              )}
            >
              {t.filters[cat.id] || cat.label}
            </button>
          ))}
        </Animate>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <Animate key={project.id} delay={i * 60} direction="up">
              <Link href={`/${lang}/projects/${project.slug}`} className="group block h-full">
                <div className="card-base overflow-hidden h-full flex flex-col hover:-translate-y-2 hover:shadow-card-hover cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-surface-1">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ExternalLink className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="brand" className="text-xs">{project.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-display font-semibold text-gray-900 text-lg group-hover:text-brand-700 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400 shrink-0">{project.year}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{project.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-gray-50">
                      {project.results.slice(0, 2).map((r) => (
                        <div key={r.label}>
                          <p className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500">{r.value}</p>
                          <p className="text-xs text-gray-400">{r.label}</p>
                        </div>
                      ))}
                    </div>

                    <TagList tags={project.techStack} max={3} />

                    <div className={`flex items-center gap-1.5 text-sm font-bold text-orange-600 mt-4 group-hover:gap-2.5 transition-all duration-200`}>
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </Animate>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </Section>

      <CTABanner lang={lang} t={t.cta as any} />
    </>
  );
}
