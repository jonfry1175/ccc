"use client";

import Footer from "@/components/atoms/Footer";
import Navbar from "@/components/atoms/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  MessageCircle,
  PhoneCall,
  Mail,
} from "lucide-react";

const contactChannels = [
  {
    title: "Konsultasi WhatsApp",
    description:
      "Respons dalam 1×24 jam untuk pertanyaan program, jadwal open house, dan kebutuhan informasi cepat.",
    icon: MessageCircle,
    primaryAction: {
      label: "Chat via WhatsApp",
      href: "https://wa.me/62214354959",
    },
    secondaryText: "+62 21-435-4959",
  },
  {
    title: "Surat Elektronik",
    description:
      "Kirimkan proposal kemitraan, permintaan publikasi lowongan, atau koordinasi pelayanan komunitas.",
    icon: Mail,
    primaryAction: {
      label: "Email Kami",
      href: "mailto:info@mpsjakarta.com",
    },
    secondaryText: "info@mpsjakarta.com",
  },
  {
    title: "Telepon Kantor",
    description:
      "Tim front desk kami siap membantu konfirmasi kehadiran pelatihan dan jadwal wawancara kandidat.",
    icon: PhoneCall,
    primaryAction: {
      label: "Hubungi Sekarang",
      href: "tel:+62214354959",
    },
    secondaryText: "(021) 435 4959",
  },
];

const visitingInfo = [
  {
    icon: MapPin,
    title: "Alamat Pusat Komunitas",
    description:
      "Lorong 101 Timur No. 73, Kec. Koja, Jakarta Utara, 14220. Silakan hubungi kami sebelum berkunjung agar tim siap menyambut.",
    link: {
      href: "https://maps.app.goo.gl/FXgSJvUu21Ht2JH38",
      label: "Lihat Lokasi di Google Maps",
    },
  },
  {
    icon: CalendarDays,
    title: "Jam Operasional",
    description:
      "Senin–Jumat 09.00–17.00 WIB untuk layanan administrasi. Kelas pelatihan berlangsung sesuai jadwal yang diinformasikan via WhatsApp.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-offWhite text-textBlack">
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-primaryRed py-24 text-primaryWhite">
          <Image
            src="/images/crew/7.jpeg"
            alt="Tim layanan CCC menyambut peserta"
            fill
            sizes="100vw"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-primaryRed/70 to-black/10" />

          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-center md:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primaryWhite/70">
              Hubungi Kami
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Mari Terhubung dengan Tim Christianity Crisis Center
            </h1>
            <p className="text-base text-primaryWhite/85 md:text-lg">
              Kami siap mendampingi kebutuhan Anda—mulai dari konsultasi karier,
              kolaborasi pelayanan, hingga dukungan bagi keluarga pekerja.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="bg-primaryWhite text-primaryRed hover:bg-primaryWhite/90"
                asChild
              >
                <Link
                  href="https://wa.me/62214354959"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat WhatsApp Sekarang
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primaryWhite text-primaryWhite hover:bg-primaryWhite/10"
                asChild
              >
                <Link href="mailto:info@mpsjakarta.com">Kirim Email</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <Card
                key={channel.title}
                className="border-primaryRed/15 bg-primaryWhite shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primaryRed/10 text-primaryRed">
                    <channel.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <CardTitle className="text-xl text-textBlack">
                    {channel.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-darkGray/80">
                    {channel.description}
                  </p>
                  <Button
                    className="bg-primaryRed text-primaryWhite hover:bg-secondaryRed"
                    asChild
                  >
                    <Link
                      href={channel.primaryAction.href}
                      target={
                        channel.primaryAction.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        channel.primaryAction.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                    >
                      {channel.primaryAction.label}
                    </Link>
                  </Button>
                  <p className="text-sm font-medium text-darkGray">
                    {channel.secondaryText}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primaryWhite py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-2 md:px-6">
            {visitingInfo.map((info) => (
              <Card
                key={info.title}
                className="border-primaryRed/15 bg-offWhite/70 shadow-sm"
              >
                <CardHeader className="flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primaryRed/10 text-primaryRed">
                    <info.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <CardTitle className="text-xl text-textBlack">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-darkGray/80">{info.description}</p>
                  {info.link ? (
                    <Button
                      variant="outline"
                      className="border-primaryRed text-primaryRed hover:bg-primaryRed/10"
                      asChild
                    >
                      <Link
                        href={info.link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {info.link.label}
                      </Link>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            ))}
            <Card className="border-primaryRed/20 bg-primaryWhite shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-textBlack">
                  Agenda Pertemuan Komunitas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-darkGray/80">
                <p>
                  Setiap bulan kami mengadakan sesi orientasi peserta baru,
                  kelas persiapan keberangkatan, dan kelompok doa keluarga
                  pekerja. Tim kami akan mengirim undangan melalui email dan
                  WhatsApp.
                </p>
                <p>
                  Jika Anda ingin menghadirkan CCC sebagai narasumber di gereja
                  atau komunitas Anda, silakan hubungi kami minimal dua minggu
                  sebelum acara.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-r from-darkGray via-darkGray/95 to-darkGray py-16 text-primaryWhite">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center md:px-6">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Butuh Bantuan Mendesak?
            </h2>
            <p className="text-base text-primaryWhite/80 md:text-lg">
              Jika ada anggota keluarga yang sedang menjalani proses penempatan
              atau menghadapi keadaan darurat, hubungi hotline kami kapan saja.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="bg-primaryRed text-primaryWhite hover:bg-secondaryRed"
                asChild
              >
                <Link href="tel:+62214354959">
                  Hotline CCC (+62) 21-435-4959
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primaryWhite text-primaryWhite hover:bg-primaryWhite/10"
                asChild
              >
                <Link href="mailto:info@mpsjakarta.com">
                  info@mpsjakarta.com
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
