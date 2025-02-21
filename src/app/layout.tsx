import type { Metadata } from "next";
import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Marina Prima Sukses",
  applicationName: "Marina Prima Sukses",
  keywords: "Marina Prima Sukses",
  manifest: "/manifest.json",
  description: "Marina Prima Sukses",
  icons: {
    icon: [
      {
        url: "/assets/iconweb.png",
        sizes: "32x32",
        type: "image/png"
      }
    ],
    shortcut: ["/assets/iconweb.png"]
  }
};

// Import font dengan variabel yang jelas
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"] // Tambahkan bobot font yang ingin digunakan
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"] // Tambahkan bobot font yang ingin digunakan
});

// Layout Utama
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${poppins.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
