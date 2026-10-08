import type { ReactNode } from 'react';
import { isPlaceholder } from '../lib/company';

interface ContactLinkProps {
  kind: 'phone' | 'email' | 'whatsapp';
  value: string;
  className?: string;
  children?: ReactNode;
}

function buildHref(kind: ContactLinkProps['kind'], value: string): string {
  if (kind === 'email') return `mailto:${value}`;
  const digits = value.replace(/[^\d+]/g, '');
  return kind === 'phone' ? `tel:${digits}` : `https://wa.me/${digits.replace('+', '')}`;
}

/**
 * Renders a working tel:/mailto:/WhatsApp link once a real value is set in
 * src/lib/company.ts. While the value is still a [placeholder] it renders
 * plain text so visitors never hit a dead link.
 */
export default function ContactLink({ kind, value, className, children }: ContactLinkProps) {
  if (isPlaceholder(value)) {
    return <span className={className}>{children ?? value}</span>;
  }
  const external = kind === 'whatsapp';
  return (
    <a
      href={buildHref(kind, value)}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children ?? value}
    </a>
  );
}
