import { useState } from "react";

/**
 * <img> con manejo de error: si la imagen (placeholder u otra) no carga,
 * cae a un panel con degradado en vez de mostrar el ícono roto del navegador.
 */
export default function Media({ src, alt = "", className = "", loading = "lazy", ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`bg-gradient-to-br from-petroleo-700 to-petroleo-900 flex items-center justify-center text-petroleo-200 text-xs font-mono ${className}`}
        role="img"
        aria-label={alt}
      >
        {alt || "Imagen no disponible"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
