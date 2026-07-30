export interface NavLink {
  id: string;
  label: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  /** Small caps line above the name; omit when the name alone is enough */
  eyebrow?: string;
  backgroundImage: string;
  backgroundAlt: string;
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
  /** Theater / company; omit when unknown */
  venue?: string;
  year: string;
  image: string;
  imageAlt: string;
  /** CSS object-position when the crop needs a focal point (e.g. "center top") */
  imagePosition?: string;
  /** Production stills shown when the role card is opened */
  photos?: RolePhoto[];
  accent?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** Grid footprint and mobile tile proportions */
  span: "wide" | "tall" | "normal";
}

export interface Review {
  id: string;
  quote: string;
  attribution: string;
  source: string;
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
