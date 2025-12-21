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
    <div className="w-full h-full flex items-center justify-center xl:justify-start text-white p-8 sm:p-10">
      <div className="flex flex-col items-center xl:items-start space-y-8 max-w-xl">
        {/* Hospital Name & Address */}
        <div className="text-center xl:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Özel Koru Hastanesi
          </h2>
          <address className="text-base sm:text-lg lg:text-xl text-blue-100 not-italic leading-relaxed">
            Kızılay Mah. 1450. Sok. No:13
            <br />
            06510 Çukurambar, Çankaya
            <br />
            <span className="font-semibold text-blue-300">ANKARA</span>
          </address>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start justify-center gap-6 w-full">
          <div className="flex items-center gap-4 text-base sm:text-lg lg:text-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
              <FaPhoneAlt
                className="text-blue-300 text-xl"
                aria-hidden="true"
              />
            </div>
            <a
              href="tel:+903129117777"
              className="text-blue-100 hover:text-blue-300 transition-colors"
            >
              0312 911 77 77
            </a>
          </div>

          <div className="flex items-center gap-4 text-base sm:text-lg lg:text-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
              <FaEnvelope
                className="text-blue-300 text-xl"
                aria-hidden="true"
              />
            </div>
            <Link
              href="mailto:mehmet_sahintr@yahoo.com"
              className="text-blue-100 hover:text-blue-300 transition-colors underline decoration-blue-400"
            >
              mehmet_sahintr@yahoo.com
            </Link>
          </div>

          <div className="flex items-center gap-4 text-base sm:text-lg lg:text-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
              <FaInstagram
                className="text-blue-300 text-xl"
                aria-hidden="true"
              />
            </div>
            <Link
              href="https://www.instagram.com/dr.mehmet.sahin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-blue-300 transition-colors underline decoration-blue-400"
            >
              @dr.mehmet.sahin
            </Link>
          </div>

          <div className="flex items-center gap-4 text-base sm:text-lg lg:text-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
              <FaCalendarAlt
                className="text-blue-300 text-xl"
                aria-hidden="true"
              />
            </div>
            <Link
              href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-blue-300 transition-colors underline decoration-blue-400"
            >
              Doktor Takvimi
            </Link>
          </div>

          <div className="flex items-center gap-4 text-base sm:text-lg lg:text-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
              <FaGlobe className="text-blue-300 text-xl" aria-hidden="true" />
            </div>
            <Link
              href="https://www.doktorsitesi.com/op-dr-mehmet-sahin/goz-hastaliklari/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-blue-300 transition-colors underline decoration-blue-400"
            >
              Doktor Sitesi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
