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
    <section className="bg-linear-to-r from-blue-600 to-blue-900 w-full py-5 sm:py-16 flex flex-col items-center">
      <div className="container p-5 flex flex-col items-center justify-center gap-10">
        <div className="text-white text-3xl md:text-5xl font-bold text-center">
          MEDYA
        </div>

        <div className="relative w-full lg:w-2/3 aspect-video rounded-2xl overflow-hidden shadow-2xl">
          {!isVideoLoaded ? (
            // Thumbnail with Play Button (No third-party requests)
            <button
              onClick={handleLoadVideo}
              className="absolute inset-0 w-full h-full bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer group"
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

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 group-hover:bg-red-700 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all transform group-hover:scale-110 shadow-2xl">
                  <FaPlay className="text-white text-3xl sm:text-4xl ml-1" />
                </div>
              </div>
            </button>
          ) : (
            // YouTube iframe (Only loads when user clicks)
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/Vl-s1JspmYc?autoplay=1"
              title="Op. Dr. Mehmet Şahin - YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}
