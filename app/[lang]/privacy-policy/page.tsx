import type { Metadata } from 'next';
import { Section, Heading, Card } from '@/components/ui/index';
import PageHero from '@/components/sections/PageHero';
import Animate from '@/components/ui/Animate';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | AMNXT DIGITAL',
  description: 'At AMNXT Digital LLP, we value your privacy and are committed to protecting the information you share with us.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero 
        label="Legal" 
        title="Privacy Policy" 
        subtitle="Last updated: April 2024" 
      />

      <Section className="bg-white">
        <Animate>
          <Card className="max-w-4xl mx-auto p-8 md:p-12 glass-subtle border-brand-100">
            <div className="prose prose-blue max-w-none">
              <p className="lead text-lg text-gray-600 mb-8">
                At AMNXT Digital LLP, we value your privacy and are committed to protecting the
                information you share with us. This Privacy Policy explains how we collect, use, store, and
                protect your information when you visit our website, contact us, or use our services.
                By using our website, you agree to the terms of this Privacy Policy.
              </p>

              <div className="space-y-12">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                      <FileText className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">1. Information We Collect</Heading>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Personal Information</h3>
                      <p className="text-gray-600 text-sm mb-4">When you contact us, fill out a form, request a quote, or communicate with us, we may collect:</p>
                      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                        <li>Your name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Company or business name</li>
                        <li>Project details or service requirements</li>
                        <li>Any other information you voluntarily share with us</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Non-Personal Information</h3>
                      <p className="text-gray-600 text-sm mb-4">Technical information collected automatically:</p>
                      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                        <li>IP address</li>
                        <li>Browser and Device type</li>
                        <li>Pages visited & Time of visit</li>
                        <li>Referring website or source</li>
                        <li>General website usage data</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                      <Eye className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">2. How We Use Your Information</Heading>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                    {[
                      'Respond to inquiries and support',
                      'Prepare quotations and proposals',
                      'Deliver digital and IT services',
                      'Improve website and content',
                      'Communicate important updates',
                      'Internal records and compliance'
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 p-3 rounded-xl bg-surface-1 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                      <Lock className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">3. Data Security & Retention</Heading>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We take reasonable technical and organizational measures to protect your information. However, no online platform or data transmission method can be guaranteed to be 100% secure.
                  </p>
                  <p className="text-gray-600">
                    We retain information only for as long as necessary to fulfill the purpose for which it was collected, provide services, and meet legal or compliance obligations.
                  </p>
                </section>

                <section className="p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    If you have any questions about this Privacy Policy or how your information is handled, you may contact:
                  </p>
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
