import type { Metadata } from 'next';
import { Section, Heading, Card } from '@/components/ui/index';
import PageHero from '@/components/sections/PageHero';
import Animate from '@/components/ui/Animate';
import { Gavel, CheckCircle, AlertTriangle, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | AMNXT DIGITAL',
  description: 'Welcome to AMNXT Digital LLP. By accessing our website or using our services, you agree to the following Terms of Service.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero 
        label="Legal" 
        title="Terms of Service" 
        subtitle="Effective Date: April 2024" 
      />

      <Section className="bg-white">
        <Animate>
          <Card className="max-w-4xl mx-auto p-8 md:p-12 glass-subtle border-brand-100">
            <div className="prose prose-blue max-w-none">
              <p className="lead text-lg text-gray-600 mb-8">
                Welcome to AMNXT Digital LLP. By accessing our website or using our services, you agree to the following Terms of Service.
                These terms are designed to keep our relationship with clients and website visitors clear, professional, and transparent.
              </p>

              <div className="space-y-12">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">Our Services</Heading>
                  </div>
                  <p className="text-gray-600 mb-4">AMNXT Digital LLP provides a wide spectrum of digital solutions including:</p>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {[
                      'Digital Marketing & Advertising',
                      'Web & Mobile Development',
                      'SEO & Social Media Management',
                      'Custom Software Development',
                      'Branding & Content Strategy',
                      'Virtual Assistance & BPO',
                      'IT Consulting & Support'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700 py-1 border-b border-black/5">
                        <CheckCircle className="w-4 h-4 text-brand-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">Client Responsibilities</Heading>
                  </div>
                  <p className="text-gray-600 mb-4">To ensure smooth project delivery, clients are expected to:</p>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                    <li>Provide accurate information and required content/access on time.</li>
                    <li>Review work within a reasonable time and communicate changes clearly.</li>
                    <li>Use our services and deliverables lawfully and responsibly.</li>
                    <li>Note that delays in approvals may affect final delivery timelines.</li>
                  </ul>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                      <Gavel className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">Limitation of Liability</Heading>
                  </div>
                  <p className="text-gray-600 mb-4">
                    To the maximum extent permitted by law, AMNXT Digital LLP shall not be liable for indirect, incidental, or business-related damages.
                  </p>
                  <p className="text-gray-600 p-4 rounded-xl bg-orange-50 border border-orange-100 text-sm italic">
                    Our total liability shall be limited to the amount paid by the client for the specific service giving rise to the claim.
                  </p>
                </section>

                <section className="p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Questions?</h3>
                  <p className="text-gray-600 text-sm mb-4">For any clarifications regarding these Terms of Service, reach out to us:</p>
                  <a href="mailto:hello@amnxtdigital.com" className="text-brand-600 font-bold hover:underline">
                    hello@amnxtdigital.com
                  </a>
                </section>
              </div>
            </div>
          </Card>
        </Animate>
      </Section>
    </>
  );
}
