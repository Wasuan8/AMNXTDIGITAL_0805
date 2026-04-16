import Link from 'next/link';
import { Mail, Phone, MapPin } from "lucide-react";
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

  const socialLinks = [
    { href: "https://instagram.com/amnxtdigital", label: "Instagram", img: "https://cdn-icons-png.flaticon.com/128/15707/15707749.png" },
    { href: "https://linkedin.com/company/amnxtdigital", label: "LinkedIn", img: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png" },
    { href: "https://github.com/amnxtdigital", label: "GitHub", img: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { href: "https://facebook.com/amnxtdigital", label: "Facebook", img: "https://cdn-icons-png.flaticon.com/128/174/174848.png" },
    { href: "https://youtube.com/@amnxtdigital", label: "YouTube", img: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png" },
    { href: "https://tiktok.com/@amnxtdigital", label: "TikTok", img: "https://cdn-icons-png.flaticon.com/128/3116/3116491.png" },
  ];

  return (
    <>
      {/* Pre-footer Giant Lettermark */}
      <div
        className="w-full overflow-hidden bg-[#0e100f] flex items-end justify-center pt-16 pb-0 select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-black tracking-tighter leading-none pointer-events-none block"
          style={{
            fontSize: 'clamp(80px, 18vw, 220px)',
            WebkitTextStroke: '2px rgba(125,211,252,0.25)',
            color: 'transparent',
            background: 'linear-gradient(180deg, rgba(125,211,252,0.28) 0%, rgba(14,165,233,0.10) 60%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            lineHeight: 0.85,
            letterSpacing: '-0.05em',
          }}
        >
          AMNXT
        </span>
      </div>

      <footer
        className="relative text-[#000000]"
        dir={dir}
        style={{
          background: 'radial-gradient(89.08% 84.62% at 16.54% 78.46%, #ffffff 0%, #e0f2fe 39.58%, #bae6fd 77.6%, #7dd3fc 100%), url("https://assets.codepen.io/16327/noise-e82662fe.png")',
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
                {socialLinks.map(({ href, label, img }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl glass-subtle hover:bg-white/50 text-gray-900 border border-black/5 hover:border-brand-500/30 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <img src={img} alt={label} className="w-5 h-5" />
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
                  <div className="flex flex-col gap-1">
                    <a href="tel:+918511120026" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-900 transition-opacity">
                      {contactInfo.phone || '+91-85111 20026'}
                    </a>
                    <a href="tel:+17085660084" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-900 transition-opacity">
                      +1 708 566 0084
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-900 mt-0.5 shrink-0" />
                  <span className="text-sm font-medium opacity-80">{contactInfo.address || 'Anand, Gujarat'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-semibold opacity-70">
              © 2026 AMNXT Digital LLP. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href={`/${lang}/privacy-policy`} className="text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity duration-200">Privacy Policy</Link>
              <Link href={`/${lang}/terms-of-service`} className="text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity duration-200">Terms of Service</Link>
              <Link href={`/${lang}/cookie-policy`} className="text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
