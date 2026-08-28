import { trackEvent } from "../lib/analytics";
import { useState } from "react";
import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { MessageCircle, Phone, Mail, Send } from "lucide";
import { project, distributions } from "../data/project";
import { buildWhatsappUrl } from "../lib/whatsapp";

const initialForm = { name: "", phone: "", unitInterest: "", preferredDate: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent("contact_form_submit", { unit_interest: form.unitInterest || "sin_especificar" });
    const url = buildWhatsappUrl(project.contact.whatsappNumber, form);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-grafito-900">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-azul-300">
            Agenda tu visita
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white mt-3 text-balance">
            Tu próximo espacio comienza aquí
          </h2>
          <p className="mt-4 text-grafito-200 max-w-md leading-relaxed">
            La mejor forma de conocer un espacio es recorrerlo. Cada detalle fue pensado para crear una experiencia de vida cómoda y funcional.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`https://wa.me/${project.contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("whatsapp_directo_footer", { location: "contacto" })}
              className="inline-flex items-center gap-3 text-white/90 hover:text-azul-300 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <MorphIcon icon={MessageCircle} size={17} strokeWidth={1.75} />
              </span>
              WhatsApp directo
            </a>
            <a
              href={`tel:${project.contact.phoneDisplay.replace(/\s+/g, "")}`}
              onClick={() => trackEvent("phone_footer", { location: "contacto" })}
              className="inline-flex items-center gap-3 text-white/90 hover:text-azul-300 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <MorphIcon icon={Phone} size={17} strokeWidth={1.75} />
              </span>
              {project.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${project.contact.email}`}
              onClick={() => trackEvent("email_footer", { location: "contacto" })}
              className="inline-flex items-center gap-3 text-white/90 hover:text-laton-300 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <MorphIcon icon={Mail} size={17} strokeWidth={1.75} />
              </span>
              {project.contact.email}
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-2xl bg-hueso-50 p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nombre" required>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Tu nombre"
                className="input"
              />
            </Field>
            <Field label="Teléfono" required>
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="55 0000 0000"
                className="input"
              />
            </Field>
            <Field label="Distribución de interés">
              <select
                name="unitInterest"
                value={form.unitInterest}
                onChange={handleChange}
                className="input"
              >
                <option value="">Cualquiera</option>
                {distributions.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Fecha preferida">
              <input
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                type="date"
                className="input"
              />
            </Field>
            <Field label="Mensaje" full>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Cuéntanos qué buscas (opcional)"
                className="input resize-none"
              />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-azul-800 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-azul-700"
          >
            Enviar por WhatsApp
            <MorphIcon icon={Send} size={16} strokeWidth={2} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children, required, full }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="block text-xs font-mono uppercase tracking-[0.1em] text-grafito-500 mb-1.5">
        {label}
        {required && <span className="text-azul-700"> *</span>}
      </span>
      {children}
    </label>
  );
}
