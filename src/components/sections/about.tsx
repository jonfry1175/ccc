'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { motion } from "motion/react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-blue-primary uppercase tracking-wider"
            >
              Tentang Kami
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mt-4 mb-8"
            >
              Partner Terpercaya untuk Transformasi Digital Anda
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-main/70 text-lg leading-relaxed max-w-3xl mx-auto"
            >
              PT Meta Solusi Digital adalah partner yang akan mendampingi transformasi digital bisnis 
              Anda. Dengan keahlian di bidang Website, Aplikasi Web, Mobile Apps, dan Strategi Digital 
              Marketing, tim kami siap menghadirkan solusi yang selaras dengan visi bisnis Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-primary hover:gap-4 transition-all font-semibold"
              >
                Mulai Diskusi <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 