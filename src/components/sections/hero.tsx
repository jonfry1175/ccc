'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from "motion/react"
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20">
              <Sparkles className="w-4 h-4 text-blue-primary" />
              <span className="text-sm font-medium text-blue-primary">
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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transformasi Digital{' '}
              <span className="text-blue-primary">Bisnis Anda</span>{' '}
              Dimulai di Sini
            </h1>
            <p className="text-xl text-text-main/70 max-w-xl">
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
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-all font-semibold group hover:shadow-lg hover:shadow-blue-primary/25"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 rounded-full hover:border-blue-primary/20 hover:bg-blue-primary/5 transition-all font-semibold text-text-main hover:shadow-lg"
            >
              Lihat Paket & Harga
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-primary/20 to-purple-500/20 rounded-xl blur-xl" />
            <Image
              src="/hero-image.jpeg"
              alt="Software Development"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover relative"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Static version that exactly matches the animated content structure
function StaticContent() {
  return (
    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 opacity-0">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20">
              <Sparkles className="w-4 h-4 text-blue-primary" />
              <span className="text-sm font-medium text-blue-primary">
                Meta Solusi Digital
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transformasi Digital{' '}
              <span className="text-blue-primary">Bisnis Anda</span>{' '}
              Dimulai di Sini
            </h1>
            <p className="text-xl text-text-main/70 max-w-xl">
              Kami menciptakan solusi digital yang inovatif - dari website responsif hingga 
              aplikasi enterprise yang mengoptimalkan proses bisnis Anda
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-all font-semibold group hover:shadow-lg hover:shadow-blue-primary/25"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 rounded-full hover:border-blue-primary/20 hover:bg-blue-primary/5 transition-all font-semibold text-text-main hover:shadow-lg"
            >
              Lihat Paket & Harga
            </a>
          </div>
        </div>

        <div className="relative opacity-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-primary/20 to-purple-500/20 rounded-xl blur-xl" />
            <Image
              src="/hero-image.jpeg"
              alt="Software Development"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover relative"
              priority
            />
          </div>
        </div>
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
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white pt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpeg"
          alt="Software Development Background"
          fill
          className="object-cover opacity-[0.02] blur-2xl"
          priority
          sizes="100vw"
        />
      </div>

      {isMounted ? <AnimatedContent /> : <StaticContent />}
    </section>
  )
} 