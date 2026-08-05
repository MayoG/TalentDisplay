import { loadPlayPhotos } from "./loadPlayPhotos";

const ALT = "Hadar Pnini in Baby with the Bathwater, 2025 — Tel Aviv University Theatre";

/** Drop new stills in `src/assets/Baby with the Bathwater 2025/` — picked up at build time. */
const modules = import.meta.glob<string>("../assets/Baby with the Bathwater 2025/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
});

const { photos, cover, photoByFile } = loadPlayPhotos(modules, ALT, "Z61_0669-Enhanced-NR.jpg");

export const babyBathwaterPhotos = photos;
export const babyBathwaterCover = cover;
export const babyBathwaterPhotoByFile = photoByFile;
