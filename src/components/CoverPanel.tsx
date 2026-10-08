import { services } from '../lib/content';

/** Hero side panel listing what the company covers. */
export default function CoverPanel() {
  return (
    <div className="flex bg-deep">
      <div aria-hidden="true" className="hazard w-3 shrink-0" />
      <div className="flex-1 px-6 py-12 md:px-10 lg:py-20">
        <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-signal">What we cover</p>
        <ul className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {services.map((service) => (
            <li key={service.id} className="flex items-center gap-3 border-b border-white/10 py-3.5 font-display text-xl font-semibold uppercase tracking-wide">
              <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-signal" />
              {service.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
