import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { ArrowRight, ArrowDown } from "lucide";
import { project } from "../data/project";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      {/* <video
        className="absolute inset-0 h-full w-full object-cover"
        src={project.heroVideo}
        poster={project.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      /> */}
      <img
        className="absolute inset-0 h-full w-full object-cover animate-[heroZoom_12s_ease-in-out_infinite_alternate]"
        src={project.heroImage}
        alt=""
        aria-hidden="true"
      />
      {/* Overlay: degradado petróleo para legibilidad y personalidad de marca */}
      <div className="absolute inset-0 bg-gradient-to-t from-azul-950 via-azul-950/55 to-azul-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-azul-950/50 via-transparent to-azul-950/10" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col justify-end pb-28 sm:pb-32">
        {/* <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[12px] uppercase tracking-[0.25em] text-azul-300 mb-4"
        >
          {project.address}
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-white text-balance text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-3xl"
        >
          {project.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-md text-white/85 text-base sm:text-lg"
        >
          {project.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-azul-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-azul-700"
          >
            Agendar visita
            <MorphIcon icon={ArrowRight} size={16} strokeWidth={2} />
          </a>
          <a
            href="#proyecto"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Ver el proyecto
          </a>
        </motion.div>
      </div>

      {/* Ficha técnica flotante — vidrio esmerilado sobre el video */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-azul-950/50 backdrop-blur-md"
      >
        <dl className="max-w-6xl mx-auto px-5 sm:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                {stat.label}
              </dt>
              <dd className="font-mono text-2xl sm:text-3xl text-white mt-1">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <a
        href="#proyecto"
        aria-label="Bajar a la siguiente sección"
        className="hidden sm:flex absolute right-6 bottom-32 z-10 h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white animate-float-slow"
      >
        <MorphIcon icon={ArrowDown} size={18} strokeWidth={1.75} />
      </a>
    </section>
  );
}
