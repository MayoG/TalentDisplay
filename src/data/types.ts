export interface NavLink {
  id: string;
  label: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  /** Small caps line above the name; omit when the name alone is enough */
  eyebrow?: string;
  /** Single full-bleed background (used when `backgroundImages` is empty) */
  backgroundImage?: string;
  /** Rotating full-bleed backgrounds; when set, one image shows at a time */
  backgroundImages?: { src: string; alt: string }[];
  backgroundAlt: string;
  /** Seconds each background image stays visible before crossfading */
  backgroundIntervalSeconds?: number;
  /** Rotating portraits in the hero frame; when set, one image shows at a time */
  portraitImages?: { src: string; alt: string }[];
  /** Optional headshot shown beside the name; place files under `public/images/`. */
  portraitImage?: string;
  portraitAlt?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
}

export interface RolePhoto {
  src: string;
  alt: string;
}

export interface Role {
  id: string;
  title: string;
  character: string;
  /** Playwright / author of the play; omit when unknown */
  playwright?: string;
  /** Theater / company; omit when unknown */
  venue?: string;
  /** Production director; omit when unknown */
  director?: string;
  year: string;
  image: string;
  imageAlt: string;
  /** CSS object-position for sm+ (e.g. "center top", "right 10%") */
  imagePosition?: string;
  /** object-position below sm; falls back to imagePosition */
  imagePositionMobile?: string;
  /** Mirror the cover image horizontally */
  imageFlipHorizontal?: boolean;
  /** Cover zoom factor ג€” 1 is default, 1.15 is a mild zoom-in */
  imageZoom?: number;
  /** Production stills shown when the role card is opened */
  photos?: RolePhoto[];
  /** Photographer credit for this role's stills; falls back to site default */
  photographer?: string;
  accent?: string;
}

export type GallerySpan = "wide" | "tall" | "normal";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** Grid footprint and tile proportions */
  span: GallerySpan;
  /** Focal point for crop and zoom (CSS object-position / transform-origin, e.g. "center 30%") */
  imagePosition?: string;
  /** Tile zoom factor ג€” 1 is default; zooms toward imagePosition */
  imageZoom?: number;
}

export interface CvContent {
  eyebrow: string;
  heading: string;
  description: string;
  /** Path under `public/` (e.g. `/cv/hadar-pnini-cv.pdf`) */
  fileHref: string;
  fileLabel: string;
  downloadLabel: string;
  openLabel: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactContent {
  heading: string;
  email: string;
  emailLabel: string;
  social: SocialLink[];
  ctaLabel: string;
  ctaHref: string;
}
