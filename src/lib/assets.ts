/** Prefix public asset paths with Vite `base` (e.g. `/TalentDisplay/` on GitHub Pages). */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
