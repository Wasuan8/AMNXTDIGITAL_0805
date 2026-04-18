import type { Metadata } from 'next';
import { Section, Heading, Card } from '@/components/ui/index';
import PageHero from '@/components/sections/PageHero';
import Animate from '@/components/ui/Animate';
import { Cookie, Settings, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | AMNXT DIGITAL',
  description: 'At AMNXT Digital LLP, we use cookies and similar technologies to improve your experience on our website.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero 
        label="Legal" 
        title="Cookie Policy" 
        subtitle="Transparent use of tracking technologies." 
      />

      <Section className="bg-white">
        <Animate>
          <Card className="max-w-4xl mx-auto p-8 md:p-12 glass-subtle border-brand-100">
            <div className="prose prose-blue max-w-none">
              <p className="lead text-lg text-gray-600 mb-8">
                At AMNXT Digital LLP, we use cookies and similar technologies to improve your experience 
                on our website, understand user behavior, and support website functionality and performance.
              </p>

              <div className="space-y-12">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Cookie className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">What Are Cookies</Heading>
                  </div>
                  <p className="text-gray-600">
                    Cookies are small text files stored on your device when you visit a website. They help websites recognize your device, remember preferences, improve functionality, and collect information about how users interact with the website.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                      <Zap className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">How We Use Cookies</Heading>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: 'Essential', desc: 'Required for basic website functionality.', icon: ShieldCheck },
                      { title: 'Analytics', desc: 'Understanding traffic patterns & usage.', icon: Zap },
                      { title: 'Functional', desc: 'Remembering your custom preferences.', icon: Settings },
                    ].map((item) => (
                      <div key={item.title} className="p-5 rounded-2xl bg-surface-1 border border-black/5">
                        <item.icon className="w-6 h-6 text-brand-500 mb-3" />
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                      <Settings className="w-5 h-5" />
                    </div>
                    <Heading as="h2" className="text-2xl m-0">Managing Your Preferences</Heading>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Most browsers allow you to manage cookies through settings that let you block, delete, or limit cookie usage. Please note that disabling certain cookies may affect the functionality or performance of some parts of the website.
                  </p>
                </section>

                <section className="p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Policy Updates</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We may update this Cookie Policy from time to time. Any revised version will be posted on this page with the updated effective date.
                  </p>
                  <a href="mailto:hello@amnxtdigital.com" className="text-brand-600 font-bold hover:underline text-sm">
                    Contact us for more details
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
