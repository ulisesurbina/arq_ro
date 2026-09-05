import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { Check } from "lucide";
import { about } from "../data/project";
import Media from "./Media";

export default function AboutSection() {
  return (
    <>
      <div className="bg-gradient-to-b from-azul-600 via-azul-800 to-azul-950 pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-azul-300">
            {about.eyebrow}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mt-3 text-balance">
            {about.title}
          </h1>
        </div>
      </div>
      <section id="nosotros" className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl text-justify m-auto">
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-grafito-600 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Servicios + imagen de referencia */}
        <div className="mt-16 grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-center pb-20 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3] md:order-2"
          >
            <Media
              src={about.servicesImage}
              alt="Servicios de Arq' Ro Construcciones"
              className="h-full w-full object-contain bg-fondo-200"
            />
          </motion.div>

          <div className="md:order-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-azul-700">
              {about.servicesEyebrow}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-azul-950 mt-2 mb-6">
              {about.servicesTitle}
            </h3>

            <ul className="space-y-5">
              {about.services.map((service, i) => (
                <motion.li
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-azul-700/10 text-azul-700">
                    <MorphIcon icon={Check} size={16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-medium text-grafito-900">{service.title}</p>
                    <p className="text-sm text-grafito-600 text-justify leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}