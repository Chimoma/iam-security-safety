import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../lib/content';
import ActionButton from './ActionButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b-4 border-signal bg-navy text-white">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5">
        {/* [Add company logo] — replace this shield mark and wordmark with your logo image */}
        <Link to="/" className="flex items-center gap-3">
          <span aria-hidden="true" className="flex h-11 w-10 items-center justify-center bg-signal font-display text-xl font-extrabold text-navy [clip-path:polygon(0_0,100%_0,100%_70%,50%_100%,0_70%)]">
            I
          </span>
          <span className="font-display text-xl font-bold uppercase leading-none tracking-wide">
            IAM <span className="block text-xs font-semibold tracking-[0.2em] text-white/70">Security &amp; Safety</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-display text-lg font-semibold uppercase tracking-wider transition-colors hover:text-signal ${
                  isActive ? 'text-signal' : 'text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ActionButton to="/quote">Request a quote</ActionButton>
        </nav>

        <button
          type="button"
          className="flex h-11 items-center gap-2 border-2 border-white/30 px-3 font-display font-semibold uppercase tracking-wider md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav id="mobile-menu" aria-label="Mobile" hidden={!open} className="bg-deep md:hidden">
        <ul className="px-5 pb-5 pt-2">
          {navLinks.map((link) => (
            <li key={link.to} className="border-b border-white/10">
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block py-4 font-display text-xl font-semibold uppercase tracking-wider ${isActive ? 'text-signal' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-5">
            <ActionButton to="/quote" block>Request a quote</ActionButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
