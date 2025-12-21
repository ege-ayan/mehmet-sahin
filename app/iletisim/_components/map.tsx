export default function Map() {
  // Using place query to show "Özel Koru Hastanesi" directly on the map
  const mapSrc = `https://www.google.com/maps?q=%C3%96zel+Koru+Hastanesi+%C3%87ukurambar+Ankara&z=16&t=m&hl=tr&output=embed`;

  return (
    <div className="relative w-full h-full">
      {/* Decorative Elements */}
      <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-30" />

      {/* Map Container */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Özel Koru Hastanesi konumu"
          title="Op. Dr. Mehmet Şahin - Özel Koru Hastanesi Konum Haritası"
          className="border-0"
        />
      </div>
    </div>
  );
}
