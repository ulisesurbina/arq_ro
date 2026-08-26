import { useEffect, useState } from "react";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide";
import { project } from "../data/project";

const LINKS = [
  { href: "#proyecto", label: "Proyecto" },
  { href: "#distribuciones", label: "Distribuciones" },
  { href: "#detalles", label: "Detalles" },
  { href: "#unidades", label: "Unidades" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-hueso-50/90 backdrop-blur border-b border-grafito-200" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#top"
          className={`font-display text-lg sm:text-xl tracking-tight transition-colors ${
            scrolled || open ? "text-petroleo-900" : "text-white"
          }`}
        >
          <img
            src="/images/logo.png"
            alt={project.name}
            className={`h-10 sm:h-12 w-auto object-contain transition-opacity ${
              scrolled || open ? "opacity-100" : "opacity-100"
            }`}
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[12px] uppercase tracking-[0.12em]">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-laton-500 ${
                  scrolled ? "text-grafito-600" : "text-white/85"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-laton-500 px-5 py-2.5 text-sm font-medium text-petroleo-950 transition-colors hover:bg-laton-400"
        >
          Agendar visita
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden inline-flex items-center justify-center rounded-full w-10 h-10 ${
            scrolled || open ? "text-petroleo-900" : "text-white"
          }`}
        >
          <MorphIcon icon={open ? X : Menu} size={24} strokeWidth={1.75} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-hueso-50 border-t border-grafito-200 px-5 pb-8 pt-4">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl text-petroleo-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center w-full rounded-full bg-laton-500 px-5 py-3 font-medium text-petroleo-950"
          >
            Agendar visita
          </a>
        </div>
      )}
    </header>
  );
}
