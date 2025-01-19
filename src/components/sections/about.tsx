'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <span className="text-sm font-medium text-blue-primary uppercase tracking-wider">
              Tentang Kami
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-8">
              Partner Terpercaya untuk Transformasi Digital Anda
            </h2>
            <p className="text-text-main/70 text-lg leading-relaxed max-w-3xl mx-auto">
              PT Meta Solusi Digital adalah partner yang akan mendampingi transformasi digital bisnis 
              Anda. Dengan keahlian di bidang Website, Aplikasi Web, Mobile Apps, dan Strategi Digital 
              Marketing, tim kami siap menghadirkan solusi yang selaras dengan visi bisnis Anda.
            </p>
            <div className="pt-8">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-primary hover:gap-4 transition-all font-semibold"
              >
                Mulai Diskusi <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 