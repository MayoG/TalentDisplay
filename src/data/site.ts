import type { NavLink, HeroContent } from "./types";

export const siteName = "Hadar Pnini";

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "roles", label: "Roles" },
  { id: "gallery", label: "Gallery" },
  { id: "press", label: "Press" },
  { id: "contact", label: "Contact" },
];

export const hero: HeroContent = {
  title: "Hadar Pnini",
  subtitle: "Theater · Voice · Presence",
  backgroundImage: "/images/hero-bg.svg",
  backgroundAlt: "Cinematic stage light placeholder",
  portraitImage: "/images/hero-portrait.png",
  portraitAlt: "Hadar Pnini",
  primaryCta: { label: "View roles", href: "#roles" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};
