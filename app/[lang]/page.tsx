import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyUs from '@/components/home/WhyUs';
import Testimonials from '@/components/home/Testimonials';
import ClientLogos from '@/components/home/ClientLogos';
import CTABanner from '@/components/home/CTABanner';
import { Section, SectionLabel, Heading } from '@/components/ui/index';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Animate from '@/components/ui/Animate';
import { faqs } from '@/data/testimonials';

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'AMNXT DIGITAL NextGen IT Solutions & Digital Marketing',
    description: 'Transform your business with AMNXT DIGITAL. Cutting-edge web development, mobile apps, AI solutions, and digital marketing.',
    alternates: {
      canonical: `https://amnxtdigital/${lang}`,
      languages: { 'en': '/en', 'hi': '/hi', 'ar': '/ar' },
    },
    icons: { icon: "favicon.ico" },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getTranslations(locale);
  const home = t.home;

  return (
    <>
      <Hero lang={locale} t={home.hero} />
      <Stats t={home.stats} />
      <ClientLogos />
      <ServicesOverview lang={locale} t={home.services} />
      <WhyUs t={home.why} />
      <Testimonials t={home.testimonials} />

      {/* FAQ */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Animate direction="left" className="lg:sticky lg:top-32">
            <SectionLabel>{home.faq.label}</SectionLabel>
            <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-5">{home.faq.title}</Heading>
            <p className="text-gray-500 text-lg leading-relaxed">
              Everything you need to know about working with AMNXT DIGITAL. Can't find what you're looking for?{' '}
              <a href={`/${locale}/contact`} className="text-brand-600 font-medium hover:underline">Reach out to us</a>.
            </p>
          </Animate>
          <Animate direction="right">
            <FAQAccordion items={faqs} />
          </Animate>
        </div>
      </Section>

      <CTABanner lang={locale} t={home.cta} />
    </>
  );
}
