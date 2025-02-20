'use client'

import { COMPANY_NAME, getWhatsAppLink } from '@/lib/constants'
import { ChevronDown, Globe, Layout, Menu, Smartphone, Megaphone, X } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'
import { AnimatePresence, motion } from "motion/react"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import { Logo } from '@/components/ui/logo'

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
      {
        href: '/services/digital-marketing',
        label: 'Digital Marketing',
        icon: Megaphone
      },
      {
        href: '/services/social-media-management',
        label: 'Social Media Management',
        icon: Smartphone
      }
    ]
  },
  { href: '/#about', label: 'Tentang Kami' },
  { href: '/#clients', label: 'Portofolio' },
]

const SCROLL_OFFSET = -80 // Height of navbar + some padding

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const handleAnchorClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't handle non-anchor links or WhatsApp
    if (!href.startsWith('/#') || href.includes('whatsapp')) {
      setIsOpen(false) // Close menu for regular navigation
      return
    }

    e.preventDefault()
    const targetId = href.replace('/#', '')

    // Close mobile menu
    setIsOpen(false)
    setActiveDropdown(null)

    // If we're not on the home page, navigate first
    if (pathname !== '/') {
      router.push('/')
      // Wait for navigation and DOM update
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          const offsetPosition = element.offsetTop + SCROLL_OFFSET
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
      return
    }

    // If we're already on the home page
    const element = document.getElementById(targetId)
    if (element) {
      const offsetPosition = element.offsetTop + SCROLL_OFFSET
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`text-lg font-bold transition-colors flex items-center gap-1.5 ${isScrolled
              ? 'text-text-main'
              : pathname === '/'
                ? 'text-blue-200'
                : 'text-text-main'
              }`}
          >
            <div className={`flex items-center gap-1.5 ${!isScrolled && pathname === '/'
              ? 'bg-gradient-to-r from-blue-950/50 to-blue-900/30 backdrop-blur-sm px-3 py-2 rounded-full'
              : ''
              }`}>
              <Logo
                className="h-6 w-auto md:block hidden"
              />
              <span className="md:block hidden">{COMPANY_NAME}</span>
              <Logo
                className="h-5 w-auto md:hidden block"
              />
            </div>
          </Link>

          {/* Desktop Navigation with Smooth Scroll */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`transition-colors font-medium flex items-center gap-1 ${isScrolled
                        ? 'text-text-main/70 hover:text-blue-primary'
                        : pathname === '/'
                          ? 'text-white/80 hover:text-white'
                          : 'text-text-main/70 hover:text-blue-primary'
                        }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-slate-900/90 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] py-3 min-w-[280px] border border-blue-500/20 backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/5 to-blue-900/20 opacity-80"></div>
                        <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                        {item.children.map((child) => {
                          const IconComponent = child.icon
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={(e) => handleAnchorClick(e, child.href)}
                              className="flex items-center gap-3 px-4 py-3 text-blue-100/70 hover:text-white relative group/item transition-colors"
                            >
                              <div className="w-9 h-9 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover/item:scale-110 group-hover/item:shadow-[0_0_20px_-3px_rgba(59,130,246,0.4)]">
                                <IconComponent className="w-4 h-4 text-blue-400 transition-transform duration-200 group-hover/item:scale-110" />
                              </div>
                              <div className="space-y-0.5">
                                <span className="font-medium block">{child.label}</span>
                                <span className="text-xs text-blue-200/50 block opacity-0 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-200">
                                  {child.label === 'Jasa Pembuatan Website' && 'Website profesional & responsif'}
                                  {child.label === 'Aplikasi Web' && 'Solusi aplikasi berbasis web'}
                                  {child.label === 'Aplikasi Mobile' && 'Aplikasi Android & iOS'}
                                  {child.label === 'Digital Marketing' && 'Strategi pemasaran digital'}
                                  {child.label === 'Social Media Management' && 'Pengelolaan media sosial'}
                                </span>
                              </div>
                              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={`transition-colors font-medium text-right flex items-center gap-1 ${isScrolled
                      ? 'text-text-main/70 hover:text-blue-primary'
                      : pathname === '/'
                        ? 'text-white/80 hover:text-white'
                        : 'text-text-main/70 hover:text-blue-primary'
                      }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Updated CTA Button */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}

              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                sendGTMEvent({
                  event: "whatsapp",
                  value: "AW-11565537272/eck8CPC2vJQaEPiv8Ior",
                });

                // Delay 100-300ms before pushing
                setTimeout(() => {
                  router.push(getWhatsAppLink())
                }, 200)

              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 transition-colors font-medium cursor-pointer"
            >
              <BsWhatsapp className="w-4 h-4" />
              WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 md:hidden transition-colors ${isScrolled
              ? 'text-text-main hover:text-blue-primary'
              : 'text-white/80 hover:text-white'
              }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation with Smooth Scroll */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-sm border-t fixed top-20 left-0 right-0 shadow-lg"
            >
              <div className="container py-4 space-y-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full py-2 text-text-main hover:text-blue-primary transition-colors font-medium"
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
                                  onClick={(e) => handleAnchorClick(e, child.href)}
                                  className="flex items-center gap-3 py-2 text-text-main hover:text-blue-primary transition-colors"
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
                        onClick={(e) => handleAnchorClick(e, item.href)}
                        className="block py-2 text-text-main hover:text-blue-primary transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-primary text-white rounded-full font-medium hover:bg-blue-primary/90 transition-colors"
                  >
                    <BsWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
} 