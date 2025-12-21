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
    <main className="relative w-full min-h-screen pt-32 sm:pt-48 pb-20 flex flex-col items-center bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
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

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        {/* Section Header */}
        <header className="text-center mb-16 lg:mb-20">
          <div className="inline-block">
            <span className="text-blue-400 text-sm sm:text-base font-semibold tracking-wider uppercase mb-4 block">
              Profesyonel Profil
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              HAKKIMDA
            </span>
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto rounded-full" />
        </header>

        <section
          aria-labelledby="personal-info"
          className="relative w-full mb-12 lg:mb-20"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Content */}
            <div className="flex flex-col w-full lg:w-1/2 justify-center text-white space-y-8">
              <h2 id="personal-info" className="sr-only">
                Kişisel Bilgiler
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl lg:text-2xl font-bold">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                    <FaUser
                      className="text-blue-300 text-xl"
                      aria-hidden="true"
                    />
                  </div>
                  <span>Kişisel Bilgiler</span>
                </div>
                <p className="pl-16 text-base lg:text-lg text-blue-100 leading-relaxed">
                  1976 Mersin doğumluyum. Evli ve bir çocuk babasıyım.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl lg:text-2xl font-bold">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                    <FaBriefcase
                      className="text-blue-300 text-xl"
                      aria-hidden="true"
                    />
                  </div>
                  <span>İş Tecrübesi</span>
                </div>
                <p className="pl-16 text-base lg:text-lg text-blue-100 leading-relaxed">
                  2003-2011 yılları arasında kamu hastanelerinde görev yaptım.
                  2011 yılından beri özel sektördeyim. Halen Özel Koru Hastanesi
                  (Çukurambar) bünyesindeki göz kliniğinde çalışmaktayım.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl lg:text-2xl font-bold">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                    <FaGraduationCap
                      className="text-blue-300 text-xl"
                      aria-hidden="true"
                    />
                  </div>
                  <span>Eğitim Bilgileri</span>
                </div>
                <p className="pl-16 text-base lg:text-lg text-blue-100 leading-relaxed">
                  1999 yılında Ankara Üniversitesi Tıp Fakültesi'nden mezun
                  oldum. 2003 yılında Ankara Eğitim ve Araştırma Hastanesi Göz
                  Kliniği'nde ihtisasımı tamamladım.
                </p>
              </div>
            </div>

            {/* Image */}
            <figure className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative max-w-lg w-full">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-30" />

                {/* Image Container */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800">
                  <Image
                    src="/images/about/about-1.jpg"
                    alt="Op. Dr. Mehmet Şahin - Profil Fotoğrafı"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </figure>
          </div>
        </section>

        <section
          aria-labelledby="expertise"
          className="relative w-full mt-12 lg:mt-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Image */}
            <figure className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative max-w-lg w-full">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-30" />

                {/* Image Container */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800">
                  <Image
                    src="/images/about/about-2.jpg"
                    alt="Op. Dr. Mehmet Şahin - Çalışma Ortamı"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </figure>

            {/* Content */}
            <div className="flex flex-col w-full lg:w-1/2 justify-center text-white space-y-8">
              <h2 id="expertise" className="sr-only">
                Uzmanlık Alanı
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl lg:text-2xl font-bold">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                    <FaStethoscope
                      className="text-blue-300 text-xl"
                      aria-hidden="true"
                    />
                  </div>
                  <span>Uzmanlık Alanı</span>
                </div>
                <p className="pl-16 text-base lg:text-lg text-blue-100 leading-relaxed">
                  Katarakt ve Diğer Ön Segment Cerrahileri, Refraktif Cerrahi,
                  Retina Hastalıkları{" "}
                  <span className="font-semibold text-blue-300">
                    (30.000'den fazla vaka deneyimi)
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl lg:text-2xl font-bold">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                    <FaLanguage
                      className="text-blue-300 text-xl"
                      aria-hidden="true"
                    />
                  </div>
                  <span>Yabancı Dil Bilgisi</span>
                </div>
                <p className="pl-16 text-base lg:text-lg text-blue-100 leading-relaxed">
                  İngilizce
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl lg:text-2xl font-bold">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                    <FaUsers
                      className="text-blue-300 text-xl"
                      aria-hidden="true"
                    />
                  </div>
                  <span>Üyesi Olduğu Dernekler</span>
                </div>
                <ul
                  className="pl-16 space-y-3 text-base lg:text-lg"
                  aria-label="Üyesi Olduğu Dernekler"
                >
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-300 rounded-full shrink-0"></span>
                    <Link
                      href="https://www.todnet.org/home/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 underline decoration-blue-400"
                    >
                      Türk Oftalmoloji Derneği (TOD)
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-300 rounded-full shrink-0"></span>
                    <Link
                      href="https://tcod-tros.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 underline decoration-blue-400"
                    >
                      Türk Cumhuriyetleri Oftalmoloji Derneği (TCOD)
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-300 rounded-full shrink-0"></span>
                    <Link
                      href="https://www.aao.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 underline decoration-blue-400"
                    >
                      American Academy of Ophthalmology (AAO)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
