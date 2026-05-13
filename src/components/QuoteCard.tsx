import { motion } from "framer-motion";
import type { Review } from "../data/types";
import { fadeUp } from "../lib/motion";

type QuoteCardProps = {
  review: Review;
};

export function QuoteCard({ review }: QuoteCardProps) {
  return (
    <motion.blockquote
      variants={fadeUp}
      className="relative border border-white/10 bg-gradient-to-b from-stage-smoke/80 to-stage-black/40 p-8 shadow-xl shadow-black/30 sm:p-10"
    >
      <span
        className="absolute left-6 top-6 font-serif text-6xl leading-none text-stage-gold/25 sm:left-8 sm:top-8"
        aria-hidden
      >
        “
      </span>
      <p className="relative z-10 font-serif text-lg leading-relaxed text-stage-cream sm:text-xl">{review.quote}</p>
      <footer className="relative z-10 mt-8 border-t border-white/10 pt-6">
        <cite className="not-italic">
          <span className="block font-sans text-sm font-medium text-stage-gold">{review.attribution}</span>
          <span className="mt-1 block font-sans text-xs uppercase tracking-wider text-stage-cream-muted">
            {review.source}
          </span>
        </cite>
      </footer>
    </motion.blockquote>
  );
}
