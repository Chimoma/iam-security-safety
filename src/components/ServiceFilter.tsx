import type { ServiceCategory } from '../lib/content';

export type FilterValue = 'All' | ServiceCategory;

interface ServiceFilterProps {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}

const options: FilterValue[] = ['All', 'Security', 'Safety'];

export default function ServiceFilter({ value, onChange }: ServiceFilterProps) {
  return (
    <div role="group" aria-label="Filter services by category" className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
          className={`px-6 py-2.5 font-display text-lg font-bold uppercase tracking-wider transition-colors ${
            value === option ? 'bg-navy text-signal' : 'bg-steel text-navy hover:bg-signal'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
