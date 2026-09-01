import { trackEvent } from "../lib/analytics";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { X, BedDouble, Bath, Car, Ruler, MessageCircle } from "lucide";
import { currency, unitStatusLabels, project } from "../data/project";
import { buildWhatsappUrl } from "../lib/whatsapp";
import Media from "./Media";

/*
 * Modal de detalle de una unidad. Se cierra con Escape, con clic fuera, o con
 * el botón de cerrar. Mientras está abierto, bloquea el scroll del body.
*/
export default function UnitModal({ unit, distribution, onClose }) {
  useEffect(() => {
    if (!unit) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [unit, onClose]);

  if (!unit) return null;

  const whatsappUrl = buildWhatsappUrl(project.contact.whatsappNumber, {
    name: "",
    phone: "",
    unitInterest: `${distribution.shortLabel} — Depto ${unit.id}. Vi el departamento ${unit.id} en la página y me gustaría más información.`,
  });

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-azul-950/60 backdrop-blur-sm p-0 sm:p-6"
      >
        <motion.div
          key="panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="unit-modal-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-elevated"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-azul-950 shadow-md hover:bg-white"
          >
            <MorphIcon icon={X} size={18} strokeWidth={1.75} />
          </button>

          <div className="aspect-[16/10] w-full overflow-hidden">
            <Media
              src={distribution.photo}
              alt={`Interior tipo ${distribution.name}`}
              className="h-full w-full object-contain bg-fondo-100"
            />
          </div>

          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  id="unit-modal-title"
                  className="font-display text-2xl sm:text-3xl text-azul-950"
                >
                  Departamento {unit.id}
                </p>
                <p className="text-sm text-grafito-500 mt-1">
                  Nivel {unit.floor} · {distribution.shortLabel}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-azul-100 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-azul-700">
                {unitStatusLabels[unit.status]}
              </span>
            </div>

            <p className="mt-3 font-mono text-2xl text-grafito-900">{currency(unit.price)}</p>

            <dl className="mt-6 grid grid-cols-2 gap-3">
              <Spec icon={Ruler} label="Superficie" value={`${distribution.area} m²`} />
              <Spec icon={BedDouble} label="Recámaras" value={distribution.bedrooms} />
              <Spec icon={Bath} label="Baños" value={distribution.bathrooms} />
              <Spec icon={Car} label="Estacionamiento" value={distribution.parking} />
            </dl>

            <p className="mt-5 text-sm text-grafito-600 leading-relaxed">
              {distribution.description}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("unit_whatsapp_deptoDetail", {
                  unit_id: unit.id,
                  distribution: distribution.shortLabel,
                  location: "unit_modal",
                })
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-azul-100 border-azul-200 px-6 py-3.5 text-sm font-medium text-azul-800 transition-colors hover:bg-azul-700 hover:text-white"
            >
              Preguntar por este departamento
              <MorphIcon icon={MessageCircle} size={16} strokeWidth={1.75} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Spec({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-azul-600 text-white ring-1 ring-grafito-200 px-3.5 py-2.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-azul-700">
        <MorphIcon icon={icon} size={13} strokeWidth={1.75} />
      </span>
      <div>
        <dt className="text-[10px] text-white uppercase tracking-[0.1em] text-grafito-500">{label}</dt>
        <dd className="text-sm text-white">{value}</dd>
      </div>
    </div>
  );
}