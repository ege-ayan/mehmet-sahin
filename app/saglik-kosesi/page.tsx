import BlogCard from "./_components/blog-card";
import { BLOGS } from "./_contents/blogs";

export default function Page() {
  return (
    <main className="w-full flex px-4 sm:px-6 lg:px-8 pt-32 sm:pt-48 pb-20 flex-col items-center bg-linear-to-b from-gray-50 to-white">
      <article className="container flex flex-col items-center justify-center">
        <header className="text-4xl lg:text-6xl font-bold text-center tracking-tight mb-6 lg:mb-8">
          <h1 className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            SAĞLIK KÖŞESİ
          </h1>
        </header>

        <p className="text-center text-gray-600 text-base sm:text-lg max-w-3xl mb-12 lg:mb-16 leading-relaxed">
          Göz sağlığı hakkında bilgilendirici yazılar, hastalıklar ve tedavi
          yöntemleri hakkında detaylı bilgiler
        </p>

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
