/**
 * Cinta infinita ("marquee") que anuncia el proyecto justo debajo del hero.
 * El truco de accesibilidad/SEO: el contenido real solo existe una vez
 * (aria-hidden en la copia duplicada), y la animación CSS repite visualmente
 * sin cortes gracias a que la pista se duplica y se desplaza -50%.
 */

const MESSAGE = "¡¡Nuevo Proyecto!!";
const REPEAT = 8;

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {Array.from({ length: REPEAT }).map((_, i) => (
        <span key={i} className="flex items-center gap-8 shrink-0">
          <span className="font-display text-2xl sm:text-3xl italic text-azul-800 whitespace-nowrap">
            {MESSAGE}
          </span>
          <span className="h-2 w-2 rounded-full bg-azul-700/70 shrink-0" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="relative overflow-hidden bg-azul-100 border-y border-azul-200 py-3.5 sm:py-4">
      <div className="flex w-max animate-marquee" role="img" aria-label={MESSAGE}>
        <Track />
        <Track aria-hidden="true" />
      </div>
    </div>
  );
}