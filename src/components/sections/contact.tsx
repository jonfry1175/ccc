'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { Mail, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could integrate with your email service
    window.location.href = `mailto:admin@metasolusidigital.com?subject=Pesan dari ${formData.name}&body=${formData.message}`
  }

  return (
    <section id="contact" className="py-20 bg-[#0F172A]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-blue-primary uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4 text-white">
            Mulai Proyek Anda
          </h2>
          <p className="text-gray-300 text-lg">
            Diskusikan kebutuhan website Anda dengan tim kami
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* WhatsApp CTA */}
            <div className="flex flex-col items-center justify-center text-center lg:order-2">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 w-full max-w-md">
                <div className="w-16 h-16 bg-blue-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-blue-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Chat WhatsApp
                </h3>
                <p className="text-gray-300 mb-8">
                  Cara tercepat untuk mendapatkan respon dari tim kami
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-colors font-semibold text-lg w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>

            {/* Email Form */}
            <div className="lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A]">Email Kami</h3>
                    <p className="text-text-main/70">Kami akan membalas dalam 1x24 jam</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0F172A]/70 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-primary/20 focus:border-blue-primary bg-gray-50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0F172A]/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-primary/20 focus:border-blue-primary bg-gray-50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0F172A]/70 mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-primary/20 focus:border-blue-primary resize-none bg-gray-50"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#0F172A] text-white rounded-full hover:bg-[#0F172A]/90 transition-colors font-semibold"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 