import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { Ruler, ArrowUpRight } from "lucide";
import { units, distributions, unitStatusLabels, currency } from "../data/project";
import BlueprintDivider from "./BlueprintDivider";

const STATUS_STYLES = {
  disponible: "bg-laton-500/15 text-laton-600 ring-1 ring-laton-500/30",
  apartado: "bg-petroleo-700/10 text-petroleo-700 ring-1 ring-petroleo-700/25",
  vendido: "bg-grafito-200 text-grafito-500 ring-1 ring-grafito-300",
};

export default function Units() {
  const byDistribution = Object.fromEntries(distributions.map((d) => [d.id, d]));

  return (
    <section id="unidades" className="max-w-6xl mx-auto px-5 sm:px-8">
      <BlueprintDivider label="Disponibilidad" />

      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-petroleo-950 text-balance">
            Los 10 departamentos
          </h2>
          <p className="mt-3 text-grafito-600 max-w-lg">
            Disponibilidad actualizada. Da clic en un departamento para preguntar por él al
            agendar tu visita.
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.1em]">
          {Object.entries(unitStatusLabels).map(([key, label]) => (
            <li key={key} className="flex items-center gap-2 text-grafito-500">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  key === "disponible"
                    ? "bg-laton-500"
                    : key === "apartado"
                    ? "bg-petroleo-600"
                    : "bg-grafito-300"
                }`}
              />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-20 sm:pb-28">
        {units.map((unit, i) => {
          const distribution = byDistribution[unit.distributionId];
          return (
            <motion.a
              key={unit.id}
              href="#contacto"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="group flex flex-col justify-between rounded-2xl bg-white ring-1 ring-grafito-200 p-5 transition-shadow hover:shadow-card"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-display text-2xl text-petroleo-950">Depto {unit.id}</p>
                  <p className="text-sm text-grafito-500 mt-0.5">Nivel {unit.floor} · {distribution.name}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-[0.08em] ${STATUS_STYLES[unit.status]}`}
                >
                  {unitStatusLabels[unit.status]}
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="flex items-center gap-1.5 text-xs text-grafito-500 font-mono">
                    <MorphIcon icon={Ruler} size={13} strokeWidth={1.75} />
                    {distribution.area} m²
                  </p>
                  <p className="font-mono text-lg text-grafito-900 mt-1">{currency(unit.price)}</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-hueso-100 text-petroleo-700 transition-colors group-hover:bg-petroleo-700 group-hover:text-white">
                  <MorphIcon icon={ArrowUpRight} size={16} strokeWidth={1.75} />
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
