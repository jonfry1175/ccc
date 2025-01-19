'use client'

import { CheckCircle2 } from 'lucide-react'

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
    <section id="why-us" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Mengapa Anda Harus Memilih Meta Solusi Digital?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div 
              key={reason.id}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-primary/10">
                  <CheckCircle2 className="w-6 h-6 text-blue-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-text-main">
                  {reason.title}
                </h4>
                <p className="text-text-main/70">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 