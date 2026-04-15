import { Rocket, Zap, Shield, Trophy } from 'lucide-react';
import { Section, SectionLabel, Heading } from '@/components/ui/index';
import Animate from '@/components/ui/Animate';

const icons = [Rocket, Zap, Shield, Trophy];
const gradients = [
  'from-brand-500 to-accent-cyan',
  'from-violet-500 to-brand-400',
  'from-emerald-500 to-teal-400',
  'from-amber-500 to-orange-400',
];

interface WhyUsProps {
  t: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
}

export default function WhyUs({ t }: WhyUsProps) {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <Animate direction="left">
          <SectionLabel>{t.label}</SectionLabel>
          <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-5">{t.title}</Heading>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">{t.subtitle}</p>

          {/* Visual block */}
          <div className="relative rounded-3xl overflow-hidden bg-mesh p-1">
            <div className="rounded-[22px] bg-white/80 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1.5">
                  {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-mono">AMNXT DIGITAL-delivery.ts</span>
              </div>
              <pre className="text-xs text-gray-700 font-mono leading-relaxed overflow-hidden">
                {`const delivery = {
  speed: "2x faster than industry",
  quality: "99.8% bug-free launches",
  support: "24/7 dedicated team",
  satisfaction: "4.9 / 5.0 rating"
};

export const result = "🚀 Exceptional";`}
              </pre>
            </div>
          </div>
        </Animate>

        {/* Right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Animate key={item.title} delay={i * 100} direction="up">
                <div className="card-base p-6 hover:-translate-y-1 h-full">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
