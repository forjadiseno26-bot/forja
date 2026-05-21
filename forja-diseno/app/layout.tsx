import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://forja-diseno.netlify.app"
  ),
  title: {
    default: "FORJA & Diseño",
    template: "%s | FORJA & Diseño",
  },

  description:
    "Metalurgia contemporánea, herrería arquitectónica y diseño industrial premium.",

  keywords: [
    "herrería",
    "metalurgia",
    "diseño industrial",
    "forja",
    "carpintería metálica",
    "mobiliario industrial",
    "cerramientos",
  ],

  openGraph: {
    title: "FORJA & Diseño",

    description:
      "Taller premium de herrería arquitectónica y metalurgia contemporánea.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "es_ES",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "FORJA & Diseño",

    description:
      "Arquitectura metálica contemporánea y herrería premium.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}