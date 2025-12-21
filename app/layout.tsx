import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Op. Dr. Mehmet Şahin | Göz Hastalıkları Uzmanı - Ankara",
  description:
    "Op. Dr. Mehmet Şahin - Ankara'da Göz Hastalıkları Uzmanı. Katarakt Cerrahisi, Refraktif Cerrahi, Excimer Laser, Retina Hastalıkları tedavisi. 30.000+ vaka deneyimi.",
  keywords: [
    "göz doktoru ankara",
    "katarakt cerrahisi",
    "excimer laser",
    "göz hastalıkları uzmanı",
    "mehmet şahin",
    "özel koru hastanesi",
  ],
  authors: [{ name: "Ege Ayan", url: "https://egeayan.dev" }],
  openGraph: {
    title: "Op. Dr. Mehmet Şahin | Göz Hastalıkları Uzmanı",
    description:
      "Katarakt ve Refraktif Cerrahi Uzmanı. 30.000+ vaka deneyimi ile Ankara'da hizmet vermektedir.",
    locale: "tr_TR",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
