'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { motion } from "motion/react"
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-blue-light pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Website Development Background"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-blue-primary uppercase tracking-wider">
                Meta Solusi Digital
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Wujudkan Aplikasi{' '}
              <span className="text-blue-primary">Profesional</span>{' '}
              untuk Bisnis Anda
            </motion.h1>

            <motion.p 
              className="text-xl text-text-main/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Kami membantu bisnis Anda berkembang di era digital dengan solusi website
              yang modern, responsif, dan optimal untuk meningkatkan performa bisnis Anda
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-colors font-semibold group"
              >
                Mulai Proyek
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 rounded-full hover:border-blue-primary/20 hover:bg-blue-primary/5 transition-colors font-semibold text-text-main"
              >
                Lihat Harga
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Image
              src="/hero-image.jpeg"
              alt="Website Development"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 