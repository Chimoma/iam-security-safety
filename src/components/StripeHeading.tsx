interface StripeHeadingProps {
  kicker: string;
  title: string;
  light?: boolean;
}

/** Section heading with a hazard-stripe accent bar. */
export default function StripeHeading({ kicker, title, light = false }: StripeHeadingProps) {
  return (
    <div>
      <div aria-hidden="true" className="hazard h-2 w-20" />
      <p className={`mt-5 font-display text-lg font-semibold uppercase tracking-[0.2em] ${light ? 'text-signal' : 'text-iron'}`}>{kicker}</p>
      <h2 className={`mt-1 font-display text-4xl font-extrabold uppercase leading-none md:text-6xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
    </div>
  );
}
