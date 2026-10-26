# SANATAN HI — Hostinger Deployment Guide

Deploy **SANATAN HI** to Hostinger and connect your **active z.ai API key**.

There are two ways to host this app on Hostinger — pick ONE:

| | **Path A — Hostinger VPS** ✅ recommended | **Path B — Shared hosting (static)** |
|---|---|---|
| What you need | VPS plan (KVM 1 or higher) | Premium/Business web hosting |
| Full app incl. server voice | ✅ yes | ⚠️ partially (see notes) |
| z.ai API key used | ✅ yes (TTS + voice input) | ❌ not used |
| Ask / scripture chat | ✅ works | ✅ works (offline engine in browser) |
| 🎙 Voice input (mic) | ✅ works | ❌ unavailable |
| Babaji narration voice | ✅ browser voices + server TTS fallback | ⚠️ browser voices only |
| Cost efficiency | best for full features | cheapest, zero config |

> **Why the app still answers questions on a static host:** the scripture
> corpus + retrieval engine ships *inside the browser bundle*
> (`src/lib/client/ask.ts` → `src/lib/ai/engine.ts`). No backend needed.
> The z.ai key only powers the **server-side voice services**.

---

## Where your z.ai key plugs in (IMPORTANT)

The backend uses `z-ai-web-dev-sdk` in server-only API routes:

| Route | Feature |
|---|---|
| `POST /api/tts` | SANATANI BABAJI deep server narration voice |
| `POST /api/transcribe` | 🎙 mic voice → text (ASR) |

**The SDK does not read `ZAI_API_KEY` environment variables.**
It reads a JSON file named **`.z-ai-config`**, searched in this order:

```
1. <dir where the server runs>/.z-ai-config   ← PM2 runs from project root ✔
2. ~/.z-ai-config                             ← always found, any cwd ✔
3. /etc/.z-ai-config
```

Minimum required content (only these two fields are mandatory):

```json
{
  "baseUrl": "https://api.z.ai/api/paas/v4",
  "apiKey": "YOUR_ACTIVE_ZAI_API_KEY"
}
```

Optional extra fields (copy them **if you have a full config from the
Z.ai web-dev environment** — they unlock the sandbox audio services):

```json
{
  "baseUrl": "…",
  "apiKey": "…",
  "chatId": "…",
  "userId": "…",
  "token": "…"
}
```

The helper script `npm run zai:config` (→ `scripts/zai-config.mjs`)
generates this file for you from env vars and `chmod 600`s it.

> **Key types — honest compatibility notes**
>
> * **Full `.z-ai-config` exported from the Z.ai web-dev environment**
>   (contains `baseUrl` + `token` + `chatId`…): 100 % of features work.
>   Copy it to the server as-is. **Best option.**
>
> * **Public z.ai open-platform key** (`api.z.ai` / `open.bigmodel.cn`,
>   format like `id.secret`): set `ZAI_BASE_URL` per below. The
>   chat-completions endpoint is OpenAI-compatible with this SDK. The public
>   platform's *audio* endpoints, however, use different paths
>   (`/audio/speech`, `/audio/transcriptions`) than the SDK's internal ones
>   (`/audio/tts`, `/audio/asr`) — so server TTS/ASR may return 404/401.
>   The app **degrades gracefully**: Babaji narration falls back to the
>   browser's built-in deep Hindi voice ladder (see `src/lib/client/speak.ts`),
>   and scripture chat keeps working (it never needed the key).

| Base URL | When to use |
|---|---|
| `https://api.z.ai/api/paas/v4` | default (international z.ai platform) |
| `https://open.bigmodel.cn/api/paas/v4` | China mainland (BigModel/Zhipu) |
| *(from your exported config)* | Z.ai web-dev environment — full features |

---

# PATH A — Hostinger VPS (full features)

### Step 1 — Create the VPS

