import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaStethoscope,
  FaLanguage,
  FaUsers,
} from "react-icons/fa";

export default function AboutContent() {
  return (
    <main className="w-full flex px-4 sm:px-6 lg:px-8 pt-32 sm:pt-48 pb-20 flex-col items-center bg-linear-to-b from-gray-50 to-white">
      <article className="container flex flex-col items-center justify-center">
        <header className="text-4xl lg:text-6xl font-bold text-center tracking-tight mb-12 lg:mb-16">
          <h1 className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            HAKKIMDA
          </h1>
        </header>

        <section
          aria-labelledby="personal-info"
          className="flex w-full bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 transition-all duration-300 hover:shadow-blue-500/20"
        >
          <div className="flex flex-col w-full lg:w-2/3 justify-center text-white space-y-8">
            <h2 id="personal-info" className="sr-only">
              Kişisel Bilgiler
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-2xl lg:text-3xl font-bold">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/20">
                  <FaUser
                    className="text-yellow-300 text-xl"
                    aria-hidden="true"
                  />
                </div>
              <span>Kişisel Bilgiler</span>
            </div>
              <p className="pl-16 text-lg lg:text-xl text-blue-50 leading-relaxed">
              1976 Mersin doğumluyum. Evli ve bir çocuk babasıyım.
            </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-2xl lg:text-3xl font-bold">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400/20">
                  <FaBriefcase
                    className="text-green-300 text-xl"
                    aria-hidden="true"
                  />
                </div>
                <span>İş Tecrübesi</span>
              </div>
              <p className="pl-16 text-lg lg:text-xl text-blue-50 leading-relaxed">
                2003-2011 yılları arasında kamu hastanelerinde görev yaptım.
                2011 yılından beri özel sektördeyim. Halen Özel Koru Hastanesi
              (Çukurambar) bünyesindeki göz kliniğinde çalışmaktayım.
            </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-2xl lg:text-3xl font-bold">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-400/20">
                  <FaGraduationCap
                    className="text-red-300 text-xl"
                    aria-hidden="true"
                  />
                </div>
                <span>Eğitim Bilgileri</span>
              </div>
              <p className="pl-16 text-lg lg:text-xl text-blue-50 leading-relaxed">
              1999 yılında Ankara Üniversitesi Tıp Fakültesi'nden mezun oldum.
                2003 yılında Ankara Eğitim ve Araştırma Hastanesi Göz
                Kliniği'nde ihtisasımı tamamladım.
            </p>
            </div>
          </div>

          <figure className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-square">
            <Image
              src="/images/about/about-1.jpg"
                alt="Op. Dr. Mehmet Şahin - Profil Fotoğrafı"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
              priority
                className="rounded-2xl shadow-2xl border-4 border-white/80 object-cover"
            />
            </div>
          </figure>
        </section>

        <section
          aria-labelledby="expertise"
          className="flex flex-col w-full mt-12 lg:mt-20 bg-linear-to-br from-blue-900 via-blue-700 to-blue-600 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl lg:flex-row items-center justify-between gap-8 lg:gap-16 transition-all duration-300 hover:shadow-blue-500/20"
        >
          <figure className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm aspect-square">
            <Image
              src="/images/about/about-2.jpg"
                alt="Op. Dr. Mehmet Şahin - Çalışma Ortamı"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
              priority
                className="rounded-2xl shadow-2xl border-4 border-white/80 object-cover"
            />
            </div>
          </figure>

          <div className="flex flex-col w-full lg:w-2/3 justify-center text-white space-y-8">
            <h2 id="expertise" className="sr-only">
              Uzmanlık Alanı
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-2xl lg:text-3xl font-bold">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-400/20">
                  <FaStethoscope
                    className="text-purple-300 text-xl"
                    aria-hidden="true"
                  />
                </div>
              <span>Uzmanlık Alanı</span>
            </div>
              <p className="pl-16 text-lg lg:text-xl text-blue-50 leading-relaxed">
              Katarakt ve Diğer Ön Segment Cerrahileri, Refraktif Cerrahi,
                Retina Hastalıkları{" "}
                <span className="font-semibold text-yellow-300">
                  (30.000'den fazla vaka deneyimi)
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-2xl lg:text-3xl font-bold">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/20">
                  <FaLanguage
                    className="text-cyan-300 text-xl"
                    aria-hidden="true"
                  />
                </div>
              <span>Yabancı Dil Bilgisi</span>
              </div>
              <p className="pl-16 text-lg lg:text-xl text-blue-50 leading-relaxed">
                İngilizce
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-2xl lg:text-3xl font-bold">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-400/20">
                  <FaUsers
                    className="text-pink-300 text-xl"
                    aria-hidden="true"
                  />
                </div>
              <span>Üyesi Olduğu Dernekler</span>
            </div>
            <ul
                className="pl-16 space-y-3 text-lg lg:text-xl"
              aria-label="Üyesi Olduğu Dernekler"
            >
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-yellow-300 rounded-full shrink-0"></span>
                <Link
                  href="https://www.todnet.org/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="text-blue-50 hover:text-yellow-300 transition-colors duration-200 underline decoration-blue-300 hover:decoration-yellow-300"
                >
                  Türk Oftalmoloji Derneği (TOD)
                </Link>
              </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-yellow-300 rounded-full shrink-0"></span>
                <Link
                  href="https://tcod-tros.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="text-blue-50 hover:text-yellow-300 transition-colors duration-200 underline decoration-blue-300 hover:decoration-yellow-300"
                >
                  Türk Cumhuriyetleri Oftalmoloji Derneği (TCOD)
                </Link>
              </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-yellow-300 rounded-full shrink-0"></span>
                <Link
                  href="https://www.aao.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="text-blue-50 hover:text-yellow-300 transition-colors duration-200 underline decoration-blue-300 hover:decoration-yellow-300"
                >
                  American Academy of Ophthalmology (AAO)
                </Link>
              </li>
            </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
