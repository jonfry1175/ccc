# Rencana Terjemahan Bahasa Indonesia - Christianity Crisis Center Platform

## 📋 Ringkasan

Dokumen ini berisi rencana komprehensif untuk menerjemahkan semua copywriting dari Bahasa Inggris ke Bahasa Indonesia di seluruh halaman dan komponen website Christianity Crisis Center.

## 🎯 Tujuan

- Menerjemahkan 100% teks berbahasa Inggris ke Bahasa Indonesia
- Memastikan konsistensi bahasa di seluruh platform
- Memprioritaskan aksesibilitas untuk komunitas Indonesia

---

## 📁 HALAMAN UTAMA (Main Pages)

### 1. Homepage (`/`)

**File**: `src/app/(main)/page.tsx`
**Teks yang perlu diterjemahkan**:

- ✅ **Sudah Indonesia**: "Mengapa Memilih Marina Prima Sukses?"
- ✅ **Sudah Indonesia**: List items sudah dalam bahasa Indonesia

**File**: `src/app/(main)/home-page-client.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ "HELLO!" → "HALO!"
- ❌ "WELCOME TO MARINA PRIMA SUKSES" → "SELAMAT DATANG DI MARINA PRIMA SUKSES"
- ❌ "MSC Cruises Hiring Agency in Jakarta - Bridging Indonesian Workers to Global Shores" → "Agen Rekrutmen MSC Cruises di Jakarta - Menghubungkan Pekerja Indonesia ke Pantai Global"
- ❌ "Business Profile" → "Profil Bisnis"
- ❌ "Apply Now" → "Daftar Sekarang"
- ❌ "Training Center" → "Pusat Pelatihan"

### 2. Apply Now Page (`/apply-now`)

**File**: `src/app/(main)/apply-now/page.tsx`
**Status**: Menggunakan komponen ApplyPage - perlu cek komponen

### 3. Candidate Application (`/apply-now/candidate`)

**File**: `src/components/molecules/ApplyPage/CandidatePage/index.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ "Position" → "Posisi"
- ❌ "Select Deck & Engine Position" → "Pilih Posisi Deck & Engine"
- ❌ "Upload Your CV" → "Unggah CV Anda"
- ❌ Position labels: "Cabin Steward" → "Pelayan Kabin", "Hotel Cleaner" → "Pembersih Hotel", dll.
- ❌ Department names: "housekeeping" → "tata graha", "food-beverage" → "makanan-minuman"

### 4. Partner Application (`/apply-now/partner`)

**File**: `src/components/molecules/ApplyPage/PartnerPage/index.tsx`
**Status**: Perlu review komponen untuk teks Inggris

### 5. Training Center (`/training-center`)

**File**: `src/app/(main)/training-center/page.tsx`
**Status**: Menggunakan komponen TrainingPage - perlu cek komponen

**File**: `src/components/organism/TrainingPage/index.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ "Work and Safety Training" → "Pelatihan Kerja dan Keselamatan"

### 6. Articles Page (`/articles`)

**File**: `src/app/(main)/articles/page.tsx`
**Status**: Menggunakan komponen ArticlePage - perlu cek komponen

---

## 🧩 KOMPONEN UTAMA (Main Components)

### 1. Navigation (Navbar)

**File**: `src/components/atoms/Navbar/index.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ "Home" → "Beranda"
- ❌ "Apply Now" → "Daftar Sekarang"
- ❌ "Training Center" → "Pusat Pelatihan"
- ❌ "Training-center" (mobile) → "Pusat-pelatihan"

### 2. Footer

**File**: `src/components/atoms/Footer/index.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ "Privacy Policy" → "Kebijakan Privasi"
- ❌ "Terms of Service" → "Syarat Layanan"
- ✅ **Sudah Indonesia**: Company description sudah dalam bahasa Indonesia

### 3. Contact Form

**File**: `src/components/molecules/Homepage/Contact/index.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ "Username" → "Nama Pengguna"
- ❌ "Email" → "Email" (bisa tetap sama)
- ❌ "Message" → "Pesan"
- ❌ "Your message here..." → "Tulis pesan Anda di sini..."
- ❌ "Submit" → "Kirim"
- ❌ "john doe" → "nama lengkap"
- ❌ "you@example.com" → "anda@contoh.com"
- ❌ "email must be a valid email." → "email harus berupa email yang valid."
- ❌ "Success submit" → "Berhasil mengirim"

