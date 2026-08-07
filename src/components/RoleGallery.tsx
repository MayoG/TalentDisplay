import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { defaultPhotographer } from "../data";
import type { Role } from "../data/types";
import { assetPath } from "../lib/assets";

type RoleGalleryProps = {
  role: Role | null;
  activeIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function RoleGallery({ role, activeIndex, onClose, onIndexChange }: RoleGalleryProps) {
  const photos = role?.photos ?? [];
  const count = photos.length;
  const photo = count > 0 ? photos[activeIndex] : null;

  const goPrev = useCallback(() => {
    if (count === 0) return;
    onIndexChange((activeIndex - 1 + count) % count);
  }, [activeIndex, count, onIndexChange]);

  const goNext = useCallback(() => {
    if (count === 0) return;
    onIndexChange((activeIndex + 1) % count);
  }, [activeIndex, count, onIndexChange]);

  useEffect(() => {
    if (!role) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [role, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {role && photo ? (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col bg-stage-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${role.title} — ${role.character} photos`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-start justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-stage-gold-muted">{role.year}</p>
              <h2 className="mt-1 font-serif text-2xl text-stage-cream sm:text-3xl">{role.title}</h2>
              <p className="mt-1 font-sans text-sm text-stage-cream-muted sm:text-base">{role.character}</p>
              {role.playwright ? (
                <p className="mt-1 font-sans text-xs text-stage-cream-muted/90 sm:text-sm">
                  by {role.playwright}
                </p>
              ) : null}
              {role.director ? (
                <p className="mt-1 font-sans text-xs text-stage-cream-muted/90 sm:text-sm">
                  Directed by {role.director}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="font-sans text-xs uppercase tracking-[0.2em] text-stage-cream-muted transition-colors hover:text-stage-cream"
              aria-label="Close gallery"
            >
              Close
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 z-10 hidden h-12 w-12 items-center justify-center text-stage-cream-muted transition-colors hover:text-stage-cream sm:flex"
                  aria-label="Previous photo"
                >
                  <span className="font-serif text-3xl leading-none" aria-hidden>
                    ‹
                  </span>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 z-10 hidden h-12 w-12 items-center justify-center text-stage-cream-muted transition-colors hover:text-stage-cream sm:flex"
                  aria-label="Next photo"
                >
                  <span className="font-serif text-3xl leading-none" aria-hidden>
                    ›
                  </span>
                </button>
              </>
            ) : null}

            <AnimatePresence mode="wait">
              <motion.img
                key={photo.src}
                src={assetPath(photo.src)}
                alt={photo.alt}
                decoding="async"
                fetchPriority="high"
                className="max-h-full max-w-full object-contain shadow-2xl shadow-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </div>

          <div className="px-5 py-5 sm:px-8">
            <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
              <div>
                <p className="font-sans text-xs tracking-[0.15em] text-stage-cream-muted">
                  {activeIndex + 1} / {count}
                </p>
                {role.photographer !== null ? (
                  <p className="mt-1.5 font-sans text-[11px] tracking-[0.08em] text-stage-cream-muted/65">
                    Photo by {role.photographer ?? defaultPhotographer}
                  </p>
                ) : null}
              </div>
              {count > 1 ? (
                <div className="flex gap-4 sm:hidden">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="font-sans text-xs uppercase tracking-[0.2em] text-stage-cream-muted"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="font-sans text-xs uppercase tracking-[0.2em] text-stage-cream-muted"
                  >
                    Next
                  </button>
                </div>
              ) : null}
            </div>

            {count > 1 ? (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {photos.map((item, index) => {
                  const selected = index === activeIndex;
                  return (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => onIndexChange(index)}
                      className={`relative h-16 w-12 shrink-0 overflow-hidden border transition-opacity sm:h-20 sm:w-14 ${
                        selected
                          ? "border-stage-gold opacity-100"
                          : "border-white/10 opacity-55 hover:opacity-90"
                      }`}
                      aria-label={`Photo ${index + 1}`}
                      aria-current={selected ? "true" : undefined}
                    >
                      <img
                        src={assetPath(item.src)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
