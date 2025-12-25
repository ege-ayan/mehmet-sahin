import Map from "../_components/map";
import AddressCard from "../_components/address-card";

export default function ContactSection() {
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
        <header className="text-center mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="text-blue-400 text-sm sm:text-base font-semibold tracking-wider uppercase mb-4 block">
              İletişime Geçin
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              İLETİŞİM
            </span>
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto rounded-full" />
        </header>

        <div className="w-full flex flex-col xl:flex-row justify-center items-stretch gap-8 xl:gap-6">
          <section
            aria-labelledby="map-section"
            className="h-[450px] sm:h-[500px] xl:h-[550px] w-full xl:w-1/2"
          >
            <h2 id="map-section" className="sr-only">
              Konum Haritası
            </h2>
            <Map />
          </section>

          <section
            aria-labelledby="contact-info"
            className="h-auto xl:h-[550px] w-full xl:w-1/2"
          >
            <h2 id="contact-info" className="sr-only">
              İletişim Bilgileri
            </h2>
            <AddressCard />
          </section>
        </div>
      </article>
    </main>
  );
}
