import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { hero } from "../data";
import { assetPath } from "../lib/assets";
import { fade, fadeUp, staggerContainer, defaultViewport } from "../lib/motion";

function splitTitle(title: string): { first: string; last: string } {
  const t = title.trim();
  const i = t.lastIndexOf(" ");
  if (i <= 0) return { first: t, last: "" };
  return { first: t.slice(0, i), last: t.slice(i + 1) };
}

type Slide = { src: string; alt: string };

function getSlides(): Slide[] {
  if (hero.portraitImages && hero.portraitImages.length > 0) {
    return hero.portraitImages;
  }
  if (hero.portraitImage) {
    return [{ src: hero.portraitImage, alt: hero.portraitAlt ?? hero.title }];
  }
  return [];
}

function shuffleSlides(slides: Slide[]): Slide[] {
  const FIRST = "DSC00115.webp";
  const first = slides.find((slide) => slide.src.includes(FIRST));
  const rest = slides.filter((slide) => !slide.src.includes(FIRST));

  for (let i = rest.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j]!, rest[i]!];
  }

  return first ? [first, ...rest] : rest;
}

function PortraitFrame({ slides, intervalSeconds }: { slides: Slide[]; intervalSeconds: number }) {
  const reduceMotion = useReducedMotion();
  const [order] = useState(() => shuffleSlides(slides));
  const [index, setIndex] = useState(0);
  const holdMs = Math.max(2000, Math.round(intervalSeconds * 1000));
  const canNavigate = order.length > 1;

  // Auto-advance; restarts the wait after each change (including manual taps)
  useEffect(() => {
    if (!canNavigate || reduceMotion) return;
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % order.length);
    }, holdMs);
    return () => window.clearTimeout(id);
  }, [canNavigate, reduceMotion, holdMs, order.length, index]);

  // Warm neighboring frames so crossfades stay smooth
  useEffect(() => {
    if (!canNavigate) return;
    for (const offset of [1, order.length - 1]) {
      const slide = order[(index + offset) % order.length];
      if (!slide) continue;
      const img = new Image();
      img.src = assetPath(slide.src);
    }
  }, [canNavigate, index, order]);

  const go = (delta: number) => {
    if (!canNavigate) return;
    setIndex((i) => (i + delta + order.length) % order.length);
  };

  const active = order[index] ?? order[0];
  if (!active) return null;

  return (
    <div className="relative mx-auto w-[min(72vw,240px)] sm:w-52 md:mx-0 md:w-[min(100%,280px)] lg:w-72">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-stage-charcoal shadow-[0_25px_60px_-12px_rgba(0,0,0,0.85)] ring-1 ring-stage-gold/35">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={active.src}
            src={assetPath(active.src)}
            alt={active.alt || hero.portraitAlt || hero.title}
            width={720}
            height={960}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-[center_15%] will-change-transform"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
            animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1.06 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    opacity: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: holdMs / 1000 + 0.6, ease: "linear" },
                  }
            }
          />
        </AnimatePresence>

        {canNavigate ? (
          <div className="absolute inset-0 z-10 flex">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => go(-1)}
              className="h-full w-1/2 cursor-w-resize bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stage-gold/60"
            />
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => go(1)}
              className="h-full w-1/2 cursor-e-resize bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stage-gold/60"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function Hero() {
  const { first, last } = splitTitle(hero.title);
  const slides = getSlides();
  const hasPortrait = slides.length > 0;
  const intervalSeconds = hero.backgroundIntervalSeconds ?? 5.5;

  return (
    <section id="top" className="relative min-h-[100dvh] overflow-x-hidden">
      {/* Stage backdrop — kept behind content with explicit z-index */}
      <div className="absolute inset-0 z-0 bg-stage-charcoal" aria-hidden>
        {hero.backgroundImage ? <img src={assetPath(hero.backgroundImage)} alt="" decoding="async" className="h-full w-full object-cover opacity-80" /> : null}
        <div className="absolute inset-0 bg-gradient-to-b from-stage-black/40 via-stage-black/70 to-stage-black" />
        <div className="absolute inset-0 bg-hero-floor" />
        <div className="absolute inset-0 bg-vignette" />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-start pb-14 pt-24 sm:pb-20 sm:pt-28 md:justify-center md:pb-24 md:pt-0">
        <motion.div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8" initial="hidden" animate="visible" variants={staggerContainer}>
          <div
            className={
              hasPortrait
                ? "flex flex-col items-center gap-6 text-center sm:gap-8 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-x-6 md:gap-y-0 md:text-left lg:gap-x-10"
                : "text-center md:text-left"
            }
          >
            <div className={hasPortrait ? "order-2 min-w-0 md:order-1 md:pb-1" : ""}>
              {hero.eyebrow ? (
                <motion.p variants={fadeUp} className="mb-4 font-sans text-[0.65rem] uppercase tracking-[0.42em] text-stage-gold-muted sm:text-xs">
                  {hero.eyebrow}
                </motion.p>
              ) : null}

              <motion.div variants={fadeUp}>
                <h1 className="font-serif font-normal tracking-tight text-stage-cream">
                  <span className="block text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02]">{first}</span>
                  {last ? <span className="mt-1 block text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.98] italic text-stage-gold/90">{last}</span> : null}
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
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-stage-gold/45 bg-white/[0.03] px-6 py-3 font-sans text-sm font-medium text-stage-cream transition hover:border-stage-gold hover:bg-white/8"
                >
                  {hero.secondaryCta.label}
                </a>
              </motion.div>
            </div>

            {hasPortrait ? (
              <motion.div variants={fadeUp} className="order-1 shrink-0 md:order-2">
                <PortraitFrame slides={slides} intervalSeconds={intervalSeconds} />
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fade}
      >
        <span className="block h-10 w-px bg-gradient-to-b from-stage-gold/60 to-transparent" aria-hidden />
      </motion.div>
    </section>
  );
}
