import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { siteContent } from "@/content/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suhendra Photography | Cerita yang Terasa",
    template: "%s | Suhendra Photography",
  },
  description:
    "Dokumentasi wedding, pre-wedding, film, dan perayaan dengan pendekatan natural, elegan, dan timeless.",
  applicationName: "Suhendra Photography",
  keywords: [
    "wedding photography",
    "fotografer pernikahan",
    "videografer wedding",
    "prewedding",
    "event documentation",
  ],
  authors: [{ name: "Suhendra Photography" }],
  creator: "Suhendra Photography",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Suhendra Photography",
    title: "Suhendra Photography | Cerita yang Terasa",
    description:
      "Dokumentasi perayaan dengan pendekatan natural, elegan, dan timeless.",
    images: [
      {
        url: siteContent.hero.image,
        width: 1536,
        height: 1024,
        alt: "Suhendra Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhendra Photography | Cerita yang Terasa",
    description: "Dokumentasi perayaan yang natural, elegan, dan timeless.",
    images: [siteContent.hero.image],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171612",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