1. **hPanel → VPS → Create server** (or the billing wizard: *Other → VPS hosting*).
2. Choose a plan — **KVM 1** (1 vCPU / 2 GB) is enough for this app.
3. Location: pick the one nearest your users (India available).
4. OS template: **Ubuntu 24.04** (plain, no panel needed).
5. Finish → note the **IPv4 address** and **root password** from the VPS panel.

### Step 2 — Point your domain to the VPS

1. **hPanel → Domains → your domain → DNS / Nameservers → DNS records**.
2. Add/verify records:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `YOUR_VPS_IP` | default |
| A | `www` | `YOUR_VPS_IP` | default |

3. If the domain's nameservers are already Hostinger's, DNS updates in
   minutes; otherwise first point the NS to Hostinger (hPanel shows them).

### Step 3 — SSH in and install the runtime

```bash
ssh root@YOUR_VPS_IP

apt update && apt upgrade -y

# Node.js 20 LTS (required by Next.js 16)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs git nginx

# PM2 keeps the app alive + auto-restarts
npm i -g pm2
```

### Step 4 — Get the code onto the server

```bash
mkdir -p /var/www
git clone https://github.com/YOU/SANATAN-HI.git /var/www/sanatan
cd /var/www/sanatan
```

*(Alternatively: zip your local project — exclude `node_modules`, `.next`,
`.env`, `.z-ai-config` — upload via hPanel File Manager to `/var/www/sanatan`
and `apt install unzip && unzip project.zip`.)*

### Step 5 — Install dependencies & build

```bash
cd /var/www/sanatan
npm install
npm run build
```

`npm run build` produces a **self-contained server** at `.next/standalone/`
(already includes `.next/static` + `public/` — the build script copies them).
No database setup is needed — this app uses no DB.

### Step 6 — Connect your active z.ai API key ⭐

**Option 1 — script (recommended)**

```bash
cd /var/www/sanatan

# public z.ai open-platform key:
ZAI_API_KEY="paste-your-active-zai-api-key" npm run zai:config

# …or with an explicit endpoint (China mainland / custom):
ZAI_API_KEY="your-key" \
ZAI_BASE_URL="https://open.bigmodel.cn/api/paas/v4" \
npm run zai:config
```

The script writes **both** `<project>/.z-ai-config` and `~/.z-ai-config`
(mode `600`) so the server finds it from any working directory.

**Option 2 — full config exported from the Z.ai environment**

```bash
nano /var/www/sanatan/.z-ai-config
```

Paste your exported config (baseUrl, apiKey, chatId, userId, token), save,
then:

```bash
chmod 600 /var/www/sanatan/.z-ai-config
```

**Verify** the file is valid JSON:

```bash
cat /var/www/sanatan/.z-ai-config
python3 -m json.tool /var/www/sanatan/.z-ai-config
```

### Step 7 — Run the app with PM2

```bash
cd /var/www/sanatan

PORT=3000 pm2 start node --name sanatan-hi -- .next/standalone/server.js
pm2 save
pm2 startup        # follow the printed one-liner → auto-start on reboot

pm2 logs sanatan-hi --lines 20
# expect: "✓ Ready in ...ms"
```

> If you prefer Bun (`npm run start` uses it): `curl -fsSL https://bun.sh/install | bash`
> then `pm2 start "bun .next/standalone/server.js" --name sanatan-hi`.
> Plain `node` (above) is fine and lighter to maintain on a VPS.

### Step 8 — Nginx reverse proxy + free HTTPS

```bash
nano /etc/nginx/sites-available/sanatan-hi
```

Paste (replace `yourdomain.com`):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    client_max_body_size 10M;   # voice uploads (base64 audio)

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable, test, reload, then add the SSL certificate:

```bash
ln -s /etc/nginx/sites-available/sanatan-hi /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com -d www.yourdomain.com
# certbot auto-renews via systemd timer — nothing more to do
```

