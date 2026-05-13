import { motion } from "framer-motion";
import { reviews } from "../data";
import { Section } from "./Section";
import { QuoteCard } from "./QuoteCard";
import { fadeUp, staggerContainer, defaultViewport } from "../lib/motion";

export function Reviews() {
  return (
    <Section id="press" className="bg-stage-black py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-stage-gold-muted">Reviews &amp; press</p>
          <h2 className="mt-3 font-serif text-3xl text-stage-cream sm:text-4xl md:text-5xl">Words from the dark</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {reviews.map((review) => (
            <QuoteCard key={review.id} review={review} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
