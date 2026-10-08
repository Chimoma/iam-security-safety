import ActionButton from '../components/ActionButton';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found', 'The page you were looking for could not be found.');
  return (
    <section className="mx-auto max-w-7xl px-5 py-28">
      <div aria-hidden="true" className="hazard h-2 w-20" />
      <h1 className="mt-6 font-display text-6xl font-extrabold uppercase leading-none">Page not found</h1>
      <div className="mt-8">
        <ActionButton to="/" variant="navy">Back to home</ActionButton>
      </div>
    </section>
  );
}
