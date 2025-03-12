"use client";

import Footer from "@/components/atoms/Footer";
import Navbar from "@/components/atoms/Navbar";
import TestimonialCrew from "@/components/molecules/ApplyPage/TestimonialCrew";
import Crew from "@/components/molecules/Homepage/Crew";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ApplyPage() {
  return (
    <motion.div
      key="applyPage"
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
        <Navbar />
      </motion.section>

      {/* Content */}
      <main className="text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 py-16 md:py-20"
        >
          <div>
            <h1 className="text-color1 text-4xl">Join With Us Today</h1>
          </div>
          <div className="flex justify-center gap-4">
            <Button>
              <Link href={"/apply-now/candidate"}>Apply As Candidate</Link>
            </Button>
            <Button>
              <Link href={"/apply-now/partner"}>Apply As Partner</Link>
            </Button>
          </div>
        </motion.div>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TestimonialCrew />
        </motion.div>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Crew />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.section
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Footer />
      </motion.section>
    </motion.div>
  );
}
