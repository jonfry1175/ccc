'use client'

import { motion } from 'framer-motion'
import { Code2, Globe, Laptop, Lock, Search, Smartphone } from 'lucide-react'
import { createMetadata } from '../shared-metadata'

const features = [
  {
    icon: Laptop,
    title: 'Performa dan Kecepatan',
    description: 'Website yang cepat dan responsif untuk pengalaman pengguna optimal'
  },
  {
    icon: Search,
    title: 'Optimasi SEO',
    description: 'Teknik SEO terbaik untuk meningkatkan visibilitas online'
  },
  {
    icon: Smartphone,
    title: 'Responsif',
    description: 'Tampilan yang sempurna di semua ukuran layar dan perangkat'
  },
  {
    icon: Lock,
    title: 'Keamanan',
    description: 'Implementasi standar keamanan terkini untuk melindungi data'
  }
]

export const metadata = createMetadata({
  title: 'Pengembangan Website | Your Company Name',
  description: 'Layanan pengembangan website profesional dengan fokus pada performa, SEO, dan pengalaman pengguna. Kami membangun website modern yang sesuai kebutuhan bisnis Anda.',
  path: '/services/web-development'
})

export default function WebDevelopmentPage() {
  return (
    <main className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-primary" />
            </div>
            <h1 className="text-4xl font-bold">Pengembangan Website</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-text-main/70">
              Kami membuat situs web berkinerja tinggi dan ramah pengguna yang disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm"
              >
                <feature.icon className="w-8 h-8 text-blue-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-main/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-blue-primary" />
              Teknologi yang Kami Gunakan
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Kami menggunakan stack teknologi modern seperti React, Next.js, dan berbagai framework terkini untuk memastikan website Anda selalu up-to-date dengan standar industri.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 