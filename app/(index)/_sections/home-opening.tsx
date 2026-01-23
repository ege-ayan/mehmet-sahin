import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function HomeOpening() {
  return (
    <section className="relative w-full pt-10  min-h-screen flex items-center bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16">
          {/* Image - Now on Left */}
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-start">
            <div className="relative group max-w-2xl w-full">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-30" />

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800">
                <Image
                  src="/images/home/op-dr-mehmet-sahin.jpg"
                  alt="Op. Dr. Mehmet Şahin - Göz Hastalıkları Uzmanı"
                  width={600}
                  height={400}
                  priority
                  className="w-full h-auto object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/50 to-transparent opacity-0" />
              </div>
            </div>
          </div>

          {/* Text Content - Now on Right */}
          <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-blue-400 text-sm sm:text-base font-semibold tracking-wider uppercase">
                  Göz Hastalıkları Uzmanı
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                <span className="block bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                  <span className="text-3xl sm:text-5xl font-bold text-white leading-tight">
                    Op. Dr.
                  </span>{" "}
                  Mehmet Şahin
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-blue-200 font-light leading-relaxed max-w-2xl">
              Katarakt ve Refraktif Cerrahi Uzmanı
            </p>

            {/* Experience Badge */}
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-6 py-4 inline-block">
              <p className="text-blue-100 text-lg sm:text-2xl font-semibold">
                <span className="text-2xl text-blue-300 font-bold">
                  40.000+
                </span>{" "}
                Vaka Deneyimi
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Link
                href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaCalendarAlt className="text-lg" />
                <span>Randevu Al</span>
              </Link>
              <Link
                href="/hakkinda"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Hakkımda</span>
              </Link>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 text-blue-200">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-sm">Özel Koru Hastanesi, Ankara</span>
              </div>
              <a
                href="tel:+903129117777"
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <FaPhoneAlt className="text-blue-400" />
                <span className="text-sm">0312 911 77 77</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
