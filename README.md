# ARQ' RO Inmobiliario — Landing page de consultora inmobiliaria

Landing page en React + Vite + Tailwind CSS para presentar un proyecto inmobiliario:
hero en video, características, galería, 3 distribuciones, 10 unidades disponibles,
ubicación con Google Maps y agendado de visitas por WhatsApp.

## Requisitos

- Node.js 18 o superior

## Poner en marcha en local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Estructura del proyecto

```
src/
  data/project.js        ← ÚNICO archivo que necesitas editar para cambiar
                            textos, contacto, video, fotos, distribuciones y unidades
  components/             Cada sección de la landing es un componente independiente
  lib/whatsapp.js         Arma el link de WhatsApp con el mensaje del formulario
  index.css               Tokens de diseño (colores, tipografías) — @theme de Tailwind v4
```

Cada sección (Hero, Overview, Gallery, FeatureShowcase, Distributions, Units,
LocationMap, ContactSection) es un componente independiente en `src/components/`,
así que puedes reordenar, quitar o agregar secciones sin tocar el resto — pensado
para poder rediseñar o escalar la página en el futuro sin reescribir todo.

## Cómo personalizar el contenido

Todo el contenido vive en **`src/data/project.js`**:

- **`project`**: nombre, tagline, video del hero (`heroVideo`), dirección, link de
  Google Maps, y datos de contacto (WhatsApp, teléfono, correo).
- **`projectGallery`**: fotos generales del edificio (fachada, entorno).
- **`featureShowcase`**: las 5 tarjetas de detalle (habitaciones, acabados,
  distribución, diseño, costos).
- **`distributions`**: las 3 tipologías (planos, m², recámaras, baños).
- **`units`**: las 10 unidades, cada una ligada a una tipología por `distributionId`.

Todas las imágenes usadas ahora son fotos de referencia de Unsplash — reemplaza
cada `src`/`image`/`plan` por la URL o ruta de tus fotos y renders reales
(puedes poner archivos en `public/` y referenciarlos como `/mi-foto.jpg`).

### Cambiar el video del hero

Edita `heroVideo` en `src/data/project.js`. Usa un video ligero (MP4, H.264,
idealmente < 15 MB) para que cargue rápido en celular.

### Cambiar el mapa

`mapsEmbedSrc` es una URL de embed de Google Maps. Para generar la tuya:
Google Maps → busca la dirección → Compartir → Insertar un mapa → copia el
`src` del `<iframe>`.

### Cambiar el número de WhatsApp

Edita `contact.whatsappNumber` en `src/data/project.js` (formato internacional,
solo dígitos, sin `+` ni espacios, ej. `5215512345678`).

## Íconos

Los íconos usan [morphicons](https://www.morphicons.com) (`morphicons/react`)
con datos de geometría de `lucide`. Para usar un ícono nuevo:

```jsx
import { MorphIcon } from "morphicons/react";
import { Home } from "lucide";

<MorphIcon icon={Home} size={18} strokeWidth={1.75} />
```

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para publicar.

## Desplegar

### Vercel
1. Sube este proyecto a un repositorio de GitHub/GitLab.
2. En Vercel → "Add New Project" → importa el repositorio.
3. Vercel detecta Vite automáticamente (o usa `vercel.json` incluido). Build
   command: `npm run build`, output: `dist`.

### Netlify
1. Sube el repositorio o arrastra la carpeta `dist/` generada por `npm run build`
   a Netlify → "Deploys".
2. Si conectas el repositorio, Netlify usa `netlify.toml` (ya incluido):
   build command `npm run build`, publish `dist`.

## Notas técnicas

- Tailwind CSS v4 (config vía `@theme` en `src/index.css`, sin `tailwind.config.js`).
- Animaciones con `framer-motion` (respeta `prefers-reduced-motion`).
- 100% responsive, mobile-first.
- Sin dependencias ni código sin usar (verificado con `npm run lint`).
