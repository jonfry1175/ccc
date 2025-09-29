import { homePageMetadata } from "./metadata";
import HomePageClient from "./home-page-client";
import Script from "next/script";

export const metadata = homePageMetadata;

// Rich structured data for better SEO
const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Marina Prima Sukses",
    "alternateName": "MPS Jakarta",
    "url": "https://mpsjakarta.com",
    "logo": "https://mpsjakarta.com/images/Logo/christianity-crisis-center.png",
    "description": "Official MSC Cruises Manning Agency in Jakarta, Indonesia. Recruiting Indonesian crew for international cruise ships since establishment.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "addressCountry": "ID",
      "postalCode": "12000"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "recruitment",
      "email": "admin@mpsjakarta.com",
      "availableLanguage": ["English", "Indonesian"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "knowsAbout": [
      "MSC Cruises recruitment",
      "Cruise ship jobs",
      "Maritime training",
      "Indonesian crew placement"
    ]
  },
  jobPosting: {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Cruise Ship Crew - Multiple Positions Available",
    "description": "Join MSC Cruises through Marina Prima Sukses. We are recruiting for Housekeeping, F&B, Kitchen, Deck, Engine, and Entertainment positions.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Marina Prima Sukses",
      "sameAs": "https://mpsjakarta.com"
    },
    "jobLocation": {
      "@type": "Place",
      "name": "MSC Cruises Fleet (International)"
    },
    "employmentType": "FULL_TIME",
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 1200,
        "maxValue": 5000,
        "unitText": "MONTH"
      }
    },
    "datePosted": new Date().toISOString().split('T')[0],
    "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu Marina Prima Sukses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marina Prima Sukses adalah agen resmi MSC Cruises di Jakarta yang merekrut crew Indonesia untuk kapal pesiar internasional."
        }
      },
      {
        "@type": "Question",
        "name": "What positions are available for Indonesian crew?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recruit for Housekeeping, Food & Beverage, Galley, Deck, Engine, Entertainment, and Guest Services departments."
        }
      },
      {
        "@type": "Question",
        "name": "Apa syarat untuk bekerja di kapal pesiar MSC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Syarat dasar: Paspor valid, kemampuan bahasa Inggris, pengalaman kerja relevan, sertifikat STCW, dan lulus tes kesehatan."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the contract for cruise ship work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical contracts range from 6-10 months depending on position, with 2 months vacation between contracts."
        }
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="organization-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.organization)
        }}
      />
      <Script
        id="job-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.jobPosting)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.faq)
        }}
      />
      
      {/* SEO-optimized content for crawlers */}
      <div className="sr-only">
        <h1>Marina Prima Sukses - Official MSC Cruises Manning Agency Jakarta Indonesia</h1>
        <p>Marina Prima Sukses (MPS Jakarta) adalah agen perekrutan resmi MSC Cruises di Indonesia. Kami menghubungkan pekerja Indonesia berbakat dengan peluang karir menarik di kapal pesiar mewah di seluruh dunia.</p>
        
        <h2>Lowongan Kerja Kapal Pesiar untuk WNI</h2>
        <p>Bergabunglah dengan ribuan crew Indonesia sukses yang bekerja di kapal MSC Cruises. Kami menawarkan layanan rekrutmen, pelatihan, dan penempatan kerja.</p>
        
        <h3>Departemen yang Tersedia:</h3>
        <ul>
          <li>Housekeeping dan Akomodasi</li>
          <li>Food and Beverage Service</li>
          <li>Kitchen dan Galley</li>
          <li>Deck Department</li>
          <li>Engine Department</li>
          <li>Entertainment dan Guest Services</li>
        </ul>
        
        <h3>Mengapa Memilih Marina Prima Sukses?</h3>
        <ul>
          <li>Agen resmi MSC Cruises di Indonesia</li>
          <li>Proses rekrutmen transparan</li>
          <li>Training center berstandar internasional</li>
          <li>Pendampingan hingga keberangkatan</li>
          <li>Gaji kompetitif dalam USD</li>
        </ul>
      </div>
      
      {/* Client Component */}
      <HomePageClient />
    </>
  );
}
