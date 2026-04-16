import type { Metadata } from 'next';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/types';
import PageHero from '@/components/sections/PageHero';
import { Section } from '@/components/ui/index';

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cookie Policy — AMNXT Digital LLP',
    description: 'Learn how AMNXT Digital LLP uses cookies and similar tracking technologies on our website.',
  };
}

export default async function CookiePolicyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <>
      <PageHero
        label="Legal"
        title="Cookie Policy"
        subtitle="Last updated: April 2026"
      />
      <Section className="bg-white">
        <div className="legal-content">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They are widely used to
            make websites work more efficiently and to provide information to website owners. AMNXT Digital LLP
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies on our website.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such
            as security, network management, and account authentication. You cannot opt out of these cookies.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. We use tools such as Google Analytics to analyze traffic patterns and improve
            user experience.
          </p>
          <ul>
            <li><strong>Google Analytics</strong> — tracks page views, session duration, and user behavior</li>
            <li><strong>Hotjar</strong> — records user sessions and heatmaps (if enabled)</li>
          </ul>

          <h3>Marketing & Advertising Cookies</h3>
          <p>
            These cookies track your browsing activity and allow us (and our partners) to show you relevant ads
            across the web. They are set by third-party advertising platforms including:
          </p>
          <ul>
            <li><strong>Meta Pixel</strong> — used for Facebook and Instagram retargeting</li>
            <li><strong>Google Ads</strong> — used for search and display retargeting</li>
            <li><strong>LinkedIn Insight Tag</strong> — used for LinkedIn campaign tracking</li>
          </ul>

          <h3>Preference Cookies</h3>
          <p>
            These cookies remember your preferences (such as language selection or dark/light mode) so we can
            provide a more personalized experience on return visits.
          </p>

          <h2>3. Types of Cookies by Duration</h2>
          <ul>
            <li><strong>Session Cookies</strong> — Temporary cookies deleted when you close your browser</li>
            <li><strong>Persistent Cookies</strong> — Remain on your device for a set period or until manually deleted</li>
          </ul>

          <h2>4. Managing Your Cookie Preferences</h2>
          <p>You can control and manage cookies in several ways:</p>
          <ul>
            <li>
              <strong>Browser Settings</strong> — Most browsers allow you to view, delete, and block cookies. Visit
              your browser&apos;s help section for instructions.
            </li>
            <li>
              <strong>Opt-Out Tools</strong> — Opt out of Google Analytics at{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                tools.google.com/dlpage/gaoptout
              </a>
            </li>
            <li>
              <strong>Ad Preferences</strong> — Manage ad preferences at{' '}
              <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">
                youronlinechoices.com
              </a>
            </li>
          </ul>
          <p>
            Please note that disabling certain cookies may affect the functionality and performance of our website.
          </p>

          <h2>5. Third-Party Cookies</h2>
          <p>
            Some cookies on our website are set by third-party services. We do not control these cookies and
            recommend reviewing the privacy policies of third-party providers for more information.
          </p>

          <h2>6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy periodically to reflect changes in technology, legislation, or our
            use of cookies. We encourage you to review this page regularly.
          </p>

          <h2>7. Contact Us</h2>
          <p>If you have questions about our use of cookies, please contact us:</p>
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
