import type { NextConfig } from "next";

/**
 * SANATAN HI — Next.js configuration.
 *
 * - Default (dev / Node deploy): `output: "standalone"` + API routes.
 * - Static export (GitHub Pages / CDN): set `NEXT_OUTPUT=export`
 *   (and `NEXT_BASE_PATH=/repo-name` for project pages). The server-only
 *   `src/app/api` routes are removed by the CI workflow in that mode and the
 *   offline engine runs directly in the browser via `src/lib/client/ask.ts`.
 */
const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  output: isExport ? "export" : "standalone",
  basePath: process.env.NEXT_BASE_PATH || "",
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
