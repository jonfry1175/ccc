import { Metadata } from "next";

const baseUrl = "https://mpsjakarta.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Marina Prima Sukses | Agen Resmi MSC Cruises Jakarta",
    template: "%s | Marina Prima Sukses",
  },
  description:
    "Marina Prima Sukses - Agen resmi MSC Cruises Jakarta. Merekrut kru Indonesia untuk kapal pesiar internasional. Daftar sekarang!",
  keywords: [
    "Marina Prima Sukses",
    "MPS Jakarta",
    "Agen manning MSC Cruises",
    "Lowongan kerja kapal pesiar Indonesia",
    "Perekrutan kru Indonesia",
    "Perekrutan maritim Jakarta",
    "Karir kapal pesiar",
    "MSC Cruises Indonesia",
    "Pelaut Indonesia",
    "Lowongan kapal pesiar",
  ],
  authors: [{ name: "Marina Prima Sukses" }],
  creator: "Marina Prima Sukses",
  publisher: "Marina Prima Sukses",
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
    siteName: "Marina Prima Sukses",
    title: "Marina Prima Sukses | Agen Resmi MSC Cruises Jakarta",
    description:
      "Bergabunglah dengan MSC Cruises bersama Marina Prima Sukses Jakarta. Perekrutan & pelatihan profesional untuk kru kapal pesiar Indonesia. Daftar hari ini!",
    images: [
      {
        url: "/images/Logo/christianity-crisis-center.png",
        width: 1200,
        height: 630,
        alt: "Logo Marina Prima Sukses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Prima Sukses | Agen Manning MSC Cruises",
    description:
      "Agen manning resmi MSC Cruises di Indonesia - menghubungkan kru yang berkualitas dengan peluang global",
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
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
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
  name: "Marina Prima Sukses",
  alternateName: "MPS Jakarta",
  url: baseUrl,
  logo: `${baseUrl}/images/Logo/christianity-crisis-center.png`,
  description: "Agen Manning Resmi MSC Cruises di Jakarta, Indonesia",
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
  name: "Marina Prima Sukses",
  description:
    "Agen perekrutan maritim yang berspesialisasi dalam penempatan kru kapal pesiar",
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
