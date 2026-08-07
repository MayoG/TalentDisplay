import { motion } from "framer-motion";
import { cv } from "../data";
import { Section } from "./Section";
import { fadeUp, staggerContainer, defaultViewport } from "../lib/motion";

export function CV() {
  return (
    <Section id="cv" className="bg-stage-black py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-stage-gold-muted">{cv.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl text-stage-cream sm:text-4xl md:text-5xl">{cv.heading}</h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-stage-cream-muted sm:text-lg">
            {cv.description}
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
          <a
            href={cv.fileHref}
            download
            className="inline-flex items-center justify-center rounded-sm bg-stage-gold/90 px-8 py-3.5 font-sans text-sm font-semibold text-stage-black transition hover:bg-stage-gold"
          >
            {cv.downloadLabel}
          </a>
          <a
            href={cv.fileHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center border border-white/15 px-8 py-3.5 font-sans text-sm font-medium text-stage-cream transition hover:border-stage-gold/50 hover:text-stage-gold"
          >
            {cv.openLabel}
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 overflow-hidden border border-white/10 bg-stage-smoke/40 shadow-xl shadow-black/40 md:mt-16"
        >
          <iframe
            src={`${cv.fileHref}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={cv.fileLabel}
            className="h-[70vh] w-full min-h-[28rem] bg-stage-charcoal"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
