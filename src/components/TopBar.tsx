import { company } from '../lib/company';
import ContactLink from './ContactLink';

/** Slim utility bar above the main navigation. */
export default function TopBar() {
  return (
    <div className="bg-deep text-sm text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2">
        <p className="font-display text-base font-semibold uppercase tracking-wider text-signal">
          Serving clients across {company.contact.location}
        </p>
        <p>
          <span className="text-white/60">Email </span>
          <ContactLink kind="email" value={company.contact.email} className="font-medium hover:text-signal" />
        </p>
      </div>
    </div>
  );
}
