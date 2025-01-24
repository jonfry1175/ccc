import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap"
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Meta Solusi Digital - Digital Transformation Partner",
  description: "Solusi Digital Yang Mengakselerasi Kesuksesan Bisnis Anda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','AW-11565537272');`
        }}
      />
      <body className={`${geist.variable} ${poppins.variable} antialiased`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=AW-11565537272" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
