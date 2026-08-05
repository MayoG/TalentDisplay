import { loadPlayPhotos } from "./loadPlayPhotos";

const ALT = "Hadar Pnini in Fisherman and Goldfish, 2023 — Tel Aviv University Theatre";

/** Drop new stills in `src/assets/Fisherman and goldfish 2023/` — picked up at build time. */
const modules = import.meta.glob<string>("../assets/Fisherman and goldfish 2023/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const { photos, cover, photoByFile } = loadPlayPhotos(modules, ALT, "AGADA TAU fixed-8.jpg");

export const fishermanGoldfishPhotos = photos;
export const fishermanGoldfishCover = cover;
export const fishermanGoldfishPhotoByFile = photoByFile;
