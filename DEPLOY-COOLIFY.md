# SANATAN HI — 24×7 on Hostinger VPS + Coolify

This guide takes you from a fresh Hostinger VPS to a **fully functional,
auto-restarting, HTTPS-secured SANATAN HI** running behind Coolify — the
self-hostable PaaS that gives you Vercel-style deploys on your own server.

> **Why Coolify over raw PM2 + Nginx?** Coolify gives you git-push deploys,
> automatic SSL, health checks, rolling restarts, env-var management,
> persistent volumes, a web UI and multi-app hosting — all on one VPS you
> own. `DEPLOY-HOSTINGER.md` (Path A) covers the manual PM2 route; this is
> the production-grade path.

---

## Architecture at a glance

```
            ┌──────────────────────────────────────────────┐
   user ──► │  Hostinger KVM VPS (Ubuntu 24.04)             │
   https   │  ┌──────────────────────────────────────────┐ │
            │  │  Coolify (Docker-based PaaS)             │ │
            │  │  ┌────────────────────────────────────┐  │ │
            │  │  │  Traefik edge (auto Let's Encrypt) │  │ │
            │  │  │  sanatanhi.com  ──► :3000           │  │ │
            │  │  └────────────────────────────────────┘  │ │
            │  │  ┌────────────────────────────────────┐  │ │
            │  │  │  sanatan-hi container (Bun + Next) │  │ │
            │  │  │  • /api/health  (liveness)         │  │ │
            │  │  │  • /api/chat    (offline engine)   │  │ │
            │  │  │  • /api/tts     (z.ai narration)   │  │ │
            │  │  │  • /api/transcribe (z.ai ASR)      │  │ │
            │  │  │  • /api/consult (z.ai LLM Guide)   │  │ │
            │  │  │  • .z-ai-config (from env vars)    │  │ │
            │  │  │  • volume: /app/db (SQLite)        │  │ │
            │  │  └────────────────────────────────────┘  │ │
            │  └──────────────────────────────────────────┘ │
            └──────────────────────────────────────────────┘
```

---

## What ships in the repo for this

| File | Purpose |
|---|---|
| `Dockerfile` | Multi-stage Bun build → slim non-root runtime image |
| `.dockerignore` | Keeps secrets, `node_modules`, logs out of the image |
| `docker-compose.yml` | Volume + restart + healthcheck wiring (Coolify reads this) |
| `scripts/docker-entrypoint.sh` | Converts `ZAI_API_KEY` / `ZAI_CONFIG_JSON` env vars → `.z-ai-config` file |
| `src/app/api/health/route.ts` | Liveness probe (`GET /api/health` → 200) |
| `.github/workflows/deploy.yml` | (unchanged) GitHub Pages static export — runs in parallel |

Coolify auto-detects the **Dockerfile** when you create a resource from this
repo. You don't need to do anything special — the build just works.

---

## Prerequisites

- A **Hostinger KVM VPS** — KVM 1 (1 vCPU / 4 GB / 50 GB NVMe) is comfortable;
  KVM 2 if you host several apps. (The static Pages site stays on GitHub
  Pages as a free backup.)
- A **domain** pointed at Hostinger (or just use the VPS IP for testing).
- Your **z.ai API key** — either:
  - a public-platform key (`api.z.ai`, format `id.secret`), **or**
  - the full `.z-ai-config` JSON exported from the Z.ai web-dev environment
    (unlocks server TTS + ASR at full fidelity).
- Your **GitHub repo** (`sanataniscientist24-cloud/sanatan-hi`) — Coolify
  pulls from it on every push.

> The scripture chat (the heart of the app) works **with zero credentials**
> — it runs on the offline engine baked into the browser bundle. The z.ai
> key only powers the server-side voice + LLM Guide routes, and the app
> degrades gracefully without it.

---

## Step 1 — Provision the Hostinger VPS

