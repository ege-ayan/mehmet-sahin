export default function Map() {
  const mapSrc = `https://www.google.com/maps?ll=39.901401,32.812498&z=16&t=m&hl=tr&gl=US&mapclient=embed&q=1450.+Sk.+No:13+%C3%87ukurambar+06510+%C3%87ankaya/Ankara&output=embed`;

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 transition-all duration-300">
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
  );
}
