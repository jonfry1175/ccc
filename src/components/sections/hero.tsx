'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from "motion/react"
import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '@/lib/constants'
import { sendGTMEvent } from '@next/third-parties/google'
import { BackgroundPaths } from '@/components/ui/background-paths'

function AnimatedContent() {
  return (
    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/40 backdrop-blur-sm border border-blue-800/40 w-fit">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-200 text-sm font-medium">
                Meta Solusi Digital
              </span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-white">Transformasi Digital</span>{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                Bisnis Anda
              </span>{' '}
              <span className="text-white">Dimulai dari sini</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-[90%] md:max-w-none">
              Kami menciptakan solusi digital yang inovatif - dari website responsif hingga
              aplikasi enterprise yang mengoptimalkan proses bisnis Anda
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start gap-4 pt-4"
          >
            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                sendGTMEvent({
                  event: "whatsapp",
                  value: "AW-11565537272/eck8CPC2vJQaEPiv8Ior",
                });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right column space preserved but empty for balance */}
        <div className="hidden lg:block" />
      </div>
    </div>
  )
}

function StaticContent() {
  return (
    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 opacity-0">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-white">Transformasi Digital</span>{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                Bisnis Anda
              </span>{' '}
              <span className="text-white">Dimulai dari sini</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Kami menciptakan solusi digital yang inovatif - dari website responsif hingga
              aplikasi enterprise yang mengoptimalkan proses bisnis Anda
            </p>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </div>
  )
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="hero" className="min-h-[90vh] md:min-h-screen flex items-center relative overflow-hidden bg-black">
      <BackgroundPaths
        pathColor="rgb(255 255 255 / 0.6)"
        pathCount={36}
        animationDuration={25}
        strokeWidth={0.5}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </BackgroundPaths>

      {isMounted ? <AnimatedContent /> : <StaticContent />}
    </section>
  )
} 