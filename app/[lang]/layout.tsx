import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { isValidLocale, getTranslations, isRTL } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === 'ar';
  return {
    title: { default: 'AMNXT DIGITAL NextGen IT Solutions', template: '%s | AMNXT DIGITAL' },
    description: 'Cutting-edge IT solutions and digital marketing that transform businesses.',
    openGraph: {
      type: 'website',
      locale: isAr ? 'ar_SA' : lang === 'hi' ? 'hi_IN' : 'en_US',
      siteName: 'AMNXT DIGITAL',
    },
    twitter: { card: 'summary_large_image', site: '@AMNXT DIGITAL' },
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'hi' }, { lang: 'ar' }];
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getTranslations(locale);
  const dir = isRTL(locale) ? 'rtl' : 'ltr';

  return (
    <div dir={dir} className="min-h-screen flex flex-col">
      <Navbar lang={locale} t={t.nav} />
      <main className="flex-1">{children}</main>
      <Footer lang={locale} t={t} />
    </div>
  );
}
