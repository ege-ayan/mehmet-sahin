import Map from "../_components/map";
import AddressCard from "../_components/address-card";

export default function ContactSection() {
  return (
    <main className="flex flex-col pt-32 sm:pt-48 pb-20 w-full items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
      <article className="container flex flex-col items-center justify-center">
        <header className="text-4xl lg:text-6xl font-bold text-center tracking-tight mb-12 lg:mb-16">
          <h1 className="">İLETİŞİM</h1>
        </header>

        <div className="w-full flex flex-col xl:flex-row justify-center items-stretch gap-8 xl:gap-12">
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
            className="h-auto  xl:h-[550px] w-full xl:w-1/2"
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
