import Image from "next/image";
import Link from "next/link";

interface FieldCardProps {
  title: string;
  imageUrl: string;
  href: string;
}

export default function FieldCard({ title, imageUrl, href }: FieldCardProps) {
  return (
    <Link href={href}>
      <div className="relative block w-full h-full rounded-lg overflow-hidden shadow-xl group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="transition-transform duration-500 group-hover:scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-100"></div>
        <h2 className="absolute bottom-8 left-8 text-white text-3xl font-semibold z-10">
          {title}
        </h2>
      </div>
    </Link>
  );
}
