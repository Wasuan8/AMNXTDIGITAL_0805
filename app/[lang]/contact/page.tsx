import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import ContactClient from '@/components/sections/ContactClient';

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Contact AMNXT DIGITAL — Book a Free Consultation',
    description: 'Get in touch with AMNXT DIGITAL for a free consultation. We\'ll respond within 24 hours.',
    alternates: { canonical: `https://AMNXT DIGITAL.com/${lang}/contact` },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getTranslations(locale);

  return (
    <ContactClient
      lang={locale}
      t={{
        hero: t.contact.hero,
        form: t.contact.form,
        info: t.contact.info,
      }}
    />
  );
}
