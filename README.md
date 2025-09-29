# Christianity Crisis Center - Community Job Matching Platform

Platform komunitas untuk membantu sesama anggota komunitas mendapatkan pekerjaan sesuai dengan bidang dan kemampuan masing-masing.

## Tujuan Platform

Platform ini dirancang khusus untuk membantu anggota komunitas Christianity Crisis Center dalam:
- Mencari pekerjaan yang sesuai dengan keahlian dan minat mereka
- Menghubungkan pencari kerja dengan perusahaan mitra
- Memberikan pelatihan dan pengembangan keterampilan
- Membangun jaringan profesional dalam komunitas

## Fitur Utama

- **Pendaftaran Kandidat**: Formulir aplikasi pekerjaan dengan upload CV dan sertifikat
- **Pendaftaran Mitra**: Formulir untuk perusahaan yang ingin bermitra dalam penyediaan lapangan kerja
- **Dashboard Admin**: Panel administrasi untuk mengelola aplikasi dan memonitor penempatan kerja
- **Sistem Autentikasi**: Keamanan akses untuk administrator
- **Pencocokan Pekerjaan**: Sistem untuk mencocokkan keahlian kandidat dengan kebutuhan pekerjaan

## Teknologi yang Digunakan

- **Frontend**: Next.js 15.x dengan React 19.x
- **Bahasa**: TypeScript untuk type safety
- **Styling**: Tailwind CSS dengan komponen Shadcn UI
- **Database**: Supabase (PostgreSQL dengan Row Level Security)
- **Autentikasi**: Supabase Auth
- **Storage**: Supabase Storage untuk file upload
- **Deployment**: Vercel (recommended)

## Pengaturan Development Lokal

1. **Clone repository**
```bash
git clone [repository-url]
cd project-mps-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
Buat file `.env.local` dengan konfigurasi berikut:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. **Jalankan development server**
```bash
npm run dev
```

5. **Akses aplikasi**
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Konfigurasi Database (Supabase)

### Skema Database

**Tabel: candidate (Data Pencari Kerja)**
- `id` (integer, primary key) - ID unik kandidat
- `created_at` (timestamp) - Waktu pendaftaran
- `first_name` (text) - Nama depan
- `last_name` (text) - Nama belakang
- `date_of_birth` (timestamp) - Tanggal lahir
- `gender` (text) - Jenis kelamin
- `passport_id` (text) - Nomor identitas/paspor
- `email` (text) - Email kandidat
- `whatsapp_number` (text) - Nomor WhatsApp
- `department` (text) - Bidang pekerjaan yang diminati
- `position` (text) - Posisi yang dilamar
- `cv_url` (text) - URL file CV
- `certificate_url` (text) - URL file sertifikat

**Tabel: partner (Data Mitra Perusahaan)**
- `id` (integer, primary key) - ID unik mitra
- `created_at` (timestamp) - Waktu pendaftaran
- `first_name` (text) - Nama depan PIC
- `last_name` (text) - Nama belakang PIC
- `email` (text) - Email perusahaan
- `phone_number` (text) - Nomor telepon
- `company_name` (text) - Nama perusahaan
- `company_website` (text) - Website perusahaan
- `country` (text) - Negara/lokasi
- `message` (text) - Pesan/deskripsi kebutuhan

### Konfigurasi Storage

1. **Buat bucket storage**
   - Buat bucket bernama `christianity-crisis-center-files` di Supabase Storage
   - Set access level ke "private" untuk keamanan

2. **Setup storage policies**
   Buka Supabase Dashboard > Storage > Policies dan tambahkan:

   **Policy untuk Admin (authenticated uploads)**
   - Type: `INSERT`
   - Allowed roles: `authenticated`
   - Policy definition: `true`

   **Policy untuk Admin (viewing files)**
   - Type: `SELECT`
   - Allowed roles: `authenticated`
   - Policy definition: `true`

3. **API uploads untuk form submissions**
   - Service role key digunakan di API route untuk handle uploads dari user yang belum login
   - Memungkinkan kandidat upload CV dan sertifikat tanpa perlu registrasi

### Setup Autentikasi

1. **Aktifkan Email/Password authentication** di project Supabase Anda

2. **Buat admin user** dengan menjalankan:
```bash
npm run create-admin
```

3. **Kredensial Admin Default**
   - Email: `admin@christianitycrisis.com`
   - Password: `ccc2025admin`

   > **Penting**: Ganti password default ini setelah deployment untuk keamanan

## Deployment

1. Deploy to Vercel or your preferred hosting service
2. Set the environment variables in your hosting platform:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

3. After deployment, create the admin user by running the create-admin script:

```bash
npm run create-admin
```

## Akses Admin Dashboard

Akses dashboard admin di `/admin/login` dengan kredensial:

- **Email**: `admin@christianitycrisis.com`
- **Password**: `ccc2025admin`

### Fitur Admin Dashboard

- **Dashboard Overview**: Statistik jumlah kandidat dan mitra
- **Manajemen Kandidat**: Lihat, filter, dan kelola aplikasi pekerjaan
- **Manajemen Mitra**: Kelola perusahaan mitra dan lowongan kerja
- **Download CV & Sertifikat**: Akses file yang diupload kandidat
- **Export Data**: Export data untuk analisis lebih lanjut

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
