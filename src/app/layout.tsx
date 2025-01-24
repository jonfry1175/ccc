import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import Head from "next/head";
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
      <Head>
        <GoogleTagManager gtmId="AW-11565537272" />
      </Head>
      <body className={`${geist.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
