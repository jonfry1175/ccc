'use client'

import { COMPANY_NAME, getWhatsAppLink } from '@/lib/constants'
import { ChevronDown, Globe, Layout, Menu, Smartphone, X } from 'lucide-react'
import { AnimatePresence, motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '/', label: 'Beranda' },
  { 
    href: '#', 
    label: 'Layanan',
    children: [
      { 
        href: '/services/web-development', 
        label: 'Jasa Pembuatan Website',
        icon: Globe
      },
      { 
        href: '/services/web-applications', 
        label: 'Aplikasi Web',
        icon: Layout
      },
      { 
        href: '/services/mobile-applications', 
        label: 'Aplikasi Mobile',
        icon: Smartphone
      },
    ]
  },
  { href: '/portfolio', label: 'Portofolio' },
  { href: '/about', label: 'Tentang' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/"
            className="text-xl font-bold text-text-main hover:text-blue-primary transition-colors flex items-end gap-2"
          >
            <Image 
              src="/logo-m.png"
              alt="Company Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="leading-none">{COMPANY_NAME}</span>
          </Link>

          {/* Desktop Navigation with Clean Dropdown */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="text-text-main/70 hover:text-blue-primary transition-colors font-medium text-right flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg py-2 min-w-[240px] border border-gray-100">
                        {item.children.map((child) => {
                          const IconComponent = child.icon
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-text-main/70 hover:text-blue-primary hover:bg-gray-50/80 transition-colors"
                            >
                              <div className="w-8 h-8 bg-blue-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <IconComponent className="w-4 h-4 text-blue-primary" />
                              </div>
                              <span className="font-medium">{child.label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-text-main/70 hover:text-blue-primary transition-colors font-medium text-right"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-colors font-medium"
            >
              Hubungi Kami
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-text-main hover:text-blue-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation with Clean Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container py-4 space-y-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full py-2 text-text-main/70 hover:text-blue-primary transition-colors font-medium"
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="pl-4 mt-2 space-y-2">
                            {item.children.map((child) => {
                              const IconComponent = child.icon
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-3 py-2 text-text-main/70 hover:text-blue-primary transition-colors"
                                >
                                  <div className="w-8 h-8 bg-blue-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <IconComponent className="w-4 h-4 text-blue-primary" />
                                  </div>
                                  <span className="font-medium">{child.label}</span>
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-text-main/70 hover:text-blue-primary transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-blue-primary font-medium"
                >
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
} 