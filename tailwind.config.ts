import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        brand: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        accent: {
          cyan: "#00d4ff",
          purple: "#a855f7",
          violet: "#7c3aed",
          blue: "#3b82f6",
        },
        surface: {
          0: "#ffffff",
          1: "#fafafa",
          2: "#f5f3ff",
          3: "#ede9fe",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #00d4ff 100%)",
        "gradient-soft": "linear-gradient(135deg, #faf5ff 0%, #fef8ff 50%, #f5f3ff 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(250,245,255,0.6) 100%)",
        "gradient-hero": "linear-gradient(135deg, #a855f7 0%, #6b21a8 50%, #00d4ff 100%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(270,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(274,100%,76%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(195,100%,75%,0.1) 0px, transparent 50%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "shimmer": "shimmer 2s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "brand": "0 4px 40px rgba(168, 85, 247, 0.2)",
        "brand-lg": "0 8px 60px rgba(168, 85, 247, 0.3)",
        "card": "0 2px 20px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(168, 85, 247, 0.06)",
        "card-hover": "0 8px 40px rgba(168, 85, 247, 0.15), 0 0 0 1px rgba(168, 85, 247, 0.1)",
        "glass": "0 8px 32px rgba(0,0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
        "glow": "0 0 30px rgba(168, 85, 247, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
