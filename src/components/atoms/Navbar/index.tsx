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
    <nav className="shadow-lg bg-gold py-2 text-color1 sticky top-0 z-50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex justify-between items-center">
          <div onClick={() => handleNavigation("/")} className="cursor-pointer">
            <Image
              src="/images/Logo/christianity-crisis-center.png"
              alt="Marina Prima Sukses"
              width={70}
              height={50}
              className="drop-shadow-md"
            />
          </div>
          <div className="items-center hidden space-x-6 md:flex">
            <button
              onClick={() => handleNavigation("/")}
              className={`px-2 py-2 transition duration-300 font-medium text-color1 hover:text-gold text-shadow-md ${
                pathname === "/" ? "border-b-2 border-color1" : ""
              }`}
            >
              <p className="text-[15px]">Home</p>
            </button>

            <button
              onClick={() => handleNavigation("/apply-now")}
              className={`px-2 py-2 transition duration-300 font-medium text-color1 hover:text-gold text-shadow-md ${
                pathname === "/apply-now" ? "border-b-2 border-color1" : ""
              }`}
            >
              <p className="text-[15px]">Apply Now</p>
            </button>

            <button
              onClick={() => handleNavigation("/training-center")}
              className={`px-2 py-2 transition duration-300 font-medium text-color1 hover:text-gold text-shadow-md ${
                pathname === "/training-center"
                  ? "border-b-2 border-color1"
                  : ""
              }`}
            >
              <p className="text-[15px]">Training Center</p>
            </button>
          </div>
          <div className="flex items-center md:hidden transition-all">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-color1 drop-shadow-md" />
              ) : (
                <Menu className="w-6 h-6 text-color1 drop-shadow-md" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all px-4 gap-4 pb-2 duration-300 ease-in-out bg-navy-DEFAULT/90 backdrop-blur-sm ${
          isOpen
            ? "opacity-100 max-h-screen translate-y-0 shadow-md"
            : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden gap-4 py-2">
          <button
            onClick={() => handleNavigation("/")}
            className={`w-full text-left px-2 py-2 transition duration-300 font-medium ${
              pathname === "/" ? "border-b-2 border-color1" : ""
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavigation("/apply-now")}
            className={`w-full text-left px-2 py-2 transition duration-300 font-medium ${
              pathname === "/apply-now" ? "border-b-2 border-color1" : ""
            }`}
          >
            Apply Now
          </button>
          <button
            onClick={() => handleNavigation("/training-center")}
            className={`w-full text-left px-2 py-2 transition duration-300 font-medium ${
              pathname === "/training-center" ? "border-b-2 border-color1" : ""
            }`}
          >
            Training-center
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
