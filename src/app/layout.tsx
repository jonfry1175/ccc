import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
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
      <GoogleTagManager gtmId="AW-11565537272" />
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
