import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 mt-8 text-white bg-color4 sm:mx-auto md:mx-auto lg:mx-auto">
      <div className="max-w-6xl px-10 mx-auto">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          {/* Logo dan Alamat */}
          <div className="text-left">
            {/* <Image
              src="/images/Logo/logomps1.png"
              alt="Lloyd's Register"
              width={120}
              height={50}
              // style={{
              //   filter: "invert(100%) brightness(200%)"
              // }}
            /> */}
          </div>

          {/* Get in Touch */}
          <div className="w-full text-left text-color1">
            <h1 className="text-[36px] font-bold text-hero mb-4">
              Get in Touch
            </h1>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="mailto:info@mpsjakarta.com"
                className="flex items-center gap-2 text-black no-underline"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-hijau">
                  <MdOutlineEmail className="w-6 h-6 text-color1" />
                </div>
                <p className="text-[14px] text-color1">info@mpsjakarta.com</p>
              </Link>
              <Link
                href="tel:+6282143931809"
                className="flex items-center gap-2 text-black no-underline"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-hijau">
                  <FaWhatsapp className="w-6 h-6 text-color1" />
                </div>
                <p className="text-[14px] text-color1">(+62)82143931809</p>
              </Link>
              <Link
                href={"https://www.instagram.com/mpsjakarta/"}
                target="_blank"
                className="flex items-center gap-2 text-black no-underline"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-hijau">
                  <FaInstagram className="w-6 h-6 text-color1" />
                </div>
                <p className="text-[14px] text-color1">@mpsjakarta</p>
              </Link>
            </div>
          </div>
        </div>

        {/* <hr className="my-4 border-t-2 border-hijau" /> */}

        {/* Gambar footer responsive */}
        {/* <div className="grid grid-cols-2 gap-6 mt-4 items-center sm:grid-cols-4 sm:gap-10 md:justify-center">
          <Image
            src="/images/Logo/iso.png"
            alt="ISO Logo"
            width={100}
            height={40}
            className="object-contain mx-auto"
          />
          <Image
            src="/images/Logo/BP3MI.png"
            alt="BP3MI Logo"
            width={100}
            height={40}
            className="object-contain mx-auto"
          />
          <Image
            src="/images/Logo/1.png"
            alt="Custom Logo 1"
            width={50}
            height={50}
            className="object-contain mx-auto"
          />
          <Image
            src="/images/Logo/2.png"
            alt="Custom Logo 2"
            width={150}
            height={40}
            className="object-contain mx-auto"
          />
        </div> */}
      </div>
    </footer>
  );
}
