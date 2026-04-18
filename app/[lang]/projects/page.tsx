import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import ProjectsClient from '@/components/sections/ProjectsClient';

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Projects — Our Digital Transformation Case Studies',
    description: 'Explore AMNXT DIGITAL\'s portfolio of successful web, mobile, AI, and marketing projects.',
    alternates: { canonical: `https://AMNXT DIGITAL.com/${lang}/projects` },
  };
}

export default async function ProjectsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getTranslations(locale);
  return (
    <ProjectsClient
      lang={locale}
      t={{
        label: t.projects.hero.label,
        title: t.projects.hero.title,
        subtitle: t.projects.hero.subtitle,
        filters: t.projects.filters,
        cta: t.projects.cta,
      }}
    />
  );
}
