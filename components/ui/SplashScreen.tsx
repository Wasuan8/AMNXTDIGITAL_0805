"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after a minimum time to show the animation, or when hydration is complete
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500">
      <div className="relative flex flex-col items-center justify-center animate-pulse">
        <Image
          src="/images/icon.png"
          alt="AMNXT DIGITAL Logo"
          width={250}
          height={80}
          className="object-contain"
          priority
        />
        <div className="mt-8 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}
