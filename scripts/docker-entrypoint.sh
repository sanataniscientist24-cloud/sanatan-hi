#!/usr/bin/env sh
# ─────────────────────────────────────────────────────────────────────────────
# SANATAN HI — Docker entrypoint
#
# Materializes the z.ai credentials file (.z-ai-config) from environment
# variables before exec'ing the Next.js standalone server. Coolify injects
# config as env vars; the z-ai-web-dev-sdk reads a JSON *file*, so this
# bridge is required.
#
# Precedence (first non-empty wins):
#   1. ZAI_CONFIG_JSON   — a full exported config object (baseUrl+apiKey+token…)
#   2. ZAI_API_KEY       — a bare key; baseUrl defaults to ZAI_BASE_URL or the
#                          public z.ai open-platform endpoint.
#   3. an already-mounted /app/.z-ai-config (persistent volume / secret)
#
# If none are present the app still starts — scripture chat (the offline
# engine) works fully; only /api/tts, /api/transcribe, /api/voice and
# /api/consult (the LLM Guide) will return a clear "voice unavailable"
# error until credentials are added.
# ─────────────────────────────────────────────────────────────────────────────
set -e

APP_DIR="${APP_DIR:-/app}"
CONFIG_PATH="${ZAI_CONFIG_PATH:-$APP_DIR/.z-ai-config}"
DB_DIR="${DB_DIR:-$APP_DIR/db}"

# 0 ─ ensure the SQLite directory exists (persistent volume mount point)
mkdir -p "$DB_DIR"

# 1 ─ write .z-ai-config only if a credential source is present AND no file
#    is already mounted there (mounted secrets win over env, so operators can
#    rotate via the volume without changing env vars).
if [ -f "$CONFIG_PATH" ]; then
  echo "[entrypoint] using mounted $CONFIG_PATH"
else
  if [ -n "$ZAI_CONFIG_JSON" ]; then
    printf '%s' "$ZAI_CONFIG_JSON" > "$CONFIG_PATH"
    echo "[entrypoint] wrote $CONFIG_PATH from ZAI_CONFIG_JSON"
  elif [ -n "$ZAI_API_KEY" ]; then
    BASE_URL="${ZAI_BASE_URL:-https://api.z.ai/api/paas/v4}"
    # build minimal JSON; use printf to avoid jq dependency
    printf '{"baseUrl":"%s","apiKey":"%s"}' "$BASE_URL" "$ZAI_API_KEY" > "$CONFIG_PATH"
    echo "[entrypoint] wrote $CONFIG_PATH from ZAI_API_KEY (baseUrl=$BASE_URL)"
  else
    echo "[entrypoint] no z.ai credential provided — voice/LLM routes disabled, scripture chat still works"
  fi
fi

# always lock the file down if we own it
chmod 600 "$CONFIG_PATH" 2>/dev/null || true

# 2 ─ mirror to ~/.z-ai-config so the SDK finds it from any cwd
HOME_DIR="${HOME:-/home/app}"
if [ "$CONFIG_PATH" != "$HOME_DIR/.z-ai-config" ] && [ -f "$CONFIG_PATH" ]; then
  mkdir -p "$HOME_DIR"
  cp "$CONFIG_PATH" "$HOME_DIR/.z-ai-config"
  chmod 600 "$HOME_DIR/.z-ai-config"
fi

# 3 ─ honor a explicit PORT (Coolify sets this); default 3000
export PORT="${PORT:-3000}"
export HOSTNAME="${HOSTNAME:-0.0.0.0}"

echo "[entrypoint] starting SANATAN HI on 0.0.0.0:${PORT}"

# 4 ─ hand off to the server (bun server.js / node server.js — set via CMD)
exec "$@"
