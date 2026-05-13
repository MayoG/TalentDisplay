import { motion } from "framer-motion";
import { about } from "../data";
import { Section } from "./Section";
import { fadeUp, staggerContainer, defaultViewport } from "../lib/motion";

export function About() {
  return (
    <Section id="about" className="bg-stage-charcoal py-20 sm:py-28" innerClassName="!max-w-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-3xl text-stage-cream sm:text-4xl md:text-5xl"
        >
          {about.heading}
        </motion.h2>
        <div className="mt-10 space-y-6">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="font-sans text-base leading-relaxed text-stage-cream-muted sm:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
