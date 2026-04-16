import type { Metadata } from 'next';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/types';
import PageHero from '@/components/sections/PageHero';
import { Section } from '@/components/ui/index';

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy — AMNXT Digital LLP',
    description: 'Read the Privacy Policy for AMNXT Digital LLP. Learn how we collect, use, and protect your personal information.',
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="Last updated: April 2026"
      />
      <Section className="bg-white">
        <div className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            Welcome to AMNXT Digital LLP (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information
            and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </p>
          <p>
            If you have any questions or concerns about our policy or practices, please contact us at{' '}
            <a href="mailto:legal@amnxt.com">legal@amnxt.com</a>.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <h3>Personal Information You Provide</h3>
          <ul>
            <li>Name, email address, phone number, and business details submitted via contact forms</li>
            <li>Project details, requirements, and any messages you send us</li>
            <li>Billing and payment information (processed securely via third-party payment processors)</li>
          </ul>
          <h3>Information Collected Automatically</h3>
          <ul>
            <li>IP address, browser type, device information, and operating system</li>
            <li>Pages visited, time spent on pages, and referring URLs</li>
            <li>Cookies and similar tracking technologies (see Cookie Policy)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide the services you request</li>
            <li>Send you project updates, proposals, and relevant communications</li>
            <li>Improve our website, services, and user experience</li>
            <li>Comply with legal obligations and enforce our agreements</li>
            <li>Send marketing communications (only with your consent)</li>
          </ul>

          <h2>4. How We Share Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information
            with trusted service providers who assist us in operating our website and conducting our business, provided
            they agree to keep this information confidential.
          </p>
          <p>We may also disclose information when required by law or to protect the rights, property, or safety of AMNXT Digital LLP, our clients, or others.</p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
            Privacy Policy, unless a longer retention period is required by law.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>Access — request a copy of the personal data we hold about you</li>
            <li>Correction — request correction of inaccurate data</li>
            <li>Deletion — request deletion of your personal data</li>
            <li>Objection — object to certain types of processing</li>
            <li>Data Portability — request transfer of your data in a machine-readable format</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:legal@amnxt.com">legal@amnxt.com</a>.</p>

          <h2>7. Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is
            100% secure.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices
            of those sites and encourage you to review their privacy policies.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal information
            from children under 13.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant changes by posting
            the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:legal@amnxt.com">legal@amnxt.com</a></li>
            <li>Phone: +1 708 566 0084</li>
            <li>Address: Anand, Gujarat, India</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
