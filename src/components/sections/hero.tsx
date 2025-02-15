'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from "motion/react"
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Transformasi Digital{' '}
              <span className="text-blue-primary">Bisnis Anda</span>{' '}
              Dimulai dari sini
            </h1>
            <p className="text-xl text-white/80 max-w-xl">
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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Transformasi Digital{' '}
              <span className="text-blue-primary">Bisnis Anda</span>{' '}
              Dimulai dari sini
            </h1>
            <p className="text-xl text-white/80 max-w-xl">
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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsMounted(true)

    // Set up intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.src = '/hero-video-background.mp4'
            videoRef.current.load()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gray-900">
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Fallback image for mobile */}
        <Image
          src="/hero-fallback.jpg"
          alt="Background"
          fill
          priority
          className="object-cover lg:hidden"
        />
        {/* Video for desktop */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`hidden lg:block w-full h-full object-cover ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
        />
      </div>

      {isMounted ? <AnimatedContent /> : <StaticContent />}
    </section>
  )
} 