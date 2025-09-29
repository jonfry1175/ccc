# Christianity Crisis Center Job Platform - AI Coding Instructions

This is a **Next.js 15 community job matching platform** for Christianity Crisis Center, helping community members find employment matching their skills.

## Architecture Overview

**Core Pattern**: Next.js 15 App Router with Supabase backend, using atomic design components and dual-client authentication pattern.

**Key Routes**:
- `(main)/` - Public routes (home, applications, articles) 
- `admin/` - Protected routes with middleware auth checking
- `/api/upload` - Server-side file handling with service role

**Component Structure** (Atomic Design):
```
src/components/
├── atoms/        # Basic UI (Footer, Navbar, Cards)
├── molecules/    # Feature components grouped by page
├── organisms/    # Page-level components  
├── ui/          # Shadcn UI components
```

## Critical Supabase Integration Patterns

### Dual Client Pattern
```typescript
// Regular client (client-side)
export const supabase = createClient(supabaseUrl, supabaseKey);

// Admin client (server-side only)
const supabaseAdmin = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});
```

### File Upload Flow
Files go through `/api/upload` route using **service role key** (not regular auth), then stored in `christianity-crisis-center-files` bucket. Always validate file type/size client-side first.

### Authentication 
- Admin routes protected by `src/middleware.ts` (only matches `/admin/:path*`)
- Admin layout (`src/app/admin/layout.tsx`) handles session checking & redirects
- Default admin: `admin@christianitycrisis.com / ccc2025admin`
- Create admin via: `npm run create-admin`

## Database Schema (PostgreSQL/Supabase)

**Core Tables**:
```sql
candidate: id, first_name, last_name, email, department, position, cv_url, certificate_url, status
partner: id, company_name, email, phone_number, country, verified, status
```

**RLS Policies**: Admin email-based access, public insert allowed for forms.

## Development Workflows

**Essential Commands**:
```bash
npm run dev                    # Start dev server
npm run create-admin          # Seed admin user (requires env vars)  
npm run build                 # Production build
npm run lint                  # ESLint check
```

**Environment Setup** (`.env.local` required):
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...    # For API uploads
```

## Project-Specific Patterns

### Form Handling
All forms use **React Hook Form + Zod validation**. Example pattern:
```typescript
const schema = z.object({
  email: z.string().email(),
  // ... other fields
});
type FormValues = z.infer<typeof schema>;
```

### Color System 
Custom Christianity Crisis Center branding with **legacy compatibility**:
- `primaryRed` (#E31E24), `primaryGold` (#D4AF37) - new semantic names
- `color1`, `color2`, etc. - legacy mappings (don't remove)
- Path alias: `@/*` maps to `./src/*`

### Indonesian Language Priority
UI copy should prioritize **Bahasa Indonesia** for community accessibility. English acceptable for technical/admin interfaces.

### Atomic Component Pattern
New components follow `atoms -> molecules -> organisms` hierarchy. Place feature-specific components in `molecules/[PageName]/` directories.

## Critical Integration Points

**Supabase Storage**: Bucket name is `christianity-crisis-center-files` (private), accessed via service role in API routes only.

**Admin Protection**: Middleware only runs on `/admin/*` - don't add auth checks elsewhere without updating middleware config.

**File Validation**: Always validate on client before upload (5MB limit, PDF/DOC/DOCX only for CVs).

When modifying forms, maintain existing Zod patterns. For admin features, ensure proper session handling in layout component. All database operations should respect RLS policies.