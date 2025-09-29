"use client";

import Footer from "@/components/atoms/Footer";
import Navbar from "@/components/atoms/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Clock10,
  FileCheck2,
  GraduationCap,
  UsersRound,
} from "lucide-react";

const departments = [
  {
    name: "Bar",
    description:
      "Posisi: Kepala Bartender, Bartender, Asisten Bartender, Bar Boy, Pelayan Bar",
    image: "/images/crew/4.jpeg",
  },
  {
    name: "Dek",
    description:
      "Posisi: Pelaut AB, Pelaut Biasa, Petugas Pemadam Kebakaran, Tukang Kayu, Tukang Jok, Operator Limbah",
    image: "/images/crew/10.jpeg",
  },
  {
    name: "Mesin",
    description: "Posisi: Tukang Ledeng, Fitter, Oiler, Wiper",
    image: "/images/crew/8.jpeg",
  },
  {
    name: "Dapur",
    description:
      "Posisi: CDP, DCDP, Commis, Commis II, Commis III, Utilitas Dapur, Steward Dapur",
    image: "/images/crew/2.jpeg",
  },
  {
    name: "Hotel",
    description:
      "Posisi: Pramugara Kabin, Pelari Lantai, Pembersih Hotel, Petugas Kamar, Pembersih Kru, Penjaga Linen",
    image: "/images/crew/6.jpeg",
  },
  {
    name: "Restoran",
    description:
      "Posisi: Kepala Pelayan, Pelayan, Asisten Pelayan, Petugas Prasmanan, Penjaga Anggur, Petugas Mess",
    image: "/images/crew/12.jpeg",
  },
  {
    name: "Spa",
    description: "Posisi: Terapis Pijat, Spesialis Kuku",
    image: "/images/crew/14.jpeg",
  },
];

const highlights: Array<{
  icon: LucideIcon;
  label: string;
  value: string;
  description: string;
}> = [
  {
    icon: UsersRound,
    label: "Profesional Siap Berlayar",
    value: "2.500+",
    description:
      "Talenta perhotelan yang terlatih dan tersertifikasi internasional",
  },
  {
    icon: GraduationCap,
    label: "Program Pelatihan",
    value: "15",
    description: "Kurikulum khusus kapal pesiar dengan pelatih berpengalaman",
  },
  {
    icon: BriefcaseBusiness,
    label: "Kemitraan Global",
    value: "40+",
    description: "Perusahaan mitra di Asia, Timur Tengah, dan Eropa",
  },
];

const processSteps: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: FileCheck2,
    title: "Lengkapi Profil",
    description:
      "Kirimkan data terbaru Anda dan unggah dokumen pendukung secara aman.",
  },
  {
    icon: GraduationCap,
    title: "Pelatihan Intensif",
    description:
      "Ikuti program persiapan kerja dan simulasi layanan sesuai standar internasional.",
  },
  {
    icon: Clock10,
    title: "Penempatan Cepat",
    description:
      "Tim kami menghubungkan Anda dengan peluang kapal pesiar dan hospitality terbaik.",
  },
];

