/**
 * Envía un evento a Google Tag (gtag.js) — el mismo pixel que alimenta
 * Google Analytics 4 y las conversiones de Google Ads.
 *
 * No hace nada si gtag no está cargado (por ejemplo en local sin el script
 * de index.html, o si un bloqueador de anuncios lo detuvo), así que es
 * seguro llamarlo siempre sin romper la navegación del usuario.
 *
 * @param {string} eventName - nombre del evento, ej. "agendar_visita_click"
 * @param {Record<string, string|number>} [params] - datos extra del evento
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}