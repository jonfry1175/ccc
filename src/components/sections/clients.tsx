'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { GlareCard } from '@/components/ui/glare-card'
import { sendGTMEvent } from '@next/third-parties/google'

type Client = {
  id: number
  name: string
  image: string
  description: string
  isGovernment?: boolean
  label?: string
}

const clients: Client[] = [
  {
    id: 1,
    name: 'Kesling - Kementerian Kesehatan RI',
    image: '/portofolio-kesling.png',
    description: 'Aplikasi web pengelolaan kesehatan lingkungan yang membantu monitoring dan manajemen sampah secara sistematis untuk lingkungan yang lebih sehat.',
    isGovernment: true
  },
  {
    id: 2,
    name: 'NBM - Badan Pangan Nasional',
    image: '/portofolio-nbm.png',
    description: 'Platform digital Neraca Bahan Makanan yang memungkinkan pemantauan dan pengelolaan ketersediaan bahan pangan secara real-time di seluruh Indonesia.',
    isGovernment: true
  },
  {
    id: 3,
    name: 'SRN - Kementerian Lingkungan Hidup',
    image: '/portofolio-srn.png',
    description: 'Sistem Registri Nasional untuk pendataan dan pemantauan kegiatan ketahanan nasional yang mendukung program pembangunan berkelanjutan.',
    isGovernment: true
  },
  {
    id: 4,
    name: 'Cloudlink',
    image: '/portofolio-cloudlink.png',
    description: 'Sistem manajemen billing pelanggan yang terintegrasi dengan fitur lengkap untuk pengelolaan pembayaran dan tagihan secara efisien.',
    label: 'Billing System'
  },
  {
    id: 5,
    name: 'Optima Jasa',
    image: '/portofolio-optimajasa.png',
    description: 'Website perusahaan modern dilengkapi sistem ERP terintegrasi untuk optimalisasi manajemen sumber daya dan operasional bisnis.',
    label: 'ERP'
  }
]

function ClientCard({ client }: { client: Client }) {
  return (
    <GlareCard className="min-w-[280px] sm:min-w-[320px] mx-2 bg-transparent">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={client.image}
          alt={`${client.name} project`}
          fill
          className="object-contain transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 280px, 320px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-primary/90 to-blue-900/90 
            opacity-0 group-hover:opacity-95 transition-all duration-500 
            flex items-center justify-center p-3
            touch:group-active:opacity-95"
        >
          <p className="text-sm text-white/90 leading-relaxed 
            transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500
            touch:group-active:translate-y-0"
          >
            {client.description}
          </p>
        </div>
      </div>

      <div className="p-3 relative flex flex-col min-h-[80px] bg-white">
        <h3 className="text-sm font-semibold text-text-main group-hover:text-blue-primary transition-colors duration-300 line-clamp-2">
          {client.name}
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {client.isGovernment && (
            <span className="inline-flex px-2 py-0.5 bg-blue-primary/10 text-blue-primary text-xs font-medium rounded-full">
              Government
            </span>
          )}
          {client.label && (
            <span className="inline-flex px-2 py-0.5 bg-blue-primary/10 text-blue-primary text-xs font-medium rounded-full">
              {client.label}
            </span>
          )}
        </div>
      </div>
    </GlareCard>
  )
}

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)

  // Create two sets of clients for seamless loop
  const sliderContent = [...clients, ...clients]

  return (
    <section id="clients" className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-medium text-blue-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
            Klien Kami
          </h2>
          <p className="text-base sm:text-lg text-text-main/70">
            Beberapa project unggulan yang telah kami kembangkan
          </p>
        </motion.div>

        <div ref={containerRef} className="relative w-full touch-pan-x">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 py-4"
              animate={{
                x: isInView ? [0, -1920] : 0
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
            >
              {sliderContent.map((client, index) => (
                <ClientCard key={`${client.id}-${index}`} client={client} />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-text-main/70 mb-6 px-4">
            Dan masih banyak lagi project yang telah kami kembangkan untuk klien kami
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              sendGTMEvent({
                event: "whatsapp",
                value: "AW-11565537272/eck8CPC2vJQaEPiv8Ior",
              })

              window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 
              bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 
              transition-all duration-300 font-medium text-sm sm:text-base
              hover:shadow-lg hover:shadow-blue-primary/25"
          >
            MULAI PROJECT
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 