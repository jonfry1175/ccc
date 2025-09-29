"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  onHomeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path: string) => {
    if (path === "/" && onHomeClick) {
      onHomeClick();
    } else {
      router.push(path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-primaryRed/10 bg-white/80 py-3 text-textBlack backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div
            onClick={() => handleNavigation("/")}
            className="cursor-pointer rounded-full bg-primaryRed/10 p-1"
          >
            <Image
              src="/images/Logo/christianity-crisis-center.png"
              alt="Marina Prima Sukses"
              width={70}
              height={50}
              className="drop-shadow-md"
            />
          </div>
          <div className="hidden flex-col text-sm font-semibold text-primaryRed md:flex">
            <span className="uppercase tracking-[0.3em] text-primaryRed/60">
              Marina Prima Sukses
            </span>
            <span className="text-textBlack">MSC Cruises Manning Agency</span>
          </div>
        </div>

        <div className="hidden items-center space-x-6 md:flex">
          <button
            onClick={() => handleNavigation("/")}
            className={`px-3 py-2 text-sm font-semibold transition-colors ${
              pathname === "/"
                ? "text-primaryRed"
                : "text-darkGray hover:text-primaryRed"
            }`}
          >
            Beranda
          </button>

          <button
            onClick={() => handleNavigation("/apply-now")}
            className={`px-3 py-2 text-sm font-semibold transition-colors ${
              pathname === "/apply-now"
                ? "text-primaryRed"
                : "text-darkGray hover:text-primaryRed"
            }`}
          >
            Daftar Sekarang
          </button>

          <button
            onClick={() => handleNavigation("/training-center")}
            className={`px-3 py-2 text-sm font-semibold transition-colors ${
              pathname === "/training-center"
                ? "text-primaryRed"
                : "text-darkGray hover:text-primaryRed"
            }`}
          >
            Pusat Pelatihan
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="rounded-full bg-primaryRed/10 p-2 text-primaryRed"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all px-4 gap-4 pb-2 duration-300 ease-in-out bg-white/95 backdrop-blur-sm ${
          isOpen
            ? "opacity-100 max-h-screen translate-y-0 shadow-md"
            : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden gap-4 py-2">
          <button
            onClick={() => handleNavigation("/")}
            className={`w-full px-2 py-2 text-left text-base font-medium transition-colors ${
              pathname === "/"
                ? "text-primaryRed"
                : "text-darkGray hover:text-primaryRed"
            }`}
          >
            Beranda
          </button>

          <button
            onClick={() => handleNavigation("/apply-now")}
            className={`w-full px-2 py-2 text-left text-base font-medium transition-colors ${
              pathname === "/apply-now"
                ? "text-primaryRed"
                : "text-darkGray hover:text-primaryRed"
            }`}
          >
            Daftar Sekarang
          </button>
          <button
            onClick={() => handleNavigation("/training-center")}
            className={`w-full px-2 py-2 text-left text-base font-medium transition-colors ${
              pathname === "/training-center"
                ? "text-primaryRed"
                : "text-darkGray hover:text-primaryRed"
            }`}
          >
            Pusat Pelatihan
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
