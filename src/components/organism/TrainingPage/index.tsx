"use client";
import CarouselComponent from "@/components/atoms/CarouselImage";
import Navbar from "@/components/atoms/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { trainings } from "@/lib/DataTraining";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TrainingPageProps {
  onBackToHome?: () => void;
}

export default function TrainingPage({ onBackToHome }: TrainingPageProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const ProgramsTraining = [
    {
      id: 1,
      title:
        "Kursus Komunikasi dan Bahasa di lingkungan perhotelan, dek & mesin"
    },
    { id: 2, title: "Program Keunggulan Perhotelan & Tata Graha" },
    { id: 3, title: "Pelatihan Bartending & Layanan Pelanggan" },
    { id: 4, title: "Pelatihan Kerja dan Keselamatan" },
    { id: 5, title: "Teknik Spa & Pijat Profesional" }
  ];

  return (
    <div>
      <Navbar onHomeClick={onBackToHome} />

      {/* <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="inline-block mb-12 text-3xl font-bold text-primaryRed md:text-4xl relative">
            Training Center
            <span className="absolute bottom-0 left-0 w-full h-3 bg-primaryRed opacity-30 z-0"></span>
          </h1>
        </div>
      </section> */}

      <section className="relative bg-white text-white py-40">
        <div
          className="absolute inset-0 bg-center blur-sm"
          style={{ backgroundImage: "url('/images/imagetraining.jpg')" }}
        />
        <div className="relative max-w-6xl mx-auto space-y-4 px-4">
          <h1 className="text-4xl text-center font-bold mb-8">
            Divisi Pelatihan MPS
          </h1>
          <p>
            Divisi Pelatihan MPS adalah bagian dari unit anak perusahaan strategis kami dari
            PT. Marina Prima Sukses. Perusahaan kami sangat bangga dengan fasilitas pelatihan canggih kami, yang dirancang untuk meningkatkan keterampilan,
            kinerja, dan pengetahuan kandidat kami. Terletak di dalam
            gedung kami, fasilitas ini berfungsi sebagai pusat dinamis tempat tenaga kerja kami
            membenamkan diri dalam pengalaman belajar langsung.
          </p>
          <p>
            Dari teknik layanan tingkat lanjut hingga tren perhotelan terdepan,
            program pelatihan komprehensif kami mencakup setiap aspek
            industri. Dilengkapi dengan teknologi modern dan dipimpin oleh para ahli industri,
            kursus kami dirancang untuk meningkatkan kemampuan individu
            dan kekompakan tim. Dengan berinvestasi dalam pendidikan berkelanjutan
            dan pelatihan praktis, kami memberdayakan tenaga kerja kami untuk memberikan
            layanan luar biasa dan tetap terdepan dalam lanskap perhotelan yang kompetitif.
          </p>
        </div>
      </section>

      <section className="bg-white  mb-4 py-8 text-primaryRed" ref={sectionRef}>
        <div className="max-w-6xl mx-auto space-y-4 px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            5 Kursus Pelatihan Teratas Kami
          </motion.h1>
          <ul className="list-decimal list-inside">
            {ProgramsTraining.map((service, index) => (
              <motion.li
                key={index}
                className="text-[16px] font-semibold text-primaryRed p-4"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {service.title}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-lightGold mt-4  py-5 text-primaryRed">
        <div className="max-w-6xl mx-auto space-y-4 px-4">
          <h1 className="text-4xl text-center font-bold">
            Bintang Baru Program Kami
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <video
              src="/images/training/11.mp4"
              controls
              className="w-full h-[150px] md:h-[400px] object-cover rounded-lg"
            ></video>
            <video
              src="/images/training/12.mp4"
              controls
              className="w-full h-[150px] md:h-[400px] object-cover rounded-lg"
            ></video>
            <CarouselComponent
              images={trainings.map((training) => ({
                src: training.image,
                alt: `Training ${training.id}`
              }))}
              loop={false}
              dragFree={true}
              slidesToScroll={1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
