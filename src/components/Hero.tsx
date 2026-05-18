import { motion } from "framer-motion";
import { hero } from "../data";
import { assetPath } from "../lib/assets";
import { fade, fadeUp, staggerContainer, defaultViewport } from "../lib/motion";

/** Split on last space so "Mary Jane Watson" → first + "Watson" style still works reasonably */
function splitTitle(title: string): { first: string; last: string } {
  const t = title.trim();
  const i = t.lastIndexOf(" ");
  if (i <= 0) return { first: t, last: "" };
  return { first: t.slice(0, i), last: t.slice(i + 1) };
}

/** Fine film grain (SVG) — cheap, no extra assets */
const grainDataUri =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

export function Hero() {
  const { first, last } = splitTitle(hero.title);
  const hasPortrait = Boolean(hero.portraitImage);

  return (
    <div id="top" className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={assetPath(hero.backgroundImage)}
            alt={hero.backgroundAlt}
            className="h-full w-full scale-105 object-cover opacity-95 animate-slow-zoom"
          />
        </motion.div>
        <div className="absolute inset-0 bg-hero-light-leak" />
        <div className="absolute inset-0 bg-gradient-to-b from-stage-black/35 via-stage-black/65 to-stage-black" />
        <div className="absolute inset-0 bg-hero-floor" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="absolute inset-0 bg-spotlight-radial" />
        {hasPortrait ? (
          <div className="pointer-events-none absolute -right-[10%] top-1/4 hidden h-[55%] w-[45%] max-w-2xl bg-portrait-halo opacity-90 blur-3xl md:block" />
        ) : null}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.045]"
          style={{ backgroundImage: grainDataUri }}
          aria-hidden
        />
      </div>

      <div className="relative flex min-h-[100dvh] flex-col justify-end pb-14 pt-28 sm:pb-20 sm:pt-32 md:justify-center md:pb-24 md:pt-0">
        <motion.div
          className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div
            className={
              hasPortrait
                ? "flex flex-col items-center gap-8 text-center md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-x-6 md:gap-y-0 md:text-left lg:gap-x-10"
                : "text-center md:text-left"
            }
          >
            <div className={hasPortrait ? "order-2 min-w-0 md:order-1 md:pb-1" : ""}>
              {hero.eyebrow ? (
                <motion.p
                  variants={fadeUp}
                  className="mb-4 font-sans text-[0.65rem] uppercase tracking-[0.42em] text-stage-gold-muted sm:text-xs"
                >
                  {hero.eyebrow}
                </motion.p>
              ) : null}

              <motion.div variants={fadeUp} className="relative">
                <h1 className="font-serif font-normal tracking-tight text-stage-cream">
                  <span className="block text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02]">{first}</span>
                  {last ? (
                    <span className="mt-1 block text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.98] italic text-stage-gold/90">
                      {last}
                    </span>
                  ) : null}
                </h1>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl font-sans text-sm uppercase tracking-[0.28em] text-stage-cream-muted/90 sm:text-base sm:tracking-[0.22em]"
              >
                {hero.subtitle}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm bg-stage-burgundy px-6 py-3 font-sans text-sm font-medium text-stage-cream shadow-lg shadow-black/50 transition hover:bg-stage-burgundy-deep hover:text-white"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-stage-gold/45 bg-white/[0.03] px-6 py-3 font-sans text-sm font-medium text-stage-cream backdrop-blur-[2px] transition hover:border-stage-gold hover:bg-white/8"
                >
                  {hero.secondaryCta.label}
                </a>
              </motion.div>
            </div>

            {hasPortrait && hero.portraitImage ? (
              <motion.div
                variants={fadeUp}
                className="order-1 shrink-0 md:order-2 md:-mr-2 md:pl-0 lg:-mr-4"
              >
                <div className="relative mx-auto w-[min(100%,220px)] sm:w-52 md:mx-0 md:w-[min(100%,280px)] lg:w-72">
                  <div
                    className="pointer-events-none absolute -inset-3 rounded-md bg-gradient-to-br from-stage-gold/25 via-transparent to-stage-burgundy/30 opacity-60 blur-xl md:-inset-4"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-sm shadow-[0_25px_60px_-12px_rgba(0,0,0,0.85)] ring-1 ring-stage-gold/35">
                    <div className="absolute inset-0 bg-gradient-to-t from-stage-black/50 via-transparent to-stage-gold/[0.07]" />
                    <img
                      src={assetPath(hero.portraitImage)}
                      alt={hero.portraitAlt ?? hero.title}
                      className="aspect-[3/4] w-full object-cover object-[center_15%] transition-transform duration-[1.6s] ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute -bottom-1 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-stage-gold/40 to-transparent"
                    aria-hidden
                  />
                </div>
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fade}
      >
        <span className="block h-10 w-px bg-gradient-to-b from-stage-gold/60 to-transparent" aria-hidden />
      </motion.div>
    </div>
  );
}
