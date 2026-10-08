import { Link } from 'react-router-dom';
import { company } from '../lib/company';
import ContactLink from './ContactLink';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/quote', label: 'Request a quote' },
];

export default function Footer() {
  const heading = 'font-display text-lg font-bold uppercase tracking-wider text-signal';
  return (
    <footer className="bg-deep text-white">
      <div aria-hidden="true" className="hazard h-3" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-3xl font-extrabold uppercase leading-none">{company.name}</p>
          <p className="mt-4 max-w-sm text-white/70">{company.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className={heading}>Quick links</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/80 hover:text-signal">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className={heading}>Contact</p>
          <ul className="mt-4 space-y-2 text-white/80">
            <li><ContactLink kind="email" value={company.contact.email} className="hover:text-signal" /></li>
            <li>{company.contact.location}</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </p>
    </footer>
  );
}
