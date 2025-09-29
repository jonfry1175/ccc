"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Homepage from "@/components/organism/Homepage";
import { useRouter, usePathname } from "next/navigation";

export default function HomePageClient() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videos = [
    "/videos/CCC1.mp4",
    "/videos/CCC2.mp4",
    "/videos/CCC3.mp4",
    "/videos/CCC4.mp4",
  ];
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActiveSection(null);
    }
  }, [pathname]);

  const handleVideoEnd = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div
      className={`relative w-full ${
        activeSection === null ? "h-screen overflow-hidden" : "min-h-screen"
      }`}
    >
      {/* Video Background */}
      {activeSection === null && (
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <motion.video
                key={currentVideo}
                autoPlay
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                onEnded={handleVideoEnd}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <source src={videos[currentVideo]} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            )}
          </AnimatePresence>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Content */}
      <div
        className={`${
          activeSection === null
            ? "relative z-10 flex h-full flex-col items-center justify-center"
            : "w-full"
        }`}
      >
        <AnimatePresence mode="wait">
          {activeSection === null ? (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center text-white"
              >
                <h1 className="text-6xl font-bold md:text-1xl mb-4">HALO!</h1>
                <h2 className="text-xl md:text-3xl">
                  SELAMAT DATANG DI MARINA PRIMA SUKSES
                </h2>
                <h2 className="text-xl md:text-md mt-4 italic">
                  Agen Rekrutmen MSC Cruises di Jakarta - Menghubungkan Pekerja
                  Indonesia ke Pesisir Global
                </h2>
              </motion.div>

              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary bg-transparent text-white hover:bg-gold hover:text-primaryRed"
                  onClick={() => setActiveSection("Profil Bisnis")}
                >
                  Profil Bisnis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary bg-transparent text-white hover:bg-gold hover:text-primaryRed"
                  onClick={() => router.push("/apply-now")}
                >
                  Daftar Sekarang
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary bg-transparent text-white hover:bg-gold hover:text-primaryRed"
                  onClick={() => router.push("/training-center")}
                >
                  Pusat Pelatihan
                </Button>
              </div>
            </motion.div>
          ) : (
            <Homepage onBackToHome={() => setActiveSection(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
