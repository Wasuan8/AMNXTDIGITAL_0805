"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import {
  Code,
  Smartphone,
  Cpu,
  Megaphone,
  ShoppingBag,
  Zap,
  ShieldCheck,
  Globe
} from "lucide-react";

export default function MacbookHeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    { name: "Web Dev", icon: Code, color: "text-blue-500", bg: "bg-blue-500/10", top: "15%", left: "10%", shift: -100 },
    { name: "Mobile", icon: Smartphone, color: "text-purple-500", bg: "bg-purple-500/10", top: "25%", left: "80%", shift: -150 },
    { name: "AI Tech", icon: Cpu, color: "text-cyan-500", bg: "bg-cyan-500/10", top: "50%", left: "5%", shift: -80 },
    { name: "Growth", icon: Megaphone, color: "text-orange-500", bg: "bg-orange-500/10", top: "65%", left: "85%", shift: -120 },
    { name: "E-Com", icon: ShoppingBag, color: "text-emerald-500", bg: "bg-emerald-500/10", top: "45%", left: "75%", shift: -200 },
    { name: "Fast", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10", top: "80%", left: "15%", shift: -60 },
    { name: "Secure", icon: ShieldCheck, color: "text-red-500", bg: "bg-red-500/10", top: "85%", left: "70%", shift: -90 },
    { name: "Global", icon: Globe, color: "text-indigo-500", bg: "bg-indigo-500/10", top: "40%", left: "15%", shift: -110 },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-white overflow-hidden">
      {/* Background Decorations to Fill Space */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-100/30 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] right-[-10%] w-[50%] h-[50%] bg-blue-100/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-brand-200/20 rounded-full blur-[100px]" />

        {/* Mesh Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0ea5e9 1px, transparent 1px)`,
            backgroundSize: `40px 40px`
          }}
        />
      </div>

      {/* Floating Interactive Service Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {services.map((service, index) => (
          <ServiceBubble
            key={index}
            service={service}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      <MacbookScroll
        title={
          <span className="text-3xl md:text-5xl font-bold font-display text-gray-900 leading-tight">
            Next-Gen Tech <span className="text-brand-500">Accelerating</span> <br /> Your Digital Evolution.
          </span>
        }
        badge={
          <div className="bg-brand-50 rounded-full p-2 relative group cursor-pointer overflow-hidden border border-brand-100 shadow-sm">
            <div className="absolute inset-0 bg-brand-100/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Badge className="h-10 w-10 -rotate-12 transform group-hover:rotate-0 transition-transform duration-500 relative z-10" />
          </div>
        }
        src={`/images/icon.png`}
        showGradient={true}
        isLight={true}
      />
    </section>
  );
}

const ServiceBubble = ({ service, scrollYProgress }: { service: any, scrollYProgress: any }) => {
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, service.shift]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <motion.div
      style={{
        top: service.top,
        left: service.left,
        y: yTranslate,
        rotate: rotate,
        opacity: opacity,
      }}
      className="absolute pointer-events-auto group"
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: 15,
          rotateX: -15,
          z: 50
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl glass-subtle border border-white/40 shadow-card-hover cursor-default transition-all duration-300 perspective-1000`}
      >
        <div className={`p-2 rounded-xl ${service.bg} ${service.color} transform group-hover:scale-110 transition-transform duration-300`}>
          <service.icon size={20} className="drop-shadow-sm" />
        </div>
        <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">
          {service.name}
        </span>

        {/* Interactive 3D Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
};

// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};

