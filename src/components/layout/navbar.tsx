'use client'

import { COMPANY_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center -ml-3">
            <Image
              src="/logo.png"
              alt={COMPANY_NAME}
              width={180}
              height={45}
              className="h-12 w-auto"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-text-main hover:text-blue-primary">
              Tentang Kami
            </Link>
            <Link href="#services" className="text-text-main hover:text-blue-primary">
              Layanan
            </Link>
            <Link href="#clients" className="text-text-main hover:text-blue-primary">
              Klien
            </Link>
            <Link href="#pricing" className="text-text-main hover:text-blue-primary">
              Harga
            </Link>
            <Link 
              href="#contact"
              className="px-6 py-2 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90"
            >
              Hubungi Kami
            </Link>
          </div>

          <button 
            type="button"
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="#about" className="block text-text-main hover:text-blue-primary">
              Tentang Kami
            </Link>
            <Link href="#services" className="block text-text-main hover:text-blue-primary">
              Layanan
            </Link>
            <Link href="#clients" className="block text-text-main hover:text-blue-primary">
              Klien
            </Link>
            <Link href="#pricing" className="block text-text-main hover:text-blue-primary">
              Harga
            </Link>
            <Link 
              href="#contact"
              className="block px-6 py-2 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 text-center"
            >
              Hubungi Kami
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 