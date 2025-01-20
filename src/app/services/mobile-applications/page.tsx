'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Battery, GitBranch, Smartphone, Tablet, Workflow } from 'lucide-react'

type Feature = {
  Icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    Icon: Smartphone,
    title: 'Native Apps',
    description: 'Aplikasi native untuk iOS dan Android dengan performa dan UX optimal'
  },
  {
    Icon: Tablet,
    title: 'Cross-Platform',
    description: 'Solusi multi-platform yang efisien dengan UI/UX konsisten'
  },
  {
    Icon: GitBranch,
    title: 'Integrasi Backend',
    description: 'Koneksi seamless dengan layanan backend dan cloud services'
  },
  {
    Icon: Battery,
    title: 'Optimasi Performa',
    description: 'Penggunaan baterai dan resources yang efisien untuk pengalaman terbaik'
  }
]

const platforms = [
  'iOS (Swift/SwiftUI)',
  'Android (Kotlin)',
  'React Native',
  'Flutter',
  'Firebase',
  'AWS Mobile'
]

export default function MobileApplicationsPage() {
  return (
    <main className="py-12">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-primary/10 rounded-2xl flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-blue-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Aplikasi Mobile</h1>
              <p className="text-text-main/70 mt-2">
                Solusi mobile yang inovatif dan powerful
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="lead text-xl text-text-main/70">
              Kami mengembangkan aplikasi mobile yang inovatif untuk platform iOS dan Android dengan fokus pada pengalaman pengguna dan performa.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.Icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <IconComponent className="w-8 h-8 text-blue-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-text-main/70">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Platforms Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Workflow className="w-6 h-6 text-blue-primary" />
              Platform & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg text-center font-medium shadow-sm"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Workflow className="w-6 h-6 text-blue-primary" />
              Proses Pengembangan
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
              <p className="text-lg leading-relaxed">
                Kami menerapkan metodologi agile dalam pengembangan aplikasi mobile, memastikan komunikasi yang transparan dan hasil yang sesuai dengan kebutuhan klien. Setiap aplikasi dioptimalkan untuk memberikan pengalaman pengguna terbaik dengan performa yang optimal.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 