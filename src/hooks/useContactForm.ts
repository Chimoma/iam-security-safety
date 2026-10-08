import { useState, type ChangeEvent, type FormEvent } from 'react';
import { company, isPlaceholder } from '../lib/company';

type Errors<T> = Partial<Record<keyof T, string>>;
type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Form state + validation for the enquiry form.
 *
 * Delivery: once a real address is set in src/lib/company.ts, a valid submit
 * opens the visitor's email app with the enquiry pre-filled (no backend needed).
 * To send silently instead, replace `deliver` with a fetch() to a form service.
 */
export function useContactForm<T extends Record<string, string>>(initial: T, required: (keyof T)[]) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Errors<T>>({});
  const [message, setMessage] = useState('');

  const validate = (current: T): Errors<T> => {
    const next: Errors<T> = {};
    for (const key of required) {
      if (!current[key].trim()) next[key] = 'This field is required.';
    }
    const emailKey = 'email' as keyof T;
    const email = current[emailKey];
    if (email && email.trim() && !EMAIL_PATTERN.test(email.trim())) {
      next[emailKey] = 'Enter a valid email address.';
    }
    return next;
  };

  const deliver = (current: T): string => {
    const address = company.contact.email;
    if (isPlaceholder(address)) {
      return 'Thank you. Online enquiries are not switched on yet. Please check back soon.';
    }
    const body = Object.entries(current)
      .filter(([, value]) => value.trim())
      .map(([key, value]) => `${key.charAt(0).toUpperCase()}${key.slice(1)}: ${value}`)
      .join('\n');
    const subject = `Website enquiry for ${company.name}`;
    window.location.href = `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return 'Thank you. Your email app is opening with your enquiry ready to send.';
  };

  const handleChange = (event: ChangeEvent<FieldElement>) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setMessage('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      const field = event.currentTarget.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    setMessage(deliver(values));
    setValues(initial);
  };

  return { values, errors, message, handleChange, handleSubmit };
}
