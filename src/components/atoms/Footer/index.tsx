import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="py-6 mt-8 text-textColor bg-color1 sm:mx-auto md:mx-auto lg:mx-auto">
      <div className="container px-10 mx-auto">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          {/* Logo dan Alamat */}
          <div className="text-left">
            <Image
              src="/images/Logo/logomps1.png"
              alt="Lloyd's Register"
              width={120}
              height={50}
              style={{
                filter: "invert(100%) brightness(200%)"
              }}
            />
          </div>

          {/* Get in Touch */}
          <div className="mr-10 text-left">
            <h1 className="text-[24px] md:text-[44px] lg:text-[44px] font-bold text-hero mb-4">
              Get in Touch
            </h1>
            <div className="flex flex-col items-start gap-3 md:flex-row-1 ">
              <Link
                href="mailto:
                  info@mpsjakarta.com
                
                "
                className="flex items-center gap-2 text-black no-underline"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-hijau">
                  <MdOutlineEmail className="w-6 h-6 text-white" />
                </div>
                <span className="text-[13px] text-textColor">
                  info@mpsjakarta.com
                </span>
              </Link>
              <Link
                href="tel:+6282143931809"
                className="flex items-center justify-center gap-2 text-black no-underline"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-hijau">
                  {/* Wrapper div */}
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </div>
                <p className="text-[13px] text-textColor">(+62)82143931809</p>
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-4 border-t-2 border-hijau" />

        {/* Gambar footer */}
        <div className="flex gap-4 mt-4 sm:justify-start md:justify-center lg:justify-start">
          <Image
            src="/images/Logo/iso.png"
            alt="Lloyd's Register"
            width={120}
            height={50}
            className=""
          />
          <Image
            src="/images/Logo/BP3MI.png"
            alt="Lloyd's Register"
            width={120}
            height={50}
            className=""
          />
        </div>
      </div>
    </footer>
  );
}
