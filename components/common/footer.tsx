import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaGlobe,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-gray-900 via-blue-900 to-gray-900 text-white border-t border-blue-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
                  Özel Koru Hastanesi
                </h2>
                <address className="text-base lg:text-lg text-blue-100 not-italic leading-relaxed">
                  Kızılay Mah. 1450. Sok. No:13
                  <br />
                  06510 Çukurambar, Çankaya
                  <br />
                  <span className="font-semibold text-white">ANKARA</span>
                </address>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
              İletişim Bilgileri
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-base lg:text-lg group">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors shrink-0">
                  <FaPhoneAlt
                    className="text-blue-300 text-sm"
                    aria-hidden="true"
                  />
                </div>
                <a
                  href="tel:+903129117777"
                  className="text-blue-100 hover:text-blue-200 transition-colors"
                >
                  0312 911 77 77
                </a>
              </div>

              <div className="flex items-center gap-3 text-base lg:text-lg group">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors shrink-0">
                  <FaEnvelope
                    className="text-blue-300 text-sm"
                    aria-hidden="true"
                  />
                </div>
                <Link
                  href="mailto:mehmet_sahintr@yahoo.com"
                  className="text-blue-100 hover:text-blue-200 transition-colors underline decoration-blue-400 break-all"
                >
                  mehmet_sahintr@yahoo.com
                </Link>
              </div>

              <div className="flex items-center gap-3 text-base lg:text-lg group">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors shrink-0">
                  <FaInstagram
                    className="text-blue-300 text-sm"
                    aria-hidden="true"
                  />
                </div>
                <Link
                  href="https://www.instagram.com/dr.mehmet.sahin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-blue-200 transition-colors underline decoration-blue-400"
                >
                  @dr.mehmet.sahin
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
              Hızlı Bağlantılar
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-base lg:text-lg group">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors shrink-0">
                  <FaCalendarAlt
                    className="text-blue-300 text-sm"
                    aria-hidden="true"
                  />
                </div>
                <Link
                  href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-blue-200 transition-colors underline decoration-blue-400"
                >
                  Doktor Takvimi
                </Link>
              </div>

              <div className="flex items-center gap-3 text-base lg:text-lg group">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors shrink-0">
                  <FaGlobe
                    className="text-blue-300 text-sm"
                    aria-hidden="true"
                  />
                </div>
                <Link
                  href="https://www.doktorsitesi.com/op-dr-mehmet-sahin/goz-hastaliklari/ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-blue-200 transition-colors underline decoration-blue-400"
                >
                  Doktor Sitesi
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700/50 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm lg:text-base">
              © {new Date().getFullYear()} Op. Dr. Mehmet Şahin. Tüm Hakları
              Saklıdır.
            </p>
            <p className="text-blue-300 text-xs lg:text-sm">
              Göz Hastalıkları Uzmanı | Katarakt & Refraktif Cerrahi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
