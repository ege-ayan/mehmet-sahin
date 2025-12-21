import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  imageUrl: string;
  href: string;
  description: string;
}

export default function BlogCard({
  title,
  imageUrl,
  href,
  description,
}: BlogCardProps) {
  return (
    <article className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 select-none">
      <Link href={href} aria-label={`${title} hakkında daha fazla bilgi`}>
        <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={`${title} - Op. Dr. Mehmet Şahin`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500"
          />
        </div>

        <div className="p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
            <span>Devamını Oku</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