### 4. About Section

**File**: `src/components/molecules/Homepage/About/index.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ "Our mission" → "Misi Kami"
- ❌ "Our mission is to be the global partner of choice for hospitality businesses in need of a reliable and skilled manpower. By fostering cross-cultural collaboration and delivering tailor-made manpower solutions, we aim to contribute to the success of our clients worldwide." → "Misi kami adalah menjadi mitra global pilihan untuk bisnis perhotelan yang membutuhkan tenaga kerja yang andal dan terampil. Dengan memupuk kolaborasi lintas budaya dan memberikan solusi tenaga kerja yang disesuaikan, kami bertujuan untuk berkontribusi pada kesuksesan klien kami di seluruh dunia."

### 5. Impact Section

**File**: `src/components/molecules/Homepage/Impact/index.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ "Our Impact" → "Dampak Kami"

---

## 📊 DATA FILES

### 1. Article Data

**File**: `src/lib/DataArticle.ts`
**Teks yang perlu diterjemahkan**:

- ❌ Article categories: "News" → "Berita", "Tips" → "Tips" (bisa tetap sama)
- ❌ English article titles dan content (ada beberapa artikel dalam bahasa Inggris)
- ✅ **Sudah Indonesia**: Beberapa artikel sudah dalam bahasa Indonesia

### 2. Training Data

**File**: `src/lib/DataTraining.ts`
**Status**: ✅ Hanya berisi data gambar, tidak ada teks

### 3. Other Data Files

**Files**: `DataCarousel.ts`, `DataCertified.ts`, `DataCrew.ts`, `DataPartner.ts`
**Status**: Perlu review individual untuk teks Inggris

---

## 🔍 METADATA & SEO

### 1. Page Metadata

**File**: `src/app/(main)/metadata.ts`
**Teks yang perlu diterjemahkan**:

- ❌ "Home" → "Beranda"
- ❌ "Marina Prima Sukses Jakarta - MSC Cruises official manning agency. Join our cruise ship crew recruitment & training programs today!" → "Marina Prima Sukses Jakarta - agen resmi MSC Cruises. Bergabunglah dengan program rekrutmen & pelatihan kru kapal pesiar kami hari ini!"
- ❌ "Apply Now" → "Daftar Sekarang"
- ❌ "Apply for MSC cruise ship jobs or partner with Marina Prima Sukses Jakarta. Indonesia's leading maritime recruitment agency." → "Lamar pekerjaan kapal pesiar MSC atau bermitra dengan Marina Prima Sukses Jakarta. Agen rekrutmen maritim terkemuka Indonesia."
- ❌ "Candidate Application" → "Aplikasi Kandidat"
- ❌ "Apply for MSC Cruises crew positions with Marina Prima Sukses. Housekeeping, F&B, deck & engine jobs. Start your cruise career today!" → "Lamar posisi kru MSC Cruises dengan Marina Prima Sukses. Pekerjaan housekeeping, F&B, deck & engine. Mulai karir kapal pesiar Anda hari ini!"
- ❌ "Partner Application" → "Aplikasi Mitra"
- ❌ "Partner with Marina Prima Sukses - MSC Cruises official agency Jakarta. Join Indonesia's premier maritime recruitment network." → "Bermitra dengan Marina Prima Sukses - agen resmi MSC Cruises Jakarta. Bergabunglah dengan jaringan rekrutmen maritim premier Indonesia."
- ❌ "Training Center" → "Pusat Pelatihan"
- ❌ "Marina Prima Sukses Training Center Jakarta - Get certified for cruise ship careers. Professional maritime training for Indonesian crew." → "Pusat Pelatihan Marina Prima Sukses Jakarta - Dapatkan sertifikasi untuk karir kapal pesiar. Pelatihan maritim profesional untuk kru Indonesia."
- ❌ "Articles & News" → "Artikel & Berita"
- ❌ "Latest cruise ship job updates & maritime news from Marina Prima Sukses Jakarta. MSC Cruises opportunities for Indonesian crew." → "Update pekerjaan kapal pesiar terbaru & berita maritim dari Marina Prima Sukses Jakarta. Peluang MSC Cruises untuk kru Indonesia."

### 2. SEO Configuration

**File**: `src/lib/seo.ts`
**Teks yang perlu diterjemahkan**:

