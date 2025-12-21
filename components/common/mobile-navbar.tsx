"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkinda", label: "Hakkımda" },
  { href: "/saglik-kosesi", label: "Sağlık Köşesi" },
  { href: "/iletisim", label: "İletişim" },
];

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="lg:hidden" aria-label="Mobil navigasyon">
      {/* Hamburger Button */}
      <div className="z-60">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={28}
          color="#ffffff"
          duration={0.3}
          label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed left-0 right-0 top-20 lg:top-24 bg-gray-900/95 backdrop-blur-md border-t border-blue-800/30 shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex select-none flex-col items-start space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`w-full text-left text-base font-semibold py-3 px-4 transition-all duration-200 relative ${
                  isActive(link.href)
                    ? "text-blue-400"
                    : "text-white hover:text-blue-300"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-400 rounded-r" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 top-20 lg:top-24"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
