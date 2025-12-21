"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkinda", label: "Hakkımda" },
  { href: "/saglik-kosesi", label: "Sağlık Köşesi" },
  { href: "/iletisim", label: "İletişim" },
];

export default function DesktopNavbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav
      className="hidden select-none lg:flex items-center gap-8 xl:gap-12"
      aria-label="Ana navigasyon"
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`relative text-base xl:text-lg font-semibold transition-all duration-300 group ${
            isActive(link.href)
              ? "text-blue-400"
              : "text-white hover:text-blue-300"
          }`}
          aria-current={isActive(link.href) ? "page" : undefined}
        >
          {link.label}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
              isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
}
