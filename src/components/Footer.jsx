import { project } from "../data/project";

export default function Footer() {
  return (
    <footer className="bg-grafito-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg text-white">{project.name}</p>
        <p className="text-xs text-grafito-300 text-center">
          © {new Date().getFullYear()} {project.name}. Todos los derechos reservados.
        </p>
        <a
          href="#top"
          className="text-xs font-mono uppercase tracking-[0.14em] text-grafito-300 hover:text-laton-300 transition-colors"
        >
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
