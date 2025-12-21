import FieldCard from "../_components/field-card";
import { FIELDS } from "../_content/fields";

export default function HomeFields() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="text-blue-600 text-sm sm:text-base font-semibold tracking-wider uppercase mb-4 block">
              Tıbbi Uzmanlıklar
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="bg-linear-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              UZMANLIK ALANLARI
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 via-blue-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Field Cards */}
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {FIELDS.map((field, index) => (
            <div key={index} className="w-full md:max-w-[600px]">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <div className="absolute inset-0">
                  <FieldCard
                    title={field.title}
                    imageUrl={field.imageUrl}
                    href={field.href}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
