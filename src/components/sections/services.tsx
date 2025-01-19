'use client'

import type { LucideIcon } from 'lucide-react'
import { Globe, Layout, Smartphone } from 'lucide-react'
import { useState } from 'react'

type Service = {
  id: number
  title: string
  description: string
  Icon: LucideIcon
}

const services: Service[] = [
  {
    id: 1,
    title: 'Pengembangan Website',
    description: 'Kami membuat situs web berkinerja tinggi dan ramah pengguna yang disesuaikan dengan kebutuhan bisnis Anda, menggunakan beragam teknologi dan kerangka kerja untuk pengalaman web yang menarik.',
    Icon: Globe
  },
  {
    id: 2,
    title: 'Aplikasi Web',
    description: 'Kami menyediakan layanan pengembangan aplikasi web terbaik yang disesuaikan dengan kebutuhan Anda, menggunakan beragam teknologi untuk solusi yang mudah digunakan dan berkinerja tinggi.',
    Icon: Layout
  },
  {
    id: 3,
    title: 'Aplikasi Mobile',
    description: 'Kami unggul dalam menciptakan aplikasi seluler iOS dan Android berkinerja tinggi, berkolaborasi erat dengan klien untuk memastikan visi mereka terwujud dan pengguna mendapatkan pengalaman yang luar biasa.',
    Icon: Smartphone
  },
]

export default function Services() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Layanan Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(service.id)}
                className="w-full flex items-center p-6 text-left"
              >
                <div className="bg-gray-200 p-4 rounded-full">
                  <service.Icon className="w-6 h-6 text-blue-primary" />
                </div>
                <span className="text-xl font-semibold ml-4">{service.title}</span>
                <svg
                  className={`ml-auto w-6 h-6 transform transition-transform ${
                    openId === service.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openId === service.id && (
                <div className="px-6 pb-6">
                  <p className="text-text-main/70">
                    {service.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 