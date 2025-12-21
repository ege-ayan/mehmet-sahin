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
    <article className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl overflow-hidden shadow-xl select-none">
      <Link href={href} aria-label={`${title} hakkında daha fazla bilgi`}>
        <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-800">
          <Image
            src={imageUrl}
            alt={`${title} - Op. Dr. Mehmet Şahin`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent" />
        </div>

        <div className="p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 line-clamp-2">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-blue-100 leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="mt-4 flex items-center text-blue-300 font-semibold text-sm">
            <span>Devamını Oku</span>
            <svg
              className="w-4 h-4 ml-2"
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
