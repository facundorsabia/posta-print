"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full text-black py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 items-stretch">

        {/* Bloque superior - dividido en dos columnas */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/70 rounded-2xl p-5 border border-black transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_8px_0_0_rgba(0,0,0,1)]"
        >
          <div className="glass-texture-inner grid md:grid-cols-3 gap-8 items-center">
            <div>
              <p className="text-2xl leading-relaxed text-black/90">
                Somos un equipo de jóvenes creadores apasionados por la <strong>impresión 3D</strong>.
                Producimos figuras, accesorios y objetos únicos, combinando
                la precisión del 3D con el toque humano del trabajo hecho a mano porque creemos que la tecnología puede ser tan <strong>cálida como artesanal</strong> .
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/images/figura9.png"
                alt="Figura 3D PostaPrint"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div>
              <p className="text-2xl leading-relaxed text-black/90">
                Cada pieza tiene su historia, en <strong>Posta Print </strong>porque no solo imprimimos: <strong>creamos con dedicación, paciencia y mucho mate de por medio. </strong>
                <br /> Nuestro enfoque es cercano, transparente y con un estilo propio, pensado para quienes valoran lo original.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fila inferior - antes columna derecha en 3 filas, ahora fila con 3 cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {[
            {
              title: "Comprometidos con tu idea",
              text: "Acompañamos a emprendedores, artistas y curiosos que buscan transformar una idea en algo tangible. Ya sea un personaje, una miniatura o un regalo personalizado, te ayudamos a materializar tu visión con calidad y detalle."
            },
            {
              title: "Toque artesanal",
              text: "Además de nuestras impresiones en FDM y resina, ofrecemos acabados pintados a mano que hacen que cada producto sea realmente único. También podés elegir recibir tus figuras listas para pintar: ideales para coleccionistas o quienes disfrutan del proceso creativo."
            },
            {
              title: "Te acompañamos en cada paso",
              text: "Nos gusta experimentar, mejorar y aprender junto a vos. Por eso, te asesoramos en materiales, terminaciones y procesos para que el resultado final sea exactamente como lo imaginaste (o incluso mejor 😉)."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 bg-white/90 rounded-2xl p-8 border border-black transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_8px_0_0_rgba(0,0,0,1)]"
            >
              <h3 className="inline-block text-xl md:text-3xl font-bold mb-3 bg-[#abf600] text-black px-3 py-1 rounded-md">
                {item.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

