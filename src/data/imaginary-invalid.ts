import { loadPlayPhotos } from "./loadPlayPhotos";

const ALT = "Hadar Pnini in The Imaginary Invalid, 2024 — Tel Aviv University Theatre";

/** Drop new stills in `src/assets/The Imaginary Invalid 2024/` — picked up at build time. */
const modules = import.meta.glob<string>("../assets/The Imaginary Invalid 2024/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
});

const { photos, cover, photoByFile } = loadPlayPhotos(modules, ALT, "Z62_1451-Enhanced-NR.jpg");

export const imaginaryInvalidPhotos = photos;
export const imaginaryInvalidCover = cover;
export const imaginaryInvalidPhotoByFile = photoByFile;
