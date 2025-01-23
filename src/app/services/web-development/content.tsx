'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Building2, Globe, GraduationCap, Laptop, Lock, Search, Share2, Smartphone, Store } from 'lucide-react'

const features = [
  {
    Icon: Laptop,
    title: 'Performa dan Kecepatan',
    description: 'Website yang cepat dan responsif untuk pengalaman pengguna optimal'
  },
  {
    Icon: Search,
    title: 'Optimasi SEO',
    description: 'Teknik SEO terbaik untuk meningkatkan visibilitas online'
  },
  {
    Icon: Smartphone,
    title: 'Responsif',
    description: 'Tampilan yang sempurna di semua ukuran layar dan perangkat'
  },
  {
    Icon: Lock,
    title: 'Keamanan',
    description: 'Implementasi standar keamanan terkini untuk melindungi data'
  }
]

const useCases = [
  {
    Icon: Store,
    title: 'E-Commerce',
    subtitle: 'Buka Toko Online Professional Anda',
    description: 'Tingkatkan penjualan Anda dengan platform e-commerce yang powerful. Kami hadirkan solusi toko online yang tidak hanya menarik, tapi juga mudah dikelola:',
    features: [
      'Sistem pembayaran dan checkout yang aman',
      'Manajemen produk dan inventori real-time',
      'Dashboard analytics penjualan',
      'Sistem loyalty dan voucher',
      'Integrasi dengan marketplace populer'
    ]
  },
  {
    Icon: Building2,
    title: 'Company Profile',
    subtitle: 'Tingkatkan Kredibilitas Bisnis Anda',
    description: 'Bangun kepercayaan klien dengan website profesional yang mencerminkan identitas brand Anda. Tampilkan keunggulan bisnis Anda melalui:',
    features: [
      'Desain premium yang mencerminkan brand identity',
      'Halaman portofolio dan testimoni yang menarik',
      'Integrasi dengan media sosial dan contact form',
      'Optimasi SEO untuk meningkatkan visibility',
      'Dashboard admin untuk update konten mandiri'
    ]
  },
  {
    Icon: GraduationCap,
    title: 'Website Pendidikan',
    subtitle: 'Platform Pembelajaran Modern',
    description: 'Transformasi digital untuk institusi pendidikan Anda. Hadirkan pengalaman belajar yang interaktif dan efektif dengan:',
    features: [
      'Sistem manajemen pembelajaran (LMS) yang powerful',
      'Portal siswa/mahasiswa dengan login personal',
      'Integrasi sistem pembayaran untuk kursus online',
      'Forum diskusi dan fitur kolaborasi',
      'Tracking progress pembelajaran real-time'
    ]
  },
  {
    Icon: Share2,
    title: 'Portal Informasi & Sosial Media',
    subtitle: 'Bangun Komunitas Online Anda',
    description: 'Ciptakan ruang digital yang menghubungkan audiens Anda. Kembangkan komunitas yang aktif dan loyal dengan platform yang dilengkapi:',
    features: [
      'Sistem manajemen konten yang mudah digunakan',
      'Fitur komentar dan diskusi real-time',
      'Integrasi dengan media sosial',
      'Sistem membership dan subscription',
      'Analytics untuk monitoring engagement'
    ]
  },
  {
    Icon: Globe,
    title: 'Landing Page',
    subtitle: 'Konversi Pengunjung Menjadi Pelanggan',
    description: 'Maksimalkan peluang konversi dengan landing page yang dirancang khusus untuk penjualan. Tingkatkan ROI marketing Anda dengan:',
    features: [
      'Desain yang fokus pada call-to-action',
      'Form capture leads yang efektif',
      'A/B testing untuk optimasi konversi',
      'Integrasi dengan tools marketing',
      'Analytics untuk tracking performa'
    ]
  }
]

export default function WebDevelopmentContent() {
  const handleCTAClick = () => {
    const navCTAButton = document.querySelector('nav a[target="_blank"][rel="noopener noreferrer"]') as HTMLAnchorElement
    if (navCTAButton) {
      navCTAButton.click()
    }
  }

  return (
    <div className="container px-4 sm:px-6 max-w-4xl py-12 sm:py-20 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-poppins">Jasa Pembuatan Website</h1>
        </div>
        
        <div className="prose prose-lg max-w-none mb-12 sm:mb-16">
          <p className="text-lg sm:text-xl text-text-main/70 font-poppins font-normal">
            Wujudkan presence online bisnis Anda dengan website profesional yang dibangun khusus sesuai kebutuhan. Kami hadirkan solusi website modern dengan performa tinggi dan desain menarik.
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 font-poppins">Solusi Website Untuk Berbagai Kebutuhan</h2>
          <p className="text-base sm:text-lg text-text-main/70 mb-6 sm:mb-8 font-poppins font-normal">Pilih solusi yang sesuai dengan kebutuhan bisnis Anda</p>
          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            {useCases.map((useCase, index) => (
              <AccordionItem
                key={useCase.title}
                value={`item-${index}`}
                className="border border-gray-100 rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-md transition-all data-[state=open]:shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 sm:px-8 py-6 sm:py-8 [&[data-state=open]>div]:text-blue-primary hover:bg-blue-50/50">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <useCase.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{useCase.title}</h3>
                      <p className="text-sm sm:text-base text-text-main/70 mt-1 font-medium">{useCase.subtitle}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 sm:px-8 pb-6 sm:pb-8 bg-gradient-to-b from-blue-50/30">
                  <div className="pl-16 sm:pl-20">
                    <p className="text-base sm:text-lg mb-4 sm:mb-6 text-text-main/70">{useCase.description}</p>
                    <ul className="space-y-2 sm:space-y-3">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 sm:gap-3 text-text-main/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-primary/70" />
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 font-poppins">Keunggulan Layanan Kami</h2>
          <p className="text-base sm:text-lg text-text-main/70 mb-6 sm:mb-8 font-poppins font-normal">Kami memastikan website Anda tampil maksimal dengan fitur terbaik</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-primary mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-text-main/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-blue-primary/5 p-6 sm:p-8 rounded-xl sm:rounded-2xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-poppins">Siap Memulai Project Website Anda?</h2>
          <p className="text-base sm:text-lg mb-5 sm:mb-6 font-poppins font-normal">
            Konsultasikan kebutuhan website Anda dengan tim kami secara gratis
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-blue-primary hover:bg-blue-primary/90 text-white"
            onClick={handleCTAClick}
          >
            Hubungi Kami Sekarang
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
} 