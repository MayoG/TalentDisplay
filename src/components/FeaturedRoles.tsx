import { motion } from "framer-motion";
import { roles } from "../data";
import { Section } from "./Section";
import { RoleCard } from "./RoleCard";
import { fadeUp, staggerContainer, defaultViewport } from "../lib/motion";

export function FeaturedRoles() {
  return (
    <Section id="roles" className="bg-stage-black py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-stage-gold-muted">Featured</p>
          <h2 className="mt-3 font-serif text-3xl text-stage-cream sm:text-4xl md:text-5xl">Roles on the record</h2>
          <p className="mt-4 font-sans text-stage-cream-muted">
            A few chapters from recent seasons—each one its own weather.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 flex flex-col gap-10 md:mt-20 md:gap-14"
        >
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
