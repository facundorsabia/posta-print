import Image from "next/image";

import { Button } from "@/components/ui/Button";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="w-full text-center py-24 px-4 bg-white">
        <h1 className="text-5xl font-bold mb-4 text-black">Posta-Print</h1>
        <p className="text-lg text-black max-w-xl mx-auto mb-6">
          Impresiones 3D posta. Figurines, soportes, accesorios y más — diseñamos y materializamos tus ideas.
        </p>
        <Button size="lg">
          Pedí tu impresión
        </Button>
      </section>

      <AboutSection />

      <ServicesSection />

      {/* Galería */}
      <section className="w-full max-w-6xl py-20 px-4">
        <SectionTitle className="mb-8 text-center">Nuestros Trabajos</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="relative aspect-square bg-neutral-200 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src={`/images/figura${n}.webp`}
                alt={`Trabajo ${n}`}
                fill
                className="object-cover transition-opacity duration-300 hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full max-w-4xl py-20 px-4 text-center">
        <SectionTitle className="mb-6">Contactanos</SectionTitle>
        <p className="text-black mb-4">Contanos qué querés imprimir o pedinos presupuesto personalizado.</p>
        <Button size="lg">
          Escribinos
        </Button>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-black border-t border-neutral-300">
        © {new Date().getFullYear()} PostaPrint — Hecho con ❤️ en Argentina
      </footer>
    </main>
  );
}