export default function ApplyPage() {
  return (
    <motion.div
      key="applyPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full overflow-hidden bg-offWhite"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-primaryRed/20 via-primaryGold/10 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-[-10rem] h-96 w-96 rounded-full bg-gradient-to-tr from-primaryGold/20 via-primaryRed/10 to-transparent blur-3xl"
      />

      <motion.section
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Navbar />
      </motion.section>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-16 text-center md:px-10 md:pb-32 md:pt-24">
        <motion.section
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <span className="inline-flex items-center rounded-full bg-white/80 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primaryRed shadow-md backdrop-blur">
            Karir
          </span>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-darkGray md:text-5xl md:leading-tight">
              Wujudkan Karier Maritim dan Perhotelan Kelas Dunia
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
              Temukan peluang kerja di kapal pesiar, hotel, dan spa premium.
              Kami mendampingi Anda sejak pendaftaran hingga penempatan kerja di
              luar negeri.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primaryRed hover:bg-primaryRed/90"
            >
              <Link href="/apply-now/candidate">Lamar sebagai Kandidat</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primaryRed/30 bg-white/90 text-darkGray shadow-md backdrop-blur transition hover:border-primaryRed hover:bg-white"
            >
              <Link href="/apply-now/partner">Menjadi Mitra</Link>
            </Button>
          </div>
          <div className="grid w-full max-w-4xl gap-4 text-left md:grid-cols-3">
            {highlights.map(({ icon: Icon, label, value, description }) => (
              <Card
                key={label}
                className="bg-white/90 shadow-lg shadow-primaryRed/10 ring-1 ring-white/40 backdrop-blur"
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primaryRed/10 text-primaryRed">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                      {label}
                    </p>
                    <CardTitle className="mt-1 text-3xl text-darkGray">
                      {value}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-slate-600">
                  {description}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-darkGray md:text-3xl">
              Pilih departemen pilihan Anda
            </h2>
            <p className="text-sm text-slate-600 md:text-base">
              Jelajahi peluang yang disesuaikan dengan keahlian Anda. Setiap
              peran dilengkapi dengan pelatihan khusus dan dukungan penempatan
              internasional.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {departments.map((department, index) => (
              <motion.div
                key={department.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Card className="relative flex h-full min-h-[480px] flex-col overflow-hidden border-0 bg-white text-left shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primaryRed/20">
                  {/* Animated top border */}
                  <motion.span
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primaryRed via-primaryGold to-primaryRed"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  />

                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primaryRed/20 via-primaryGold/20 to-primaryRed/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Enhanced image container */}
                  <div className="relative aspect-[5/4] w-full overflow-hidden">
                    <Image
                      src={department.image}
                      alt={department.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Multi-layered overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darkGray/60 via-darkGray/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Department name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="rounded-lg bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg"
                      >
                        <h3 className="text-lg font-bold text-darkGray">
                          Departemen {department.name}
                        </h3>
                      </motion.div>
                    </div>
                  </div>

                  {/* Enhanced content area */}
                  <CardContent className="flex flex-1 flex-col gap-6 p-8">
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        <CardTitle className="text-2xl font-bold text-darkGray group-hover:text-primaryRed transition-colors duration-300">
                          {department.name}
                        </CardTitle>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        <CardDescription className="text-base leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                          {department.description}
                        </CardDescription>
                      </motion.div>
                    </div>

                    {/* Enhanced button */}
                    <motion.div
                      className="mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primaryRed to-primaryRed/90 py-4 text-white shadow-lg transition-all duration-300 hover:from-primaryRed/90 hover:to-primaryRed hover:shadow-xl hover:shadow-primaryRed/30"
                      >
                        <Link href="/apply-now/candidate">
                          <motion.span
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-2 font-semibold"
                          >
                            Lamar Sekarang
                            <motion.span
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              →
                            </motion.span>
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>

                  {/* Floating elements */}
                  <div className="pointer-events-none absolute top-4 right-4">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className="h-3 w-3 rounded-full bg-gradient-to-r from-primaryGold to-primaryRed opacity-60"
                    />
                  </div>

                  <div className="pointer-events-none absolute bottom-4 right-4">
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-2 w-2 rounded-full bg-primaryGold/60"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="space-y-6 text-left"
        >
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center justify-center rounded-full bg-primaryRed/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primaryRed">
              proses rekrutmen
            </span>
            <h2 className="text-2xl font-semibold text-darkGray md:text-3xl">
              Pendampingan penuh hingga Anda siap berangkat
            </h2>
            <p className="text-sm text-slate-600 md:text-base">
              Kami memandu setiap kandidat melalui tiga tahapan utama yang
              memastikan kesiapan profesional dan dokumen sesuai standar
              internasional.
            </p>
          </div>

          <ol className="relative mx-auto max-w-4xl space-y-10 pt-2 before:absolute before:left-6 before:top-8 before:bottom-6 before:w-[2px] before:bg-gradient-to-b before:from-primaryRed/40 before:via-primaryGold/30 before:to-transparent before:content-[''] md:before:left-7">
            {processSteps.map(({ icon: Icon, title, description }, index) => {
              const stepNumber = String(index + 1).padStart(2, "0");

              return (
                <li key={title} className="group relative pl-14 md:pl-16">
                  <span className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-primaryRed/20">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryRed text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </span>

                  <Card className="relative overflow-hidden border border-slate-200 bg-white/95 shadow-sm transition duration-300 hover:border-primaryRed/40 hover:shadow-xl">
                    <CardHeader className="space-y-3 p-6 md:space-y-4 md:p-7">
                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primaryRed/80">
                        Langkah {stepNumber}
                      </span>
                      <CardTitle className="text-xl text-darkGray md:text-2xl">
                        {title}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-600 md:text-base">
                        {description}
                      </CardDescription>
                    </CardHeader>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primaryRed/20 via-primaryGold/30 to-primaryRed/20" />
                  </Card>
                </li>
              );
            })}
          </ol>
        </motion.section>
      </main>

      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Footer />
      </motion.section>
    </motion.div>
  );
}
