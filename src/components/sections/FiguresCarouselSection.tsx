"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FiguresCarouselSection() {
  const images = [
    "/images/figura1.webp",
    "/images/figura2.webp",
    "/images/figura3.webp",
    "/images/figura4.webp",
    "/images/figura5.webp",
    "/images/figura6.webp",
    "/images/figura7.webp",
    "/images/figura8.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-[80%] max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center h-full">
        {/* Carousel - Lado izquierdo */}
        <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Figura ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#abf600]"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Texto - Lado derecho */}
        <div className="flex flex-col justify-center space-y-6 bg-white rounded-2xl p-8 border border-black transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_8px_0_0_rgba(0,0,0,1)]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Colección artesanal 3D
          </h2>
          <p className="text-lg leading-relaxed text-black">
          Nuestros modelos 3D terminados combinan la precisión de la impresión con el arte de la pintura artesanal. Cada figura es cuidadosamente impresa, lijada y pintada a mano con acrílicos de alta calidad, logrando acabados únicos que resaltan cada detalle. El resultado son piezas exclusivas listas para exhibir, coleccionar o regalar, creadas con dedicación y pasión por el modelismo.
          </p>
        </div>
      </div>
    </section>
  );
}

