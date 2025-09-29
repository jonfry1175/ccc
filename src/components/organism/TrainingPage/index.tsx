"use client";
import CarouselComponent from "@/components/atoms/CarouselImage";
import Navbar from "@/components/atoms/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trainings } from "@/lib/DataTraining";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface TrainingPageProps {
  onBackToHome?: () => void;
}

export default function TrainingPage({ onBackToHome }: TrainingPageProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const ProgramsTraining = [
    {
      id: 1,
      title:
        "Kursus Komunikasi dan Bahasa di lingkungan perhotelan, dek & mesin",
      description:
        "Perkuat kemampuan komunikasi kru front office, housekeeping, dan operasional kapal dengan praktik bilingual yang relevan."
    },
    {
      id: 2,
      title: "Program Keunggulan Perhotelan & Tata Graha",
      description:
        "Optimalkan standar kamar dan area publik melalui SOP kebersihan, efisiensi kerja, dan hospitality mindset."
    },
    {
      id: 3,
      title: "Pelatihan Bartending & Layanan Pelanggan",
      description:
        "Bangun service attitude kelas premium dengan kurikulum mixology, upselling, dan penanganan tamu profesional."
    },
    {
      id: 4,
      title: "Pelatihan Kerja dan Keselamatan",
      description:
        "Berikan pengalaman simulasi untuk mitigasi risiko, keselamatan kerja, dan kepatuhan regulasi industri."
    },
    {
      id: 5,
      title: "Teknik Spa & Pijat Profesional",
      description:
        "Kuasi teknik terapi tubuh dengan modul anatomi, etika layanan, dan pengalaman spa khas MPS."
    }
  ];

  const heroHighlights = [
    { label: "Instruktur Industri", value: "20+" },
    { label: "Jam Praktikum", value: "120" },
    { label: "Alumni Terserap", value: "92%" }
  ];

  return (
    <div className="bg-offWhite text-textBlack">
      <Navbar onHomeClick={onBackToHome} />

      <section className="relative isolate overflow-hidden bg-darkGray">
        <Image
          src="/images/imagetraining.jpg"
          alt="Peserta pelatihan MPS sedang mengikuti sesi kelas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/30" />
        <div className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col justify-center gap-10 px-4 py-24 text-primaryWhite">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex items-center rounded-full bg-primaryRed/60 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
              MPS Training Center
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Divisi Pelatihan MPS: Mencetak Talenta Hospitality Unggul
            </h1>
            <p className="text-base text-primaryWhite/90 md:text-lg">
              Fasilitas pelatihan terpadu kami dirancang untuk memperkuat keahlian
              profesional kru perhotelan dan maritim melalui program intensif,
              praktik langsung, serta bimbingan instruktur berpengalaman.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-primaryRed hover:bg-secondaryRed">
                Jelajahi Kurikulum
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primaryWhite/40 bg-transparent text-primaryWhite hover:bg-primaryWhite/10"
              >
                Hubungi Tim Kami
              </Button>
            </div>
          </div>
          <div className="grid gap-4 text-center sm:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-xl border border-primaryWhite/20 bg-primaryWhite/10 p-4 backdrop-blur"
              >
                <p className="text-3xl font-semibold text-primaryWhite">
                  {highlight.value}
                </p>
                <p className="text-sm uppercase tracking-wide text-primaryWhite/80">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-[1] -mt-12 rounded-t-3xl bg-primaryWhite pb-16 pt-20 shadow-[0_-30px_80px_-40px_rgba(0,0,0,0.25)]"
        ref={sectionRef}
      >
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -20 }
            }
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-textBlack md:text-4xl">
              5 Kursus Pelatihan Teratas Kami
            </h2>
            <p className="mt-3 text-base text-darkGray/80">
              Kurikulum terbaru kami menekankan praktik langsung, standar operasi
              internasional, dan kesiapan kerja untuk proyek hospitality dan
              kebaharian.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ProgramsTraining.map((program, index) => {
              const animationProps = shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
                    transition: { duration: 0.5, delay: index * 0.1 }
                  };

              return (
                <motion.div key={program.id} {...animationProps} className="h-full">
                  <Card className="flex h-full flex-col border-primaryRed/10 shadow-sm transition-shadow hover:shadow-lg">
                    <CardContent className="flex flex-1 flex-col gap-4 p-6">
                      <span className="flex items-center gap-3 text-sm font-semibold text-primaryRed">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primaryRed/10 text-base">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        Modul Unggulan
                      </span>
                      <h3 className="text-xl font-semibold text-textBlack">
                        {program.title}
                      </h3>
                      <p className="text-sm text-darkGray/80">
                        {program.description}
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primaryRed">
                        <span>Akses silabus & jadwal</span>
                        <span aria-hidden="true">→</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-lightGray py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-textBlack md:text-4xl">
                Bintang Baru Program Kami
              </h2>
              <p className="text-base text-darkGray/80 md:max-w-xl">
                Ikuti keseruan simulasi kelas, praktik lapangan, dan cerita
                keberhasilan para peserta yang sudah merasakan peningkatan
                karier mereka bersama MPS.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-primaryRed text-primaryRed hover:bg-primaryRed/10"
            >
              Lihat Semua Dokumentasi
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[11, 12].map((videoId) => (
              <Card key={videoId} className="overflow-hidden border-none shadow-md">
                <CardContent className="space-y-4 p-0">
                  <div className="relative aspect-[4/5] w-full bg-black">
                    <video
                      src={`/images/training/${videoId}.mp4`}
                      controls
                      className="h-full w-full object-cover"
                      aria-label={`Video highlight pelatihan ${videoId}`}
                    />
                  </div>
                  <div className="space-y-2 px-6 pb-6 pt-4">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primaryRed">
                      Video Highlight
                    </p>
                    <p className="text-base text-darkGray">
                      Dokumentasi praktik peserta angkatan terbaru di fasilitas
                      premium MPS.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primaryRed">
                    Galeri Foto
                  </p>
                  <h3 className="text-xl font-semibold text-textBlack">
                    Ekosistem Belajar Yang Aktif
                  </h3>
                  <p className="text-sm text-darkGray/80">
                    Rasakan atmosfer training center kami melalui momen-momen
                    terbaik peserta, mentor, dan fasilitas modern.
                  </p>
                </div>
                <div className="flex-1 overflow-hidden rounded-lg border border-primaryRed/10">
                  <CarouselComponent
                    images={trainings.map((training) => ({
                      src: training.image,
                      alt: `Kegiatan pelatihan ${training.id}`
                    }))}
                    loop={false}
                    dragFree
                    slidesToScroll={1}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
