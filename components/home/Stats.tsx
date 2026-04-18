import Counter from '@/components/ui/Counter';
import Animate from '@/components/ui/Animate';
import { stats } from '@/data/testimonials';

interface StatsProps {
  t: Record<string, string>;
}

export default function Stats({ t }: StatsProps) {
  const labels = [t.projects, t.clients, t.years, t.satisfaction];

  return (
    <section className="py-10 bg-white border-y border-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <Animate key={stat.label} delay={i * 100} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-sm font-medium">{labels[i] || stat.label}</p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
