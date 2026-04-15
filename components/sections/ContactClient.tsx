'use client';
import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown } from 'lucide-react';
import { SectionLabel, Heading } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';
import { cn } from '@/lib/utils';

interface ContactClientProps {
  lang: string;
  t: {
    hero: { label: string; title: string; subtitle: string };
    form: Record<string, string>;
    info: Record<string, string>;
  };
}

const services = [
  'Web Development',
  'Mobile App Development',
  'Digital Marketing',
  'UI/UX Design',
  'AI & Automation',
  'Cloud Infrastructure',
  'E-Commerce Solutions',
  'SEO Optimization',
  'Other',
];

const budgets = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Not sure yet',
];

export default function ContactClient({ lang, t }: ContactClientProps) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', description: '', budget: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const inputClass = (name: string) => cn(
    'w-full px-4 py-3.5 rounded-2xl border text-gray-900 placeholder-gray-400 text-sm bg-surface-1 transition-all duration-200 outline-none',
    focused === name
      ? 'border-brand-400 ring-2 ring-brand-100'
      : 'border-gray-200 hover:border-brand-300'
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-mesh relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Animate>
            <SectionLabel>{t.hero.label}</SectionLabel>
            <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl mb-5 text-gray-900">{t.hero.title}</Heading>
            <p className="text-gray-500 text-lg md:text-xl">{t.hero.subtitle}</p>
          </Animate>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <Animate direction="left">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">Contact Information</h2>

                {[
                  { icon: Mail, label: 'Email', value: t.info.email || 'hello@AMNXT DIGITAL.com', href: `mailto:${t.info.email}` },
                  { icon: Phone, label: 'Phone', value: t.info.phone || '+1 (555) 000-0000', href: `tel:${t.info.phone}` },
                  { icon: MapPin, label: 'Address', value: t.info.address || '123 Innovation Drive, Tech City', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-card bg-white transition-all duration-250 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">{label}</p>
                      <p className="text-sm text-gray-800 font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </Animate>

              {/* Map Placeholder */}
              <Animate direction="left" delay={150}>
                <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-card">
                  <div className="h-52 bg-gradient-to-br from-brand-50 via-surface-2 to-purple-50 flex items-center justify-center relative">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-brand-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Anand</p>
                      <p className="text-xs text-gray-400">Gujarat</p>
                    </div>
                    {/* Decorative grid */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(90,103,245,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(90,103,245,0.5) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }}
                    />
                  </div>
                </div>
              </Animate>

              {/* Response time */}
              <Animate direction="left" delay={200}>
                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-800">We respond within 24 hours</p>
                    <p className="text-xs text-emerald-600">Business days, Mon–Fri</p>
                  </div>
                </div>
              </Animate>
            </div>

            {/* Right: Form */}
            <Animate direction="right" className="lg:col-span-3">
              <div className="card-base p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-500">{t.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">Send us a Message</h2>

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">{t.form.name} *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('name')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">{t.form.email} *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('email')}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">{t.form.phone}</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('phone')}
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">{t.form.service} *</label>
                      <div className="relative">
                        <select
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          onFocus={() => setFocused('service')}
                          onBlur={() => setFocused(null)}
                          className={cn(inputClass('service'), 'appearance-none pr-10')}
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">{t.form.description} *</label>
                      <textarea
                        name="description"
                        required
                        rows={4}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        value={form.description}
                        onChange={handleChange}
                        onFocus={() => setFocused('description')}
                        onBlur={() => setFocused(null)}
                        className={cn(inputClass('description'), 'resize-none')}
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">{t.form.budget}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                            className={cn(
                              'px-3 py-2.5 rounded-xl text-xs font-medium border transition-all duration-200 text-left',
                              form.budget === b
                                ? 'border-brand-400 bg-brand-50 text-brand-700 ring-2 ring-brand-100'
                                : 'border-gray-200 text-gray-600 hover:border-brand-200 hover:bg-surface-1'
                            )}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {loading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t.form.submit}
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-400">
                      By submitting, you agree to our{' '}
                      <a href="#" className="text-brand-500 hover:underline">Privacy Policy</a>
                    </p>
                  </form>
                )}
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  );
}
