'use client';
import { Link2, X, Code2, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = { linkedin: Link2, twitter: X, github: Code2, dribbble: Palette } as const;
type Platform = keyof typeof iconMap;

interface Props {
  platform: Platform;
  url: string;
}

export default function TeamSocialButton({ platform, url }: Props) {
  const Icon = iconMap[platform];
  if (!Icon) return null;
  return (
    <span
      onClick={(e) => { e.preventDefault(); window.open(url, '_blank'); }}
      className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors cursor-pointer"
    >
      <Icon className="w-4 h-4 text-white" />
    </span>
  );
}
