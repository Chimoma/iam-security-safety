import type { Service } from '../lib/content';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group border-l-4 border-navy bg-steel p-6 transition-colors hover:border-signal hover:bg-navy hover:text-white">
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-iron group-hover:text-signal">{service.category}</p>
      <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-tight">{service.title}</h3>
      <p className="mt-3 text-iron group-hover:text-white/80">{service.description}</p>
    </article>
  );
}
