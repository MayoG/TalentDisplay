import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useAnimate, useReducedMotion, type Variants } from "framer-motion";
import { gate } from "../data/gate";
import { siteName } from "../data";

const STORAGE_KEY = "hp-gate";

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

function readUnlocked(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === gate.passwordHash;
  } catch {
    return false;
  }
}

function rememberUnlocked() {
  try {
    localStorage.setItem(STORAGE_KEY, gate.passwordHash);
  } catch {
    // Private mode / blocked storage: the visitor just re-enters next time
  }
}

/** Velvet folds: soft vertical bands of burgundy */
const curtainFabric = {
  backgroundImage:
    "repeating-linear-gradient(90deg, rgba(0,0,0,0.38) 0px, rgba(0,0,0,0) 22px, rgba(255,255,255,0.05) 38px, rgba(0,0,0,0) 54px, rgba(0,0,0,0.38) 76px), linear-gradient(to bottom, #4a1426, #3d0f1f 60%, #24080f)",
};

const curtainEase = [0.65, 0, 0.35, 1] as const;

const leftCurtain: Variants = {
  closed: { x: 0 },
  open: { x: "-102%", transition: { duration: 1.6, ease: curtainEase } },
};

const rightCurtain: Variants = {
  closed: { x: 0 },
  open: { x: "102%", transition: { duration: 1.6, ease: curtainEase } },
};

const stageContent: Variants = {
  closed: { opacity: 1, y: 0 },
  open: { opacity: 0, y: -12, transition: { duration: 0.4, ease: "easeOut" } },
};

function GateScreen({ onUnlock }: { onUnlock: () => void }) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);
  const [formRef, animateForm] = useAnimate<HTMLFormElement>();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const normalized = value.toLowerCase().replace(/\s+/g, "");
    if (!normalized || checking) return;
    setChecking(true);
    try {
      if ((await sha256(normalized)) === gate.passwordHash) {
        rememberUnlocked();
        onUnlock();
        return;
      }
      setError(gate.errorMessage);
      if (!reduceMotion) void animateForm(formRef.current, { x: [0, -10, 9, -6, 4, 0] }, { duration: 0.45 });
    } catch {
      setError("This browser can't check the ticket here. Try opening the site over https.");
    } finally {
      setChecking(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[200] overflow-hidden bg-transparent"
      initial={false}
      animate="closed"
      exit={reduceMotion ? { opacity: 0, transition: { duration: 0.4 } } : "open"}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
    >
      {/* Curtain panels: they part to reveal the site underneath */}
      <motion.div variants={leftCurtain} className="absolute inset-y-0 left-0 w-1/2 shadow-[12px_0_40px_rgba(0,0,0,0.6)]" style={curtainFabric} aria-hidden />
      <motion.div variants={rightCurtain} className="absolute inset-y-0 right-0 w-1/2 shadow-[-12px_0_40px_rgba(0,0,0,0.6)]" style={curtainFabric} aria-hidden />

      {/* Spotlight on the seam + gold valance */}
      <motion.div variants={stageContent} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_42%,rgba(201,169,98,0.20),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-stage-gold/60 to-transparent" />
      </motion.div>

      <motion.div variants={stageContent} className="relative flex min-h-[100dvh] items-center justify-center px-5 py-16">
        <motion.div
          className="w-full max-w-md text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.42em] text-stage-gold-muted sm:text-xs">{gate.eyebrow}</p>
          <h1 id="gate-title" className="mt-5 font-serif text-[clamp(2rem,7vw,3.25rem)] font-normal leading-[1.05] text-stage-cream">
            {gate.title}
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-stage-gold/50" aria-hidden />
          <p className="mx-auto mt-6 max-w-sm font-sans text-sm leading-relaxed text-stage-cream-muted sm:text-base">{gate.message}</p>

          <form ref={formRef} onSubmit={submit} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="gate-password" className="sr-only">
              {gate.inputLabel}
            </label>
            <input
              id="gate-password"
              type="password"
              autoComplete="current-password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(null);
              }}
              placeholder={gate.inputLabel}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "gate-error" : undefined}
              className="min-h-[48px] flex-1 rounded-sm border border-stage-gold/35 bg-black/40 px-4 font-sans text-base tracking-wide text-stage-cream placeholder:text-stage-cream-muted/50 backdrop-blur-sm transition focus:border-stage-gold focus:outline-none focus:ring-1 focus:ring-stage-gold/60"
            />
            <button
              type="submit"
              disabled={checking}
              className="min-h-[48px] rounded-sm bg-stage-gold px-7 font-sans text-sm font-medium uppercase tracking-[0.2em] text-stage-black shadow-lg shadow-black/50 transition hover:bg-stage-cream disabled:opacity-60"
            >
              {gate.submitLabel}
            </button>
          </form>

          <p id="gate-error" role="alert" className="mt-4 min-h-[1.25rem] font-sans text-sm text-[#e8a3b4]">
            {error}
          </p>

          <p className="mt-10 font-serif text-sm italic text-stage-cream-muted/60">{siteName}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/** Temporary pre-launch gate. See src/data/gate.ts for how to remove it. */
export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(readUnlocked);

  return (
    <>
      {unlocked ? children : null}
      <AnimatePresence>{unlocked ? null : <GateScreen key="gate" onUnlock={() => setUnlocked(true)} />}</AnimatePresence>
    </>
  );
}
