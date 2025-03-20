"use client";

import Footer from "@/components/atoms/Footer";
import MarqueeImageHero from "@/components/atoms/MarqueeImageHero";
import Navbar from "@/components/atoms/Navbar";
import About from "@/components/molecules/Homepage/About";
import ArticlePage from "@/components/molecules/Homepage/Article";
import Certified from "@/components/molecules/Homepage/Certified";
import Hero from "@/components/molecules/Homepage/Hero";
import ImpactCard from "@/components/molecules/Homepage/Impact";
import Partner from "@/components/molecules/Homepage/Partner";
import Services from "@/components/molecules/Homepage/Service";
import WhatWeDo from "@/components/molecules/Homepage/WhatWeDo";
import { motion } from "framer-motion";

interface HomepageProps {
  onBackToHome: () => void;
}

export default function Homepage({ onBackToHome }: HomepageProps) {
  return (
    <motion.div
      key="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full overflow-y-auto"
    >
      {/* Navbar */}
      <motion.section
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Navbar onHomeClick={onBackToHome} />
      </motion.section>

      {/* Content */}
      <main className="text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <MarqueeImageHero />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <About />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <WhatWeDo />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Services />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Certified />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <ImpactCard />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Partner />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <ArticlePage />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.section
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Footer />
      </motion.section>
    </motion.div>
  );
}
