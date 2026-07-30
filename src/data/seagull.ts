import type { RolePhoto } from "./types";

const SEAGULL_ALT = "Hadar Pnini as Nina in The Seagull, 2026 — photo by Tami Shaham";

/** Drop new stills in `src/assets/seagull/` — they are picked up automatically at build time. */
const modules = import.meta.glob<string>("../assets/seagull/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
});

function fileName(path: string): string {
  return path.split("/").pop() ?? path;
}

export const seagullPhotos: RolePhoto[] = Object.entries(modules)
  .sort(([a], [b]) => fileName(a).localeCompare(fileName(b), undefined, { numeric: true }))
  .map(([, url]) => ({
    src: url,
    alt: SEAGULL_ALT,
  }));

/** Prefer a specific still for the role card cover when present. */
const COVER_FILE = "Z61_1082Tami_Shaham.jpg";

const coverEntry = Object.entries(modules).find(([path]) => fileName(path) === COVER_FILE);

export const seagullCover = {
  src: coverEntry?.[1] ?? seagullPhotos[0]?.src ?? "",
  alt: SEAGULL_ALT,
};

export function seagullPhotoByFile(name: string): RolePhoto | undefined {
  const entry = Object.entries(modules).find(([path]) => fileName(path) === name);
  if (!entry) return undefined;
  return { src: entry[1], alt: SEAGULL_ALT };
}
