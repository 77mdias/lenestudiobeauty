import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";
import FloatingWhatsApp from "../components/UI/FloatingWhatsApp/FloatingWhatsApp";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lene Studio Beauty | Alta Estética & Bem-Estar",
  description:
    "Ateliê de alta estética capilar comandado por Marlene Dias. Mechas personalizadas, alinhamento de alta durabilidade, cronograma capilar e produções de noiva com elegância e sofisticação.",
  keywords: [
    "salão de beleza",
    "alta estética capilar",
    "mechas",
    "morena iluminada",
    "alinhamento capilar",
    "cronograma capilar",
    "penteados de noiva",
    "Barra da Tijuca",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" crossOrigin="anonymous" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} bg-surface font-body-md text-on-surface antialiased`}
      >
        <Header />
        <main className="w-full bg-surface pt-20">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