1. **hPanel → VPS → Create server** (or billing wizard *Other → VPS hosting*).
2. Plan: **KVM 1** minimum (4 GB RAM — Docker + Coolify + the Next build
   appreciate the headroom; 2 GB works but builds are tight).
3. Location: nearest your audience (the Mumbai/Pune DC is great for an
   India-first Sanatan app).
4. OS template: **Ubuntu 24.04 LTS** (plain, no control panel).
5. Finish → copy the **IPv4** and **root password** from the VPS dashboard.

> Tip: in hPanel → VPS → *Settings* → *SSH keys*, add your public key now so
> you can stop using the root password after Step 2.

---

## Step 2 — Point the domain at the VPS

hPanel → **Domains → your domain → DNS / Nameservers → DNS records**:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `YOUR_VPS_IP` | default |
| A | `www` | `YOUR_VPS_IP` | default |

If the domain's nameservers aren't Hostinger's yet, first switch them
(hPanel shows the two NS hostnames). DNS propagates in minutes once NS are
Hostinger's; up to 24 h otherwise.

---

## Step 3 — SSH in and install Coolify

```bash
ssh root@YOUR_VPS_IP

# housekeeping
apt update && apt upgrade -y
apt install -y git curl ufw

# firewall — open SSH + HTTP + HTTPS only
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw --force enable

# install Docker (Coolify needs it)
curl -fsSL https://get.docker.com | sh

# install Coolify itself (one command — it self-registers as a systemd service)
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

The installer:
- pulls the Coolify orchestrator container,
- starts it on port **8000**,
- enables it on boot.

When it finishes, open **`http://YOUR_VPS_IP:8000`** in your browser and
complete the one-time setup (set the admin email + password). That's the
Coolify control panel you'll use from now on.

> If you want `https://coolify.yourdomain.com` for the panel itself, add an
> A record `coolify → VPS_IP` and Coolify's built-in Traefik will issue a
> cert automatically once you set the domain in *Settings*.

---

## Step 4 — Connect Coolify to your GitHub repo

In the Coolify UI:

1. **Settings → Sources → GitHub → Connect.** Authorize the Coolify OAuth
   app (or paste a Personal Access Token with `repo` scope).
2. Pick the `sanataniscientist24-cloud/sanatan-hi` repository.
3. Back in the Coolify dashboard → **New Resource → Dockerfile-based** (or
   "Docker Compose" — both work; Coolify auto-detects `Dockerfile`).
4. Select the GitHub source + repo, branch `main`.

Coolify reads the `Dockerfile`, builds the multi-stage image, and stands up
the container.

---

## Step 5 — Configure the runtime environment

In the Coolify resource → **Environment Variables**, add **one** of these
two credential sets (plus the runtime ones):

### Option A — public z.ai open-platform key (simplest)

| Variable | Value |
|---|---|
| `ZAI_API_KEY` | `your-active-zai-api-key` |
| `ZAI_BASE_URL` | `https://api.z.ai/api/paas/v4` (default; omit for this value) |

The entrypoint builds `{"baseUrl":"https://api.z.ai/api/paas/v4","apiKey":"..."}`.

> ⚠️ The public platform's audio endpoints use different paths than the
> SDK's internal ones, so server TTS/ASR may 404 with a bare public key.
> Scripture chat + the LLM Guide still work. For full voice fidelity use
> Option B.

### Option B — full Z.ai web-dev environment config (full features)

| Variable | Value |
|---|---|
| `ZAI_CONFIG_JSON` | the entire JSON object you exported from the Z.ai environment, e.g. `{"baseUrl":"...","apiKey":"...","token":"...","chatId":"...","userId":"..."}` |

The entrypoint writes it verbatim to `.z-ai-config` (mode 600). This unlocks
100 % of the SDK's audio paths — recommended for the Babaji narration voice.

### Runtime variables (set these regardless)

| Variable | Value | Notes |
|---|---|---|
| `NODE_ENV` | `production` | |
| `PORT` | `3000` | matches the Dockerfile `EXPOSE` |
| `DATABASE_URL` | `file:/app/db/custom.db` | on the persistent volume |

