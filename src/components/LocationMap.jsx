import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { MapPin, Compass } from "lucide";
import { project } from "../data/project";
import BlueprintDivider from "./BlueprintDivider";

export default function LocationMap() {
  return (
    <section id="ubicacion" className="max-w-6xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28">
      <BlueprintDivider label="Ubicación" />

      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="font-display text-3xl sm:text-4xl text-petroleo-950 text-balance">
          Cerca de lo que te importa, dónde todo conecta
        </h2>
        <p className="mt-4 text-grafito-600">{project.address}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden ring-1 ring-grafito-200 shadow-card"
      >
        <div className="relative">
          <iframe
            title={`Ubicación de ${project.name} en Google Maps`}
            src={project.mapsEmbedSrc}
            className="w-full h-[380px] sm:h-[460px] grayscale-[15%] contrast-[1.05]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 max-w-xs rounded-xl bg-petroleo-950/90 backdrop-blur px-5 py-4 text-white shadow-elevated">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-laton-300">
              <MorphIcon icon={MapPin} size={14} strokeWidth={1.75} />
              {project.name}
            </p>
            <p className="mt-2 text-sm text-white/85">{project.address}</p>
            <a
              href={project.mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-laton-300 hover:text-laton-200"
            >
              <MorphIcon icon={Compass} size={14} strokeWidth={1.75} />
              Cómo llegar
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
