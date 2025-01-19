'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { motion } from "motion/react"
import Image from 'next/image'

type Client = {
  id: number
  name: string
  image: string
  description: string
  isGovernment?: boolean
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
    description: 'Sistem manajemen billing pelanggan yang terintegrasi dengan fitur lengkap untuk pengelolaan pembayaran dan tagihan secara efisien.'
  },
  {
    id: 5,
    name: 'Optima Jasa',
    image: '/portofolio-optimajasa.png',
    description: 'Website perusahaan modern dilengkapi sistem ERP terintegrasi untuk optimalisasi manajemen sumber daya dan operasional bisnis.'
  }
]

export default function Clients() {
  const sortedClients = [...clients].sort((a, b) => {
    if (a.isGovernment && !b.isGovernment) return -1
    if (!a.isGovernment && b.isGovernment) return 1
    return 0
  })

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Klien Kami
          </h2>
          <p className="text-text-main/70 text-lg">
            Beberapa project unggulan yang telah kami kembangkan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* First row - 3 government clients */}
          {sortedClients.slice(0, 3).map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative aspect-[2/1] w-full bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/5 to-purple-500/5" />
                <Image
                  src={client.image}
                  alt={`${client.name} project`}
                  fill
                  className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-primary/90 to-blue-900/90 opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center p-8">
                  <p className="text-sm text-white/90 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {client.description}
                  </p>
                </div>
              </div>

              <div className="p-6 relative">
                <h3 className="text-lg font-semibold text-text-main group-hover:text-blue-primary transition-colors duration-300">
                  {client.name}
                </h3>
                {client.isGovernment && (
                  <span className="inline-block px-3 py-1 bg-blue-primary/10 text-blue-primary text-xs font-medium rounded-full mt-2">
                    Government
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Second row - 2 centered cards */}
          <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8">
            {sortedClients.slice(3).map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
                className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden w-full md:w-1/2 lg:w-1/3"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative aspect-[2/1] w-full bg-gray-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/5 to-purple-500/5" />
                  <Image
                    src={client.image}
                    alt={`${client.name} project`}
                    fill
                    className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-primary/90 to-blue-900/90 opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center p-8">
                    <p className="text-sm text-white/90 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {client.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-lg font-semibold text-text-main group-hover:text-blue-primary transition-colors duration-300">
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-text-main/70 mb-8">
            Dan masih banyak lagi project yang telah kami kembangkan untuk klien kami
          </p>
          <a 
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-blue-primary/25"
          >
            MULAI PROJECT
          </a>
        </motion.div>
      </div>
    </section>
  )
} 