### Persistent storage (so SQLite survives rebuilds)

Coolify resource → **Persistent Storages** → add:

| Mount path | Purpose |
|---|---|
| `/app/db` | SQLite database (future-proof; the app is stateless today but this keeps the door open) |
| `/home/app` | persists a hand-edited `.z-ai-config` across rebuilds (optional — the entrypoint regenerates it from env vars if absent) |

---

## Step 6 — Bind the domain + auto-HTTPS

Coolify resource → **Domains** → add:

```
sanatanhi.com
www.sanatanhi.com
```

Coolify's Traefik issues Let's Encrypt certificates automatically on the
first deploy and renews them. No `certbot` step needed.

> If you already use `www.sanatanhi.com` for the GitHub Pages static site
> (the `public/CNAME`), decide which one wins:
> - **Coolify (recommended for full features)** — repoint the apex + www A
>   records to the VPS and remove the `public/CNAME` file (or leave it; it
>   only affects the Pages build, not the Docker image).
> - **Pages (static, free, zero-ops)** — keep the current setup; the app
>   works but without server voice/LLM routes.

---

## Step 7 — Health check + deploy

Coolify resource → **Health Check**:

| Field | Value |
|---|---|
| Path | `/api/health` |
| Port | `3000` |
| Scheme | `http` |
| Interval | `30s` |

This matches the Dockerfile `HEALTHCHECK` and the `GET /api/health` route
added in this change-set (returns `{"ok":true,"service":"sanatan-hi",...}`).

Hit **Deploy**. Coolify:
1. pulls the latest `main` from GitHub,
2. builds the image (`bun install` → `next build` → standalone),
3. starts the new container,
4. waits for the health check to go green,
5. swaps Traefik's routing to the new container (zero-downtime),
6. marks the deploy successful.

Watch the build log in the Coolify UI. First build ~3-5 min (cache cold);
subsequent builds ~1 min (layers cached).

---

## Step 8 — Enable auto-deploy (24×7 git-push workflow)

Coolify resource → **Settings** → toggle **Auto-deploy on push**.

From now on, every `git push origin main` triggers a fresh build + deploy.
Coolify keeps the previous image around so a one-click **Rollback** is
always available if a deploy misbehaves.

---

## Step 9 — Verify the golden path

Open **`https://sanatanhi.com`**:

- ✅ Home renders — SANATANI BABAJI, mantra ticker, all 9 sections.
- ✅ Ask a scripture question → trilingual answer with cited verses
  (offline engine — works even without the z.ai key).
- ✅ Language switch हिंदी / English / संस्कृत / Español.
- ✅ Bookshelf → open a volume → "Ask Babaji" jumps to chat with a question.
- ✅ Bank → browse 56 questions with reveal-answers, or take the quiz.
- ✅ 🔊 Listen → Babaji narrates (server TTS if z.ai key is full-config;
  browser voice ladder otherwise).
- ✅ 🎙 Mic → speak → text appears (needs `ZAI_CONFIG_JSON` full config).

Server-side sanity checks:

```bash
# liveness
curl -s https://sanatanhi.com/api/health
#  → {"ok":true,"service":"sanatan-hi","time":"...","uptime":...}

# scripture chat (offline engine)
curl -s -X POST https://sanatanhi.com/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"message":"What is karma?","language":"en"}' | head -c 200

# server TTS (needs valid z.ai config)
curl -s -o /tmp/t.wav -w "%{content_type}\n" \
  -X POST https://sanatanhi.com/api/tts \
  -H 'Content-Type: application/json' -d '{"text":"Om Shanti"}'
#  → audio/wav   (with full config)  |  → 503 "voice unavailable"  (without)
```

---

## Step 10 — 24×7 operations checklist

