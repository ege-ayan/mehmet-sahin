export default function HomeMedia() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-900 w-full py-5 sm:py-16 flex flex-col items-center">
      <div className="container p-5 flex flex-col items-center justify-center gap-10">
        <div className="text-white text-3xl md:text-5xl font-bold text-center">
          MEDYA
        </div>

        <div className="relative w-full lg:w-2/3 aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Vl-s1JspmYc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
