'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { BarChart3, Layers, Layout, Plug, Server, Zap } from 'lucide-react'

type Feature = {
  Icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    Icon: Layers,
    title: 'Aplikasi Enterprise',
    description: 'Solusi skala besar untuk kebutuhan bisnis kompleks dengan fitur yang komprehensif'
  },
  {
    Icon: Server,
    title: 'Sistem Manajemen',
    description: 'Platform pengelolaan konten yang mudah dan powerful dengan antarmuka intuitif'
  },
  {
    Icon: BarChart3,
    title: 'Dashboard Analytics',
    description: 'Visualisasi data dan insights bisnis yang komprehensif dengan laporan real-time'
  },
  {
    Icon: Plug,
    title: 'Integrasi API',
    description: 'Konektivitas seamless dengan sistem dan layanan eksternal untuk workflow yang efisien'
  }
]

const technologies = [
  'React & Next.js',
  'Node.js & Express',
  'PostgreSQL & MongoDB',
  'Redis Cache',
  'GraphQL',
  'REST APIs'
]

export default function WebApplicationsPage() {
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
              <Layout className="w-8 h-8 text-blue-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Aplikasi Web</h1>
              <p className="text-text-main/70 mt-2">
                Solusi aplikasi web modern untuk bisnis Anda
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="lead text-xl text-text-main/70">
              Kami mengembangkan aplikasi web yang powerful dan scalable untuk memenuhi kebutuhan bisnis Anda, dengan fokus pada performa dan pengalaman pengguna.
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

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-blue-primary" />
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg text-center font-medium shadow-sm"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-blue-primary" />
              Keunggulan Aplikasi Web Kami
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
              <p className="text-lg leading-relaxed">
                Setiap aplikasi web yang kami kembangkan dirancang dengan fokus pada performa, keamanan, dan pengalaman pengguna yang optimal. Kami menggunakan teknologi modern dan praktik terbaik dalam industri untuk memastikan aplikasi Anda tidak hanya powerful tetapi juga mudah digunakan.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 