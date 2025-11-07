import { Card, CardContent } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function ServicesSection() {
  return (
    <section className="w-full max-w-6xl py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Figurines y Modelos", desc: "Desde personajes hasta prototipos personalizados." },
        { title: "Soportes y Piezas", desc: "Soluciones prácticas, resistentes y a medida." },
        { title: "Accesorios Únicos", desc: "Llaveros, gadgets y objetos decorativos impresos en 3D." },
      ].map((item, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
            <p className="text-black text-sm">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

