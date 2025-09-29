import { Metadata } from "next";

const baseUrl = "https://mpsjakarta.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Marina Prima Sukses | Official MSC Cruises Manning Agency Jakarta",
    template: "%s | Marina Prima Sukses"
  },
  description: "Marina Prima Sukses - Official MSC Cruises manning agency Jakarta. Recruiting Indonesian crew for international cruise ships. Apply now!",
  keywords: [
    "Marina Prima Sukses",
    "MPS Jakarta",
    "MSC Cruises manning agency",
    "cruise ship jobs Indonesia",
    "Indonesian crew recruitment",
    "maritime recruitment Jakarta",
    "cruise ship careers",
    "MSC Cruises Indonesia",
    "pelaut Indonesia",
    "lowongan kapal pesiar"
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
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: baseUrl,
    siteName: "Marina Prima Sukses",
    title: "Marina Prima Sukses | Official MSC Cruises Manning Agency Jakarta",
    description: "Join MSC Cruises with Marina Prima Sukses Jakarta. Professional recruitment & training for Indonesian cruise ship crew. Apply today!",
    images: [
      {
        url: "/images/Logo/christianity-crisis-center.png",
        width: 1200,
        height: 630,
        alt: "Marina Prima Sukses Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Prima Sukses | MSC Cruises Manning Agency",
    description: "Indonesia's authorized MSC Cruises manning agency - connecting qualified crew with global opportunities",
    images: ["/images/Logo/christianity-crisis-center.png"]
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-US": baseUrl,
      "id-ID": `${baseUrl}/id`
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/manifest.json"
};

export function generatePageMetadata({
  title,
  description,
  path = "",
  images = []
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
      images: images.length > 0 ? images : defaultMetadata.openGraph?.images
    },
    twitter: {
      title,
      description,
      images: images.length > 0 ? images.map(img => img.url) : defaultMetadata.twitter?.images
    },
    alternates: {
      canonical: url
    }
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marina Prima Sukses",
  "alternateName": "MPS Jakarta",
  "url": baseUrl,
  "logo": `${baseUrl}/images/Logo/christianity-crisis-center.png`,
  "description": "Official MSC Cruises Manning Agency in Jakarta, Indonesia",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta",
    "addressRegion": "DKI Jakarta",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "recruitment",
    "email": "admin@mpsjakarta.com",
    "availableLanguage": ["English", "Indonesian"]
  },
  "sameAs": [
    "https://www.mpsjakarta.com"
  ]
};

export const recruitmentSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "Marina Prima Sukses",
  "description": "Maritime recruitment agency specializing in cruise ship crew placement",
  "url": baseUrl,
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "knowsAbout": [
    "Cruise ship recruitment",
    "Maritime training",
    "Crew placement",
    "MSC Cruises careers"
  ]
};