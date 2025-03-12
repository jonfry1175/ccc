"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Homepage from "@/components/organism/Homepage";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Reset activeSection when the pathname is "/"
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection(null);
    }
  }, [pathname]);

  return (
    <div
      className={`relative w-full ${
        activeSection === null ? "h-screen overflow-hidden" : "min-h-screen"
      }`}
    >
      {/* Tampilkan video hanya di halaman utama */}
      {activeSection === null ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/hero-video-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for video section */}
          <div className="absolute inset-0 bg-black/50" />
        </>
      ) : null}

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
                <h1 className="text-6xl font-bold md:text-1xl">HELLO!</h1>
                <h2 className="text-xl md:text-3xl">
                  WELCOME TO MARINA PRIMA SUKSES
                </h2>
              </motion.div>

              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary bg-transparent text-white hover:bg-gold hover:text-color1"
                  onClick={() => setActiveSection("Company Profile")}
                >
                  Bussiness Profile
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary bg-transparent text-white hover:bg-gold hover:text-color1"
                  onClick={() => router.push("/apply-now")} // Navigasi ke /apply-now
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary bg-transparent text-white hover:bg-gold hover:text-color1"
                  onClick={() => setActiveSection("section3")}
                >
                  Training Center
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
