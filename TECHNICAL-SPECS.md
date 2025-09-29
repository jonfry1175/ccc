# Spesifikasi Teknis - Christianity Crisis Center Job Platform

## Ringkasan Proyek

**Platform:** Christianity Crisis Center Community Job Matching Platform  
**Tujuan:** Membantu sesama anggota komunitas mendapatkan pekerjaan sesuai dengan bidang dan kemampuan masing-masing  
**Framework:** Next.js 15 dengan TypeScript  
**Database:** Supabase (PostgreSQL)  
**Deployment:** Vercel

## Arsitektur Sistem

### Frontend Architecture

```
src/
├── app/                    # App Router Next.js 15
│   ├── (main)/            # Public routes
│   │   ├── page.tsx       # Homepage
│   │   ├── apply-now/     # Job application pages
│   │   ├── articles/      # Job tips & community news
│   │   └── training-center/ # Skill development info
│   ├── admin/             # Protected admin routes
│   │   ├── dashboard/     # Overview statistics
│   │   ├── candidates/    # Candidate management
│   │   └── partners/      # Partner company management
│   └── api/               # API endpoints
│       └── upload/        # File upload handler
├── components/            # UI Components (Atomic Design)
│   ├── atoms/            # Basic elements
│   ├── molecules/        # Feature components
│   ├── organisms/        # Page sections
│   └── ui/               # Shadcn components
├── hooks/                # Custom React hooks
└── lib/                  # Utilities & configurations
```

### Database Schema

#### Candidates Table

```sql
CREATE TABLE candidate (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE,
  gender TEXT CHECK (gender IN ('male', 'female')),
  passport_id TEXT UNIQUE,
  email TEXT UNIQUE NOT NULL,
  whatsapp_number TEXT,
  department TEXT, -- Job category/field
  position TEXT,   -- Specific role applied for
  cv_url TEXT,     -- Supabase storage URL
  certificate_url TEXT, -- Supabase storage URL

  -- Additional fields for community platform
  skills TEXT[],   -- Array of skills
  experience_level TEXT CHECK (experience_level IN ('fresh', 'junior', 'mid', 'senior')),
  location_preference TEXT,
  salary_expectation INTEGER,
  availability TEXT CHECK (availability IN ('immediate', 'one_month', 'negotiable')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'matched', 'hired', 'rejected'))
);
```

#### Partners Table

```sql
CREATE TABLE partner (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  first_name TEXT NOT NULL, -- PIC name
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone_number TEXT,
  company_name TEXT NOT NULL,
  company_website TEXT,
  country TEXT DEFAULT 'Indonesia',
  message TEXT, -- Description of hiring needs

  -- Additional fields for partner management
  company_size TEXT CHECK (company_size IN ('startup', 'small', 'medium', 'large')),
  industry TEXT, -- Industry category
  verified BOOLEAN DEFAULT FALSE,
  active_jobs INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'active', 'suspended'))
);
```

#### Job Postings Table (Future Enhancement)

```sql
CREATE TABLE job_posting (
  id SERIAL PRIMARY KEY,
  partner_id INTEGER REFERENCES partner(id),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT[],
  location TEXT,
  salary_range_min INTEGER,
  salary_range_max INTEGER,
  employment_type TEXT CHECK (employment_type IN ('full_time', 'part_time', 'contract', 'internship')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'paused', 'closed'))
);
```

## Fitur Utama dan Implementasi

### 1. Candidate Registration System

**Route:** `/apply-now/candidate`  
**Component:** `src/components/molecules/ApplyPage/CandidatePage/index.tsx`

**Fitur:**

- Form registration dengan validasi Zod
- Upload CV dan sertifikat ke Supabase Storage
- Dropdown untuk department dan position
- Country code selection untuk WhatsApp
- Auto-generate WhatsApp number formatting

**Validasi:**

```typescript
const formSchema = z.object({
  first_name: z.string().min(2, "Nama depan minimal 2 karakter"),
  last_name: z.string().min(2, "Nama belakang minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  whatsapp_number: z.string().min(10, "Nomor WhatsApp tidak valid"),
  department: z.string().min(1, "Pilih department"),
  position: z.string().min(1, "Pilih posisi"),
  cv: z.instanceof(File).optional(),
  certificate: z.instanceof(File).optional(),
});
```

### 2. Partner Registration System

**Route:** `/apply-now/partner`  
**Component:** `src/components/molecules/ApplyPage/PartnerPage/index.tsx`

