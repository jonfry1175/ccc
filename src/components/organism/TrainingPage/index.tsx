"use client";
import CarouselComponent from "@/components/atoms/CarouselImage";
import Navbar from "@/components/atoms/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trainings } from "@/lib/DataTraining";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface TrainingPageProps {
  onBackToHome?: () => void;
}

export default function TrainingPage({ onBackToHome }: TrainingPageProps) {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const areStatsInView = useInView(statsRef, { once: true, amount: 0.8 });
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const heroY = useTransform(
    scrollY,
    [0, 500],
    [0, shouldReduceMotion ? 0 : -150],
  );
  const heroOpacity = useTransform(
    scrollY,
    [0, 300],
    [1, shouldReduceMotion ? 1 : 0.3],
  );

  // Animated counter hook
  const useAnimatedCounter = (targetValue: string, isVisible: boolean) => {
    const [count, setCount] = useState(0);
    const numericTarget = parseInt(targetValue.replace(/\D/g, ""), 10) || 0;

    useEffect(() => {
      if (!isVisible || shouldReduceMotion) {
        setCount(numericTarget);
        return;
      }

      const duration = 2000;
      const startTime = Date.now();

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(easeOutQuart * numericTarget));

        if (progress >= 1) {
          clearInterval(timer);
          setCount(numericTarget);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, numericTarget, shouldReduceMotion]);

    return targetValue.includes("%")
      ? `${count}%`
      : targetValue.includes("+")
        ? `${count}+`
        : count.toString();
  };

  const ProgramsTraining = [
    {
      id: 1,
      title:
        "Kursus Komunikasi dan Bahasa di lingkungan perhotelan, dek & mesin",
      description:
        "Perkuat kemampuan komunikasi kru front office, housekeeping, dan operasional kapal dengan praktik bilingual yang relevan.",
    },
    {
      id: 2,
      title: "Program Keunggulan Perhotelan & Tata Graha",
      description:
        "Optimalkan standar kamar dan area publik melalui SOP kebersihan, efisiensi kerja, dan hospitality mindset.",
    },
    {
      id: 3,
      title: "Pelatihan Bartending & Layanan Pelanggan",
      description:
        "Bangun service attitude kelas premium dengan kurikulum mixology, upselling, dan penanganan tamu profesional.",
    },
    {
      id: 4,
      title: "Pelatihan Kerja dan Keselamatan",
      description:
        "Berikan pengalaman simulasi untuk mitigasi risiko, keselamatan kerja, dan kepatuhan regulasi industri.",
    },
    {
      id: 5,
      title: "Teknik Spa & Pijat Profesional",
      description:
        "Kuasi teknik terapi tubuh dengan modul anatomi, etika layanan, dan pengalaman spa khas CCC.",
    },
  ];

  const heroHighlights = [
    { label: "Instruktur Industri", value: "20+" },
    { label: "Jam Praktikum", value: "120" },
    { label: "Alumni Terserap", value: "92%" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : 0.3,
      },
    },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.05,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        },
    tap: shouldReduceMotion ? {} : { scale: 0.98 },
  };

  return (
    <div className="bg-offWhite text-textBlack">
      <Navbar onHomeClick={onBackToHome} />

      <section
        className="relative isolate overflow-hidden bg-darkGray"
        ref={heroRef}
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="/images/imagetraining.jpg"
            alt="Peserta pelatihan CCC sedang mengikuti sesi kelas"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/30" />

        <motion.div
          className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col justify-center gap-10 px-4 py-24 text-primaryWhite"
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <div className="max-w-3xl space-y-6">
            <motion.div variants={itemVariants}>
              <motion.p
                className="inline-flex items-center rounded-full bg-primaryRed/60 px-4 py-1 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                        backgroundColor: "rgba(227, 30, 36, 0.8)",
                      }
                }
                transition={{ type: "spring", stiffness: 300 }}
              >
                CCC Training Center
              </motion.p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-tight md:text-5xl"
            >
              Divisi Pelatihan CCC: Mencetak Talenta Hospitality Unggul
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base text-primaryWhite/90 md:text-lg"
            >
              Fasilitas pelatihan terpadu kami dirancang untuk memperkuat
              keahlian profesional kru perhotelan dan maritim melalui program
              intensif, praktik langsung, serta bimbingan instruktur
              berpengalaman.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              className="flex flex-wrap gap-3"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="bg-primaryRed hover:bg-secondaryRed shadow-lg hover:shadow-xl transition-shadow"
                >
                  Jelajahi Kurikulum
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primaryWhite/40 bg-transparent text-primaryWhite hover:bg-primaryWhite/10 backdrop-blur-sm"
                >
                  Hubungi Tim Kami
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="grid gap-4 text-center sm:grid-cols-3"
            variants={containerVariants}
            ref={statsRef}
          >
            {heroHighlights.map((highlight, index) => {
              const animatedValue = useAnimatedCounter(
                highlight.value,
                areStatsInView,
              );

              return (
                <motion.div
                  key={highlight.label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 40,
                      rotateX: shouldReduceMotion ? 0 : -15,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: {
                        duration: shouldReduceMotion ? 0 : 0.8,
                        delay: shouldReduceMotion ? 0 : index * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    },
                  }}
                  className="rounded-xl border border-primaryWhite/20 bg-primaryWhite/10 p-4 backdrop-blur"
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          borderColor: "rgba(255, 255, 255, 0.3)",
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          },
                        }
                  }
                >
                  <motion.p
                    className="text-3xl font-semibold text-primaryWhite"
                    initial={{ scale: shouldReduceMotion ? 1 : 0.5 }}
                    animate={
                      areStatsInView
                        ? { scale: 1 }
                        : { scale: shouldReduceMotion ? 1 : 0.5 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: shouldReduceMotion ? 0 : 200,
                      delay: shouldReduceMotion ? 0 : index * 0.1 + 0.3,
                    }}
                  >
                    {animatedValue}
                  </motion.p>
                  <p className="text-sm uppercase tracking-wide text-primaryWhite/80">
                    {highlight.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
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
                : {
                    opacity: shouldReduceMotion ? 1 : 0,
                    y: shouldReduceMotion ? 0 : -20,
                  }
            }
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-textBlack md:text-4xl">
              5 Kursus Pelatihan Teratas Kami
            </h2>
            <p className="mt-3 text-base text-darkGray/80">
              Kurikulum terbaru kami menekankan praktik langsung, standar
              operasi internasional, dan kesiapan kerja untuk proyek hospitality
              dan kebaharian.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {ProgramsTraining.map((program, index) => {
              return (
                <motion.div
                  key={program.id}
                  className="h-full group"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 60,
                      scale: shouldReduceMotion ? 1 : 0.9,
                      rotateY: shouldReduceMotion ? 0 : -15,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        duration: shouldReduceMotion ? 0 : 0.7,
                        delay: shouldReduceMotion ? 0 : index * 0.12,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    },
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -8,
                          scale: 1.02,
                          rotateY: 2,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            mass: 0.8,
                          },
                        }
                  }
                  style={{ perspective: "1000px" }}
                >
                  <Card className="flex h-full flex-col border-primaryRed/10 shadow-sm group-hover:shadow-2xl group-hover:border-primaryRed/20 transition-all duration-300 overflow-hidden bg-gradient-to-br from-primaryWhite to-primaryWhite/95">
                    {/* Animated background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primaryRed/5 via-transparent to-primaryRed/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0, rotate: 45 }}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              scale: 1.5,
                              rotate: 0,
                              transition: { duration: 0.6, ease: "easeOut" },
                            }
                      }
                    />

                    <CardContent className="flex flex-1 flex-col gap-4 p-6 relative z-10">
                      <motion.span
                        className="flex items-center gap-3 text-sm font-semibold text-primaryRed"
                        whileHover={shouldReduceMotion ? {} : { x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.span
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-primaryRed/10 text-base group-hover:bg-primaryRed/20 transition-colors duration-300"
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 1.1,
                                  rotate: 360,
                                  backgroundColor: "rgba(227, 30, 36, 0.3)",
                                }
                          }
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            duration: shouldReduceMotion ? 0 : 0.6,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.span>
                        Modul Unggulan
                      </motion.span>

                      <motion.h3
                        className="text-xl font-semibold text-textBlack group-hover:text-primaryRed transition-colors duration-300"
                        layoutId={`title-${program.id}`}
                      >
                        {program.title}
                      </motion.h3>

                      <motion.p
                        className="text-sm text-darkGray/80 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {program.description}
                      </motion.p>

                      <motion.div
                        className="mt-auto flex items-center gap-2 text-sm font-medium text-primaryRed group-hover:gap-3 transition-all duration-300"
                        whileHover={shouldReduceMotion ? {} : { x: 8 }}
                      >
                        <span>Akses silabus & jadwal</span>
                        <motion.span
                          aria-hidden="true"
                          animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </CardContent>

                    {/* Animated bottom border */}
                    <motion.div
                      className="h-1 bg-gradient-to-r from-primaryRed to-primaryGold"
                      initial={{ scaleX: 0 }}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              scaleX: 1,
                              transition: { duration: 0.3, ease: "easeOut" },
                            }
                      }
                      style={{ originX: 0 }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-lightGray py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          <motion.div
            className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
            >
              <h2 className="text-3xl font-bold text-textBlack md:text-4xl">
                Bintang Baru Program Kami
              </h2>
              <p className="text-base text-darkGray/80 md:max-w-xl">
                Ikuti keseruan simulasi kelas, praktik lapangan, dan cerita
                keberhasilan para peserta yang sudah merasakan peningkatan
                karier mereka bersama CCC.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.4,
              }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Button
                variant="outline"
                className="border-primaryRed text-primaryRed hover:bg-primaryRed/10 transition-all duration-300 hover:shadow-lg"
              >
                Lihat Semua Dokumentasi
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[11, 12].map((videoId, index) => (
              <motion.div
                key={videoId}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 50,
                    scale: shouldReduceMotion ? 1 : 0.9,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: shouldReduceMotion ? 0 : 0.6,
                      delay: shouldReduceMotion ? 0 : index * 0.15,
                    },
                  },
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -10,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        },
                      }
                }
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-md group-hover:shadow-xl transition-all duration-300">
                  <CardContent className="space-y-4 p-0">
                    <div className="relative aspect-[4/5] w-full bg-black overflow-hidden">
                      <motion.video
                        src={`/images/training/${videoId}.mp4`}
                        controls
                        className="h-full w-full object-cover"
                        aria-label={`Video highlight pelatihan ${videoId}`}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Overlay gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: shouldReduceMotion ? 0 : 1 }}
                      />
                    </div>

                    <motion.div
                      className="space-y-2 px-6 pb-6 pt-4"
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : index * 0.1 + 0.3,
                      }}
                    >
                      <motion.p
                        className="text-sm font-semibold uppercase tracking-wide text-primaryRed"
                        whileHover={shouldReduceMotion ? {} : { x: 4 }}
                      >
                        Video Highlight
                      </motion.p>
                      <p className="text-base text-darkGray">
                        Dokumentasi praktik peserta angkatan terbaru di
                        fasilitas premium CCC.
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 50,
                  scale: shouldReduceMotion ? 1 : 0.9,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: shouldReduceMotion ? 0 : 0.6,
                    delay: shouldReduceMotion ? 0 : 0.3,
                  },
                },
              }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -10,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      },
                    }
              }
              className="group"
            >
              <Card className="overflow-hidden border-none shadow-md group-hover:shadow-xl transition-all duration-300">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <motion.div
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
                  >
                    <motion.p
                      className="text-sm font-semibold uppercase tracking-wide text-primaryRed"
                      whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    >
                      Galeri Foto
                    </motion.p>
                    <h3 className="text-xl font-semibold text-textBlack">
                      Ekosistem Belajar Yang Aktif
                    </h3>
                    <p className="text-sm text-darkGray/80">
                      Rasakan atmosfer training center kami melalui momen-momen
                      terbaik peserta, mentor, dan fasilitas modern.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex-1 overflow-hidden rounded-lg border border-primaryRed/10 group-hover:border-primaryRed/20 transition-colors duration-300"
                    initial={{
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 0.95,
                    }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.6,
                      duration: shouldReduceMotion ? 0 : 0.4,
                    }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  >
                    <CarouselComponent
                      images={trainings.map((training) => ({
                        src: training.image,
                        alt: `Kegiatan pelatihan ${training.id}`,
                      }))}
                      loop={false}
                      dragFree
                      slidesToScroll={1}
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
