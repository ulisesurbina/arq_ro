import { useState } from "react";
import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { Ruler, ArrowUpRight } from "lucide";
import { units, distributions, unitStatusLabels } from "../data/project";
import BlueprintDivider from "./BlueprintDivider";
import UnitModal from "./UnitModal";

const STATUS_STYLES = {
  disponible: "bg-azul-600/15 text-azul-700 ring-1 ring-azul-600/30",
  apartado: "bg-grafito-800/8 text-grafito-600 ring-1 ring-grafito-300",
  vendido: "bg-grafito-200 text-grafito-500 ring-1 ring-grafito-300",
};

const STATUS_DOT = {
  disponible: "bg-azul-600",
  apartado: "bg-grafito-500",
  vendido: "bg-grafito-300",
};

export default function Units() {
  const byDistribution = Object.fromEntries(distributions.map((d) => [d.id, d]));
  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const selectedUnit = units.find((u) => u.id === selectedUnitId) ?? null;

  return (
    <section id="unidades" className="max-w-6xl mx-auto px-5 sm:px-8">
      <BlueprintDivider label="Disponibilidad" />

      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-azul-950 text-balance">
            Espacios para elegir
          </h2>
          <p className="mt-3 text-grafito-600 max-w-lg">
            Descubre las diferentes unidades disponibles, encuentra el departamento que va contigo y que mejor se adapta a ti.
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.1em]">
          {Object.entries(unitStatusLabels).map(([key, label]) => (
            <li key={key} className="flex items-center gap-2 text-grafito-500">
              <span className={`h-2.5 w-2.5 rounded-full ${STATUS_DOT[key]}`} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-20 sm:pb-28">
        {units.map((unit, i) => {
          const distribution = byDistribution[unit.distributionId];
          return (
            <motion.button
              className="unit-card-border group flex flex-col justify-between rounded-2xl bg-white ring-1 ring-grafito-200 p-5 text-left cursor-pointer transition-shadow duration-300 hover:shadow-elevated hover:ring-azul-400"
              key={unit.id}
              type="button"
              onClick={() => setSelectedUnitId(unit.id)}
              initial={{ opacity: 0, y: 24, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ opacity: { duration: 0.45, delay: (i % 6) * 0.06 }, y: { duration: 0.45, delay: (i % 6) * 0.06 }, scale: { duration: 0.45, delay: (i % 6) * 0.06 } }}
              animate={{ scale: [1, 1.012, 1] }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-display text-2xl text-azul-950">Depto {unit.id}</p>
                  <p className="text-sm text-grafito-500 mt-0.5">
                    Nivel {unit.floor} · Ficha técnica
                  </p>
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
                  {/* <p className="font-mono text-lg text-grafito-900 mt-1">{currency(unit.price)}</p> */}
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-hueso-100 text-azul-700 transition-all duration-300 group-hover:bg-azul-700 group-hover:text-white group-hover:rotate-45">
                  <MorphIcon icon={ArrowUpRight} size={16} strokeWidth={1.75} />
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <UnitModal
        unit={selectedUnit}
        distribution={selectedUnit ? byDistribution[selectedUnit.distributionId] : null}
        onClose={() => setSelectedUnitId(null)}
      />
    </section>
  );
}