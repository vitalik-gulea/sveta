// Single source of truth for pre-generated image widths.
// Used by next.config.ts (srcset widths), the custom loader and
// scripts/optimize-images.mjs (which files get generated).
export const IMAGE_SIZES = [256, 384];
export const DEVICE_SIZES = [640, 828, 1080, 1280];
export const ALL_WIDTHS = [...IMAGE_SIZES, ...DEVICE_SIZES];
