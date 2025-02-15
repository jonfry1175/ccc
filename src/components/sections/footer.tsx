import { COMPANY_NAME } from '@/lib/constants'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6'
import { BiCopyright } from 'react-icons/bi'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-12 sm:py-16 bg-[#0F172A] text-white">
            <div className="container px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4 sm:space-y-5">
                        <div className="flex items-center gap-2">
                            <BiCopyright className="w-5 h-5 text-blue-primary" />
                            <span className="font-semibold text-lg">{COMPANY_NAME}</span>
                        </div>
                        <p className="text-gray-300/90 text-sm sm:text-base leading-relaxed">
                            Solusi digital terpercaya untuk mengembangkan bisnis Anda ke era digital dengan website profesional dan modern.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-5">Layanan</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#services" className="text-sm sm:text-base text-gray-300/90 hover:text-white transition-colors">
                                    Website Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-sm sm:text-base text-gray-300/90 hover:text-white transition-colors">
                                    Web Application
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-sm sm:text-base text-gray-300/90 hover:text-white transition-colors">
                                    Mobile Apps
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-sm sm:text-base text-gray-300/90 hover:text-white transition-colors">
                                    Digital Marketing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-5">Perusahaan</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#about" className="text-sm sm:text-base text-gray-300/90 hover:text-white transition-colors">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="#clients" className="text-sm sm:text-base text-gray-300/90 hover:text-white transition-colors">
                                    Klien
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-sm sm:text-base text-gray-300/90 hover:text-white transition-colors">
                                    Harga
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-sm sm:text-base text-gray-300/90 hover:text-white transition-colors">
                                    Hubungi Kami
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-5">Ikuti Kami</h3>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/metasolusidigitalco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-blue-primary transition-all duration-300 group"
                            >
                                test<FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300/90 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://www.instagram.com/metasolusidigitalco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-blue-primary transition-all duration-300 group"
                            >
                                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300/90 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@metasolusidigitalco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-blue-primary transition-all duration-300 group"
                            >
                                <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300/90 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800/80 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
                    <p className="text-gray-400/90 text-sm flex items-center justify-center gap-1.5">
                        <BiCopyright className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    )
} 