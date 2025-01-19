'use client'

import Image from 'next/image'
import { useState } from 'react'

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
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const sortedClients = [...clients].sort((a, b) => {
    if (a.isGovernment && !b.isGovernment) return -1
    if (!a.isGovernment && b.isGovernment) return 1
    return 0
  })

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Klien Kami
          </h2>
          <p className="text-text-main/70">
            Beberapa proyek unggulan yang telah kami kembangkan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* First row - 3 government clients */}
          {sortedClients.slice(0, 3).map((client) => (
            <div 
              key={client.id}
              className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group w-full"
            >
              <div className="relative aspect-[2/1] w-full bg-gray-50 group">
                <Image
                  src={client.image}
                  alt={`${client.name} project`}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-blue-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-sm text-white/90">
                    {client.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-text-main text-center">
                  {client.name}
                </h3>
              </div>
            </div>
          ))}

          {/* Second row - 2 centered cards */}
          <div className="lg:col-span-3 flex justify-center gap-8">
            {sortedClients.slice(3).map((client) => (
              <div 
                key={client.id}
                className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group w-full md:w-1/2 lg:w-1/3"
              >
                <div className="relative aspect-[2/1] w-full bg-gray-50 group">
                  <Image
                    src={client.image}
                    alt={`${client.name} project`}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-blue-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-sm text-white/90">
                      {client.description}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-text-main text-center">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-text-main/70 mb-6">
            Dan masih banyak lagi proyek yang telah kami kembangkan untuk klien kami
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 font-medium"
          >
            MULAI PROYEK
          </a>
        </div>
      </div>
    </section>
  )
} 