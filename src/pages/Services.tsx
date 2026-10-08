import { useMemo, useState } from 'react';
import QuoteBand from '../components/QuoteBand';
import ServiceCard from '../components/ServiceCard';
import ServiceFilter, { type FilterValue } from '../components/ServiceFilter';
import StripeHeading from '../components/StripeHeading';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../lib/company';
import { services, servicesIntro } from '../lib/content';

export default function Services() {
  usePageMeta('Services', `Security and safety services from ${company.name}.`);
  const [filter, setFilter] = useState<FilterValue>('All');

  const visible = useMemo(
    () => (filter === 'All' ? services : services.filter((service) => service.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
          <StripeHeading kicker="Services" title="Security and safety" light />
          <p className="mt-5 max-w-2xl text-lg text-white/80">{servicesIntro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <ServiceFilter value={filter} onChange={setFilter} />
        <p role="status" aria-live="polite" className="mt-4 text-sm font-medium text-iron">
          Showing {visible.length} {visible.length === 1 ? 'service' : 'services'}
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
