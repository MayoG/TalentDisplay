/**
 * Resize Photo Book stills for the hero frame (max ~288px CSS, ~3x retina).
 * Reads originals from `src/assets/Book/`, writes WebP to `src/assets/Photo Book/`.
 * Does NOT delete originals.
 *
 * Run: node scripts/optimize-photo-book.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.resolve("src/assets/Book");
const OUT_DIR = path.resolve("src/assets/Photo Book");
const MAX_EDGE = 1200;
const WEBP_QUALITY = 80;
const INPUT_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const entries = await fs.readdir(SRC_DIR);
  let beforeTotal = 0;
  let afterTotal = 0;
  let count = 0;

  for (const name of entries) {
    const ext = path.extname(name).toLowerCase();
    if (!INPUT_EXT.has(ext)) continue;
    if (name === "hero-portrait.png") continue;

    const inputPath = path.join(SRC_DIR, name);
    const stem = path.basename(name, ext);
    const outputPath = path.join(OUT_DIR, `${stem}.webp`);
    const before = (await fs.stat(inputPath)).size;

    await sharp(inputPath)
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(outputPath);

    const after = (await fs.stat(outputPath)).size;
    beforeTotal += before;
    afterTotal += after;
    count += 1;
    console.log(
      `${name} → Photo Book/${stem}.webp  ${(before / 1e6).toFixed(2)}MB → ${(after / 1e6).toFixed(2)}MB`,
    );
  }

  console.log(
    `\n${count} images. ${(beforeTotal / 1e6).toFixed(1)}MB originals → ${(afterTotal / 1e6).toFixed(2)}MB WebP (originals kept in Book/)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
