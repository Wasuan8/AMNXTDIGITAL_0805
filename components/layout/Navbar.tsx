'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { locales, localeNames, localeFlags, isRTL } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { cn } from '@/lib/utils';
import DarkModeToggle from '@/components/ui/DarkModeToggle';

interface NavbarProps {
  lang: Locale;
  t: Record<string, string>;
}

const navItems = (lang: Locale) => [
  { label: 'home', href: `/${lang}` },
  { label: 'about', href: `/${lang}/about` },
  { label: 'services', href: `/${lang}/services` },
  { label: 'projects', href: `/${lang}/projects` },
  { label: 'team', href: `/${lang}/team` },
  { label: 'contact', href: `/${lang}/contact` },
];

export default function Navbar({ lang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);
  const dir = isRTL(lang) ? 'rtl' : 'ltr';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const getLocaleSwitchPath = (targetLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/');
  };

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}`;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass shadow-card py-3'
          : 'bg-transparent py-5'
      )}
      dir={dir}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          {/* <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-purple flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-shadow duration-300">
            <Zap className="w-5 h-5 text-white" />
          </div> */}
          <img src="/images/Logo.png" alt="Logo" className='w-10 h-10' />

          <span className="text-xl font-display font-bold text-gray-900 tracking-tight">
            AMNXT <span className="text-gradient">  DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems(lang).map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                  isActive(item.href)
                    ? 'text-brand-600 bg-brand-50/80 backdrop-blur-md shadow-sm border border-brand-100/50'
                    : 'text-gray-600 border border-transparent hover:text-brand-600 hover:bg-white/40 hover:backdrop-blur-lg hover:shadow-sm hover:border-white/60'
                )}
              >
                {t[item.label] || item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-brand-50 hover:text-brand-600 transition-all duration-200"
            >
              <span>{localeFlags[lang]}</span>
              <span className="hidden sm:block">{localeNames[lang]}</span>
              <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', langOpen && 'rotate-180')} />
            </button>

            {langOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white/60 backdrop-blur-2xl rounded-2xl shadow-glass border border-white/60 py-2 min-w-[140px] overflow-hidden">
                {locales.map((locale) => (
                  <Link
                    key={locale}
                    href={getLocaleSwitchPath(locale)}
                    onClick={() => setLangOpen(false)}
                    className={cn(
                      'flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-all duration-200',
                      locale === lang
                        ? 'text-brand-600 bg-white/50 backdrop-blur-sm'
                        : 'text-gray-700 hover:bg-white/40 hover:backdrop-blur-md'
                    )}
                  >
                    <span>{localeFlags[locale]}</span>
                    <span>{localeNames[locale]}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <DarkModeToggle />

          <Link href={`/${lang}/contact`} className="btn-primary hidden sm:inline-flex text-sm px-5 py-2.5">
            {t.getStarted || 'Get Started'}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-brand-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-white/40 shadow-glass">
          <div className="container-custom py-4 space-y-1">
            {navItems(lang).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'block px-4 py-3 rounded-xl text-sm font-medium transition-all',
                  isActive(item.href)
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50/60'
                )}
              >
                {t[item.label] || item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link href={`/${lang}/contact`} className="btn-primary w-full justify-center text-sm">
                {t.getStarted || 'Get Started'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
