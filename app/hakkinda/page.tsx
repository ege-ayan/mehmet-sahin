import AboutContent from "./_sections/about-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Op. Dr. Mehmet Şahin hakkında bilgiler. 1999 Ankara Üniversitesi Tıp Fakültesi mezunu, 2003'te ihtisasını tamamladı. 40.000+ vaka deneyimi ile katarakt cerrahisi, refraktif cerrahi ve retina hastalıkları konusunda uzman.",
  keywords: [
    "mehmet şahin hakkında",
    "göz doktoru ankara",
    "katarakt cerrahisi uzmanı",
    "ankara üniversitesi tıp fakültesi",
    "özel koru hastanesi",
    "göz hastalıkları uzmanı ankara",
    "retina hastalıkları",
    "refraktif cerrahi",
  ],
  alternates: {
    canonical: "/hakkinda",
  },
  openGraph: {
    title: "Hakkımda | Op. Dr. Mehmet Şahin",
    description:
      "1999 Ankara Üniversitesi Tıp Fakültesi mezunu, 40.000+ vaka deneyimi ile katarakt cerrahisi ve retina hastalıkları konusunda uzman.",
    url: "/hakkinda",
    images: [
      {
        url: "/images/about/about-1.jpg",
        width: 400,
        height: 400,
        alt: "Op. Dr. Mehmet Şahin - Profil Fotoğrafı",
      },
    ],
  },
  twitter: {
    title: "Hakkımda | Op. Dr. Mehmet Şahin",
    description:
      "40.000+ vaka deneyimi ile katarakt cerrahisi ve retina hastalıkları konusunda uzman.",
    images: ["/images/about/about-1.jpg"],
  },
};

export default function Page() {
  return <AboutContent />;
}
