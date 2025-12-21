"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function HomeMedia() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="text-blue-400 text-sm sm:text-base font-semibold tracking-wider uppercase mb-4 block">
              Medya İçeriği
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              MEDYA
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto rounded-full" />
        </div>

        {/* Video Container */}
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="relative max-w-4xl w-full">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-30" />

            {/* Video Container */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800">
              {!isVideoLoaded ? (
                // Thumbnail with Play Button (No third-party requests)
                <button
                  onClick={handleLoadVideo}
                  className="absolute inset-0 w-full h-full bg-gray-900 hover:bg-gray-800 transition-all duration-300 cursor-pointer group/video"
                  aria-label="YouTube videosunu oynat"
                >
                  {/* Local YouTube Thumbnail */}
                  <Image
                    src="/images/home/youtube-thumbnail.jpg"
                    alt="Op. Dr. Mehmet Şahin - YouTube Video"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />

                  {/* Enhanced Dark Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover/video:opacity-70 transition-opacity duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-600 hover:bg-blue-700 w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110">
                      <FaPlay className="text-white text-3xl sm:text-5xl ml-1" />
                    </div>
                  </div>
                </button>
              ) : (
                // YouTube iframe (Only loads when user clicks)
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  src="https://www.youtube-nocookie.com/embed/Vl-s1JspmYc?autoplay=1"
                  title="Op. Dr. Mehmet Şahin - YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
