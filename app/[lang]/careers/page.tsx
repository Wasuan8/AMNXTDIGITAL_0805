import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import CareersClient from '@/components/sections/CareersClient';

import { PageProps } from '@/lib/types';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Careers at AMNXT DIGITAL — Join Our Team',
    description: 'Explore exciting career opportunities at AMNXT DIGITAL. Join a world-class team building the future of technology and digital innovation.',
    alternates: { canonical: `https://AMNXT DIGITAL.com/${lang}/careers` },
  };
}

export default async function CareersPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return <CareersClient lang={lang as Locale} />;
}
