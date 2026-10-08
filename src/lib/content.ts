export type ServiceCategory = 'Security' | 'Safety';

export interface NavLinkItem {
  to: string;
  label: string;
}

export interface Service {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
}

export interface Division {
  category: ServiceCategory;
  heading: string;
  summary: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export const navLinks: NavLinkItem[] = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
];

export const divisions: Division[] = [
  {
    category: 'Security',
    heading: 'Security services',
    summary:
      'Guarding, electronic security systems and risk advice to protect people, property and premises around the clock.',
  },
  {
    category: 'Safety',
    heading: 'Safety services',
    summary:
      'Training, equipment and audits that help workplaces and sites prevent accidents and respond well when something goes wrong.',
  },
];

export const services: Service[] = [
  {
    id: 'guarding',
    category: 'Security',
    title: 'Manned Guarding',
    description: 'Uniformed guards for offices, residential estates, schools, warehouses and construction sites.',
  },
  {
    id: 'electronic',
    category: 'Security',
    title: 'Electronic Security Systems',
    description: 'Supply, installation and maintenance of CCTV, access control and alarm systems.',
  },
  {
    id: 'events',
    category: 'Security',
    title: 'Event Security',
    description: 'Access control and crowd management for corporate, social and public events.',
  },
  {
    id: 'security-risk',
    category: 'Security',
    title: 'Security Risk Assessment',
    description: 'Site surveys and practical recommendations for organisations reviewing how they are protected.',
  },
  {
    id: 'training',
    category: 'Safety',
    title: 'Health & Safety Training',
    description: 'Workplace safety, fire safety and emergency response training for staff at every level.',
  },
  {
    id: 'fire',
    category: 'Safety',
    title: 'Fire Safety Equipment',
    description: 'Supply, installation and servicing of fire extinguishers, alarms and safety signage.',
  },
  {
    id: 'audits',
    category: 'Safety',
    title: 'Safety Audits & Inspections',
    description: 'Workplace and site inspections that identify hazards and set out how to deal with them.',
  },
  {
    id: 'ppe',
    category: 'Safety',
    title: 'Safety Equipment Supply',
    description: 'Personal protective equipment and safety gear for industrial, construction and commercial sites.',
  },
];

export const servicesIntro =
  'One company for both sides of protection: security that guards against threats, and safety that prevents accidents. Filter by division to see what each covers.';

export const about =
  'IAM Security and Safety Services Ltd provides security and safety services under one roof, so clients deal with a single accountable team for the protection of their people, property and workplaces.';

export const mission =
  'To protect people, property and workplaces through dependable security and practical safety services.';

export const values: CompanyValue[] = [
  { title: 'Vigilance', description: 'We stay alert so our clients can focus on their own work.' },
  { title: 'Integrity', description: 'We are honest, discreet and accountable in everything we do.' },
  { title: 'Professionalism', description: 'We are disciplined, well presented and respectful on every site.' },
  { title: 'Safety first', description: 'No task is so urgent that it cannot be done safely.' },
];
