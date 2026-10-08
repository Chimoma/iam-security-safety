import ActionButton from '../components/ActionButton';
import CoverPanel from '../components/CoverPanel';
import QuoteBand from '../components/QuoteBand';
import StripeHeading from '../components/StripeHeading';
import ValueGrid from '../components/ValueGrid';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../lib/company';
import { about, divisions, mission } from '../lib/content';

export default function Home() {
  usePageMeta('Security and Safety Services', company.tagline);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0 px-5 py-16 md:py-24 lg:pr-12">
            <p className="clip-slant inline-block bg-signal py-1.5 pl-4 pr-8 font-display text-lg font-bold uppercase tracking-wider text-navy">
              Security &amp; Safety Services
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
              Protecting people <span className="text-signal">and property</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">{company.tagline}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ActionButton to="/quote">Request a quote</ActionButton>
              <ActionButton to="/services" variant="ghost">Our services</ActionButton>
            </div>
          </div>
          <CoverPanel />
        </div>
        <div aria-hidden="true" className="hazard h-3" />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <StripeHeading kicker="What we do" title="Two divisions" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {divisions.map((division, i) => (
            <article key={division.category} className={`flex flex-col p-8 md:p-10 ${i === 0 ? 'bg-navy text-white' : 'bg-steel'}`}>
              <span aria-hidden="true" className="font-display text-7xl font-extrabold leading-none text-signal">0{i + 1}</span>
              <h3 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none">{division.heading}</h3>
              <p className={`mt-4 flex-1 text-lg ${i === 0 ? 'text-white/80' : 'text-iron'}`}>{division.summary}</p>
              <div className="mt-8">
                <ActionButton to="/services" variant={i === 0 ? 'signal' : 'navy'}>View services</ActionButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-steel">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <StripeHeading kicker="About the company" title="One accountable team" />
            <p className="mt-6 text-lg text-iron">{about}</p>
            <div className="mt-8 bg-navy p-6 text-white md:p-8">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-signal">Our mission</p>
              <p className="mt-2 text-xl font-medium leading-snug">{mission}</p>
            </div>
          </div>
          <div className="lg:pt-8">
            <h3 className="mb-5 font-display text-2xl font-bold uppercase tracking-wider">Our values</h3>
            <ValueGrid />
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
