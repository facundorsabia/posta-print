import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function ContactSection() {
    return (
        <section className="w-full max-w-4xl py-20 px-4 text-center">
            <SectionTitle className="mb-6">Contactanos</SectionTitle>
            <p className="text-black mb-4">Contanos qué querés imprimir o pedinos presupuesto personalizado.</p>
            <Button size="lg">
                Escribinos
            </Button>
        </section>
    );
}
