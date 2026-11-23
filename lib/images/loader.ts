"use client";

import { ALL_WIDTHS } from "./widths.mjs";

const SORTED = [...ALL_WIDTHS].sort((a, b) => a - b);

/**
 * Maps a next/image request to a pre-generated static WebP file
 * (see scripts/optimize-images.mjs), so no request ever hits
 * Vercel's Image Optimization API.
 *
 * "/images/play-1" + width 640 -> "/images/play-1-640.webp"
 */
export default function staticImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (/^https?:\/\//.test(src) || src.endsWith(".svg")) return src;

  const base = src.replace(/\.(jpe?g|png|webp|avif)$/i, "");
  const w = SORTED.find((s) => s >= width) ?? SORTED[SORTED.length - 1];
  return `${base}-${w}.webp`;
}
