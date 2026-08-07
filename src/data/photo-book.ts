import type { RolePhoto } from "./types";

const PHOTO_BOOK_ALT = "Hadar Pnini — studio portrait";

/**
 * Optimized hero stills in `src/assets/Photo Book/*.webp`.
 * Source masters live in `src/assets/Book/` — run
 * `node scripts/optimize-photo-book.mjs` after adding new JPGs there.
 */
const modules = import.meta.glob<string>("../assets/Photo Book/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

function fileName(path: string): string {
  return path.split("/").pop() ?? path;
}

export const photoBookPhotos: RolePhoto[] = Object.entries(modules)
  .sort(([a], [b]) => fileName(a).localeCompare(fileName(b), undefined, { numeric: true }))
  .map(([, url]) => ({
    src: url,
    alt: PHOTO_BOOK_ALT,
  }));
