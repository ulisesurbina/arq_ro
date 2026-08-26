import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import {
  Ruler,
  ArrowUpRight,
  X,
  BedDouble,
  Bath,
  Car,
  Trees,
  Home,
  Maximize,
} from "lucide";

import {
  units,
  distributions,
  unitStatusLabels,
  currency,
} from "../data/project";

import BlueprintDivider from "./BlueprintDivider";

const STATUS_STYLES = {
  disponible:
    "bg-laton-500/15 text-laton-600 ring-1 ring-laton-500/30",

  apartado:
    "bg-petroleo-700/10 text-petroleo-700 ring-1 ring-petroleo-700/25",

  vendido:
    "bg-grafito-200 text-grafito-500 ring-1 ring-grafito-300",
};

export default function Units() {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const byDistribution = Object.fromEntries(
    distributions.map((d) => [d.id, d])
  );

  return (
    <>
      {/* =========================================
          SECCIÓN DE UNIDADES
      ========================================= */}
      <section
        id="unidades"
        className="max-w-6xl mx-auto px-5 sm:px-8"
      >
        <BlueprintDivider label="Disponibilidad" />

        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-petroleo-950 text-balance">
              Espacios para elegir
            </h2>

            <p className="mt-3 text-grafito-600 max-w-lg">
              Descubre las diferentes unidades disponibles, encuentra el
              departamento que va contigo y que mejor se adapta a ti.
            </p>
          </div>

          {/* Estados */}
          <ul className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.1em]">
            {Object.entries(unitStatusLabels).map(([key, label]) => (
              <li
                key={key}
                className="flex items-center gap-2 text-grafito-500"
              >
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

        {/* =========================================
            GRID DE DEPARTAMENTOS
        ========================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-20 sm:pb-28">
          {units.map((unit, i) => {
            const distribution = byDistribution[unit.distributionId];

            return (
              <motion.button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnit(unit)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.45,
                  delay: (i % 6) * 0.06,
                }}
                className="group flex flex-col justify-between rounded-2xl bg-white ring-1 ring-grafito-200 p-5 text-left transition-all hover:shadow-card hover:-translate-y-1 cursor-pointer"
              >
                {/* Cabecera de tarjeta */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-2xl text-petroleo-950">
                      Depto {unit.id}
                    </p>

                    <p className="text-sm text-grafito-500 mt-0.5">
                      Nivel {unit.floor} · Ficha Técnica
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-[0.08em] ${
                      STATUS_STYLES[unit.status]
                    }`}
                  >
                    {unitStatusLabels[unit.status]}
                  </span>
                </div>

                {/* Información inferior */}
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs text-grafito-500 font-mono">
                      <MorphIcon
                        icon={Ruler}
                        size={13}
                        strokeWidth={1.75}
                      />

                      {unit.details?.area ?? distribution?.area} m²
                    </p>

                    {/* <p className="font-mono text-lg text-grafito-900 mt-1">
                      {currency(
                        unit.details?.salePrice ?? unit.price
                      )}
                    </p> */}
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-hueso-100 text-petroleo-700 transition-colors group-hover:bg-petroleo-700 group-hover:text-white">
                    <MorphIcon
                      icon={ArrowUpRight}
                      size={16}
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =========================================
          MODAL DE DETALLES
      ========================================= */}
      <AnimatePresence>
        {selectedUnit && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Fondo oscuro */}
            <motion.div
              className="absolute inset-0 bg-petroleo-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedUnit(null)}
            />

            {/* =====================================
                CONTENEDOR DEL MODAL
            ===================================== */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="unit-modal-title"
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 25,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              {/* =====================================
                  HEADER
              ===================================== */}
              <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-grafito-200 bg-white/95 backdrop-blur-md px-6 py-5 sm:px-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3
                      id="unit-modal-title"
                      className="font-display text-3xl sm:text-4xl text-petroleo-950"
                    >
                      Depto {selectedUnit.id}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.08em] ${
                        STATUS_STYLES[selectedUnit.status]
                      }`}
                    >
                      {unitStatusLabels[selectedUnit.status]}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-grafito-500">
                    Nivel {selectedUnit.floor} · Ficha Técnica
                  </p>
                </div>

                {/* Botón cerrar */}
                <button
                  type="button"
                  onClick={() => setSelectedUnit(null)}
                  aria-label="Cerrar ficha"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hueso-100 text-petroleo-900 transition-colors hover:bg-petroleo-900 hover:text-white"
                >
                  <MorphIcon
                    icon={X}
                    size={18}
                    strokeWidth={1.75}
                  />
                </button>
              </div>

              {/* =====================================
                  CONTENIDO
              ===================================== */}
              <div className="p-6 sm:p-8">
                {/* =================================
                    SUPERFICIE
                ================================== */}
                <div className="mb-8 rounded-2xl bg-petroleo-950 p-6 sm:p-7 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                    Superficie
                  </p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="font-display text-5xl sm:text-6xl">
                      {selectedUnit.details?.area ??
                        byDistribution[selectedUnit.distributionId]?.area}
                    </span>

                    <span className="mb-2 font-mono text-sm text-white/50">
                      m²
                    </span>
                  </div>
                </div>

                {/* =================================
                    CARACTERÍSTICAS
                ================================== */}
                <div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-grafito-500">
                    Características
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <DetailItem
                      icon={BedDouble}
                      label="Recámaras"
                      value={selectedUnit.details?.bedrooms ?? "—"}
                    />

                    <DetailItem
                      icon={Bath}
                      label="Baños"
                      value={selectedUnit.details?.bathrooms ?? "—"}
                    />

                    <DetailItem
                      icon={Car}
                      label="Estacionamientos"
                      value={selectedUnit.details?.parking ?? "—"}
                    />

                    <DetailItem
                      icon={Trees}
                      label="Roof Garden"
                      value={selectedUnit.details?.roofGarden ?? "NO"}
                    />

                    <DetailItem
                      icon={Home}
                      label="Patio de servicio"
                      value={
                        selectedUnit.details?.servicePatio != null
                          ? `${selectedUnit.details.servicePatio} m²`
                          : "—"
                      }
                    />

                    <DetailItem
                      icon={Maximize}
                      label="Superficie"
                      value={
                        selectedUnit.details?.area != null
                          ? `${selectedUnit.details.area} m²`
                          : "—"
                      }
                    />
                  </div>
                </div>

                {/* =================================
                    PRECIOS
                ================================== */}
                <div className="mt-8">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-grafito-500">
                    Inversión
                  </p>

                  <div className="space-y-3">
                    {/* Precio de venta */}
                    <div className="flex items-center justify-between gap-4 rounded-xl bg-hueso-100 px-5 py-4">
                      <div>
                        <p className="text-sm text-grafito-600">
                          Precio de venta
                        </p>

                        <p className="font-mono text-[10px] uppercase tracking-wider text-grafito-400 mt-1">
                          Precio actual
                        </p>
                      </div>

                      <p className="font-mono text-base sm:text-lg font-medium text-petroleo-950">
                        {currency(
                          selectedUnit.details?.salePrice ??
                            selectedUnit.price
                        )}
                      </p>
                    </div>

                    {/* Precio de preventa */}
                    <div className="flex items-center justify-between gap-4 rounded-xl bg-laton-500/10 ring-1 ring-laton-500/20 px-5 py-4">
                      <div>
                        <p className="text-sm text-grafito-700">
                          Precio de preventa
                        </p>

                        <p className="font-mono text-[10px] uppercase tracking-wider text-grafito-500 mt-1">
                          Precio preferencial
                        </p>
                      </div>

                      <p className="font-mono text-base sm:text-lg font-medium text-petroleo-950">
                        {selectedUnit.details?.presalePrice != null
                          ? currency(
                              selectedUnit.details.presalePrice
                            )
                          : "Consultar"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================
                    BOTÓN CONTACTO
                ================================== */}
                <div className="mt-8">
                  <a
                    href="#contacto"
                    onClick={() => setSelectedUnit(null)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-petroleo-900 px-5 py-4 font-mono text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-petroleo-800"
                  >
                    Solicitar información

                    <MorphIcon
                      icon={ArrowUpRight}
                      size={15}
                      strokeWidth={1.75}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =============================================
   COMPONENTE PARA CADA CARACTERÍSTICA
============================================= */

function DetailItem({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-grafito-200 bg-white p-4 transition-colors hover:border-petroleo-300">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-hueso-100 text-petroleo-700">
        <MorphIcon
          icon={icon}
          size={17}
          strokeWidth={1.75}
        />
      </div>

      <p className="mt-3 text-xs text-grafito-500">
        {label}
      </p>

      <p className="mt-1 font-mono text-sm font-medium text-petroleo-950">
        {value}
      </p>
    </div>
  );
}