import Link from 'next/link';
import { Mail, Phone, MapPin, Link2, X, Code2, Camera } from "lucide-react";
import type { Locale } from '@/lib/types';
import { isRTL } from '@/lib/i18n';

interface FooterProps {
  lang: Locale;
  t: Record<string, unknown>;
}

export default function Footer({ lang, t }: FooterProps) {
  const nav = t.nav as Record<string, string>;
  const footer = t.footer as Record<string, unknown>;
  const contact = t.contact as Record<string, unknown>;
  const contactInfo = contact?.info as Record<string, string> || {};
  const dir = isRTL(lang) ? 'rtl' : 'ltr';

  const companyLinks = [
    { label: nav?.about || 'About', href: `/${lang}/about` },
    { label: nav?.team || 'Team', href: `/${lang}/team` },
    { label: nav?.projects || 'Projects', href: `/${lang}/projects` },
    { label: 'Careers', href: `/${lang}/careers`, badge: 'Hiring' },
    { label: nav?.contact || 'Contact', href: `/${lang}/contact` },
  ];

  const serviceLinks = [
    { label: 'Web Development', href: `/${lang}/services` },
    { label: 'Mobile Apps', href: `/${lang}/services` },
    { label: 'Digital Marketing', href: `/${lang}/services` },
    { label: 'AI & Automation', href: `/${lang}/services` },
  ];

  return (
    <footer
      className="relative text-[#000000] overflow-hidden"
      dir={dir}
      style={{
        background: 'radial-gradient(100% 100% at 0% 0%, #fefcfb 0%, #fff7ed 30%, #fff1f2 60%, #e0f2fe 100%), url("https://assets.codepen.io/16327/noise-e82662fe.png")',
      }}
    >
      <div className="container-custom pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-4 group">
              <img src="/images/Logo.png" alt="Logo" className="w-10 h-10 " />
              <span className="text-xl font-display font-bold text-gray-900 tracking-tight">
                AMNXT<span className="text-brand-700">DIGITAL</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 font-medium opacity-80">
              {(footer?.description as string) || 'Transforming businesses through innovative IT solutions and digital marketing excellence.'}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {[
                { icon: Camera, href: "https://cdn-icons-png.flaticon.com/128/15707/15707749.png", label: "Instagram" },
                { icon: X, href: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png", label: "LinkedIn" },
                { icon: Code2, href: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png", label: "GitHub" },
                { icon: Camera, href: "https://cdn-icons-png.flaticon.com/128/174/174848.png", label: "FaceBook" }
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-2xl glass-premium hover:bg-white text-gray-900 border border-white/60 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(249,115,22,0.2)] hover:-translate-y-1.5"
                >
                  {/* <Icon className="w-4 h-4" /> */}
                  <img src={href} alt={label} className="w-6 h-6" />

                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-900 transition-opacity duration-200 inline-flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="px-1.5 py-0.5 rounded-md bg-brand-100 text-brand-700 text-[10px] font-bold uppercase tracking-widest leading-none shadow-sm">{link.badge}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-900 transition-opacity duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-900 mt-0.5 shrink-0" />
                <a href={`mailto:${contactInfo.email || 'hello@amnxtdigital.com'}`} className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-900 transition-opacity">
                  {contactInfo.email || 'hello@amnxtdigital.com'}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-900 mt-0.5 shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-900 transition-opacity">
                  {contactInfo.phone || '+1 (555) 000-0000'}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-900 mt-0.5 shrink-0" />
                <span className="text-sm font-medium opacity-80">{contactInfo.address || ' Anand, Gujarat'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold opacity-70">
            {(footer?.copyright as string) || '© 2025 AMNXT DIGITAL. All rights reserved.'}
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: `/${lang}/privacy-policy` },
              { label: 'Terms of Service', href: `/${lang}/terms-of-service` },
              { label: 'Cookie Policy', href: `/${lang}/cookie-policy` },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity duration-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Watermark Effect */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-full flex items-end justify-center z-0 select-none">
        <h2 className="text-[20vw] font-display font-bold text-brand-900/[0.06] dark:text-white/[0.04] uppercase leading-none translate-y-1/4 tracking-tighter whitespace-nowrap">
          DevStudio
        </h2>
      </div>
    </footer>
  );
}
