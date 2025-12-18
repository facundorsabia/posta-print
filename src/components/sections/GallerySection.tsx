import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function GallerySection() {
    return (
        <section className="w-full max-w-8xl py-25 px-8">
            <SectionTitle className="mb-8 text-center">Nuestros Trabajos</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <div key={n} className="relative aspect-square bg-neutral-200 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <Image
                            src={`/images/figura${n}.jpg`}
                            alt={`Trabajo ${n}`}
                            fill
                            className="object-cover transition-opacity duration-300 hover:opacity-90"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
