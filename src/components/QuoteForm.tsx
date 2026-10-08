import { useContactForm } from '../hooks/useContactForm';

const initialValues = { name: '', phone: '', email: '', service: '', location: '', message: '' };
const fieldClass = 'mt-1.5 w-full border-2 border-navy/25 bg-white px-4 py-3 text-navy focus:border-navy';
const labelClass = 'font-display text-lg font-semibold uppercase tracking-wider';
const errorClass = 'mt-1.5 text-sm font-semibold text-red-700';

export default function QuoteForm() {
  const { values, errors, message, handleChange, handleSubmit } = useContactForm(initialValues, [
    'name',
    'phone',
    'service',
    'message',
  ]);

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5 border-t-8 border-signal bg-steel p-6 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Full name *</label>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={handleChange}
            aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} className={fieldClass} />
          {errors.name && <p id="name-error" className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={handleChange}
            aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} className={fieldClass} />
          {errors.phone && <p id="phone-error" className={errorClass}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange}
            aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className={fieldClass} />
          {errors.email && <p id="email-error" className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>Service needed *</label>
          <select id="service" name="service" value={values.service} onChange={handleChange}
            aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? 'service-error' : undefined} className={fieldClass}>
            <option value="">Select one</option>
            <option value="Security">Security</option>
            <option value="Safety">Safety</option>
            <option value="Both">Security and safety</option>
          </select>
          {errors.service && <p id="service-error" className={errorClass}>{errors.service}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="location" className={labelClass}>Site location</label>
        <input id="location" name="location" value={values.location} onChange={handleChange} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>What do you need? *</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange}
          aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className={fieldClass} />
        {errors.message && <p id="message-error" className={errorClass}>{errors.message}</p>}
      </div>
      <button type="submit" className="w-full bg-navy px-8 py-4 font-display text-xl font-bold uppercase tracking-wider text-white transition-colors hover:bg-deep sm:w-auto">
        Submit request
      </button>
      <p role="status" aria-live="polite" className="font-semibold text-navy">
        {message}
      </p>
    </form>
  );
}
