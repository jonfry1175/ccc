"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg bg-white sticky top-0 z-50 transition-all">
      <div className="max-w-6xl px-4 mx-auto">
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
          <div className="items-center hidden space-x-1 md:flex">
            <Link
              href="/"
              className="px-2 py-4 transition duration-300 text-color1 hover:text-color1"
            >
              <p>Home</p>
            </Link>
            <Link
              href="/about"
              className="px-2 py-4 transition duration-300 text-color1 hover:text-color1"
            >
              <p>About</p>
            </Link>
            <Link
              href="/contact"
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
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-40 translate-y-0"
            : "opacity-0 max-h-0 -translate-y-4"
        } overflow-hidden`}
      >
        <Link
          href="/"
          className="block px-4 py-2 text-sm transition duration-300 hover:bg-color1 hover:text-white h"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block px-4 py-2 text-sm transition duration-300 hover:bg-color1 hover:text-white h"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 text-sm transition duration-300 hover:bg-color1 hover:text-white h"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
