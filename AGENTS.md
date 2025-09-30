# Repository Guidelines

## Project Structure & Module Organization

Primary Next.js app routes live in `src/app`, sharing UI in `src/components`, reusable hooks in `src/hooks`, and server/client helpers in `src/lib`. Supabase SQL, seed scripts, and generated types live under `supabase`, while one-off automation sits in `scripts/`. Static assets belong in `public/`; global configs (Tailwind, PostCSS, ESLint) sit in the repo root.

## Build, Test, and Development Commands

- `npm run dev` — starts the Next.js dev server with hot reload. Use when iterating locally.
- `npm run build` — compiles the production bundle; run before deploying or when diagnosing build-only errors.
- `npm run start` — serves the production build locally, mirroring Vercel’s runtime.
- `npm run lint` — executes `next lint` with the configured ESLint rules.
- `npm run format` / `npm run format:check` — apply or verify Prettier formatting.
- `npm run create-admin` — seeds the Supabase admin user; expect env vars and project access to be configured first.

## Coding Style & Naming Conventions

TypeScript is required throughout `src/`. Follow Prettier defaults (2-space indentation, single quotes where auto-applied). Keep React components PascalCase in their own files, colocate styles via Tailwind utility classes, and group helper modules with camelCase filenames. Prefer named exports for shared utilities, default exports for Next.js route components.

## Testing Guidelines

No automated tests ship today; introduce them alongside new features. Use React Testing Library for component behavior and Playwright (or Next.js end-to-end runner) for critical flows. Place unit specs near their subjects (e.g., `component.test.tsx`) and end-to-end suites in `tests/e2e`. Ensure forms validate negative paths before merging.

## Commit & Pull Request Guidelines

Recent history follows Conventional Commits (`feat:`, `fix:`, `chore:`). Keep messages imperative and scoped (`feat: add partner form validation`). PRs should include: concise summary, screenshots for UI changes, Supabase migration callouts, and linked issue/Linear ticket. Confirm `npm run lint` and any newly added tests pass before requesting review.

## Supabase & Configuration Notes

Maintain `.env.local` with Supabase URL, anon, and service role keys. Schema migrations belong in `supabase-schema.sql` or the Supabase CLI workflow; avoid editing production tables manually. Uploaded assets target the `marina-prima-sukses-web` bucket—update policies alongside storage changes.
