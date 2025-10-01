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
    <footer className="relative mt-auto bg-gradient-to-t from-primaryRed via-primaryRed/95 to-primaryRed/90 text-primaryWhite">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primaryWhite/10 via-primaryWhite/60 to-primaryWhite/10"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Christianity Crisis Center
            </h3>
            <p className="text-sm leading-relaxed text-primaryWhite/80">
              Sejak 2015 kami mendampingi komunitas dengan layanan pemberdayaan
              kerja, pelatihan terarah, dan jejaring peluang bagi anggota gereja
              yang ingin membangun karier berkelanjutan.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com"
                className="rounded-full bg-primaryWhite/10 p-2 text-primaryWhite transition hover:bg-primaryWhite/20"
                aria-label="Facebook Christianity Crisis Center"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/mpsjakarta/"
                target="_blank"
                className="rounded-full bg-primaryWhite/10 p-2 text-primaryWhite transition hover:bg-primaryWhite/20"
                aria-label="Instagram Christianity Crisis Center"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                className="rounded-full bg-primaryWhite/10 p-2 text-primaryWhite transition hover:bg-primaryWhite/20"
                aria-label="LinkedIn Christianity Crisis Center"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/62214354959"
                className="rounded-full bg-primaryWhite/10 p-2 text-primaryWhite transition hover:bg-primaryWhite/20"
                aria-label="WhatsApp Christianity Crisis Center"
              >
                <FaWhatsapp className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Hubungi Kami</h3>
            <div className="space-y-4 text-sm text-primaryWhite/80">
              <div className="flex items-start gap-3">
                <FaLocationDot className="mt-1 h-5 w-5" />
                <Link
                  href="https://maps.app.goo.gl/FXgSJvUu21Ht2JH38"
                  target="_blank"
                  className="transition hover:text-primaryWhite"
                >
                  Lorong 101 Timur No. 73, Kec. Koja, Jakarta Utara, 14220,
                  Indonesia
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineEmail className="h-5 w-5" />
                <Link
                  href="mailto:info@mpsjakarta.com"
                  className="transition hover:text-primaryWhite"
                >
                  info@mpsjakarta.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="h-5 w-5" />
                <Link
                  href="tel:+62214354959"
                  className="transition hover:text-primaryWhite"
                >
                  (+62)21-435-4959
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-primaryWhite/20 pt-8 text-xs text-primaryWhite/70 md:flex-row">
          <p>
            © {currentYear} Christianity Crisis Center. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-primaryWhite"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms-of-service"
              className="transition hover:text-primaryWhite"
            >
              Syarat Layanan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
