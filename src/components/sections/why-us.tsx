'use client'

import { CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'

type Reason = {
  id: number
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    id: 1,
    title: 'Pengalaman',
    description: 'Lebih dari 10 tahun pengalaman dalam mengembangkan solusi digital dan website berkualitas tinggi.'
  },
  {
    id: 2,
    title: 'Tim Profesional',
    description: 'Didukung oleh tim developer dan designer berpengalaman yang ahli dalam teknologi terkini seperti React, Node.js, dan Cloud Computing.'
  },
  {
    id: 3,
    title: 'Solusi Komprehensif',
    description: 'Menyediakan solusi end-to-end dari pengembangan website, aplikasi web, mobile apps hingga strategi digital marketing.'
  },
  {
    id: 4,
    title: 'Dukungan Berkelanjutan',
    description: 'Memberikan layanan maintenance, update, dan dukungan teknis berkelanjutan untuk memastikan sistem Anda selalu optimal.'
  }
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-12 sm:py-16 bg-white">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-medium text-blue-primary uppercase tracking-wider">
            Keunggulan Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
            Mengapa Memilih Meta Solusi Digital?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-3 p-4 sm:p-5 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-blue-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1.5 text-text-main">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-text-main/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 