- ❌ Title: "Marina Prima Sukses | Official MSC Cruises Manning Agency Jakarta" → "Marina Prima Sukses | Agen Resmi MSC Cruises Jakarta"
- ❌ Description: "Marina Prima Sukses - Official MSC Cruises manning agency Jakarta. Recruiting Indonesian crew for international cruise ships. Apply now!" → "Marina Prima Sukses - Agen resmi MSC Cruises Jakarta. Merekrut kru Indonesia untuk kapal pesiar internasional. Daftar sekarang!"
- ❌ Keywords: Beberapa keywords Inggris perlu diterjemahkan
- ❌ OpenGraph title dan description
- ❌ Schema.org structured data

---

## 🏢 ADMIN SECTION

### 1. Admin Dashboard

**Files**: `src/app/admin/**/*.tsx`
**Status**: Perlu review untuk teks Inggris di halaman admin

### 2. Admin Forms dan Tables

**Status**: Perlu review komponen admin untuk labels, buttons, dan messages

---

## 📄 STRUCTURED DATA & SCHEMA

### 1. Homepage Schema

**File**: `src/app/(main)/page.tsx`
**Teks yang perlu diterjemahkan**:

- ❌ FAQ questions dan answers yang masih dalam bahasa Inggris
- ❌ "What positions are available for Indonesian crew?" → "Posisi apa saja yang tersedia untuk kru Indonesia?"
- ❌ "We recruit for Housekeeping, Food & Beverage, Galley, Deck, Engine, Entertainment, and Guest Services departments." → "Kami merekrut untuk departemen Housekeeping, Food & Beverage, Galley, Deck, Engine, Entertainment, dan Guest Services."
- ❌ "How long is the contract for cruise ship work?" → "Berapa lama kontrak untuk pekerjaan kapal pesiar?"
- ❌ "Typical contracts range from 6-10 months depending on position, with 2 months vacation between contracts." → "Kontrak tipikal berkisar 6-10 bulan tergantung posisi, dengan 2 bulan liburan antar kontrak."

### 2. Organization Schema

**File**: `src/app/layout.tsx`
**Status**: Perlu review schema JSON-LD untuk teks Inggris

---

## 🚨 VALIDASI & ERROR MESSAGES

### 1. Form Validation Messages

**Files**: Berbagai komponen form
**Status**: Perlu terjemahkan pesan error validasi Zod ke bahasa Indonesia

### 2. Toast Messages

**Status**: Perlu review semua toast/notification messages

---

## ⚡ PRIORITAS IMPLEMENTASI

### Fase 1 (Prioritas Tinggi)

1. **Navigation (Navbar)** - User interface utama
2. **Homepage client component** - Landing page utama
3. **Contact form** - Interaksi utama user
4. **Metadata & SEO** - Search engine optimization

### Fase 2 (Prioritas Sedang)

1. **Apply Now pages** - Form aplikasi
2. **Footer** - Informasi perusahaan
3. **About section** - Informasi perusahaan
4. **Article data** - Content marketing

### Fase 3 (Prioritas Rendah)

1. **Admin sections** - Interface admin
2. **Error messages** - Pesan validasi
3. **Structured data** - SEO advanced
4. **Training components** - Halaman pelatihan

---

## 📝 CATATAN IMPLEMENTASI

### Konsistensi Terminologi

- "Apply Now" → "Daftar Sekarang" (konsisten di semua tempat)
- "Training Center" → "Pusat Pelatihan"
- "Cruise Ship" → "Kapal Pesiar"
- "Manning Agency" → "Agen Tenaga Kerja" atau "Agen Rekrutmen"
- "Crew" → "Kru"

### File yang Tidak Perlu Diubah

- UI component files (shadcn/ui)
- Configuration files (Tailwind, PostCSS, etc.)
- Package.json scripts (tetap bahasa Inggris untuk standar)

### Rekomendasi Tambahan

1. Buat file constant untuk teks yang sering digunakan
2. Pertimbangkan implementasi i18n untuk scalability
3. Review dengan native Indonesian speaker untuk quality assurance
4. Test semua form dan validasi setelah terjemahan

---

## ✅ STATUS TRACKING

**Total Komponen yang Perlu Diterjemahkan**: ~50+ locations
**Estimasi Waktu**: 3-5 hari kerja
**Prioritas**: Bahasa Indonesia untuk user-facing, English acceptable untuk technical/admin

---

_Dokumen ini dibuat untuk memastikan tidak ada teks berbahasa Inggris yang terlewat dalam proses terjemahan ke Bahasa Indonesia._