**Fitur:**

- Company profile registration
- Contact person information
- Business verification (manual process)
- Integration untuk posting job (future)

### 3. Admin Dashboard

**Route:** `/admin/dashboard`  
**Authentication:** Required (Supabase Auth)

**Metrics:**

- Total candidates registered
- Total partners verified
- Recent applications
- Success rate statistics

**Components:**

```typescript
// Dashboard Cards
<Card>
  <CardHeader>
    <CardTitle>Total Kandidat</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">{totalCandidates}</div>
    <p className="text-xs text-muted-foreground">
      Aplikasi kerja yang masuk
    </p>
  </CardContent>
</Card>
```

### 4. File Upload System

**API Route:** `/api/upload`  
**Storage:** Supabase Storage bucket `christianity-crisis-center-files`

**Security:**

- File type validation (PDF, DOC, DOCX untuk CV)
- File size limit (max 5MB)
- Unique filename generation
- Server-side validation

```typescript
const allowedTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const maxSize = 5 * 1024 * 1024; // 5MB
```

## Security Implementation

### 1. Authentication & Authorization

- **Admin Routes Protection:** Middleware menggunakan Supabase session
- **Row Level Security (RLS):** Database policies untuk data isolation
- **API Protection:** Service role key untuk uploads

### 2. Data Validation

- **Client-side:** Zod schemas untuk form validation
- **Server-side:** Additional validation di API routes
- **File Upload:** Type dan size validation

### 3. Environment Variables

```bash
# Required untuk production
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Performance Optimizations

### 1. Next.js Features

- **Server Components:** Default untuk better performance
- **Image Optimization:** Next.js Image component untuk gallery
- **Static Generation:** ISG untuk content pages
- **Route Preloading:** Automatic untuk navigation

### 2. Database Optimizations

- **Indexing:** Pada email, created_at, dan status fields
- **Connection Pooling:** Supabase built-in pooling
- **Query optimization:** Select specific fields only

### 3. File Storage

- **CDN:** Supabase Storage dengan CDN built-in
- **Compression:** Client-side image compression sebelum upload
- **Lazy Loading:** Untuk galleries dan file previews

## Deployment Strategy

### 1. Vercel Deployment

```bash
# Production deployment
npm run build
vercel --prod

# Environment variables setup
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
```

### 2. Database Migration

```sql
-- Setup RLS policies
ALTER TABLE candidate ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner ENABLE ROW LEVEL SECURITY;

-- Admin access policy
CREATE POLICY "Admin can access all data" ON candidate
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
```

### 3. Storage Bucket Setup

```sql
-- Create storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('christianity-crisis-center-files', 'christianity-crisis-center-files', false);

-- Set storage policies
CREATE POLICY "Admin can upload files" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'christianity-crisis-center-files');
```

## Monitoring dan Analytics

### 1. Error Tracking

- **Console Logging:** Structured logging untuk debugging
- **Error Boundaries:** React error boundaries untuk graceful failures
- **Supabase Monitoring:** Database performance monitoring

### 2. User Analytics

- **Application Metrics:** Jumlah aplikasi per hari/minggu/bulan
- **Success Rate:** Percentage kandidat yang mendapat pekerjaan
- **User Journey:** Tracking dari registration ke hiring

### 3. Performance Monitoring

- **Core Web Vitals:** LCP, FID, CLS monitoring
- **Database Performance:** Query execution time
- **API Response Times:** Upload dan form submission metrics

## Future Enhancements

### Phase 1: Basic Job Matching

- Algorithm untuk matching skills dengan job requirements
- Email notifications untuk candidates dan partners
- Basic reporting dashboard

### Phase 2: Advanced Features

- Mobile app (React Native)
- WhatsApp integration untuk notifications
- Advanced filtering dan search

### Phase 3: Community Features

- Community forum untuk job seekers
- Skill assessment tests
- Career counseling booking system

### Phase 4: AI Integration

- AI-powered resume analysis
- Automated job matching
- Interview preparation chatbot

---

**Catatan Teknis:**  
Platform ini dirancang dengan fokus pada kemudahan penggunaan, skalabilitas, dan keamanan data. Setiap fitur dikembangkan dengan mempertimbangkan kebutuhan spesifik komunitas Christianity Crisis Center dalam membantu anggotanya mencari pekerjaan yang sesuai dengan keahlian dan panggilan hidup mereka.
