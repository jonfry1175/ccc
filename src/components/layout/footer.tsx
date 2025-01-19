import { COMPANY_NAME } from '@/lib/constants'
import { Copyright, Facebook, Instagram, Linkedin, } from 'lucide-react'
import Link from 'next/link'

const SOCIAL_LINKS = {
  facebook: 'Meta Solusi Digital',
  instagram: 'metasolusdigitalco',
  tiktok: 'metasolusdigitalco',
  linkedin: 'Meta Solusi Digital'
}

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Copyright className="w-5 h-5 text-blue-primary" />
              <span className="font-semibold text-lg">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Solusi digital terpercaya untuk mengembangkan bisnis Anda ke era digital dengan website profesional dan modern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Web Application
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#clients" className="text-gray-300 hover:text-white transition-colors">
                  Klien
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Harga
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href={`https://facebook.com/${SOCIAL_LINKS.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://instagram.com/${SOCIAL_LINKS.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://linkedin.com/company/${SOCIAL_LINKS.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Copyright className="w-4 h-4" />
            <span>{new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
} 