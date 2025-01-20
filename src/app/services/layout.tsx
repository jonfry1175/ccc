'use client'

import { motion } from 'framer-motion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Your Company Name',
    default: 'Layanan Kami | Your Company Name',
  },
  description: 'Layanan pengembangan website, aplikasi web, dan aplikasi mobile profesional untuk membantu pertumbuhan bisnis Anda.',
  keywords: [
    'pengembangan website',
    'aplikasi web',
    'aplikasi mobile',
    'jasa pembuatan website',
    'development services',
  ],
}

export default function ServiceLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {children}
    </motion.div>
  )
} 