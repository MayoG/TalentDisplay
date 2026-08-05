import type { RolePhoto } from "./types";

export function fileName(path: string): string {
  return path.split("/").pop() ?? path;
}

function fileStem(path: string): string {
  return fileName(path).replace(/\.[^.]+$/, "");
}

export function loadPlayPhotos(modules: Record<string, string>, alt: string, coverFile?: string) {
  const photos: RolePhoto[] = Object.entries(modules)
    .sort(([a], [b]) => fileName(a).localeCompare(fileName(b), undefined, { numeric: true }))
    .map(([, url]) => ({
      src: url,
      alt,
    }));

  const coverEntry = coverFile ? Object.entries(modules).find(([path]) => fileStem(path) === fileStem(coverFile)) : undefined;

  const cover = {
    src: coverEntry?.[1] ?? photos[0]?.src ?? "",
    alt,
  };

  function photoByFile(name: string): RolePhoto | undefined {
    const entry = Object.entries(modules).find(([path]) => fileStem(path) === fileStem(name));
    if (!entry) return undefined;
    return { src: entry[1], alt };
  }

  return { photos, cover, photoByFile };
}
