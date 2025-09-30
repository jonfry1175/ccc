import { Metadata } from "next";

const baseUrl = "https://mpsjakarta.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Christianity Crisis Center | Platform Karier Komunitas",
    template: "%s | Christianity Crisis Center",
  },
  description:
    "Christianity Crisis Center - Platform job matching komunitas Kristen dengan pelatihan, mentoring, dan akses peluang kerja terpercaya.",
  keywords: [
    "Christianity Crisis Center",
    "CCC Jakarta",
    "Pusat karier komunitas Kristen",
    "Pelatihan kerja jemaat",
    "Pemberdayaan ekonomi gereja",
    "Lowongan kerja komunitas",
    "Program pelatihan CCC",
    "Mentoring karier Kristen",
    "Komunitas kerja gereja",
    "Pelayanan sosial gereja",
  ],
  authors: [{ name: "Christianity Crisis Center" }],
  creator: "Christianity Crisis Center",
  publisher: "Christianity Crisis Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: baseUrl,
    siteName: "Christianity Crisis Center",
    title: "Christianity Crisis Center | Platform Karier Komunitas",
    description:
      "Jelajahi jaringan peluang kerja, pelatihan, dan program pemberdayaan komunitas bersama Christianity Crisis Center.",
    images: [
      {
        url: "/images/Logo/christianity-crisis-center.png",
        width: 1200,
        height: 630,
        alt: "Logo Christianity Crisis Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christianity Crisis Center | Platform Karier Komunitas",
    description:
      "Melayani komunitas Kristen dengan akses pekerjaan, pelatihan, dan dukungan profesional berkelanjutan.",
    images: ["/images/Logo/christianity-crisis-center.png"],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "id-ID": baseUrl,
      "en-US": `${baseUrl}/en`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export function generatePageMetadata({
  title,
  description,
  path = "",
  images = [],
}: {
  title: string;
  description: string;
  path?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
}): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: images.length > 0 ? images : defaultMetadata.openGraph?.images,
    },
    twitter: {
      title,
      description,
      images:
        images.length > 0
          ? images.map((img) => img.url)
          : defaultMetadata.twitter?.images,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Christianity Crisis Center",
  alternateName: "CCC Jakarta",
  url: baseUrl,
  logo: `${baseUrl}/images/Logo/christianity-crisis-center.png`,
  description:
    "Platform pemberdayaan karier komunitas Kristen di Jakarta, Indonesia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "recruitment",
    email: "admin@mpsjakarta.com",
    availableLanguage: ["Inggris", "Indonesia"],
  },
  sameAs: ["https://www.mpsjakarta.com"],
};

export const recruitmentSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Christianity Crisis Center",
  description:
    "Program perekrutan dan pemberdayaan karier bagi komunitas Kristen",
  url: baseUrl,
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  knowsAbout: [
    "Perekrutan kapal pesiar",
    "Pelatihan maritim",
    "Penempatan kru",
    "Karir MSC Cruises",
  ],
};
