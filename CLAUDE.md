# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev              # Start development server at localhost:3000
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Admin Setup
npm run create-admin     # Create admin user (admin@mpsjakarta.com / mps2025)

# Database (if using Supabase CLI locally)
supabase start           # Start local Supabase instance
supabase db reset        # Reset database and run migrations
```

## Architecture Overview

This is a Next.js 15 application for Marina Prima Sukses company, featuring job applications and partner submissions with an admin dashboard.

### Tech Stack
- **Framework**: Next.js 15.x with React 19.x (using latest features)
- **Language**: TypeScript with strict mode
- **Database**: Supabase (PostgreSQL with RLS)
- **Styling**: Tailwind CSS + Shadcn UI components
- **Forms**: React Hook Form + Zod validation
- **File Storage**: Supabase Storage

### Key Architectural Patterns

1. **Component Structure**: Atomic design pattern
   - `atoms/` - Basic UI elements (Footer, Navbar, Cards)
   - `molecules/` - Feature-specific components grouped by page
   - `organisms/` - Page-level components
   - `ui/` - Shadcn UI components

2. **Routing Structure**:
   - `(main)/` - Public routes (home, articles, applications)
   - `admin/` - Protected routes (dashboard, candidates, partners)
   - Middleware protects `/admin/*` routes with Supabase auth

3. **Database Schema**:
   - `candidate` table - Job applications with file uploads (CV, certificates)
   - `partner` table - Business partnership applications
   - Both use integer IDs with timestamps

4. **File Upload Pattern**:
   - API route at `/api/upload` handles file uploads server-side
   - Uses Supabase service role key for unauthenticated uploads
   - Files stored in `marina-prima-sukses-web` bucket

5. **Authentication Flow**:
   - Email/password auth via Supabase
   - Middleware checks session for admin routes
   - Static admin credentials created via script

### Important Configuration

- **Environment Variables** (required in `.env.local`):
  ```
  NEXT_PUBLIC_SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY
  SUPABASE_SERVICE_ROLE_KEY
  ```

- **TypeScript**: Path alias `@/*` maps to `./src/*`

- **Tailwind**: Custom theme with navy/gold colors and marquee animations

### Development Guidelines

1. When modifying forms, maintain Zod schema validation pattern
2. File uploads must validate type and size before Supabase storage
3. Admin routes require authentication check in middleware
4. Use server components by default, client components only when needed
5. Follow existing atomic design pattern for new components