import { MorphIcon } from "morphicons/react";
import { SquarePlay, Music2, X as XIcon } from "lucide";
import { project } from "../data/project";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

const SOCIALS = [
  { key: "instagram", label: "Instagram", Icon: InstagramIcon, custom: true },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon, custom: true },
  { key: "youtube", label: "YouTube", Icon: SquarePlay },
  { key: "tiktok", label: "TikTok", Icon: Music2 },
  { key: "twitter", label: "X / Twitter", Icon: XIcon },
];

export default function Footer() {
  const activeSocials = SOCIALS.filter((s) => project.social?.[s.key]);
  return (
    <footer className="bg-grafito-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg text-white">{project.name}</p>
        {activeSocials.length > 0 && (
          <ul className="flex items-center gap-3">
            {activeSocials.map(({ key, label, Icon, custom }) => (
              <li key={key}>
                <a href={project.social[key]} target="_blank" rel="noreferrer" aria-label={label} title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-azul-600 hover:text-white">
                  {custom ? <Icon size={16} /> : <MorphIcon icon={Icon} size={16} strokeWidth={1.75} />}
                </a>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-grafito-300 text-center">© {new Date().getFullYear()} {project.name}. Todos los derechos reservados.</p>
        <a href="#top" className="text-xs font-mono uppercase tracking-[0.14em] text-grafito-300 hover:text-azul-300 transition-colors">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
