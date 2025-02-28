import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gold text-color1 relative">
      {/* Visual divider at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20"></div>

      <div className="max-w-6xl px-6 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-color1">
              Marina Prima Sukses
            </h3>
            <p className="text-color1 mb-6 text-[15px] leading-relaxed">
              We specialize in providing skilled manpower solutions for the
              hospitality industry, connecting talent with opportunities since
              1993.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/mpsjakarta/"
                className="bg-navy-light hover:bg-gold transition-colors duration-300 p-2 rounded-full"
              >
                <FaFacebook className="w-5 h-5 text-color4" />
              </Link>
              <Link
                href="https://www.instagram.com/mpsjakarta/"
                target="_blank"
                className="bg-navy-light hover:bg-gold transition-colors duration-300 p-2 rounded-full"
              >
                <FaInstagram className="w-5 h-5 text-color4" />
              </Link>
              <Link
                href="#"
                className="bg-navy-light hover:bg-gold transition-colors duration-300 p-2 rounded-full"
              >
                <FaLinkedin className="w-5 h-5 text-color4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-color1">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-color1 hover:text-color1/50 transition-colors duration-300 text-[15px]"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-color1 hover:text-color1/50 transition-colors duration-300 text-[15px]"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-color1 hover:text-color1/50 transition-colors duration-300 text-[15px]"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-color1 hover:text-color1/50 transition-colors duration-300 text-[15px]"
              >
                Contact
              </Link>
              <Link
                href="#career"
                className="text-color1 hover:text-color1/50 transition-colors duration-300 text-[15px]"
              >
                Careers
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-color1">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaLocationDot className="w-5 h-5 text-color1 mt-1" />
                <p className="text-color1 text-[15px]">
                  Indofood Tower 15<sup>th</sup> Floor, JL. Jend. Sudirman
                  Kav.76-78 Jakarta 12910 - Indonesia
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MdOutlineEmail className="w-5 h-5 text-color1" />
                <Link
                  href="mailto:mps.marinaprima@gmail.com"
                  className="text-color1 hover:text-color1/50 transition-colors duration-300 text-[15px]"
                >
                  mps.marinaprima@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 text-color1" />
                <Link
                  href="tel:+6221536673356"
                  className="text-color1 hover:text-color1/50 transition-colors duration-300 text-[15px]"
                >
                  +62 21 5366 7356
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-light/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-color1 text-sm">
              © {currentYear} Marina Prima Sukses. All rights reserved by Meta
              Solusi Digital.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                href="#"
                className="text-color1 hover:text-gold text-sm mx-3"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-color1 hover:text-gold text-sm mx-3"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
