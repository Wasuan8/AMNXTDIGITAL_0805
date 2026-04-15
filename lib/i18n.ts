import type { Locale } from './types';

export const locales: Locale[] = ['en', 'hi', 'ar'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  ar: 'العربية',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  hi: '🇮🇳',
  ar: '🇸🇦',
};

export const rtlLocales: Locale[] = ['ar'];

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export async function getTranslations(locale: Locale) {
  try {
    const translations = await import(`../locales/${locale}/common.json`);
    return translations.default;
  } catch {
    const translations = await import(`../locales/en/common.json`);
    return translations.default;
  }
}

export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path}`;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
