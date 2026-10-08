# IAM Security and Safety Services Ltd — website

React + TypeScript + Vite + Tailwind CSS. Fully standalone project.

## Run

```bash
npm install
npm run dev      # local development server
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```

Requires Node.js 18 or newer.

## Before launch

1. **Business email** — replace `[Add business email]` in `src/lib/company.ts`. Email links and the enquiry form start working as soon as a real address is set (the form opens the visitor's email app with the enquiry pre-filled).
2. **Logo** (optional) — the navbar uses a text wordmark; swap it in `src/components/Navbar.tsx`.

## Editing content

All services, mission, values and intro text live in `src/lib/content.ts` and `src/lib/company.ts`.

## Deploy

Build with `npm run build` and deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, cPanel).
If the site has multiple pages, configure the host to serve `index.html` for all routes (a Netlify `public/_redirects` file is already included).
