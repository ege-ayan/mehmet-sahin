import FieldCard from "../_components/field-card";
import { FIELDS } from "../_content/fields";

export default function HomeFields() {
  return (
    <div className="flex flex-col gap-5 items-center  py-5 sm:py-16 justify-center">
      <div className="text-gray-900 text-3xl md:text-5xl font-bold text-center">
        UZMANLIK ALANLARI
      </div>
      <div className="container flex flex-wrap gap-10 items-center justify-center p-5">
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
  );
}
