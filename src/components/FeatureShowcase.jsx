import { motion } from "framer-motion";
import { featureShowcase } from "../data/project";
import Media from "./Media";
import BlueprintDivider from "./BlueprintDivider";

export default function FeatureShowcase() {
  return (
    <section id="detalles" className="bg-petroleo-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-4">
        <BlueprintDivider label="Detalle a detalle" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28 pt-2">
        <div className="max-w-xl mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-laton-300">
            Habitaciones · Acabados · Diseño
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white mt-3 text-balance">
            Calidad en cada superficie, carácter en cada espacio.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureShowcase.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl bg-petroleo-900 ring-1 ring-white/10 ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
                <Media
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-petroleo-950 via-petroleo-950/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-xl sm:text-2xl text-white">{item.title}</h3>
                <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-white/75 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
