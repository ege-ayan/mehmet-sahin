import BlogCard from "./_components/blog-card";
import { BLOGS } from "./_contents/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sağlık Köşesi",
  description:
    "Göz sağlığı hakkında bilgilendirici yazılar, hastalıklar ve tedavi yöntemleri. Katarakt, glokom, retina hastalıkları, excimer lazer ve daha fazlası hakkında detaylı bilgiler.",
  keywords: [
    "göz hastalıkları",
    "katarakt cerrahisi",
    "glokom",
    "retina hastalıkları",
    "excimer lazer",
    "göz sağlığı",
    "göz muayenesi",
    "göz tedavileri",
    "keratokonus",
    "diyabetik retinopati",
  ],
  alternates: {
    canonical: "/saglik-kosesi",
  },
  openGraph: {
    title: "Sağlık Köşesi | Op. Dr. Mehmet Şahin",
    description:
      "Göz sağlığı hakkında bilgilendirici yazılar, hastalıklar ve tedavi yöntemleri hakkında detaylı bilgiler.",
    url: "/saglik-kosesi",
  },
  twitter: {
    title: "Sağlık Köşesi | Op. Dr. Mehmet Şahin",
    description:
      "Göz sağlığı hakkında bilgilendirici yazılar ve tedavi yöntemleri.",
  },
};

export default function Page() {
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
              Bilgilendirici İçerikler
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              SAĞLIK KÖŞESİ
            </span>
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-center text-blue-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Göz sağlığı hakkında bilgilendirici yazılar, hastalıklar ve tedavi
            yöntemleri hakkında detaylı bilgiler
          </p>
        </header>

        <section
          aria-label="Sağlık köşesi makaleleri"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full"
        >
          {BLOGS.map((blog) => (
            <BlogCard
              key={blog.href}
              title={blog.title}
              imageUrl={blog.imageUrl}
              href={blog.href}
              description={blog.description}
            />
          ))}
        </section>
      </article>
    </main>
  );
}
