import type { NextConfig } from "next";
import { DEVICE_SIZES, IMAGE_SIZES } from "./lib/images/widths.mjs";

const nextConfig: NextConfig = {
  images: {
    // Images are pre-optimized by scripts/optimize-images.mjs and served as
    // static files — Vercel Image Optimization is not used at all.
    loader: "custom",
    loaderFile: "./lib/images/loader.ts",
    deviceSizes: DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=31536000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
