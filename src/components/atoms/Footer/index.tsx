import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gold text-primaryRed relative">
      {/* Visual divider at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20"></div>

      <div className="max-w-6xl px-6 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primaryRed">
              Marina Prima Sukses
            </h3>
            <p className="text-primaryRed mb-6 text-[15px] leading-relaxed">
              Kami berspesialisasi dalam menyediakan solusi tenaga kerja terampil untuk industri perhotelan, menghubungkan talenta dengan peluang sejak tahun 1993.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/mpsjakarta/"
                className="bg-navy-light hover:bg-gold transition-colors duration-300 p-2 rounded-full"
              >
                <FaFacebook className="w-5 h-5 text-lightGold" />
              </Link>
              <Link
                href="https://www.instagram.com/mpsjakarta/"
                target="_blank"
                className="bg-navy-light hover:bg-gold transition-colors duration-300 p-2 rounded-full"
              >
                <FaInstagram className="w-5 h-5 text-lightGold" />
              </Link>
              <Link
                href="#"
                className="bg-navy-light hover:bg-gold transition-colors duration-300 p-2 rounded-full"
              >
                <FaLinkedin className="w-5 h-5 text-lightGold" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primaryRed">
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaLocationDot className="w-5 h-5 text-primaryRed mt-1" />
                <Link
                  href="https://maps.app.goo.gl/FXgSJvUu21Ht2JH38"
                  className="text-primaryRed hover:text-primaryRed/50 transition-colors duration-300 text-[15px]"
                >
                  Lorong 101 Timur No. 73, Kec. Koja, Jakarta Utara, 14220,
                  Indonesia
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <MdOutlineEmail className="w-5 h-5 text-primaryRed" />
                <Link
                  href="mailto:mps.marinaprima@gmail.com"
                  className="text-primaryRed hover:text-primaryRed/50 transition-colors duration-300 text-[15px]"
                >
                  info@mpsjakarta.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 text-primaryRed" />
                <Link
                  href="tel:+62214354959"
                  className="text-primaryRed hover:text-primaryRed/50 transition-colors duration-300 text-[15px]"
                >
                  (+62)21-435-4959
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-light/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primaryRed text-sm">
              © {currentYear} Marina Prima Sukses. All rights reserved by Meta
              Solusi Digital.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-primaryRed hover:text-lightGold text-sm mx-3"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms-of-service"
                className="text-primaryRed hover:text-lightGold text-sm mx-3"
              >
                Syarat Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
