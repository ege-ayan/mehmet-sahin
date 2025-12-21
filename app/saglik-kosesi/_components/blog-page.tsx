import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

interface BlogPageProps {
  title: string;
  imageSrc: string;
  children: React.ReactNode;
}

export default function BlogPage({ title, imageSrc, children }: BlogPageProps) {
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

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col">
        {/* Back Button */}
        <Link
          href="/saglik-kosesi"
          className="group flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold mb-8 transition-colors w-fit"
          aria-label="Sağlık köşesi listesine geri dön"
        >
          <FiArrowLeft
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          <span>Sağlık Köşesi</span>
        </Link>

        {/* Section Header */}
        <header className="text-center mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="text-blue-400 text-sm sm:text-base font-semibold tracking-wider uppercase mb-4 block">
              Sağlık Köşesi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto rounded-full" />
        </header>

        {/* Featured Image */}
        <figure className="w-full flex justify-center mb-12 lg:mb-16">
          <div className="relative max-w-4xl w-full">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-30" />

            {/* Image Container */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800">
              <Image
                src={imageSrc}
                alt={`${title} - Op. Dr. Mehmet Şahin`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 900px"
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        {/* Content */}
        <section className="prose prose-lg prose-invert max-w-none w-full">
          <div className="text-base sm:text-lg lg:text-xl leading-relaxed text-blue-100 space-y-6">
            {children}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent my-12" />

        {/* Call to Action */}
        <div className="w-full">
          <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Randevu Almak İster misiniz?
                </h2>
                <p className="text-base sm:text-lg text-blue-100">
                  Göz sağlığınız için profesyonel destek alın
                </p>
              </div>
              <Link
                href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
