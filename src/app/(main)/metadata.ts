import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const homePageMetadata: Metadata = generatePageMetadata({
  title: "Beranda",
  description:
    "Christianity Crisis Center Jakarta - platform job matching komunitas Kristen dengan pelatihan dan pendampingan karier terintegrasi.",
  path: "/",
});

export const applyNowMetadata: Metadata = generatePageMetadata({
  title: "Daftar Sekarang",
  description:
    "Ajukan diri pada peluang kerja komunitas atau jalin kemitraan pelayanan bersama Christianity Crisis Center Jakarta.",
  path: "/apply-now",
});

export const candidateMetadata: Metadata = generatePageMetadata({
  title: "Aplikasi Kandidat",
  description:
    "Daftarkan profil Anda untuk program karier Christianity Crisis Center. Dukungan pelatihan, mentoring, dan lowongan yang relevan.",
  path: "/apply-now/candidate",
});

export const partnerMetadata: Metadata = generatePageMetadata({
  title: "Aplikasi Mitra",
  description:
    "Bangun kolaborasi pemberdayaan komunitas bersama Christianity Crisis Center Jakarta dan perluas dampak pelayanan Anda.",
  path: "/apply-now/partner",
});

export const trainingCenterMetadata: Metadata = generatePageMetadata({
  title: "Pusat Pelatihan",
  description:
    "Pusat Pelatihan Christianity Crisis Center Jakarta - Program peningkatan keterampilan dan sertifikasi kerja bagi anggota komunitas.",
  path: "/training-center",
});

export const articlesMetadata: Metadata = generatePageMetadata({
  title: "Artikel & Berita",
  description:
    "Wawasan karier, kisah inspiratif, dan berita komunitas terbaru dari Christianity Crisis Center Jakarta.",
  path: "/articles",
});
