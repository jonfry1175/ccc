'use client'

import type { LucideIcon } from 'lucide-react'
import { Globe, Layout, Smartphone } from 'lucide-react'
import { motion } from "motion/react"
import Link from 'next/link'
import { useState } from 'react'

type Service = {
  id: number
  title: string
  description: string
  Icon: LucideIcon
  href: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Pengembangan Website',
    description: 'Kami membuat situs web berkinerja tinggi dan ramah pengguna yang disesuaikan dengan kebutuhan bisnis Anda, menggunakan beragam teknologi dan kerangka kerja untuk pengalaman web yang menarik.',
    Icon: Globe,
    href: '/services/web-development'
  },
  {
    id: 2,
    title: 'Aplikasi Web',
    description: 'Kami menyediakan layanan pengembangan aplikasi web terbaik yang disesuaikan dengan kebutuhan Anda, menggunakan beragam teknologi untuk solusi yang mudah digunakan dan berkinerja tinggi.',
    Icon: Layout,
    href: '/services/web-applications'
  },
  {
    id: 3,
    title: 'Aplikasi Mobile',
    description: 'Kami unggul dalam menciptakan aplikasi seluler iOS dan Android berkinerja tinggi, berkolaborasi erat dengan klien untuk memastikan visi mereka terwujud dan pengguna mendapatkan pengalaman yang luar biasa.',
    Icon: Smartphone,
    href: '/services/mobile-applications'
  },
]

export default function Services() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="services" className="py-12 sm:py-16 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-medium text-blue-primary uppercase tracking-wider">
            Layanan Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
            Solusi Digital untuk Bisnis Anda
          </h2>
          <p className="text-base sm:text-lg text-text-main/70">
            Kami menyediakan layanan pengembangan website dan aplikasi yang komprehensif
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(service.id)}
                className="w-full flex items-center p-4 sm:p-5 text-left"
              >
                <div className="w-12 h-12 bg-blue-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.Icon className="w-6 h-6 text-blue-primary" />
                </div>
                <span className="text-base sm:text-lg font-semibold ml-3 text-text-main">
                  {service.title}
                </span>
                <motion.svg
                  animate={{ rotate: openId === service.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-auto w-5 h-5 text-text-main/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              {openId === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 sm:px-5 pb-4 sm:pb-5"
                >
                  <p className="text-sm sm:text-base text-text-main/70 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-primary hover:text-blue-primary/80 font-medium text-sm"
                  >
                    Pelajari lebih lanjut
                    <svg
                      className="w-4 h-4 ml-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 