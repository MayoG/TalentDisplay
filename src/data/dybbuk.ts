import { loadPlayPhotos } from "./loadPlayPhotos";

const ALT = "Hadar Pnini in The Dybbuk, 2026 — photo by Tami Shaham";

/** Drop new stills in `src/assets/The Dybbuk 2026/` — picked up at build time. */
const modules = import.meta.glob<string>("../assets/The Dybbuk 2026/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const { photos, cover, photoByFile } = loadPlayPhotos(modules, ALT, "Z62_7840Tami_Shaham.jpg");

export const dybbukPhotos = photos;
export const dybbukCover = cover;
export const dybbukPhotoByFile = photoByFile;
