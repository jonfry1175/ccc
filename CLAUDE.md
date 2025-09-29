# CLAUDE.md - Development Guide

Panduan untuk Claude Code (claude.ai/code) saat bekerja dengan kode di repository ini.

## Perintah Development Umum

```bash
# Development
npm run dev              # Start development server di localhost:3000
npm run build            # Build untuk production
npm run start            # Start production server
npm run lint             # Run ESLint

# Setup Admin
npm run create-admin     # Buat admin user (admin@christianitycrisis.com / ccc2025admin)

# Database (jika menggunakan Supabase CLI lokal)
supabase start           # Start local Supabase instance
supabase db reset        # Reset database dan run migrations
```

## Arsitektur Platform

Aplikasi Next.js 15 untuk **Christianity Crisis Center** - platform komunitas yang membantu anggota komunitas mendapatkan pekerjaan sesuai bidang dan kemampuan mereka. Fitur utama meliputi aplikasi pekerjaan, pendaftaran mitra perusahaan, dan dashboard administrasi.

### Tech Stack

- **Framework**: Next.js 15.x dengan React 19.x (menggunakan fitur terbaru)
- **Language**: TypeScript dengan strict mode
- **Database**: Supabase (PostgreSQL dengan Row Level Security)
- **Styling**: Tailwind CSS + komponen Shadcn UI
- **Forms**: React Hook Form + validasi Zod
- **File Storage**: Supabase Storage

### Pola Arsitektur Utama

1. **Struktur Komponen**: Pola atomic design
   - `atoms/` - Elemen UI dasar (Footer, Navbar, Cards)
   - `molecules/` - Komponen spesifik fitur yang dikelompokkan per halaman
   - `organisms/` - Komponen level halaman
   - `ui/` - Komponen Shadcn UI

2. **Struktur Routing**:
   - `(main)/` - Route publik (home, articles, applications)
   - `admin/` - Route yang diproteksi (dashboard, candidates, partners)
   - Middleware melindungi route `/admin/*` dengan Supabase auth

3. **Skema Database**:
   - Tabel `candidate` - Aplikasi pekerjaan dengan upload file (CV, sertifikat)
   - Tabel `partner` - Aplikasi kemitraan perusahaan
   - Keduanya menggunakan integer ID dengan timestamps

4. **Tujuan Platform**:
   - Membantu anggota komunitas Christianity Crisis Center mendapat pekerjaan
   - Mencocokkan keahlian kandidat dengan kebutuhan mitra perusahaan
   - Menyediakan platform yang aman dan mudah digunakan untuk job matching

5. **Pola File Upload**:
   - API route di `/api/upload` menangani upload file server-side
   - Menggunakan Supabase service role key untuk upload tanpa autentikasi
   - File disimpan di bucket `christianity-crisis-center-files`

6. **Alur Autentikasi**:
   - Email/password auth melalui Supabase
   - Middleware mengecek session untuk admin routes
   - Kredensial admin statis dibuat via script

### Important Configuration

- **Environment Variables** (required in `.env.local`):

  ```
  NEXT_PUBLIC_SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY
  SUPABASE_SERVICE_ROLE_KEY
  ```

- **TypeScript**: Path alias `@/*` maps to `./src/*`

- **Tailwind**: Custom theme with navy/gold colors and marquee animations

### Panduan Development

1. **Form Validation**: Pertahankan pola validasi Zod schema saat memodifikasi forms
2. **File Upload**: Validasi type dan size file sebelum upload ke Supabase storage
3. **Admin Routes**: Semua route admin memerlukan pengecekan autentikasi di middleware
4. **Component Pattern**: Gunakan server components secara default, client components hanya saat dibutuhkan
5. **Design Pattern**: Ikuti pola atomic design yang sudah ada untuk komponen baru
6. **Community Focus**: Pastikan semua fitur baru mendukung tujuan pemberdayaan komunitas
7. **Accessibility**: Pertimbangkan aksesibilitas untuk semua pengguna komunitas
8. **Indonesian Language**: Prioritaskan bahasa Indonesia untuk UI yang menghadap user
