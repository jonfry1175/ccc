"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const patname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollEffect = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  return (
    <nav
      className={`shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-opacity-90 backdrop-blur-lg bg-navy-light" : "bg-white"
        }`}
    >
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center px-2 py-4">
                <Image
                  src="/images/Logo/logomps1.png"
                  alt="Lloyd's Register"
                  width={70}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="items-center hidden space-x-3 px-10 md:flex">
            <Link
              href="/"
              className={`px-2 py-4 transition duration-300 font-medium text-navy-DEFAULT hover:text-gold ${patname === "/" ? "text-gold border-b-2 border-gold" : ""
                }`}
            >
              <p className="text-[15px]">Home</p>
            </Link>

            <Link
              href="/article"
              className={`px-2 py-4 transition duration-300 font-medium text-navy-DEFAULT hover:text-gold ${patname.startsWith("/article") ? "text-gold border-b-2 border-gold" : ""
                }`}
            >
              <p className="text-[15px]">Article</p>
            </Link>

            <Link
              href={patname.startsWith("/article") ? "/#about" : "#about"}
              onClick={() => {
                if (!patname.startsWith("/article")) handleScroll("about");
                setIsOpen(false);
              }}
              className={`px-2 py-4 transition duration-300 font-medium text-navy-DEFAULT hover:text-gold`}
            >
              <p className="text-[15px]">About</p>
            </Link>
            <Link
              href={patname.startsWith("/article") ? "/#contact" : "#contact"}
              onClick={() => {
                if (!patname.startsWith("/article")) handleScroll("contact");
                setIsOpen(false);
              }}
              className={`px-2 py-4 transition duration-300 font-medium text-navy-DEFAULT hover:text-gold`}
            >
              <p className="text-[15px]">Contact</p>
            </Link>
          </div>
          <div className="flex items-center md:hidden transition-all">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gold transition-all" />
              ) : (
                <Menu className="w-6 h-6 text-gold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden transition-all px-4 gap-4 pb-2 bg-white duration-300 ease-in-out ${isOpen
            ? "opacity-100 max-h-40 translate-y-0 shadow-md"
            : "opacity-0 max-h-0 -translate-y-4"
          }`}
      >
        <div className="overflow-hidden gap-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm transition pl-2 duration-300 text-navy-DEFAULT hover:bg-gold/10 hover:text-gold rounded-md font-medium"
          >
            Home
          </Link>
          <Link
            href="/article"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm transition pl-2 duration-300 text-navy-DEFAULT hover:bg-gold/10 hover:text-gold rounded-md font-medium"
          >
            Article
          </Link>
          <Link
            href={patname.startsWith("/article") ? "/#about" : "#about"}
            onClick={() => {
              if (!patname.startsWith("/article")) handleScroll("about");
              setIsOpen(false);
            }}
            className="block py-2 text-sm transition pl-2 duration-300 text-navy-DEFAULT hover:bg-gold/10 hover:text-gold rounded-md font-medium"
          >
            About
          </Link>
          <Link
            href={patname.startsWith("/article") ? "/#contact" : "#contact"}
            onClick={() => {
              if (!patname.startsWith("/article")) handleScroll("contact");
              setIsOpen(false);
            }}
            className="block py-2 text-sm transition pl-2 duration-300 text-navy-DEFAULT hover:bg-gold/10 hover:text-gold rounded-md font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
