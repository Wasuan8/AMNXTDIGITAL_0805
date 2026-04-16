'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <button
      id="dark-mode-toggle"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:bg-brand-50 hover:text-brand-600 transition-all duration-200 group"
    >
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${dark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
        <Sun className="w-4 h-4 text-amber-500" />
      </span>
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${dark ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
        <Moon className="w-4 h-4" />
      </span>
    </button>
  );
}
