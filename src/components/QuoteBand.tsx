import ActionButton from './ActionButton';

export default function QuoteBand() {
  return (
    <section className="bg-signal">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <h2 className="font-display text-4xl font-extrabold uppercase leading-none md:text-5xl">
          Need security or safety cover?
        </h2>
        <ActionButton to="/quote" variant="navy">Request a quote</ActionButton>
      </div>
    </section>
  );
}
