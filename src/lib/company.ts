/**
 * Single source of truth for company details.
 * Replace the [Add business email] placeholder with the real address;
 * every email link and the quote form will start working automatically.
 */
export const company = {
  name: 'IAM Security and Safety Services Ltd',
  shortName: 'IAM',
  tagline:
    'Security and safety services for businesses, estates, schools, construction sites and events across Nigeria.',
  contact: {
    email: '[Add business email]',
    location: 'Nigeria',
  },
} as const;

export const isPlaceholder = (value: string): boolean => value.trim().startsWith('[');
