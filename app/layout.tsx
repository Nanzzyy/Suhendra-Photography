import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suhendra Photography — Cerita yang Terasa",
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
    title: "Suhendra Photography — Cerita yang Terasa",
    description:
      "Dokumentasi perayaan dengan pendekatan natural, elegan, dan timeless.",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1536,
        height: 1024,
        alt: "Suhendra Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhendra Photography — Cerita yang Terasa",
    description: "Dokumentasi perayaan yang natural, elegan, dan timeless.",
    images: ["/images/hero-wedding.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171612",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
