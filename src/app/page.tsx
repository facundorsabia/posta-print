

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FiguresCarouselSection from "@/components/sections/FiguresCarouselSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
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
        <HeroSection />

        <AboutSection />

        <FiguresCarouselSection />

        <ServicesSection />

        <GallerySection />

        <ContactSection />

        <Footer />
      </main>
    </>
  );
}

