import { motion } from "framer-motion";
import { projectGallery } from "../data/project";
import Media from "./Media";
import BlueprintDivider from "./BlueprintDivider";

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8">
      <BlueprintDivider label="El Entorno" />

      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="font-display text-3xl sm:text-4xl text-azul-950 text-balance">
          Un edificio pensado para vivirlo
        </h2>
        <p className="mt-4 text-grafito-600">
          Más que un lugar para llegar, un espacio para disfrutar. Porque vivir bien también está en todo aquello que sucede entre cuatro paredes.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pb-20 sm:pb-28">
        {projectGallery.map((photo, i) => (
          <motion.figure
            key={photo.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden rounded-2xl shadow-card ${
              i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
            }`}
          >
            <Media
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-azul-950/85 to-transparent px-4 py-3 text-[13px] text-white/95 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
