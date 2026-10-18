<div align="center">

# ॐ SANATAN HI <sub>[ HUMAN INTELLIGENCE ]</sub>

### A fully offline AI corpus of Sanatan Dharma — Sanskrit · हिंदी · English · Español

**Bhagavad Gita · Valmiki Ramayana · Mahabharata · Bhagavata & Shiva Purana · The Four Vedas · Upanishads · Hanuman Chalisa · and more**

[![Deploy to GitHub Pages](https://github.com/sanataniscientist24-cloud/sanatan-hi/actions/workflows/deploy.yml/badge.svg)](https://github.com/sanataniscientist24-cloud/sanatan-hi/actions/workflows/deploy.yml)
![100% Offline](https://img.shields.io/badge/100%25-offline-maroon)
![Languages](https://img.shields.io/badge/languages-Sanskrit%20·%20हिंदी%20·%20English%20·%20Español-gold)
![License: MIT](https://img.shields.io/badge/license-MIT-blueviolet)

॥ धर्मो रक्षति रक्षितः ॥

</div>

---

## ✨ What is this?

**SANATAN HI [ HUMAN INTELLIGENCE ]** is a chat-style companion that answers questions about Hindu scriptures **completely offline** — no internet, no external AI APIs, no telemetry. Every verse and story in the corpus is stored natively in **three languages** (Sanskrit, Hindi, English), and the retrieval engine runs entirely on your device (server or browser).

Ask things like:

| You ask | It answers from |
|---|---|
| `गीता 2.47 का अर्थ` | Bhagavad Gita, Adhyaya 2, Shloka 47 — Sanskrit + Hindi + English |
| `What is Karma Yoga?` | Curated shlokas across Gita, Upanishads, concepts |
| `हनुमान चालीसा सुनाओ` | Full Hanuman Chalisa text |
| `12 ज्योतिर्लिंग` | Jyotirlinga Stotra from Shiva Purana |
| `What happens after death?` | Gita 2.13/2.20, Katha Upanishad, Garuda Purana concepts |
| `रामायण के बारे में बताओ` | Book overview — all 7 kandas |

## 📚 The Corpus

| Collection | Contents |
|---|---|
| **श्रीमद्भगवद्गीता** | Key shlokas across all 18 adhyayas with translations |
| **वाल्मीकि रामायण** | 7 kandas — shlokas, katha summaries, Rama Rajya |
| **महाभारत** | 18 parvas — invocation, Yaksha Prashna, Vidura Niti, stories |
| **भागवत पुराण** | 12 skandhas — avatars, Prahlada, Gajendra Moksha, Dhruva |
| **शिव पुराण** | 7 samhitas — jyotirlinga stotra, Samudra Manthan, Rudra |
| **विष्णु पुराण** | 6 amshas — Vishnu Sahasranama opening, concepts |
| **चारों वेद** | Rig (Gayatri, Purusha, Nasadiya), Yajur, Sama, Atharva |
| **उपनिषद्** | 10 principal Upanishads + mahavakyas |
| **स्तोत्र एवं मंत्र** | Hanuman Chalisa, Maha Mrityunjaya, aartis, mahamantra |
| **धर्म-संकल्पनाएँ** | 32 concepts — karma, atman, moksha, death, fear, students |

## 🧠 How the "offline AI" works

No cloud LLM — a local retrieval engine:

1. **Language detection** — Devanagari (Sanskrit/Hindi) vs Latin, auto or forced mode
2. **Transliteration + diacritic folding** — Sanskrit↔roman, so `शिवः`, `shivah`, `shiv` all match
3. **Field-weighted BM25-style ranking** over the corpus with Sanskrit/Hindi inflection stemming
4. **Intent routing** — greetings, verse lookup (`Gita 2.47`), chapter summaries, book intros, topics, stotras, daily verse
5. **Trilingual response composer** — answers in the language you asked in

The engine is pure TypeScript. On Node it runs in API routes; on GitHub Pages it runs **directly in your browser** — the whole corpus ships with the page, so the deployed site is still 100% offline.

### 🎙️ Voice input (microphone)

The chat input has a **mic button** — speak your question instead of typing:

1. The browser records your microphone via the Web Audio API and encodes a compact **16 kHz mono WAV** entirely client-side (~32 KB per second of speech)
2. The audio is POSTed to `/api/transcribe`, where a server-side ASR model (z-ai SDK) transcribes it
3. The transcribed text lands in the input box for review, then send as usual

The mic shows a live equalizer + timer while recording (tap again to transcribe, `Esc` to cancel, auto-stops at 60 s). Voice input needs the Node backend (`bun run dev` or any full-stack host) — on the static GitHub Pages build the button politely reports it's unavailable.

## 🚀 Quick start (local)

```bash
git clone https://github.com/sanataniscientist24-cloud/sanatan-hi.git
cd sanatan-hi
bun install
bun run dev        # → http://localhost:3000
```

> Node also works: `npm install && npm run dev` (Bun is recommended — this repo ships `bun.lock`.)

## 🌐 Deployment

### GitHub Pages (automatic)

This repo includes `.github/workflows/deploy.yml`. Just push to `main` and the workflow builds the static site and publishes it to GitHub Pages.

One-time setup on a fresh account: **Settings → Pages → Build and deployment → Source → “GitHub Actions”**.

Live URL: `https://www.sanatanhi.com/` (custom domain via `public/CNAME` + GoDaddy DNS)

### Vercel / Netlify / any Node host

Import the repo, set framework **Next.js**, and deploy — the API routes will serve the engine server-side.

### Build a static copy manually

```bash
rm -rf src/app/api                       # server routes are not exported
NEXT_OUTPUT=export NEXT_BASE_PATH=/sanatan-hi bunx next build
# → static site in ./out
```

## 🗂️ Project structure

```
src/
├── app/                    # Next.js App Router — single-page chat UI
│   ├── page.tsx            # the whole app (user-visible route: /)
│   └── api/                # offline engine API routes (dev / Node deploy)
├── components/
│   ├── sanatan/            # hero, chat, verse cards, book browser
│   └── ui/                 # shadcn/ui primitives
└── lib/
    ├── ai/                 # offline engine + transliteration (pure TS)
    ├── corpus/             # the scripture corpus (trilingual entries)
    └── client/ask.ts       # API-first → browser-engine fallback
```

## 🛠️ Tech stack

Next.js 16 (App Router) · TypeScript 5 · Tailwind CSS 4 · shadcn/ui · Framer Motion · lucide-react · Bun

## 📄 License

[MIT](./LICENSE) — free to use, share and extend. The shlokas themselves are humanity's heritage.

<div align="center">

**॥ ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ॥**

*If this corpus blesses you, star the repo and pass it on.* 🙏

</div>
