import Image from "next/image";

import { Button } from "@/components/ui/Button";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FiguresCarouselSection from "@/components/sections/FiguresCarouselSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import GlitchText from "@/components/ui/GlitchText";
import Cubes from "@/components/ui/Cubes";
import Squares from "@/components/ui/Squares";

export default function Home() {
  return (
    <>
      {/*Background*/}
      <Squares 
        speed={0.2} 
        squareSize={200}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#89c500'
        hoverFillColor='#222'
      />
      <main className="relative flex flex-col items-center w-full min-h-screen text-black overflow-x-hidden z-10">
        {/* Hero Section */}
      <section className="w-full text-center pt-24 px-4">
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={false}
          className="text-6xl md:text-7xl font-bold mb-4 text-black"
        >
          POSTA-PRINT
        </GlitchText>
        <h2 className="text-3xl text-black max-w-xl mx-auto mt-6">
          Impresiones 3D posta.
        </h2>
      </section>
      <div className="w-full mt-5">
          <Cubes 
            rows={2}
            cols={100}
            cubeSize={30}
            maxAngle={180}
            radius={4}
            faceColor="#000000"
            borderStyle="1px solid #abf600"
            autoAnimate={true}
            rippleOnClick={true}
            rippleColor="#ffffff"
            cellGap={10}
          />
      </div>

      <AboutSection />

      <ServicesSection />

      <FiguresCarouselSection />

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
    </>
  );
}