| Concern | How it's handled |
|---|---|
| **Crash recovery** | `restart: unless-stopped` in compose + Coolify's own restart policy. Container auto-resumes. |
| **Reboot survival** | Coolify + Docker are systemd-enabled at install time; containers come back after a VPS reboot. |
| **Zero-downtime deploys** | Coolify starts the new container, waits for `/api/health` green, then swaps Traefik routing. |
| **Rollbacks** | Coolify keeps the last N images — one click in the UI. |
| **TLS renewal** | Traefik auto-renews Let's Encrypt certs ~30 days before expiry. |
| **Disk / memory** | hPanel → VPS → *Metrics*; Coolify → *Resources* shows per-container CPU/RAM. |
| **Log streaming** | Coolify → resource → *Logs* (real-time stdout/stderr). |
| **Backups** | hPanel → VPS → *Backups* (weekly snapshots); Coolify → *Settings* → database/volume backups. |
| **Monitoring** | Coolify's health check pings `/api/health` every 30 s; on failure it marks the resource unhealthy and (optionally) emails you. |

### Scaling notes

- A single KVM 1 (1 vCPU / 4 GB) comfortably handles ~200 concurrent users
  of this app — it's mostly static assets + the offline retrieval engine.
- The z.ai routes are the only synchronous server work; they're rate-limited
  by z.ai itself, not your VPS.
- To scale horizontally: spin a second Coolify-managed replica behind
  Traefik's load-balancer (Coolify Pro supports multi-server).

---

## Troubleshooting

| Symptom | Cause & fix |
|---|---|
| Build fails `oven/bun:1.3-debian not found` | Bun image tag drifted — pin to `oven/bun:1` or the latest tag in `Dockerfile` (both stages). |
| Build OOMs on `next build` | VPS too small (2 GB). Either upgrade to KVM 1 4 GB, or build locally and push the image to a registry, then deploy the prebuilt image in Coolify. |
| Container healthy but `/api/tts` returns 503 | z.ai credentials not wired — check Coolify env vars (`ZAI_API_KEY` or `ZAI_CONFIG_JSON`), redeploy. The entrypoint logs `[entrypoint] wrote /app/.z-ai-config from …` on success. |
| `502 Bad Gateway` at the domain | Coolify still building, or health check not yet green. Wait ~30 s; check resource status in the UI. |
| Domain doesn't load | DNS A record not propagated — `dig +short sanatanhi.com` must print the VPS IP. |
| Mic button errors "Transcription failed" | Needs `ZAI_CONFIG_JSON` (full Z.ai environment config), not just a public-platform key. The public platform's ASR path differs from the SDK's internal one. |
| `EADDRINUSE :3000` | Another container on 3000 — Coolify isolates networks so this shouldn't happen; if it does, change the host port in the resource's *Ports*. |
| Container restarts in a loop | Check `docker logs sanatan-hi` via Coolify → *Logs*; the entrypoint prints its config steps. Most common: `.z-ai-config` directory mounted as a file by mistake. |

---

## Quick reference — full bootstrap

```bash
# 1. on your laptop: nothing to do, the repo already has the Dockerfile etc.

# 2. on the VPS:
ssh root@YOUR_VPS_IP
apt update && apt upgrade -y && apt install -y git curl ufw
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw --force enable
curl -fsSL https://get.docker.com | bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash

# 3. in the Coolify UI (http://VPS_IP:8000):
#    - admin setup
#    - Settings → Sources → connect GitHub → pick sanataniscientist24-cloud/sanatan-hi
#    - New Resource → Dockerfile → branch main
#    - Environment Variables → ZAI_API_KEY=... (or ZAI_CONFIG_JSON=...)
#    - Persistent Storages → /app/db
#    - Domains → sanatanhi.com, www.sanatanhi.com
#    - Health Check → /api/health :3000 http 30s
#    - Deploy
#    - Settings → Auto-deploy on push ✓
```

After that, **every `git push origin main` rebuilds and redeploys
automatically**, with zero downtime, HTTPS, health checks and rollbacks —
fully 24×7.
