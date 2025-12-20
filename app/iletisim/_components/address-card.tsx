import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaGlobe,
  FaCalendarAlt,
} from "react-icons/fa";

export default function AddressCard() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 text-white rounded-2xl shadow-2xl p-8 sm:p-10 border-4 border-blue-100">
      <div className="flex flex-col items-center space-y-8 max-w-xl">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-3xl font-bold">Özel Koru Hastanesi</h2>
          </div>
          <address className="text-lg lg:text-xl text-blue-50 not-italic leading-relaxed">
            Kızılay Mah. 1450. Sok. No:13
            <br />
            06510 Çukurambar, Çankaya
            <br />
            <span className="font-semibold text-white">ANKARA</span>
          </address>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-blue-400/30" />

        {/* Contact Information */}
        <div className="flex flex-col items-start justify-center gap-5 w-full">
          <div className="flex items-center gap-4 text-lg lg:text-xl group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400/20 group-hover:bg-green-400/30 transition-colors">
              <FaPhoneAlt className="text-green-300" aria-hidden="true" />
            </div>
            <a
              href="tel:+903129117777"
              className="text-blue-50 hover:text-yellow-300 transition-colors"
            >
              0312 911 77 77
            </a>
          </div>

          <div className="flex items-center gap-4 text-lg lg:text-xl group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/20 group-hover:bg-yellow-400/30 transition-colors">
              <FaEnvelope className="text-yellow-300" aria-hidden="true" />
            </div>
            <Link
              href="mailto:mehmet_sahintr@yahoo.com"
              className="text-blue-50 hover:text-yellow-300 transition-colors underline decoration-blue-300"
            >
              mehmet_sahintr@yahoo.com
            </Link>
          </div>

          <div className="flex items-center gap-4 text-lg lg:text-xl group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-400/20 group-hover:bg-pink-400/30 transition-colors">
              <FaInstagram className="text-pink-300" aria-hidden="true" />
            </div>
            <Link
              href="https://www.instagram.com/dr.mehmet.sahin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-50 hover:text-yellow-300 transition-colors underline decoration-blue-300"
            >
              @dr.mehmet.sahin
            </Link>
          </div>

          <div className="flex items-center gap-4 text-lg lg:text-xl group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-400/20 group-hover:bg-purple-400/30 transition-colors">
              <FaCalendarAlt className="text-purple-300" aria-hidden="true" />
            </div>
            <Link
              href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-50 hover:text-yellow-300 transition-colors underline decoration-blue-300"
            >
              Doktor Takvimi
            </Link>
          </div>

          <div className="flex items-center gap-4 text-lg lg:text-xl group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-colors">
              <FaGlobe className="text-cyan-300" aria-hidden="true" />
            </div>
            <Link
              href="https://www.doktorsitesi.com/op-dr-mehmet-sahin/goz-hastaliklari/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-50 hover:text-yellow-300 transition-colors underline decoration-blue-300"
            >
              Doktor Sitesi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
