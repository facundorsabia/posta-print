import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "PostaPrint - Impresiones 3D",
  description: "Impresiones 3D posta. Figurines, soportes, accesorios y más — diseñamos y materializamos tus ideas.",
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

