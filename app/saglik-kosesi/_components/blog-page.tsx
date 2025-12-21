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
    <main className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 bg-linear-to-b from-gray-50 to-white min-h-screen">
      <article className="container flex flex-col">
        {/* Back Button */}
        <Link
          href="/saglik-kosesi"
          className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors w-fit"
          aria-label="Sağlık köşesi listesine geri dön"
        >
          <FiArrowLeft
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          <span>Sağlık Köşesi</span>
        </Link>

        {/* Title */}
        <header className="mb-8 lg:mb-10">
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
        </header>

        {/* Featured Image */}
        <figure className="w-full flex justify-center mb-10 lg:mb-12">
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-100">
            <Image
              src={imageSrc}
              alt={`${title} - Op. Dr. Mehmet Şahin`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px"
              className="object-cover"
            />
          </div>
        </figure>

        {/* Content */}
        <section className="prose prose-lg prose-gray max-w-none">
          <div className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 space-y-6">
            {children}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent my-12" />

        {/* Call to Action */}
        <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-10 border border-blue-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Randevu Almak İster misiniz?
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Göz sağlığınız için profesyonel destek alın
              </p>
            </div>
            <Link
              href="/iletisim"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
