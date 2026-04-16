import type { Metadata } from 'next';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/types';
import PageHero from '@/components/sections/PageHero';
import { Section } from '@/components/ui/index';

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms of Service — AMNXT Digital LLP',
    description: 'Read the Terms of Service for AMNXT Digital LLP. Understand the terms governing your use of our services.',
  };
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        subtitle="Last updated: April 2026"
      />
      <Section className="bg-white">
        <div className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by AMNXT Digital LLP (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be
            bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services.
          </p>

          <h2>2. Services</h2>
          <p>AMNXT Digital LLP provides digital services including but not limited to:</p>
          <ul>
            <li>Web and mobile application development</li>
            <li>AI and machine learning solutions</li>
            <li>Digital marketing and advertising</li>
            <li>UI/UX design and branding</li>
            <li>Cloud infrastructure and DevOps</li>
            <li>E-commerce development</li>
            <li>SEO optimization</li>
          </ul>
          <p>The specific scope of services for each engagement is defined in a separate Statement of Work (SOW) or project agreement.</p>

          <h2>3. Client Responsibilities</h2>
          <p>As a client, you agree to:</p>
          <ul>
            <li>Provide accurate, complete, and timely information required for project execution</li>
            <li>Grant necessary access to systems, platforms, and resources as needed</li>
            <li>Review and provide feedback on deliverables within agreed timelines</li>
            <li>Ensure timely payment of invoices per agreed terms</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Payment schedules, amounts, and methods are defined in individual project agreements. Unless otherwise agreed:
          </p>
          <ul>
            <li>A deposit (typically 30-50%) is required before project commencement</li>
            <li>Invoices are due within 7-14 days of issuance</li>
            <li>Late payments may incur interest at 1.5% per month</li>
            <li>We reserve the right to pause work on accounts with outstanding balances</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            Upon full payment, the client receives full ownership of the deliverables specified in the project agreement.
            AMNXT Digital LLP retains ownership of any pre-existing tools, frameworks, libraries, or proprietary methodologies
            used in delivery.
          </p>
          <p>
            We reserve the right to display project work in our portfolio and marketing materials unless a written
            non-disclosure restriction is agreed upon.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of proprietary information shared during the engagement.
            This obligation survives the termination of any project or agreement.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            AMNXT Digital LLP shall not be liable for any indirect, incidental, special, or consequential damages
            arising from the use of our services. Our total liability shall not exceed the total amount paid by the
            client for the specific project that gave rise to the claim.
          </p>

          <h2>8. Termination</h2>
          <p>
            Either party may terminate a project engagement with 14 days written notice. Upon termination, the client
            shall pay for all work completed up to the termination date. Deposits are non-refundable unless otherwise
            stipulated in the project agreement.
          </p>

          <h2>9. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or our services shall first be attempted to be resolved through
            good-faith negotiation. If unresolved, disputes shall be subject to binding arbitration in Gujarat, India,
            unless otherwise agreed in writing.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. For clients in the USA, additional applicable federal
            and state laws may apply.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Continued use of our services after changes
            constitutes acceptance of the new Terms.
          </p>

          <h2>12. Contact</h2>
          <p>For questions about these Terms, contact us at:</p>
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
