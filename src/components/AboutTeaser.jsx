import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { ArrowRight } from "lucide";
import { about } from "../data/project";
import BlueprintDivider from "./BlueprintDivider";

export default function AboutTeaser() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8">
      <BlueprintDivider label="Sobre nosotros" />

      <div className="max-w-2xl mx-auto text-center pb-20 sm:pb-28">
        <h2 className="font-display text-3xl sm:text-4xl text-azul-950 mt-3 text-balance">
          {about.title}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-5 text-grafito-600 leading-relaxed text-justify"
        >
          ARQ' RO Construcciones nace de una trayectoria de más de 20 años dedicada al desarrollo de proyectos de construcción. A través de los años hemos trabajado en restaurantes, hospitales, empresas y viviendas, formando una amplia experiencia que nos permite afrontar cada proyecto con seriedad, conocimiento y compromiso.
        </motion.p>

        <a
          href="/nosotros"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-azul-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-azul-700"
        >
          Conócenos
          <MorphIcon icon={ArrowRight} size={16} strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}