import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ActionButtonProps {
  to: string;
  variant?: 'signal' | 'navy' | 'ghost';
  block?: boolean;
  children: ReactNode;
}

const variants: Record<NonNullable<ActionButtonProps['variant']>, string> = {
  signal: 'bg-signal text-navy hover:bg-white',
  navy: 'bg-navy text-white hover:bg-deep',
  ghost: 'border-2 border-white text-white hover:bg-white hover:text-navy',
};

export default function ActionButton({ to, variant = 'signal', block = false, children }: ActionButtonProps) {
  return (
    <Link
      to={to}
      className={`items-center justify-center px-7 py-3 font-display text-lg font-bold uppercase tracking-wider transition-colors ${
        block ? 'flex w-full' : 'inline-flex'
      } ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
