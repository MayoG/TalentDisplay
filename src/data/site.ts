import type { NavLink, HeroContent } from "./types";
import { photoBookPhotos } from "./photo-book";

export const siteName = "Hadar Pnini";

/** Default photographer for production stills across the site */
export const defaultPhotographer = "Tami Shaham";

export const photoCredits = {
  default: defaultPhotographer,
  /** Roles with a different photographer than the site default */
  exceptions: [{ play: "Book photos", photographer: "Ilan Zacharov" }],
} as const;

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "roles", label: "Roles" },
  { id: "gallery", label: "Gallery" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

export const hero: HeroContent = {
  title: "Hadar Pnini",
  subtitle: "Theater · Voice · Presence",
  backgroundImage: "/images/hero-bg.svg",
  backgroundAlt: "Cinematic stage light",
  portraitImages: photoBookPhotos,
  portraitAlt: "Hadar Pnini",
  backgroundIntervalSeconds: 5,
  primaryCta: { label: "View roles", href: "#roles" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};
