'use client'

import { getWhatsAppLink } from '@/lib/constants'
import { Mail, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { motion } from 'framer-motion'
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
    <section id="contact" className="py-12 sm:py-16 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-medium text-blue-primary uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
            Mulai Project Anda
          </h2>
          <p className="text-base sm:text-lg text-text-main/70">
            Diskusikan kebutuhan website Anda dengan tim kami
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center text-center lg:order-2"
            >
              <div className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-md">
                <div className="flex flex-col items-center p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-5">
                    <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-blue-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-text-main">
                    Chat WhatsApp
                  </h3>
                  <p className="text-sm sm:text-base text-text-main/70 mb-5 sm:mb-6">
                    Cara tercepat untuk mendapatkan respon dari tim kami
                  </p>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-all duration-300 font-semibold text-sm sm:text-base w-full group-hover:shadow-lg group-hover:shadow-blue-primary/25"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <div className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-text-main">Email Kami</h3>
                      <p className="text-sm text-text-main/70">Kami akan membalas dalam 1x24 jam</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-main/70 mb-1.5">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-primary/20 focus:border-blue-primary bg-gray-50/50 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-main/70 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-primary/20 focus:border-blue-primary bg-gray-50/50 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-main/70 mb-1.5">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-primary/20 focus:border-blue-primary resize-none bg-gray-50/50 text-sm"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-all duration-300 font-semibold text-sm group-hover:shadow-lg group-hover:shadow-blue-primary/25"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 