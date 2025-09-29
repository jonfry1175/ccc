import type { Metadata } from "next";
import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {
  defaultMetadata,
  organizationSchema,
  recruitmentSchema,
} from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = defaultMetadata;

// Import font dengan variabel yang jelas
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Tambahkan bobot font yang ingin digunakan
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Tambahkan bobot font yang ingin digunakan
});

// Layout Utama
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="recruitment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(recruitmentSchema),
          }}
        />
      </head>
      <body className={`${sora.variable} ${poppins.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
