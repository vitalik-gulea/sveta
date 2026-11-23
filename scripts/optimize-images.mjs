// Pre-generates responsive WebP variants of every image in assets/images
// into public/images/<name>-<width>.webp. These are served as plain static
// files from the CDN, so Vercel Image Optimization (and its monthly limit)
// is never used.
//
// Usage: node scripts/optimize-images.mjs [--force]
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { ALL_WIDTHS } from "../lib/images/widths.mjs";

const SRC_DIR = path.resolve("assets/images");
const OUT_DIR = path.resolve("public/images");
const QUALITY = 78;
const force = process.argv.includes("--force");

async function mtime(file) {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return 0;
  }
}

await mkdir(OUT_DIR, { recursive: true });

const files = (await readdir(SRC_DIR)).filter((f) =>
  /\.(jpe?g|png|webp|avif)$/i.test(f),
);

let generated = 0;
for (const file of files) {
  const src = path.join(SRC_DIR, file);
  const name = path.parse(file).name;
  const srcTime = await mtime(src);

  for (const width of ALL_WIDTHS) {
    const out = path.join(OUT_DIR, `${name}-${width}.webp`);
    if (!force && (await mtime(out)) >= srcTime) continue;

    await sharp(src)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(out);
    generated++;
  }
}

console.log(
  `optimize-images: ${files.length} source images, ${generated} variants generated`,
);
