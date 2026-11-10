import { NextResponse } from "next/server";

/**
 * SANATAN HI — /api/health
 *
 * Lightweight liveness probe for container orchestrators (Coolify, Docker
 * Swarm, k8s). Returns 200 the instant the Next.js server can answer a
 * request — no DB or z.ai dependency, so it works even before the voice
 * config is wired up.
 *
 * Used by:
 *  - Dockerfile HEALTHCHECK
 *  - docker-compose healthcheck
 *  - Coolify's health-check URL field
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      service: "sanatan-hi",
      time: new Date().toISOString(),
      uptime: process.uptime(),
    },
    {
      status: 200,
      headers: { "cache-control": "no-store" },
    }
  );
}
