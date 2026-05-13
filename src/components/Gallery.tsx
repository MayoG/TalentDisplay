import { motion } from "framer-motion";
import { galleryImages } from "../data";
import { Section } from "./Section";
import { GalleryTile } from "./GalleryTile";
import { fadeUp, staggerContainer, defaultViewport } from "../lib/motion";

const layoutById: Record<string, string> = {
  g1: "sm:col-span-2 md:col-span-2 md:row-span-1 lg:col-span-2",
  g2: "md:row-span-2",
  g3: "",
  g4: "",
  g5: "md:row-span-2",
  g6: "sm:col-span-2 md:col-span-2 lg:col-span-2",
};

export function Gallery() {
  return (
    <Section id="gallery" className="bg-stage-charcoal py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-stage-gold-muted">Gallery</p>
          <h2 className="mt-3 font-serif text-3xl text-stage-cream sm:text-4xl md:text-5xl">Light and memory</h2>
          <p className="mt-4 font-sans text-stage-cream-muted">
            Stills from the work—moments caught between rehearsal and reverie.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4 md:grid-rows-3 md:gap-5"
        >
          {galleryImages.map((img) => (
            <GalleryTile key={img.id} image={img} layoutClassName={layoutById[img.id] ?? ""} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
