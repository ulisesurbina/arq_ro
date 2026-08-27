import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { Sparkles, Layers, Ruler, Building2 } from "lucide";
import { project, projectGallery } from "../data/project";
import Media from "./Media";

const HIGHLIGHTS = [
  { icon: Building2, text: "Edificio con planta baja y 3 niveles de diseño a tu medida" },
  { icon: Layers, text: "3 distribuciones distintas" },
  { icon: Ruler, text: "Desde 57.3 m² hasta 90 m² de superficie" },
  { icon: Sparkles, text: "Acabados de diseño en cada unidad" },
];

export default function Overview() {
  return (
    <section id="proyecto" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div>
          {/* <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-azul-700">
            El proyecto
          </span> */}
          <h2 className="font-display text-3xl sm:text-4xl text-azul-950 mt-3 text-balance">
            Diseño pensado para vivir, no solo para habitar
          </h2>
          <p className="mt-5 text-grafito-600 leading-relaxed">
            {project.shortDescription}
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-azul-700/10 text-azul-700">
                  <MorphIcon icon={item.icon} size={16} strokeWidth={1.75} />
                </span>
                <span className="text-sm text-grafito-700 pt-1">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Foto principal de renders + collage secundario */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="col-span-2 rounded-2xl overflow-hidden shadow-card aspect-[16/10]"
          >
            {/* <Media
              src={projectGallery[0].src}
              alt={projectGallery[0].alt}
              className="h-full w-full object-cover"
            /> */}
            <video
              src={project.heroVideo}
              poster={project.heroPoster}
              className="h-full w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Video del proyecto ARQ' RO"
            />
          </motion.div>
          {projectGallery.slice(1, 3).map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-card aspect-square"
            >
              <Media src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
