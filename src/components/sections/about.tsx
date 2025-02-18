'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { sendGTMEvent } from '@next/third-parties/google'
import { ArrowRight } from 'lucide-react'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter()

  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-medium text-blue-primary uppercase tracking-wider"
            >
              Tentang Kami
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold mt-2 mb-4"
            >
              Partner Terpercaya untuk Transformasi Digital Anda
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-text-main/70 leading-relaxed"
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
              className="pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  sendGTMEvent({
                    event: "whatsapp",
                    value: "AW-11565537272/eck8CPC2vJQaEPiv8Ior",
                  });

                  router.push(getWhatsAppLink())
                }}
                className="cursor-pointer inline-flex items-center gap-2 text-blue-primary hover:gap-3 transition-all font-semibold text-sm sm:text-base"
              >
                Mulai Diskusi <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 