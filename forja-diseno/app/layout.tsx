import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORJA & Diseño",

  description:
    "Taller premium de metalurgia contemporánea, herrería arquitectónica y diseño industrial.",

  keywords: [
    "metalurgia",
    "herrería",
    "arquitectura metálica",
    "forja",
    "diseño industrial",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}