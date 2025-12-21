import ContactSection from "./_sections/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Op. Dr. Mehmet Şahin ile iletişime geçin. Özel Koru Hastanesi, Çukurambar, Ankara. Randevu ve bilgi için: 0312 911 77 77",
  keywords: [
    "op dr mehmet şahin iletişim",
    "göz doktoru ankara randevu",
    "özel koru hastanesi göz",
    "çukurambar göz doktoru",
    "ankara göz muayenesi randevu",
  ],
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim | Op. Dr. Mehmet Şahin",
    description:
      "Özel Koru Hastanesi, Çukurambar, Ankara. Randevu ve bilgi için: 0312 911 77 77",
    url: "/iletisim",
  },
  twitter: {
    title: "İletişim | Op. Dr. Mehmet Şahin",
    description:
      "Özel Koru Hastanesi, Çukurambar, Ankara. Randevu için: 0312 911 77 77",
  },
};

export default function Page() {
  return <ContactSection />;
}
