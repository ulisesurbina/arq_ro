/**
 * Construye una URL de wa.me con el mensaje prellenado a partir de los
 * datos de un formulario de agendado de visita.
 */
export function buildWhatsappUrl(whatsappNumber, { name, phone, unitInterest, preferredDate, message }) {
  const lines = [
    `Hola, me interesa agendar una visita.`,
    name && `Nombre: ${name}`,
    phone && `Teléfono: ${phone}`,
    unitInterest && `Distribución de interés: ${unitInterest}`,
    preferredDate && `Fecha preferida: ${preferredDate}`,
    message && `Mensaje: ${message}`,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}
