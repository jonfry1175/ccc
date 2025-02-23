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
      className={`shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-50 backdrop-blur-lg bg-color4" : "bg-color4"
      }`}
    >
      <div className="max-w-6xl px-2 mx-auto">
        <div className="flex justify-between">
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
          <div className="items-center hidden space-x-1 px-10 md:flex">
            <Link
              href="/"
              className={`px-2 py-4 transition duration-300 text-color1 hover:underline ${
                patname === "/" ? "underline" : ""
              }`}
            >
              <p>Home</p>
            </Link>

            <Link
              href="/article"
              className={`px-2 py-4 transition duration-300 text-color1 hover:underline ${
                patname.startsWith("/article") ? "underline" : ""
              }`}
            >
              <p>Article</p>
            </Link>

            <Link
              href={patname.startsWith("/article") ? "/#about" : "#about"}
              onClick={() => {
                if (!patname.startsWith("/article")) handleScroll("about");
                setIsOpen(false);
              }}
              className="px-2 py-4 transition duration-300 text-color1 hover:text-color1"
            >
              <p>About</p>
            </Link>
            <Link
              href={patname.startsWith("/article") ? "/#contact" : "#contact"}
              onClick={() => {
                if (!patname.startsWith("/article")) handleScroll("contact");
                setIsOpen(false);
              }}
              className="px-2 py-4 transition duration-300 text-color1 hover:text-color1"
            >
              <p>Contact</p>
            </Link>
          </div>
          <div className="flex items-center md:hidden transition-all">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-color1 transition-all" />
              ) : (
                <Menu className="w-6 h-6 text-color1" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden transition-all px-4 gap-4 pb-2 bg-color4 duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-40 translate-y-0"
            : "opacity-0 max-h-0 -translate-y-4"
        }`}
      >
        <div className="overflow-hidden gap-4  ">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm transition pl-2 duration-300 hover:bg-color1 hover:text-white rounded-md"
          >
            Home
          </Link>
          <Link
            href="/article"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm transition pl-2 duration-300 hover:bg-color1 hover:text-white rounded-md"
          >
            Article
          </Link>
          <Link
            href={patname.startsWith("/article") ? "/#about" : "#about"}
            onClick={() => {
              if (!patname.startsWith("/article")) handleScroll("about");
              setIsOpen(false);
            }}
            className="block py-2 text-sm transition pl-2 duration-300 hover:bg-color1 hover:text-white rounded-md"
          >
            About
          </Link>
          <Link
            href={patname.startsWith("/article") ? "/#contact" : "#contact"}
            onClick={() => {
              if (!patname.startsWith("/article")) handleScroll("contact");
              setIsOpen(false);
            }}
            className="block py-2 text-sm transition pl-2 duration-300 hover:bg-color1 hover:text-white rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
