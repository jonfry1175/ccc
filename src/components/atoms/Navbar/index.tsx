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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/Logo/logomps1.png"
                  alt="Lloyd's Register"
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
              className={`px-2 py-2 transition duration-300 font-medium ${isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-white hover:text-gold"
                } ${patname === "/" ? "border-b-2 border-gold" : ""}`}
            >
              <p className="text-[15px]">Home</p>
            </Link>

            <Link
              href="/article"
              className={`px-2 py-2 transition duration-300 font-medium ${isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-white hover:text-gold"
                } ${patname.startsWith("/article") ? "border-b-2 border-gold" : ""}`}
            >
              <p className="text-[15px]">Article</p>
            </Link>

            <Link
              href={patname.startsWith("/article") ? "/#about" : "#about"}
              onClick={() => {
                if (!patname.startsWith("/article")) handleScroll("about");
                setIsOpen(false);
              }}
              className={`px-2 py-2 transition duration-300 font-medium ${isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-white hover:text-gold"
                }`}
            >
              <p className="text-[15px]">About</p>
            </Link>
            <Link
              href={patname.startsWith("/article") ? "/#contact" : "#contact"}
              onClick={() => {
                if (!patname.startsWith("/article")) handleScroll("contact");
                setIsOpen(false);
              }}
              className={`px-2 py-2 transition duration-300 font-medium ${isScrolled
                  ? "text-navy-DEFAULT hover:text-gold"
                  : "text-white hover:text-gold"
                }`}
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
                <X className={`w-6 h-6 transition-all ${isScrolled ? "text-gold" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 transition-all ${isScrolled ? "text-gold" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden transition-all px-4 gap-4 pb-2 duration-300 ease-in-out ${isScrolled ? "bg-white" : "bg-navy-DEFAULT/90 backdrop-blur-sm"
          } ${isOpen
            ? "opacity-100 max-h-40 translate-y-0 shadow-md"
            : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="overflow-hidden gap-4 py-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-white hover:bg-white/10 hover:text-gold"
              }`}
          >
            Home
          </Link>
          <Link
            href="/article"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-white hover:bg-white/10 hover:text-gold"
              }`}
          >
            Article
          </Link>
          <Link
            href={patname.startsWith("/article") ? "/#about" : "#about"}
            onClick={() => {
              if (!patname.startsWith("/article")) handleScroll("about");
              setIsOpen(false);
            }}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-white hover:bg-white/10 hover:text-gold"
              }`}
          >
            About
          </Link>
          <Link
            href={patname.startsWith("/article") ? "/#contact" : "#contact"}
            onClick={() => {
              if (!patname.startsWith("/article")) handleScroll("contact");
              setIsOpen(false);
            }}
            className={`block py-2 text-sm transition pl-2 duration-300 rounded-md font-medium ${isScrolled
                ? "text-navy-DEFAULT hover:bg-gold/10 hover:text-gold"
                : "text-white hover:bg-white/10 hover:text-gold"
              }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
