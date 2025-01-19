import { COMPANY_NAME, PHONE, SOCIAL_LINKS } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt={COMPANY_NAME}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">{COMPANY_NAME}</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Solusi Digital Yang Mengakselerasi Kesuksesan Bisnis Anda
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-white">
                  Harga
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">{PHONE}</li>
              <li>
                <a 
                  href={`https://wa.me/${PHONE.replace(/\D/g, '')}`}
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Social Media</h3>
            <ul className="space-y-2">
              {Object.entries(SOCIAL_LINKS).map(([platform, username]) => (
                <li key={platform}>
                  <a 
                    href={`https://${platform}.com/${username}`}
                    className="text-gray-300 hover:text-white capitalize"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 