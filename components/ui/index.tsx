'use client';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

// ─── Button ───────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    outline: 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium border border-brand-200 text-brand-600 hover:bg-brand-50 transition-all duration-200',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: '',
    lg: 'px-8 py-4 text-base',
  };
  return (
    <button className={cn(variants[variant], sizes[size] && size !== 'md' ? sizes[size] : '', className)} {...props}>
      {children}
    </button>
  );
}

// ─── Badge / Tag ──────────────────────────────────────────
interface BadgeProps {
  children: ReactNode;
  variant?: 'brand' | 'success' | 'warning' | 'info' | 'muted';
  className?: string;
}

export function Badge({ children, variant = 'brand', className }: BadgeProps) {
  const variants = {
    brand: 'bg-brand-50 text-brand-600 border-brand-100',
    success: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    warning: 'bg-amber-50 text-amber-600 border-amber-100',
    info: 'bg-sky-50 text-sky-600 border-sky-100',
    muted: 'bg-gray-50 text-gray-600 border-gray-100',
  };
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border', variants[variant], className)}>
      {children}
    </span>
  );
}

// ─── Section Label ────────────────────────────────────────
interface SectionLabelProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function SectionLabel({ children, icon, className }: SectionLabelProps) {
  return (
    <div className={cn('section-label', className)}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div';
}

export function Section({ children, className, id, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={cn('section-padding', className)}>
      <div className="container-custom">{children}</div>
    </Tag>
  );
}

// ─── Heading ──────────────────────────────────────────────
interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Heading({ as: Tag = 'h2', children, className, gradient }: HeadingProps) {
  return (
    <Tag className={cn('font-display font-bold tracking-tight', gradient && 'text-gradient', className)}>
      {children}
    </Tag>
  );
}

// ─── Card ─────────────────────────────────────────────────
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(hover ? 'card-base' : 'bg-white rounded-3xl border border-gray-100', className)}>
      {children}
    </div>
  );
}

// ─── Grid ─────────────────────────────────────────────────
interface GridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}

export function Grid({ children, cols = 3, className }: GridProps) {
  const colClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };
  return (
    <div className={cn('grid gap-6 lg:gap-8', colClasses[cols], className)}>
      {children}
    </div>
  );
}

// ─── Tag List ─────────────────────────────────────────────
export function TagList({ tags, max }: { tags: string[]; max?: number }) {
  const visible = max ? tags.slice(0, max) : tags;
  const rest = max ? tags.length - max : 0;
  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((tag) => (
        <span key={tag} className="tag">{tag}</span>
      ))}
      {rest > 0 && <span className="tag bg-gray-50 text-gray-500 border-gray-100">+{rest}</span>}
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────
export function Divider({ className }: { className?: string }) {
  return <div className={cn('h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent', className)} />;
}

// ─── Dot ──────────────────────────────────────────────────
export function GlowDot({ color = 'brand', size = 'md', className }: { color?: 'brand' | 'purple' | 'cyan'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const colors = {
    brand: 'bg-brand-400',
    purple: 'bg-purple-400',
    cyan: 'bg-cyan-400',
  };
  const sizes = { sm: 'w-2 h-2', md: 'w-3 h-3', lg: 'w-4 h-4' };
  return (
    <span className={cn('rounded-full animate-pulse-slow', colors[color], sizes[size], className)} />
  );
}
