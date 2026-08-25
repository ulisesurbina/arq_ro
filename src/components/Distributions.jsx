import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { BedDouble, Bath, Car, Ruler } from "lucide";
import { distributions } from "../data/project";
import Media from "./Media";
import BlueprintDivider from "./BlueprintDivider";

export default function Distributions() {
  const [activeId, setActiveId] = useState(distributions[0].id);
  const active = distributions.find((d) => d.id === activeId);

  return (
    <section id="distribuciones" className="max-w-6xl mx-auto px-5 sm:px-8">
      <BlueprintDivider label="Distribuciones" />

      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="font-display text-3xl sm:text-4xl text-petroleo-950 text-balance">
          3 formas de vivir el mismo edificio
        </h2>
        <p className="mt-4 text-grafito-600">
          Los 10 departamentos se agrupan en tres tipologías. Elige una para ver su plano y ficha
          técnica.
        </p>
      </div>

      {/* Selector de tabs */}
      <div
        role="tablist"
        aria-label="Distribuciones disponibles"
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {distributions.map((d) => (
          <button
            key={d.id}
            role="tab"
            aria-selected={activeId === d.id}
            onClick={() => setActiveId(d.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              activeId === d.id
                ? "bg-petroleo-800 text-white"
                : "bg-white text-grafito-600 ring-1 ring-grafito-200 hover:ring-petroleo-400"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center pb-20 sm:pb-28"
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3] bg-grafito-100">
            <Media
              src={active.plan}
              alt={`Plano de distribución ${active.name}`}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-laton-600">
              {active.unitCount} de 10 departamentos
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-petroleo-950 mt-2">
              {active.name}
            </h3>
            <p className="mt-4 text-grafito-600 leading-relaxed">{active.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 font-mono">
              <Spec icon={Ruler} label="Superficie" value={`${active.area} m²`} />
              <Spec icon={BedDouble} label="Recámaras" value={active.bedrooms} />
              <Spec icon={Bath} label="Baños" value={active.bathrooms} />
              <Spec icon={Car} label="Estacionamiento" value={active.parking} />
            </dl>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function Spec({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white ring-1 ring-grafito-200 px-4 py-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-petroleo-700/10 text-petroleo-700">
        <MorphIcon icon={icon} size={15} strokeWidth={1.75} />
      </span>
      <div>
        <dt className="text-[10px] uppercase tracking-[0.1em] text-grafito-500">{label}</dt>
        <dd className="text-base text-grafito-900">{value}</dd>
      </div>
    </div>
  );
}
