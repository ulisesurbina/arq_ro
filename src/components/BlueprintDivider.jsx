import { motion } from "framer-motion";

/**
 * Divisor de sección con forma de planta arquitectónica (silueta del Tipo B).
 * Se dibuja con un trazo cuando entra en el viewport — es el elemento
 * "firma" del sitio: una idea decorativa que además representa contenido
 * real (la planta de un departamento del proyecto).
 */
export default function BlueprintDivider({ flip = false, label }) {
  return (
    <div
      className={`relative py-10 sm:py-14 flex items-center gap-4 sm:gap-6 ${
        flip ? "flex-row-reverse" : ""
      }`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-grafito-200" />
      <motion.svg
        width="120"
        height="52"
        viewBox="0 0 120 52"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="shrink-0"
      >
        <motion.path
          className="blueprint-path"
          d="M6 46V10h34v14h20V8h54v38H60V34H36v12z"
          strokeDasharray={300}
          strokeDashoffset={300}
          variants={{
            hidden: { strokeDashoffset: 300 },
            visible: { strokeDashoffset: 0, transition: { duration: 1.3, ease: "easeInOut" } },
          }}
        />
      </motion.svg>
      {label && (
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-grafito-500 shrink-0">
          {label}
        </span>
      )}
      <span className="h-px flex-1 bg-grafito-200" />
    </div>
  );
}
