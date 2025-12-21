import Link from "next/link";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 w-full bg-linear-to-r from-gray-900 via-blue-900 to-gray-900 backdrop-blur-lg z-50 border-b border-blue-800/30 shadow-xl"
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center h-20 lg:h-24">
          <Link
            href="/"
            className="flex select-none flex-col items-start group transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Op. Dr. Mehmet Şahin Ana Sayfa"
          >
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white transition-colors duration-300 ">
              OP. DR. MEHMET ŞAHİN
            </h1>
            <div className="w-full h-0.5 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 mt-1.5 transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
            <p className="text-[10px] sm:text-xs lg:text-sm text-blue-300 mt-1.5 font-medium tracking-wide">
              KATARAKT VE REFRAKTİF CERRAHİ (EXCIMER LAZER)
            </p>
          </Link>

          <DesktopNavbar />

          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}
