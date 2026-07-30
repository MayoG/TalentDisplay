/** Prefix public asset paths with Vite `base` (e.g. `/TalentDisplay/` on GitHub Pages). */
export function assetPath(path: string): string {
  // Vite-imported assets (`import.meta.glob` / `?url`) are already resolved.
  if (!path.startsWith("/images/") && !path.startsWith("images/")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
