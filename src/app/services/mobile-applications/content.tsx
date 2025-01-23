'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Battery, Cloud, GitBranch, Shield, Smartphone, Tablet, Workflow, Zap } from 'lucide-react'

const features = [
  {
    Icon: Zap,
    title: 'Performa Tinggi',
    description: 'Aplikasi yang cepat dan responsif untuk pengalaman pengguna optimal'
  },
  {
    Icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Implementasi standar keamanan terkini untuk data pengguna'
  },
  {
    Icon: Battery,
    title: 'Hemat Baterai',
    description: 'Optimasi penggunaan daya untuk durasi penggunaan lebih lama'
  },
  {
    Icon: Cloud,
    title: 'Cloud Ready',
    description: 'Integrasi dengan layanan cloud untuk skalabilitas maksimal'
  }
]

const useCases = [
  {
    Icon: Smartphone,
    title: 'Native Apps',
    subtitle: 'Aplikasi iOS dan Android Berkualitas Tinggi',
    description: 'Kembangkan aplikasi native yang powerful dengan pengalaman pengguna terbaik. Kami hadirkan solusi mobile yang optimal dengan:',
    features: [
      'Performa tinggi dan responsif',
      'Integrasi fitur perangkat secara maksimal',
      'UI/UX sesuai guideline platform',
      'Optimasi ukuran aplikasi',
      'Support untuk versi OS terbaru'
    ]
  },
  {
    Icon: Tablet,
    title: 'Cross-Platform',
    subtitle: 'Solusi Multi-Platform yang Efisien',
    description: 'Jangkau pengguna di berbagai platform dengan satu basis kode. Hemat waktu dan biaya pengembangan melalui:',
    features: [
      'Pengembangan untuk iOS dan Android sekaligus',
      'UI/UX konsisten antar platform',
      'Proses update yang lebih cepat',
      'Performa mendekati native',
      'Dukungan komponen native'
    ]
  },
  {
    Icon: GitBranch,
    title: 'Integrasi Backend',
    subtitle: 'Konektivitas Tanpa Batas',
    description: 'Hubungkan aplikasi mobile Anda dengan berbagai layanan backend. Optimalkan fungsionalitas dengan:',
    features: [
      'API Integration yang seamless',
      'Sinkronisasi data real-time',
      'Offline mode capability',
      'Push notification system',
      'Analytics dan crash reporting'
    ]
  },
  {
    Icon: Workflow,
    title: 'Proses Deployment',
    subtitle: 'Publikasi Aplikasi yang Terstruktur',
    description: 'Pastikan aplikasi Anda siap untuk pengguna dengan proses deployment yang matang. Kami bantu dengan:',
    features: [
      'Submission ke App Store dan Play Store',
      'Optimasi untuk review guidelines',
      'Manajemen versi dan update',
      'Beta testing dan distribusi',
      'Monitoring post-launch'
    ]
  }
]

export default function MobileApplicationsContent() {
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
            <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-poppins">Aplikasi Mobile</h1>
        </div>
        
        <div className="prose prose-lg max-w-none mb-12 sm:mb-16">
          <p className="text-lg sm:text-xl text-text-main/70 font-poppins font-normal">
            Kami mengembangkan aplikasi mobile yang inovatif untuk platform iOS dan Android dengan fokus pada pengalaman pengguna dan performa.
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 font-poppins">Solusi Mobile untuk Berbagai Kebutuhan</h2>
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
          <p className="text-base sm:text-lg text-text-main/70 mb-6 sm:mb-8 font-poppins font-normal">Kami memastikan aplikasi mobile Anda tampil maksimal dengan fitur terbaik</p>
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
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-poppins">Siap Memulai Project Mobile Anda?</h2>
          <p className="text-base sm:text-lg mb-5 sm:mb-6 font-poppins font-normal">
            Konsultasikan kebutuhan aplikasi mobile Anda dengan tim kami secara gratis
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