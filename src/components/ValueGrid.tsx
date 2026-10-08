import { values } from '../lib/content';

export default function ValueGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {values.map((value) => (
        <li key={value.title} className="border-l-4 border-signal bg-white p-5">
          <h3 className="font-display text-2xl font-bold uppercase leading-tight">{value.title}</h3>
          <p className="mt-2 text-iron">{value.description}</p>
        </li>
      ))}
    </ul>
  );
}
