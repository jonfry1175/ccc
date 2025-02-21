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
    <nav className="shadow-lg bg-color3">
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
                  style={{
                    filter: "invert(100%) brightness(200%)"
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="items-center hidden space-x-1 md:flex">
            <Link
              href="/"
              className="px-2 py-4 transition duration-300 text-color1 hover:text-gray-900"
            >
              <p>Home</p>
            </Link>
            <Link
              href="/about"
              className="px-2 py-4 transition duration-300 text-color1 hover:text-gray-900"
            >
              <p>About</p>
            </Link>
            <Link
              href="/contact"
              className="px-2 py-4 transition duration-300 text-color1 hover:text-gray-900"
            >
              <p>Contact</p>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="/"
            className="block px-4 py-2 text-sm transition duration-300 hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-sm transition duration-300 hover:bg-gray-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-sm transition duration-300 hover:bg-gray-200"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
