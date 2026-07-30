import { motion } from "framer-motion";
import type { Role } from "../data/types";
import { assetPath } from "../lib/assets";
import { fadeUp } from "../lib/motion";

type RoleCardProps = {
  role: Role;
  onOpen?: (role: Role) => void;
};

export function RoleCard({ role, onOpen }: RoleCardProps) {
  const hasPhotos = Boolean(role.photos && role.photos.length > 0);
  const interactive = hasPhotos && onOpen;

  const content = (
    <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] md:aspect-[21/9]">
      <img
        src={assetPath(role.image)}
        alt={role.imageAlt}
        className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
        style={role.imagePosition ? { objectPosition: role.imagePosition } : undefined}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stage-black via-stage-black/40 to-transparent opacity-90 md:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-stage-gold-muted">{role.year}</p>
        <h3 className="mt-2 font-serif text-2xl text-stage-cream sm:text-3xl md:text-4xl">{role.title}</h3>
        <p className="mt-1 font-sans text-lg text-stage-cream-muted sm:text-xl">{role.character}</p>
        {role.venue ? (
          <p className="mt-3 font-sans text-sm text-stage-cream-muted/90">{role.venue}</p>
        ) : null}
        {interactive ? (
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.22em] text-stage-gold-muted/90 transition-colors group-hover:text-stage-gold">
            View photos
          </p>
        ) : null}
      </div>
    </div>
  );

  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-sm border border-white/10 bg-stage-smoke shadow-2xl shadow-black/50"
    >
      {interactive ? (
        <button
          type="button"
          onClick={() => onOpen(role)}
          className="block w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stage-gold"
          aria-label={`View photos from ${role.title} as ${role.character}`}
        >
          {content}
        </button>
      ) : (
        content
      )}
    </motion.article>
  );
}
