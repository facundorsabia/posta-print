"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
      <section className="w-full bg-white text-black py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
  
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Cómo{" "}
              <span className="bg-[#abf600] px-2 py-1 rounded-md">
                hacemos
              </span>
              <br />
              lo que hacemos
            </h2>
  
            <p className="text-lg leading-relaxed">
              Somos un equipo de jóvenes creadores apasionados por la impresión 3D.
              En <strong>PostaPrint</strong> creemos que la tecnología puede ser tan cálida como artesanal.
              Diseñamos y producimos figuras, accesorios y objetos únicos, combinando
              la precisión del 3D con el toque humano del trabajo hecho a mano.
            </p>
            <p className="text-lg leading-relaxed">
            	Cada pieza tiene su historia, porque no solo imprimimos: <strong>creamos con dedicación, paciencia y mucho mate de por medio.</strong>
            	Nuestro enfoque es cercano, transparente y con un estilo propio, pensado para quienes valoran lo original.
            </p>
          </motion.div>
  
          {/* Columna derecha */}
          <div className="space-y-10">
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

