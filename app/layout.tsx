import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://drmehmetsahin.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Op. Dr. Mehmet Şahin | Göz Hastalıkları Uzmanı - Ankara",
    template: "%s | Op. Dr. Mehmet Şahin",
  },
  description:
    "Op. Dr. Mehmet Şahin - Ankara'da Göz Hastalıkları Uzmanı. Katarakt Cerrahisi, Refraktif Cerrahi, Excimer Laser, Retina Hastalıkları tedavisi. 40.000+ vaka deneyimi ile Özel Koru Hastanesi'nde hizmet vermektedir.",
  keywords: [
    "göz doktoru ankara",
    "katarakt cerrahisi",
    "excimer laser",
    "göz hastalıkları uzmanı",
    "mehmet şahin",
    "özel koru hastanesi",
    "refraktif cerrahi",
    "retina hastalıkları",
    "glokom tedavisi",
    "keratokonus",
    "göz estetiği",
    "ankara göz doktoru",
  ],
  authors: [{ name: "Ege Ayan", url: "https://github.com/ege-ayan" }],
  creator: "Ege Ayan",
  publisher: "Ege Ayan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Op. Dr. Mehmet Şahin",
    title: "Op. Dr. Mehmet Şahin | Göz Hastalıkları Uzmanı - Ankara",
    description:
      "Katarakt ve Refraktif Cerrahi Uzmanı. 40.000+ vaka deneyimi ile Ankara'da hizmet vermektedir.",
    images: [
      {
        url: "/images/home/op-dr-mehmet-sahin.jpg",
        width: 400,
        height: 250,
        alt: "Op. Dr. Mehmet Şahin - Göz Hastalıkları Uzmanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Op. Dr. Mehmet Şahin | Göz Hastalıkları Uzmanı",
    description:
      "Katarakt ve Refraktif Cerrahi Uzmanı. 40.000+ vaka deneyimi ile Ankara'da hizmet vermektedir.",
    images: ["/images/home/op-dr-mehmet-sahin.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: ".",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <Analytics />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
