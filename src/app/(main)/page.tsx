import { homePageMetadata } from "./metadata";
import HomePageClient from "./home-page-client";
import Script from "next/script";

export const metadata = homePageMetadata;

// Rich structured data for better SEO
const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Christianity Crisis Center",
    alternateName: "CCC Jakarta",
    url: "https://mpsjakarta.com",
    logo: "https://mpsjakarta.com/images/Logo/christianity-crisis-center.png",
    description:
      "Platform pemberdayaan karier komunitas Kristen di Jakarta, Indonesia. Menghubungkan jemaat dengan pelatihan dan peluang kerja bermakna.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
      postalCode: "12000",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "career services",
      email: "admin@mpsjakarta.com",
      availableLanguage: ["Inggris", "Indonesia"],
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    knowsAbout: [
      "Perekrutan MSC Cruises",
      "Pekerjaan kapal pesiar",
      "Pelatihan maritim",
      "Penempatan kru Indonesia",
    ],
  },
  jobPosting: {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Kru Kapal Pesiar - Tersedia Banyak Posisi",
    description:
      "Bergabunglah dengan jaringan karier Christianity Crisis Center. Kami mendampingi anggota komunitas untuk posisi hospitality, layanan publik, pendidikan, dan sosial.",
    hiringOrganization: {
      "@type": "Organization",
      name: "Christianity Crisis Center",
      sameAs: "https://mpsjakarta.com",
    },
    jobLocation: {
      "@type": "Place",
      name: "Armada MSC Cruises (Internasional)",
    },
    employmentType: "FULL_TIME",
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: 1200,
        maxValue: 5000,
        unitText: "MONTH",
      },
    },
    datePosted: new Date().toISOString().split("T")[0],
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu Christianity Crisis Center?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Christianity Crisis Center adalah platform pemberdayaan karier komunitas Kristen di Jakarta yang menyediakan pelatihan, mentoring, dan akses peluang kerja.",
        },
      },
      {
        "@type": "Question",
        name: "Posisi apa saja yang tersedia untuk kru Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami mendukung berbagai sektor seperti hospitality, kesehatan, pendidikan, layanan sosial, dan administrasi komunitas.",
        },
      },
      {
        "@type": "Question",
        name: "Apa syarat untuk bekerja di kapal pesiar MSC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Persyaratan umum meliputi komitmen pelayanan, kesiapan mengikuti pelatihan, dan kelengkapan dokumen kerja sesuai sektor yang dituju.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama kontrak untuk pekerjaan kapal pesiar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Durasi kontrak bergantung pada mitra kerja sama; tim CCC membantu menilai setiap tawaran agar sesuai dengan situasi keluarga dan pelayanan Anda.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="organization-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.organization),
        }}
      />
      <Script
        id="job-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.jobPosting),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.faq),
        }}
      />

      {/* SEO-optimized content for crawlers */}
      <div className="sr-only">
        <h1>
          Christianity Crisis Center - Platform Karier Komunitas Kristen Jakarta
          Indonesia
        </h1>
        <p>
          Christianity Crisis Center (CCC Jakarta) adalah pusat pemberdayaan
          komunitas Kristen di Indonesia. Kami menghubungkan anggota jemaat
          berbakat dengan peluang karier yang penuh makna di berbagai sektor
          pelayanan dan profesional.
        </p>

        <h2>Peluang Karier untuk Komunitas Kristen Indonesia</h2>
        <p>
          Temukan berbagai lowongan kerja komunitas, pelayanan sosial, dan
          industri hospitality. Kami menawarkan pendampingan karier, pelatihan,
          serta penempatan kerja yang transparan.
        </p>

        <h3>Departemen yang Tersedia:</h3>
        <ul>
          <li>Hospitality dan Akomodasi</li>
          <li>Layanan Publik & Administrasi</li>
          <li>Kesehatan & Pendampingan</li>
          <li>Pendidikan & Pelatihan</li>
          <li>Layanan Sosial Gereja</li>
          <li>Ekonomi Kreatif & UMKM</li>
        </ul>

        <h3>Mengapa Memilih Christianity Crisis Center?</h3>
        <ul>
          <li>Program karier yang terintegrasi dengan pelayanan gereja</li>
          <li>Pendampingan spiritual dan profesional</li>
          <li>Training center dengan fasilitator berpengalaman</li>
          <li>Jejaring mitra kerja yang terpercaya</li>
          <li>Dukungan keluarga dan konseling karier</li>
        </ul>
      </div>

      {/* Client Component */}
      <HomePageClient />
    </>
  );
}
