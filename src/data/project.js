// ---------------------------------------------------------------------------
// CONFIGURACIÓN DEL PROYECTO
// Este es el único archivo que necesitas editar para actualizar el contenido
// del sitio: nombre, contacto, unidades, distribuciones, fotos, etc.
// Todas las imágenes son de referencia (Unsplash) — reemplázalas por las
// fotos/renders reales del proyecto usando la misma estructura.
// ---------------------------------------------------------------------------

export const project = {
  name: "ARQ' RO Inmobiliario",
  tagline: "Departamentos de diseño en el corazón de la ciudad",
  shortDescription:
    "10 departamentos en 3 distribuciones pensadas para vivir con calma: luz natural, materiales nobles y espacios que se adaptan a tu forma de vivir.",
  heroImage: 
    "/images/hero.jpg",
  heroVideo:
    "/video/heroVideo.mp4",
  heroPoster:
    "/images/hero.jpg",
  address: "Bienes Nacionales #69 esq. Comisión del Maíz, Col. Cuatro Arboles, alcaldía Venustiano Carranza, CDMX",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Bienes+Nacionales+69+esq.+Comision+del+Maiz,+Col.+Cuatro+Arboles,+Venustiano+Carranza,+CDMX&output=embed",
  mapsDirectionsUrl: "https://www.google.com/maps?q=Bienes+Nacionales+69+esq.+Comision+del+Maiz,+Col.+Cuatro+Arboles,+Venustiano+Carranza,+CDMX",
  contact: {
    whatsappNumber: "5215549838427", // formato internacional sin '+' ni espacios
    phoneDisplay: "+52 55 4983 8427",
    email: "marianarivera@example.com",
  },
  stats: [
    { label: "Departamentos", value: "10" },
    { label: "Distribuciones", value: "3" },
    { label: "m² desde", value: "57.30" },
    { label: "Entrega", value: "2026" },
  ],
};

// Fotografías generales del proyecto (fachada, entorno, vistas)
export const projectGallery = [
  {
    id: "fachada",
    src: "/images/hero.jpg",
    alt: "Fachada principal del edificio",
    caption: "Fachada principal del edificio con iluminación nocturna",
  },
  {
    id: "lobby",
    src: "/images/recamara1.jpg",
    alt: "Recamara del departamento",
    caption: "Recamara con iluminación natural y acabados de lujo",
  },
  {
    id: "amenidad-rooftop",
    src: "/images/sala3.jpg",
    alt: "Sala del departamento",
    caption: "Sala del departamento con vista panorámica",
  },
  {
    id: "alberca",
    src: "/images/recamara2.jpg",
    alt: "Recamara del departamento",
    caption: "Recamara con diseño moderno y elegante",
  },
  {
    id: "gimnasio",
    src: "/images/sala1.jpg",
    alt: "Sala del departamento",
    caption: "Sala del departamento con decoración contemporánea",
  },
  {
    id: "coworking",
    src: "/images/vistaArriba2.jpg",
    alt: "Vita superior",
    caption: "Vista superior con diseño arquitectónico destacado",
  },
];

// Categorías de detalle — sección "Habitaciones, acabados, distribución,
// diseño y costos" con tarjetas animadas
export const featureShowcase = [
  {
    id: "habitaciones",
    title: "Habitaciones",
    description:
      "Recámaras orientadas para maximizar luz natural, con clósets de piso a techo y ventanas de piso completo.",
    image:
      "/images/recamara1.jpg",
  },
  {
    id: "acabados",
    title: "Acabados",
    description:
      "Pisos de porcelanato rectificado, cancelería de aluminio de alto desempeño y herrajes de línea premium en toda la unidad.",
    image:
      "/images/sala2.jpg",
  },
  {
    id: "distribucion",
    title: "Distribución",
    description:
      "Plantas libres que separan las áreas sociales de las privadas, sin pasillos perdidos ni espacios muertos.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=75",
  },
  {
    id: "diseno",
    title: "Diseño",
    description:
      "Interiorismo con paleta cálida y materiales nobles: madera natural, piedra y metal cepillado en cocinas y baños.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=75",
  },
  {
    id: "costos",
    title: "Costos y financiamiento",
    description:
      "Planes de enganche flexibles, escrituración directa y esquemas de crédito con instituciones aliadas.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=75",
  },
];

// Las 3 distribuciones (tipologías) que agrupan los 10 departamentos
export const distributions = [
  {
    id: "tipo-a",
    name: "Tipo A — 101, 201, 301, 401",
    area: 57.30,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 1,
    description:
      "Planta abierta ideal para quienes buscan un espacio compacto y eficiente.",
    plan: "/images/terminaciones1.jpg",
    unitCount: 4,
  },
  {
    id: "tipo-b",
    name: "Tipo B — 202, 302, 402",
    area: 92,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    description:
      "Dos recámaras con baño completo cada una y sala de estar cómoda, perfecta para familias pequeñas.",
    plan: "/images/terminaciones3.jpg",
    unitCount: 3,
  },
  {
    id: "tipo-c",
    name: "Tipo C — 203, 303, 403",
    area: 138,
    bedrooms: 3,
    bathrooms: 1.5,
    parking: 1,
    description:
      "Sala ámplia y luminosa y cocina moderna, ideal para quienes disfrutan de recibir visitas.",
    plan: "/images/terminaciones2.jpg",
    unitCount: 3,
  },
];

// Las 10 unidades individuales — cada una referencia una distribución por id
export const units = [
  { id: "101", floor: 1, distributionId: "tipo-a", status: "disponible", price: 3_875_520 },
  { id: "201", floor: 2, distributionId: "tipo-a", status: "disponible", price: 4_105_440 },
  { id: "202", floor: 2, distributionId: "tipo-b", status: "disponible", price: 2_748_480 },
  { id: "203", floor: 2, distributionId: "tipo-c", status: "disponible", price: 3_780_480 },
  { id: "301", floor: 3, distributionId: "tipo-a", status: "disponible", price: 3_949_440 },
  { id: "302", floor: 3, distributionId: "tipo-b", status: "disponible", price: 2_609_280 },
  { id: "303", floor: 3, distributionId: "tipo-c", status: "disponible", price: 3_569_280 },
  { id: "401", floor: 4, distributionId: "tipo-a", status: "disponible", price: 5_265_590 },
  { id: "402", floor: 4, distributionId: "tipo-b", status: "disponible", price: 2_748_480 },
  { id: "403", floor: 4, distributionId: "tipo-c", status: "disponible", price: 4_778_550 },
];

export const unitStatusLabels = {
  disponible: "Disponible",
  apartado: "Apartado",
  vendido: "Vendido",
};

export const currency = (value) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
