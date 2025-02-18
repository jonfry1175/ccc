'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { sendGTMEvent } from '@next/third-parties/google'

type PricingFeature = {
  text: string
}

type PricingTier = {
  id: number
  google_ads_id: string
  name: string
  price?: number
  subtitle: string
  features: PricingFeature[]
  isCustom?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    google_ads_id: 'AW-11565537272/nysJCJC67J8aEPiv8Ior',
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
    google_ads_id: 'AW-11565537272/WG5ACLny3p8aEPiv8Ior',
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
    google_ads_id: 'AW-11565537272/IwcRCN_Z7J8aEPiv8Ior',
    price: 8000000,
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
    google_ads_id: 'AW-11565537272/ocxOCN7b7J8aEPiv8Ior',
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
    <section id="pricing" className="py-12 sm:py-16 bg-white">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-medium text-blue-primary uppercase tracking-wider">
            Paket Harga Layanan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
            Pilihan Paket Website
          </h2>
          <p className="text-base sm:text-lg text-text-main/70">
            Solusi website yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-5 sm:p-6 bg-[#0F172A] text-white">
                <h3 className="text-lg font-semibold text-blue-primary mb-2">
                  {tier.name}
                </h3>
                {tier.isCustom ? (
                  <div className="text-2xl font-bold text-white">Hubungi Kami</div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-white">Rp</span>
                      <span className="text-3xl font-bold text-white tracking-tight">
                        {formatPrice(tier.price!)}
                      </span>
                    </div>
                    <div className="text-sm text-white/80 font-medium">per Tahun</div>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 flex-grow flex flex-col bg-white">
                <p className="text-sm font-semibold text-text-main mb-4">
                  {tier.subtitle}
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-main/70">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      sendGTMEvent({
                        event: "whatsapp",
                        value: tier.google_ads_id,
                      });

                      window.open(getWhatsAppLink(`Halo, saya tertarik dengan ${tier.name} untuk website.`), '_blank', 'noopener,noreferrer')
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer block text-center py-2.5 px-5 rounded-full bg-blue-primary text-white hover:bg-blue-primary/90 transition-all duration-300 font-semibold text-sm group-hover:shadow-lg group-hover:shadow-blue-primary/25"
                  >
                    {tier.isCustom ? 'Hubungi Kami' : 'Pilih Paket'}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 