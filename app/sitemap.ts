import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { projects } from '@/data/projects';
import { teamMembers } from '@/data/team';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://AMNXT DIGITAL.com';
  const pages = ['', '/about', '/services', '/projects', '/team', '/contact'];
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${base}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }

    // Project pages
    for (const project of projects) {
      entries.push({
        url: `${base}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    // Team pages
    for (const member of teamMembers) {
      entries.push({
        url: `${base}/${locale}/team/${member.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
