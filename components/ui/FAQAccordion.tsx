'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FAQ } from '@/lib/types';

interface FAQAccordionProps {
  items: FAQ[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            'rounded-2xl border transition-all duration-300 overflow-hidden',
            open === i
              ? 'border-brand-200 bg-brand-50/40 shadow-card'
              : 'border-gray-100 bg-white hover:border-brand-100'
          )}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className={cn('font-semibold text-sm md:text-base transition-colors', open === i ? 'text-brand-700' : 'text-gray-900')}>
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 shrink-0 transition-all duration-300',
                open === i ? 'rotate-180 text-brand-600' : 'text-gray-400'
              )}
            />
          </button>
          <div className={cn('grid transition-all duration-300', open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
