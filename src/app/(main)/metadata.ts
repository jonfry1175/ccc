import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const homePageMetadata: Metadata = generatePageMetadata({
  title: "Beranda",
  description:
    "Marina Prima Sukses Jakarta - agen resmi MSC Cruises. Bergabunglah dengan program rekrutmen & pelatihan kru kapal pesiar kami hari ini!",
  path: "/",
});

export const applyNowMetadata: Metadata = generatePageMetadata({
  title: "Daftar Sekarang",
  description:
    "Lamar pekerjaan kapal pesiar MSC atau bermitra dengan Marina Prima Sukses Jakarta. Agen rekrutmen maritim terkemuka Indonesia.",
  path: "/apply-now",
});

export const candidateMetadata: Metadata = generatePageMetadata({
  title: "Aplikasi Kandidat",
  description:
    "Lamar posisi kru MSC Cruises dengan Marina Prima Sukses. Pekerjaan housekeeping, F&B, deck & engine. Mulai karir kapal pesiar Anda hari ini!",
  path: "/apply-now/candidate",
});

export const partnerMetadata: Metadata = generatePageMetadata({
  title: "Aplikasi Mitra",
  description:
    "Bermitra dengan Marina Prima Sukses - agen resmi MSC Cruises Jakarta. Bergabunglah dengan jaringan rekrutmen maritim premier Indonesia.",
  path: "/apply-now/partner",
});

export const trainingCenterMetadata: Metadata = generatePageMetadata({
  title: "Pusat Pelatihan",
  description:
    "Pusat Pelatihan Marina Prima Sukses Jakarta - Dapatkan sertifikasi untuk karir kapal pesiar. Pelatihan maritim profesional untuk kru Indonesia.",
  path: "/training-center",
});

export const articlesMetadata: Metadata = generatePageMetadata({
  title: "Artikel & Berita",
  description:
    "Update pekerjaan kapal pesiar terbaru & berita maritim dari Marina Prima Sukses Jakarta. Peluang MSC Cruises untuk kru Indonesia.",
  path: "/articles",
});