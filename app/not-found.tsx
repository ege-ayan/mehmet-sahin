import Link from "next/link";
import { FaHome, FaSearch, FaPhoneAlt } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative w-full min-h-screen pt-32 sm:pt-48 pb-20 flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[150px] sm:text-[200px] md:text-[250px] font-bold text-blue-500/20 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl sm:text-7xl md:text-8xl font-bold bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-base sm:text-lg text-blue-200 max-w-md mb-10 leading-relaxed">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
          dönebilir veya aşağıdaki bağlantıları kullanabilirsiniz.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
          >
            <FaHome className="text-lg" />
            <span>Ana Sayfa</span>
          </Link>
          <Link
            href="/saglik-kosesi"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <FaSearch className="text-lg" />
            <span>Sağlık Köşesi</span>
          </Link>
          <Link
            href="/iletisim"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <FaPhoneAlt className="text-lg" />
            <span>İletişim</span>
          </Link>
        </div>

        {/* Decorative divider */}
        <div className="w-24 h-1 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto rounded-full mt-16" />
      </div>
    </main>
  );
}
