"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
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
      className={`shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-50 backdrop-blur-lg !text-color1 bg-gold"
          : "bg-gold py-2 text-color1"
      }`}
    >
      {/* <nav
      className={`shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-50 backdrop-blur-lg bg-color4" : "bg-color4"
      }`}
    ></nav> */}
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/Logo/logomps1.png"
                  alt="Marina Prima Sukses"
                  width={70}
                  height={50}
                  className={isScrolled ? "" : "drop-shadow-md"}
                />
              </Link>
            </div>
          </div>
          <div className="items-center hidden space-x-6 md:flex">
            <Link
              href="/"
              className={`px-2 py-2 transition duration-300 font-medium ${
                isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-color1 hover:text-gold text-shadow-md"
              } ${pathname === "/" ? "border-b-2 border-color1" : ""}`}
            >
              <p className="text-[15px]">Home</p>
            </Link>

            <Link
              href="/about"
              className={`px-2 py-2 transition duration-300 font-medium ${
                isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-color1 hover:text-gold text-shadow-md"
              } ${
                pathname === "/about" ? "border-b-2 border-color1" : ""
              }`}
            >
              <p className="text-[15px]">About Us</p>
            </Link>

            <Link
              href="/what-we-do"
              className={`px-2 py-2 transition duration-300 font-medium ${
                isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-color1 hover:text-gold text-shadow-md"
              } ${
                pathname === "/what-we-do" ? "border-b-2 border-color1" : ""
              }`}
            >
              <p className="text-[15px]">What We Do</p>
            </Link>

            <Link
              href="/services"
              className={`px-2 py-2 transition duration-300 font-medium ${
                isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-color1 hover:text-gold text-shadow-md"
              } ${
                pathname === "/services" ? "border-b-2 border-color1" : ""
              }`}
            >
              <p className="text-[15px]">Services</p>
            </Link>

            <Link
              href="/articles"
              className={`px-2 py-2 transition duration-300 font-medium ${
                isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-color1 hover:text-gold text-shadow-md"
              } ${
                pathname === "/articles" ? "border-b-2 border-color1" : ""
              }`}
            >
              <p className="text-[15px]">Articles</p>
            </Link>

            <Link
              href="/contact"
              className={`px-2 py-2 transition duration-300 font-medium ${
                isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-color1 hover:text-gold text-shadow-md"
              } ${
                pathname === "/contact" ? "border-b-2 border-color1" : ""
              }`}
            >
              <p className="text-[15px]">Contact</p>
            </Link>

            <Link
              href="/candidate"
              className={`px-2 py-2 transition duration-300 font-medium ${
                isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-color1 hover:text-gold text-shadow-md"
              } ${pathname === "/candidate" ? "border-b-2 border-color1" : ""}`}
            >
              <p className="text-[15px]">Apply as Candidate</p>
            </Link>
          </div>
          <div className="flex items-center md:hidden transition-all">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X
                  className={`w-6 h-6 transition-all ${
                    isScrolled ? "text-gold" : "text-color1 drop-shadow-md"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 transition-all ${
                    isScrolled ? "text-gold" : "text-color1 drop-shadow-md"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden transition-all px-4 gap-4 pb-2 duration-300 ease-in-out ${
          isScrolled ? "bg-white" : "bg-navy-DEFAULT/90 backdrop-blur-sm"
        } ${
          isOpen
            ? "opacity-100 max-h-96 translate-y-0 shadow-md"
            : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden gap-4 py-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${
              isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-color1 hover:bg-white/10 hover:text-gold"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${
              isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-color1 hover:bg-white/10 hover:text-gold"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/what-we-do"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${
              isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-color1 hover:bg-white/10 hover:text-gold"
            }`}
          >
            What We Do
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${
              isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-color1 hover:bg-white/10 hover:text-gold"
            }`}
          >
            Services
          </Link>
          <Link
            href="/articles"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${
              isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-color1 hover:bg-white/10 hover:text-gold"
            }`}
          >
            Articles
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${
              isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-color1 hover:bg-white/10 hover:text-gold"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/candidate"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${
              isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-color1 hover:bg-white/10 hover:text-gold"
            }`}
          >
            Apply as Candidate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