*(Optional but recommended — firewall: only 22/80/443 open)*

```bash
ufw allow OpenSSH && ufw allow 80 && ufw allow 443
ufw --force enable
```

### Step 9 — Verify the golden path

Open **https://yourdomain.com**:

- ✅ Home renders: Babaji, mantra ticker, all sections.
- ✅ Ask a question (e.g. *"What is karma?"*) → scripture answer with verses.
- ✅ Language switch हिंदी / English / संस्कृत works.
- ✅ 🔊 Listen → Babaji speaks (browser voice ladder; server voice on
  devices with no local voices).
- ✅ 🎙 Mic button → speak → your words appear in the input
  (this is the z.ai-key-powered ASR — if it errors, re-check Step 6 then
  `pm2 restart sanatan-hi`).

Quick server-side check of the TTS route (should print `audio/wav`):

```bash
curl -s -o /tmp/t.wav -w "%{content_type}\n" \
  -X POST https://yourdomain.com/api/tts \
  -H 'Content-Type: application/json' -d '{"text":"Om Shanti"}'
```

---

# PATH B — Shared web hosting (static, no key needed)

Use this only if you don't have a VPS. Server routes can't run here, so the
z.ai key is not used at all; scripture chat still works fully offline in the
visitor's browser.

```bash
# on your local machine, inside the project:
rm -rf src/app/api                       # server routes can't ship statically
NEXT_OUTPUT=export npx next build        # → creates out/
```

Upload **the contents of `out/`** to `public_html/`:

- hPanel → **Files → File Manager** → open `domains/yourdomain.com/public_html`
  → Upload (or use FileZilla / the FTP details from hPanel → Files → FTP Accounts).

That's it — https://yourdomain.com serves the static app.

> **Free alternative:** this repo already ships a GitHub Pages workflow
> (`.github/workflows/deploy.yml`) that automates the same static export —
> host for free at `https://YOU.github.io/<repo>/` or a custom domain.

---

## Troubleshooting

| Symptom | Cause & fix |
|---|---|
| `502 Bad Gateway` | App not running → `pm2 logs sanatan-hi`; check `PORT=3000` matches nginx `proxy_pass` |
| Site loads, mic input errors "Transcription failed" | `.z-ai-config` missing/invalid → redo Step 6, then `pm2 restart sanatan-hi` |
| Server TTS returns 404/401 with a public platform key | Public z.ai audio endpoints differ from the SDK's internal paths — use a full Z.ai environment config for server voice; browser voices still work |
| `EADDRINUSE :3000` | Another service on 3000 → `lsof -i :3000`, or change `PORT` + nginx `proxy_pass` together |
| Domain doesn't load | DNS A record not propagated → `dig +short yourdomain.com` should print the VPS IP |
| Key in git — remove it | `.z-ai-config` is git-ignored; if it ever got committed: rotate the key in your z.ai dashboard, `git rm --cached .z-ai-config`, commit |

## Security checklist

- `.z-ai-config` → `chmod 600`, never committed (already in `.gitignore`).
- The key lives **only on the server** — the SDK is imported exclusively in
  server-side API routes, never in the client bundle.
- HTTPS via certbot (Step 8) — mic input (getUserMedia) requires HTTPS.
- Keep `root` login for setup only; add a sudo user for daily work when ready.

---

## Quick reference — one-command recap

```bash
ssh root@YOUR_VPS_IP
apt update && apt upgrade -y \
  && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt install -y nodejs git nginx \
  && npm i -g pm2
git clone https://github.com/YOU/SANATAN-HI.git /var/www/sanatan
cd /var/www/sanatan && npm install && npm run build
ZAI_API_KEY="your-active-zai-api-key" npm run zai:config
PORT=3000 pm2 start node --name sanatan-hi -- .next/standalone/server.js \
  && pm2 save && pm2 startup
# …then nginx + certbot as in Step 8
```
