'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { Check } from 'lucide-react'

type PricingFeature = {
  text: string
}

type PricingTier = {
  id: number
  name: string
  price?: number
  subtitle: string
  features: PricingFeature[]
  isCustom?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: 'Paket Starter',
    price: 4000000,
    subtitle: 'Paket Startup yang Tepat untuk Memulai:',
    features: [
      { text: '6 Halaman Responsif' },
      { text: '5 Hari Pengerjaan' },
      { text: '2x Kesempatan Revisi' },
      { text: '5 Halaman Optimasi SEO Dasar' },
      { text: '10 Konten Visual Premium' }
    ]
  },
  {
    id: 2,
    name: 'Paket Bisnis',
    price: 5500000,
    subtitle: 'Solusi Lengkap untuk Bisnis Berkembang:',
    features: [
      { text: '10 Halaman Responsif' },
      { text: '7 Hari Pengerjaan' },
      { text: '5x Kesempatan Revisi' },
      { text: '10 Halaman Optimasi SEO Dasar' },
      { text: '20 Konten Visual Premium' }
    ]
  },
  {
    id: 3,
    name: 'Paket Premium',
    price: 7500000,
    subtitle: 'Performa Maksimal untuk Bisnis Anda:',
    features: [
      { text: '20 Halaman Responsif' },
      { text: '14 Hari Pengerjaan' },
      { text: '10x Kesempatan Revisi' },
      { text: '20 Halaman Optimasi SEO Dasar' },
      { text: '50 Konten Visual Premium' }
    ]
  },
  {
    id: 4,
    name: 'Paket Enterprise',
    subtitle: 'Solusi Kustom untuk Kebutuhan Spesifik:',
    features: [
      { text: 'Halaman Responsif Tanpa Batas' },
      { text: 'Timeline Fleksibel' },
      { text: 'Revisi Tanpa Batas' },
      { text: 'Optimasi SEO Menyeluruh' },
      { text: 'Konten Visual Premium Sesuai Kebutuhan' }
    ],
    isCustom: true
  }
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-blue-primary uppercase tracking-wider">
            Harga Layanan
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Pilihan Paket Website
          </h2>
          <p className="text-text-main/70 text-lg">
            Solusi website yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="p-8 bg-[#0F172A] text-white">
                <h3 className="text-xl font-semibold text-blue-primary mb-4">
                  {tier.name}
                </h3>
                {tier.isCustom ? (
                  <div className="text-3xl font-bold text-white">Hubungi Kami</div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl font-bold text-white">Rp</span>
                      <span className="text-4xl font-bold text-white tracking-tight">
                        {formatPrice(tier.price!)}
                      </span>
                    </div>
                    <div className="text-base text-white/80 font-medium">per Tahun</div>
                  </div>
                )}
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <p className="text-base font-semibold text-text-main mb-6">
                  {tier.subtitle}
                </p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-main/70 text-base">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={getWhatsAppLink(`Halo, saya tertarik dengan ${tier.name} untuk website.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-4 px-6 rounded-full bg-blue-primary text-white hover:bg-blue-primary/90 transition-colors font-semibold text-base"
                  >
                    {tier.isCustom ? 'Hubungi Kami' : 'Pilih Paket'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-text-main/70 text-lg">
            Butuh solusi khusus? <a href="#contact" className="text-blue-primary hover:text-blue-primary/90 font-medium">Hubungi kami</a> untuk mendiskusikan kebutuhan Anda
          </p>
        </div>
      </div>
    </section>
  )
} 