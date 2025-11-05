# Copilot AI Agent Instructions for `copilot_service1`

## Project Overview

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS (via `@tailwindcss/postcss`), custom CSS in `app/globals.css`
- **Font:** Uses `next/font` for Geist Sans and Mono
- **Structure:**
  - `app/` — Main application code (entry: `page.tsx`, layout: `layout.tsx`)
  - `public/` — Static assets (e.g., images)
  - `copilot_service1/` — (Empty or reserved for future code)

## Key Workflows

- **Development:**
  - Start dev server: `yarn dev` (or `npm run dev`, `pnpm dev`, `bun dev`)
  - Hot reload is enabled by default
- **Build:**
  - Production build: `yarn build`
  - Start production: `yarn start`
- **Linting:**
  - Run ESLint: `yarn lint`
  - ESLint config: see `eslint.config.mjs` (uses `eslint-config-next` with custom ignores)
- **Styling:**
  - Tailwind config is handled via `postcss.config.mjs` and `app/globals.css`

## Project Conventions & Patterns

- **TypeScript:** Strict mode enabled, paths alias `@/*` to project root
- **App Directory:** Uses Next.js App Router (`app/`), not the legacy `pages/` directory
- **Font Variables:** Custom font variables set in `app/layout.tsx` and referenced in CSS
- **Dark Mode:** Handled via CSS variables and `prefers-color-scheme` media query
- **No API Routes:** No `api/` directory or backend logic present
- **No Custom Server:** Uses default Next.js server

## Integration & External Dependencies

- **Next.js**: See `next.config.ts` for custom config (currently minimal)
- **Tailwind CSS**: Integrated via PostCSS plugin
- **No Database or API**: No backend or data layer present

## Examples

- **Edit main page:** Modify `app/page.tsx`
- **Change global styles:** Edit `app/globals.css`
- **Update layout or fonts:** Edit `app/layout.tsx`

## Additional Notes

- **Deployment:** Recommended via Vercel (see README)
- **Static Assets:** Place in `public/` directory
  -- **No custom rules or agent docs**: This file is the primary AI agent guide

## Code Review

- When performing a code review, respond in Japanese.
- Use single quotes for strings.
- Use arrow functions for callbacks.

---

For more, see `README.md` or Next.js docs: https://nextjs.org/docs
