import { loadPlayPhotos } from "./loadPlayPhotos";

const ALT = "Hadar Pnini in In Clear Conscience, 2025 — photo by Tami Shaham";

/** Drop new stills in `src/assets/In clear conscience 2025/` — picked up at build time. */
const modules = import.meta.glob<string>("../assets/In clear conscience 2025/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
});

const { photos, cover, photoByFile } = loadPlayPhotos(modules, ALT, "Z61_2197-Enhanced-NRTami_Shaham.jpg");

export const clearConsciencePhotos = photos;
export const clearConscienceCover = cover;
export const clearConsciencePhotoByFile = photoByFile;
