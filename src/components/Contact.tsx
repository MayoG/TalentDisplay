import { motion } from "framer-motion";
import { contact } from "../data";
import { Section } from "./Section";
import { fadeUp, staggerContainer, defaultViewport } from "../lib/motion";

export function Contact() {
  return (
    <Section id="contact" className="bg-gradient-to-b from-stage-charcoal to-stage-black py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="max-w-3xl"
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-3xl leading-tight text-stage-cream sm:text-4xl md:text-5xl"
        >
          {contact.heading}
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-10 space-y-8">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-stage-gold-muted">{contact.emailLabel}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 inline-block font-sans text-lg text-stage-cream transition hover:text-stage-gold sm:text-xl"
            >
              {contact.email}
            </a>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-stage-gold-muted">Social</p>
            <ul className="mt-3 flex flex-wrap gap-4">
              {contact.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-sans text-sm text-stage-cream-muted underline-offset-4 transition hover:text-stage-cream hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <a
              href={contact.ctaHref}
              className="inline-flex items-center justify-center rounded-sm bg-stage-gold/90 px-8 py-3.5 font-sans text-sm font-semibold text-stage-black transition hover:bg-stage-gold"
            >
              {contact.ctaLabel}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
