import ContactLink from '../components/ContactLink';
import QuoteForm from '../components/QuoteForm';
import StripeHeading from '../components/StripeHeading';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../lib/company';

export default function Quote() {
  usePageMeta('Request a Quote', `Request a security or safety services quote from ${company.name}.`);
  const { contact } = company;
  const term = 'font-display text-sm font-bold uppercase tracking-[0.2em] text-iron';

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <StripeHeading kicker="Contact" title="Request a quote" />
        <p className="mt-5 text-lg text-iron">Tell us about your site and what you need. We will respond with next steps.</p>
        <dl className="mt-10 space-y-6">
          <div>
            <dt className={term}>Email</dt>
            <dd className="mt-1 break-words text-xl font-semibold"><ContactLink kind="email" value={contact.email} className="hover:underline" /></dd>
          </div>
          <div>
            <dt className={term}>Location</dt>
            <dd className="mt-1 text-xl font-semibold">{contact.location}</dd>
          </div>
        </dl>
      </div>
      <QuoteForm />
    </section>
  );
}
