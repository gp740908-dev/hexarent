import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HEXA Rent | Heavy Equipment Rental Solutions",
    template: "%s | HEXA Rent",
  },
  description:
    "Your trusted partner for heavy equipment rental. Excavators, cranes, bulldozers, and more. 24/7 support with certified operators available.",
  keywords: [
    "heavy equipment rental",
    "excavator rental",
    "crane rental",
    "bulldozer rental",
    "construction equipment",
    "equipment hire",
    "HEXA Rent",
  ],
  authors: [{ name: "HEXA Rent" }],
  creator: "HEXA Rent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hexarent.com",
    siteName: "HEXA Rent",
    title: "HEXA Rent | Heavy Equipment Rental Solutions",
    description:
      "Your trusted partner for heavy equipment rental. Excavators, cranes, bulldozers, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HEXA Rent - Heavy Equipment Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEXA Rent | Heavy Equipment Rental Solutions",
    description:
      "Your trusted partner for heavy equipment rental. Excavators, cranes, bulldozers, and more.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
