import HomeOpening from "./_sections/home-opening";
import HomeFields from "./_sections/home-fields";
import HomeMedia from "./_sections/home-media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Op. Dr. Mehmet Şahin | Göz Hastalıkları Uzmanı | Ankara",
  description:
    "Op. Dr. Mehmet Şahin - Ankara'nın önde gelen göz hastalıkları uzmanı. Katarakt cerrahisi, excimer lazer, glokom tedavisi ve retina hastalıkları konusunda uzman. 30.000+ başarılı vaka deneyimi ile güvenilir tedavi.",
  keywords: [
    "göz doktoru ankara",
    "katarakt cerrahisi",
    "excimer lazer",
    "göz hastalıkları uzmanı",
    "glokom tedavisi",
    "retina hastalıkları",
    "göz muayenesi",
    "mehmet şahin göz doktoru",
    "özel koru hastanesi",
    "göz ameliyatı ankara",
    "akıllı mercek",
    "keratokonus",
    "sarı nokta hastalığı",
    "göz estetiği",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Op. Dr. Mehmet Şahin | Göz Hastalıkları Uzmanı | Ankara",
    description:
      "Ankara'nın önde gelen göz hastalıkları uzmanı. Katarakt cerrahisi, excimer lazer ve retina hastalıkları konusunda uzman. 30.000+ başarılı vaka deneyimi.",
    url: "/",
    images: [
      {
        url: "/images/home/op-dr-mehmet-sahin.jpg",
        width: 800,
        height: 1000,
        alt: "Op. Dr. Mehmet Şahin - Göz Hastalıkları Uzmanı",
      },
    ],
  },
  twitter: {
    title: "Op. Dr. Mehmet Şahin | Göz Hastalıkları Uzmanı | Ankara",
    description:
      "Ankara'nın önde gelen göz hastalıkları uzmanı. Katarakt cerrahisi, excimer lazer ve retina hastalıkları konusunda uzman.",
    images: ["/images/home/op-dr-mehmet-sahin.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <HomeOpening />
      <HomeFields />
      <HomeMedia />
    </>
  );
}
