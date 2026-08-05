import { motion } from "framer-motion";
import type { GalleryImage, GallerySpan } from "../data/types";
import { assetPath } from "../lib/assets";
import { fadeUp } from "../lib/motion";

const gridClassBySpan: Record<GallerySpan, string> = {
  wide: "sm:col-span-2 md:col-span-2",
  tall: "md:row-span-2",
  normal: "",
};

type GalleryTileProps = {
  image: GalleryImage;
};

export function GalleryTile({ image }: GalleryTileProps) {
  const gridClass = gridClassBySpan[image.span];
  const zoom = image.imageZoom ?? 1;
  const focalPoint = image.imagePosition ?? "center center";

  const aspectClass =
    image.span === "wide"
      ? "min-h-[200px] md:min-h-0 md:h-full"
      : image.span === "tall"
        ? "min-h-[280px] md:min-h-0 md:h-full"
        : "aspect-[4/3] sm:aspect-[3/2] md:aspect-auto md:h-full";

  return (
    <motion.figure variants={fadeUp} className={`group relative min-h-0 overflow-hidden rounded-sm border border-white/10 bg-stage-smoke ${gridClass}`}>
      <div className={`relative h-full min-h-[200px] w-full overflow-hidden md:min-h-0 ${aspectClass}`}>
        <div
          className="h-full w-full"
          style={
            zoom !== 1
              ? { transform: `scale(${zoom})`, transformOrigin: focalPoint }
              : undefined
          }
        >
          <img
            src={assetPath(image.src)}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            style={image.imagePosition ? { objectPosition: image.imagePosition } : undefined}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stage-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.figure>
  );
}
