"use client";

/**
 * SANATAN HI — Voice Assistant.
 *
 * Opens from the ॐ sigil / "SANATAN HI" masthead (and the header brand).
 * Ask by voice (SpeechRecognition) or by typing; the corpus engine answers
 * and the reply is spoken aloud with an Indian-accent voice (en-IN / hi-IN).
 * Fully browser-native: works on the static GitHub-Pages deployment.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Keyboard, Languages, Mic, MicOff, Settings2, Sparkles, Square, Volume2, VolumeX, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { OmSigil } from "@/components/sanatan/book-icons";
import { renderMarkdown } from "@/components/sanatan/markdown";
import { askSanatan, type AskLang } from "@/lib/client/ask";
import {
  detectSpeechLang,
  listen,
  pickVoice,
  SPEECH_LANG_LABEL,
  speak,
  sttLocaleFor,
  sttSupported,
  stopSpeaking,
  subscribeVoices,
  ttsSupported,
  voicesForLang,
  type RecognizerHandle,
  type SpeechLang,
} from "@/lib/client/speech";

/* ────────────────────────────── localized UI ────────────────────────────── */

type UiLang = "en" | "hi" | "sa" | "es";

const STRINGS = {
  title: { en: "Voice Assistant", hi: "वॉइस असिस्टेंट", sa: "वाच् असिस्टेंट्", es: "Asistente de Voz" },
  subtitle: { en: "Ask anything about Sanatan Dharma", hi: "सनातन धर्म के बारे में कुछ भी पूछें", sa: "सनातनधर्मविषये किमपि पृच्छतु", es: "Pregunta sobre el Dharma" },
  listenHint: { en: "Tap the mic and speak", hi: "माइक दबाकर बोलें", sa: "माइकं दबाय वदतु", es: "Toca el micro y habla" },
  listening: { en: "Listening…", hi: "सुन रहा हूँ…", sa: "शृण्वानः…", es: "Escuchando…" },
  thinking: { en: "Searching the scriptures…", hi: "ग्रंथों में खोज रहा हूँ…", sa: "ग्रन्थेषु अन्विष्यति…", es: "Buscando en las escrituras…" },
  speaking: { en: "Speaking the answer…", hi: "उत्तर बोल रहा हूँ…", sa: "उत्तरं वदति…", es: "Leyendo la respuesta…" },
  notHeard: { en: "I didn't catch that — please try again", hi: "समझ नहीं आया — कृपया दोबारा बोलें", sa: "न अवगतम् — पुनः वदतु", es: "No lo entendí — inténtalo de nuevo" },
  micDenied: { en: "Microphone blocked — allow it in the browser, or type instead", hi: "माइक ब्लॉक है — ब्राउज़र में अनुमति दें या टाइप करें", sa: "माइक् निषिद्धः — अनुमतिं ददातु वा लिखतु", es: "Micrófono bloqueado — permítelo o escribe" },
  micUnavailable: { en: "Voice input isn't supported here — type your question below", hi: "यहाँ वॉइस इनपुट उपलब्ध नहीं — नीचे लिखें", sa: "अत्र वाणी सम्भवा न — अधः लिखतु", es: "Voz no disponible aquí — escribe tu pregunta" },
  typePlaceholder: { en: "Type your question…", hi: "अपना प्रश्न लिखें…", sa: "प्रश्नं लिखतु…", es: "Escribe tu pregunta…" },
  stop: { en: "Stop", hi: "रोकें", sa: "स्थम्भयतु", es: "Detener" },
  close: { en: "Close voice assistant", hi: "वॉइस असिस्टेंट बंद करें", sa: "वाच् असिस्टेंट् पिधत्स्व", es: "Cerrar asistente" },
  autoSpeak: { en: "Speak answers", hi: "उत्तर बोलें", sa: "उत्तरं वदतु", es: "Leer respuestas" },
  voice: { en: "Voice", hi: "आवाज़", sa: "स्वरः", es: "Voz" },
  suggestions: { en: "Try asking", hi: "पूछकर देखें", sa: "पृच्छत्व", es: "Prueba con" },
  ask: { en: "Ask", hi: "पूछें", sa: "पृच्छ", es: "Preguntar" },
  greeting: {
    en: "Namaste! I am SANATAN HI. Tap the mic and ask me anything — the Gita, the Ramayana, the Vedas.",
    hi: "नमस्ते! मैं सनातन हाय हूँ। माइक दबाकर पूछें — गीता, रामायण, वेद, कुछ भी।",
    sa: "नमस्ते। अहं सनातन हाय। माइकं दबाय विचारयतु — गीता, रामायण, वेदाः।",
    es: "¡Namaste! Soy SANATAN HI. Toca el micrófono y pregúntame: la Gita, el Ramayana, los Vedas.",
  },
} as const;

const SUGGESTIONS: Record<UiLang, string[]> = {
  en: ["What is karma?", "Gita 2.47", "Tell me about Shiva", "Verse of the day"],
  hi: ["कर्म क्या है?", "गीता २.४७", "शिव के बारे में बताएं", "आज का श्लोक"],
  sa: ["कर्म किम्?", "गीता २.४७", "शिवः कथं?", "आज का श्लोक"],
  es: ["¿Qué es el karma?", "Gita 2.47", "Háblame de Shiva", "Versículo del día"],
};

function uiLang(mode: string): UiLang {
  if (mode === "hi" || mode === "sa" || mode === "es") return mode;
  return "en";
}

/* ─────────────────────────────── component ─────────────────────────────── */

interface VoiceTurn {
  id: string;
  question: string;
  answer: string;
}

interface VoiceAssistantProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  langMode: string;
}

const PREFS_KEY = "sanatan-hi-voice-prefs-v1";

interface VoicePrefs {
  autoSpeak: boolean;
  rate: number;
  voiceURI: string;
}

function loadPrefs(): VoicePrefs {
  if (typeof window === "undefined") return { autoSpeak: true, rate: 1, voiceURI: "" };
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<VoicePrefs>;
      return {
        autoSpeak: typeof p.autoSpeak === "boolean" ? p.autoSpeak : true,
        rate: typeof p.rate === "number" ? p.rate : 1,
        voiceURI: typeof p.voiceURI === "string" ? p.voiceURI : "",
      };
    }
  } catch {
    /* ignore */
  }
  return { autoSpeak: true, rate: 1, voiceURI: "" };
}

export function VoiceAssistant({ open, onOpenChange, langMode }: VoiceAssistantProps) {
  const [turns, setTurns] = useState<VoiceTurn[]>([]);
  const [phase, setPhase] = useState<"idle" | "listening" | "thinking" | "speaking">("idle");
  const [interim, setInterim] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const [typingMode, setTypingMode] = useState(false);
  const [typed, setTyped] = useState("");

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [initialPrefs] = useState<VoicePrefs>(loadPrefs);
  const [voiceURI, setVoiceURI] = useState<string>(initialPrefs.voiceURI);
  const [autoSpeak, setAutoSpeak] = useState<boolean>(initialPrefs.autoSpeak);
  const [rate, setRate] = useState<number>(initialPrefs.rate);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const recognizerRef = useRef<RecognizerHandle | null>(null);
  const cancelSpeakRef = useRef<(() => void) | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const typedInputRef = useRef<HTMLInputElement>(null);
  const [kbLift, setKbLift] = useState(0);

  const sttOk = sttSupported();
  const ttsOk = ttsSupported();
  const lang: UiLang = uiLang(langMode);

  /* load prefs lazily (SSR-safe) + persist on change */
  useEffect(() => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify({ autoSpeak, rate, voiceURI }));
    } catch {
      /* ignore */
    }
  }, [autoSpeak, rate, voiceURI]);

  /* pick the answer language + available voices for the picker */
  const answerLang: SpeechLang = useMemo(
    () => (turns.length ? detectSpeechLang(turns[turns.length - 1].answer, langMode) : langMode === "es" ? "es" : langMode === "hi" || langMode === "sa" ? "hi" : "en"),
    [turns, langMode]
  );

  const langVoices = useMemo(() => voicesForLang(voices, answerLang), [voices, answerLang]);

  useEffect(() => subscribeVoices(setVoices), []);

  const chosenVoice = useMemo(() => {
    if (voiceURI) {
      const v = langVoices.find((x) => x.voiceURI === voiceURI) ?? voices.find((x) => x.voiceURI === voiceURI);
      if (v) return v;
    }
    return pickVoice(voices, answerLang);
  }, [voiceURI, voices, langVoices, answerLang]);

  const stopAll = useCallback(() => {
    recognizerRef.current?.stop();
    recognizerRef.current = null;
    cancelSpeakRef.current?.();
    cancelSpeakRef.current = null;
    stopSpeaking();
    setPhase("idle");
    setInterim("");
  }, []);

  /* reset on close — runs for every close path (X, Esc, overlay) */
  const handleOpenChange = useCallback(
    (o: boolean) => {
      if (!o) {
        stopAll();
        setNotice(null);
        setTypingMode(false);
        setTyped("");
        setSettingsOpen(false);
      }
      onOpenChange(o);
    },
    [onOpenChange, stopAll]
  );

  /* keep the newest answer in view (same pattern as the main chat;
     also re-scrolls when the sheet is reopened with history) */
  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current?.closest("[data-radix-scroll-area-viewport]");
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: "auto" });
      });
    }
  }, [turns, phase, open]);

  /* mobile keyboard: lift the whole sheet so the typing input stays visible
     (iOS Safari overlays the keyboard instead of resizing the page) */
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const recheck = () => {
      const input = typedInputRef.current;
      /* a real keyboard shrinks the visual viewport far below the layout
         viewport; browser toolbars only cause a small difference */
      const keyboardOpen = vv.height < window.innerHeight - 96;
      if (!input || document.activeElement !== input || !keyboardOpen) {
        setKbLift(0);
        return;
      }
      const overlap = input.getBoundingClientRect().bottom - vv.height;
      setKbLift(overlap > 4 ? Math.min(overlap + 16, Math.round(vv.height * 0.45)) : 0);
    };
    vv.addEventListener("resize", recheck);
    vv.addEventListener("scroll", recheck);
    window.addEventListener("focusin", recheck);
    window.addEventListener("focusout", recheck);
    return () => {
      vv.removeEventListener("resize", recheck);
      vv.removeEventListener("scroll", recheck);
      window.removeEventListener("focusin", recheck);
      window.removeEventListener("focusout", recheck);
    };
  }, []);

  /* speak a reply with the Indian-accent voice for its language */
  const speakReply = useCallback(
    (text: string, mode: string) => {
      if (!ttsOk) return;
      const target = detectSpeechLang(text, mode);
      const voice = voiceURI ? voices.find((v) => v.voiceURI === voiceURI) ?? pickVoice(voices, target) : pickVoice(voices, target);
      cancelSpeakRef.current?.();
      setPhase("speaking");
      cancelSpeakRef.current = speak(text, {
        lang: target,
        voice,
        rate,
        onEnd: () => {
          cancelSpeakRef.current = null;
          setPhase("idle");
        },
      });
    },
    [ttsOk, voiceURI, voices, rate]
  );

  /* greeting when the assistant opens (speech needs a user gesture — this is one) */
  useEffect(() => {
    if (!open || !ttsOk || !autoSpeak || turns.length > 0) return;
    const t = window.setTimeout(() => {
      const greet = STRINGS.greeting[lang];
      cancelSpeakRef.current?.();
      setPhase("speaking");
      cancelSpeakRef.current = speak(greet, {
        lang: langMode === "es" ? "es" : langMode === "hi" || langMode === "sa" ? "hi" : "en",
        voice: pickVoice(voices, langMode === "es" ? "es" : langMode === "hi" || langMode === "sa" ? "hi" : "en"),
        rate,
        onEnd: () => {
          cancelSpeakRef.current = null;
          setPhase("idle");
        },
      });
    }, 350);
    return () => {
      window.clearTimeout(t);
      cancelSpeakRef.current?.();
      cancelSpeakRef.current = null;
    };
  }, [open]);

  /* ask the corpus and speak the answer */
  const ask = useCallback(
    async (question: string) => {
      const q = question.trim();
      if (!q) return;
      setNotice(null);
      setInterim("");
      setPhase("thinking");
      try {
        const data = await askSanatan(q, langMode as AskLang);
        /* structured verse cards travel separately — fold them into the
           spoken/displayed answer so "verse of the day" etc. carry the shloka */
        let answer = data.reply;
        const verses = (data.verses ?? []).slice(0, 2);
        for (const v of verses) {
          const parts = [v.sanskrit, v.translit, langMode === "es" ? v.spanish : langMode === "hi" || langMode === "sa" ? v.hindi : v.english]
            .filter((x): x is string => Boolean(x));
          if (parts.length) answer += `\n\n${parts.join("\n")}`;
        }
        setTurns((prev) => [...prev, { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, question: q, answer }]);
        if (autoSpeak && ttsOk) speakReply(answer, langMode);
        else setPhase("idle");
      } catch {
        setPhase("idle");
        setNotice(STRINGS.notHeard[lang]);
      }
    },
    [langMode, autoSpeak, ttsOk, speakReply, lang]
  );

  /* mic: idle → listening; listening → stop */
  const toggleMic = useCallback(() => {
    if (phase === "listening") {
      recognizerRef.current?.stop();
      return;
    }
    if (phase === "speaking") {
      stopAll();
      return;
    }
    if (!sttOk) {
      setTypingMode(true);
      setNotice(STRINGS.micUnavailable[lang]);
      return;
    }
    setNotice(null);
    setInterim("");
    const handle = listen(sttLocaleFor(langMode), {
      onInterim: (t) => setInterim(t),
      onError: (kind) => {
        if (kind === "no-speech") setNotice(STRINGS.notHeard[lang]);
        else if (kind === "not-allowed") {
          setNotice(STRINGS.micDenied[lang]);
          setTypingMode(true);
        } else if (kind === "network") setNotice(STRINGS.micUnavailable[lang]);
      },
      onEnd: (finalText) => {
        recognizerRef.current = null;
        setInterim("");
        if (finalText) void ask(finalText);
        else setPhase((p) => (p === "thinking" || p === "speaking" ? p : "idle"));
      },
    });
    if (!handle) {
      setTypingMode(true);
      setNotice(STRINGS.micUnavailable[lang]);
      return;
    }
    recognizerRef.current = handle;
    setPhase("listening");
  }, [phase, sttOk, langMode, lang, ask, stopAll]);

  const label =
    phase === "listening" ? STRINGS.listening[lang] : phase === "thinking" ? STRINGS.thinking[lang] : phase === "speaking" ? STRINGS.speaking[lang] : STRINGS.listenHint[lang];

  const chips = SUGGESTIONS[lang];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        style={{ transform: kbLift ? `translateY(-${kbLift}px)` : undefined }}
        className="top-0 left-0 flex h-dvh max-h-dvh w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-none border-0 bg-gradient-to-b from-sanatan-parchment to-sanatan-cream p-0 sm:top-1/2 sm:left-1/2 sm:h-[min(90dvh,720px)] sm:max-h-[min(90dvh,720px)] sm:w-[calc(100%-4rem)] sm:max-w-2xl sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-2xl sm:border-2 sm:border-sanatan-gold-2/70 [&>button]:hidden">
        {/* header */}
        <div className="relative flex shrink-0 items-center gap-1.5 border-b border-sanatan-gold-2/40 bg-gradient-to-r from-sanatan-maroon-2 via-sanatan-maroon to-sanatan-maroon-2 px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sanatan-gold-2/70 bg-white/5">
            <OmSigil className="text-lg text-sanatan-gold-2 om-glow" />
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <DialogTitle className="truncate font-display text-base font-semibold tracking-wide text-sanatan-gold-2">
              {STRINGS.title[lang]} <span className="hidden text-sanatan-cream-2/80 sm:inline">· SANATAN HI</span>
            </DialogTitle>
            <DialogDescription className="truncate text-[0.68rem] text-sanatan-cream-2/75 [@media(max-height:480px)]:hidden">
              {STRINGS.subtitle[lang]} · {SPEECH_LANG_LABEL[answerLang]}
            </DialogDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setAutoSpeak((v) => !v)}
            aria-label={STRINGS.autoSpeak[lang]}
            className="h-11 w-11 shrink-0 text-sanatan-gold-2 hover:bg-white/10 hover:text-sanatan-cream-2">
            {autoSpeak ? <Volume2 className="h-4.5 w-4.5" /> : <VolumeX className="h-4.5 w-4.5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSettingsOpen((v) => !v)}
            aria-label="Voice settings"
            className="h-11 w-11 shrink-0 text-sanatan-gold-2 hover:bg-white/10 hover:text-sanatan-cream-2">
            <Settings2 className="h-4.5 w-4.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            aria-label={STRINGS.close[lang]}
            className="h-11 w-11 shrink-0 text-sanatan-gold-2 hover:bg-white/15 hover:text-sanatan-cream-2">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* orb + phase label */}
        <div className="relative flex shrink-0 flex-col items-center px-4 pb-1.5 pt-3 [@media(max-height:480px)]:pb-1 [@media(max-height:480px)]:pt-2 sm:pb-2 sm:pt-5">
          <button
            type="button"
            onClick={phase === "speaking" ? stopAll : toggleMic}
            aria-label={phase === "speaking" ? STRINGS.stop[lang] : STRINGS.listenHint[lang]}
            className="group relative flex h-24 w-24 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sanatan-saffron [@media(max-height:480px)]:h-20 [@media(max-height:480px)]:w-20 sm:h-28 sm:w-28">
            {/* pulse rings */}
            <AnimatePresence>
              {(phase === "listening" || phase === "speaking") && (
                <>
                  <motion.span
                    key="ring1"
                    initial={{ opacity: 0.55, scale: 0.9 }}
                    animate={{ opacity: 0, scale: 1.55 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                    className={`absolute inset-0 rounded-full border-2 ${phase === "listening" ? "border-sanatan-saffron" : "border-sanatan-gold"}`}
                  />
                  <motion.span
                    key="ring2"
                    initial={{ opacity: 0.4, scale: 0.95 }}
                    animate={{ opacity: 0, scale: 1.75 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.55 }}
                    className={`absolute inset-0 rounded-full border-2 ${phase === "listening" ? "border-sanatan-saffron/70" : "border-sanatan-gold/70"}`}
                  />
                </>
              )}
            </AnimatePresence>
            {/* orb body */}
            <motion.span
              animate={
                phase === "thinking"
                  ? { scale: [1, 1.06, 1], boxShadow: ["0 8px 30px rgba(105,32,15,0.18)", "0 8px 44px rgba(227,130,30,0.35)", "0 8px 30px rgba(105,32,15,0.18)"] }
                  : { scale: 1 }
              }
              transition={phase === "thinking" ? { duration: 1.1, repeat: Infinity } : { duration: 0.3 }}
              className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${
                phase === "listening"
                  ? "border-sanatan-saffron bg-gradient-to-b from-sanatan-gold/25 to-sanatan-cream-2"
                  : phase === "speaking"
                    ? "border-sanatan-gold bg-gradient-to-b from-sanatan-gold/20 to-sanatan-cream-2"
                    : phase === "thinking"
                      ? "border-sanatan-saffron/80 bg-gradient-to-b from-sanatan-parchment to-sanatan-cream-2"
                      : "border-sanatan-gold-2 bg-gradient-to-b from-sanatan-parchment to-sanatan-cream-2"
              } shadow-[0_10px_36px_rgba(105,32,15,0.16)]`}
            />
            {phase === "listening" ? (
              <Mic className="relative h-10 w-10 text-sanatan-maroon" aria-hidden />
            ) : phase === "speaking" ? (
              <Square className="relative h-8 w-8 text-sanatan-maroon" aria-hidden />
            ) : (
              <OmSigil className="relative text-4xl text-sanatan-maroon om-glow sm:text-5xl" />
            )}
          </button>

          {/* equalizer */}
          <div className="mt-2 flex h-5 items-end gap-1 [@media(max-height:480px)]:hidden sm:mt-3 sm:h-6" aria-hidden>
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.span
                key={i}
                animate={
                  phase === "listening" || phase === "speaking"
                    ? { scaleY: [0.3, 1, 0.45, 0.9, 0.3] }
                    : { scaleY: 0.22 }
                }
                transition={
                  phase === "listening" || phase === "speaking"
                    ? { duration: 0.9 + (i % 3) * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.09 }
                    : { duration: 0.35 }
                }
                style={{ originY: 1 }}
                className={`h-full w-1.5 rounded-full ${phase === "listening" ? "bg-sanatan-saffron" : "bg-sanatan-gold/80"}`}
              />
            ))}
          </div>

          <p className="mt-1 min-h-[1.25rem] text-center text-sm font-medium text-sanatan-maroon sm:mt-1.5" aria-live="polite">
            {interim ? <span className="italic text-sanatan-maroon/80">“{interim}”</span> : label}
          </p>
          {notice && <p className="mt-0.5 text-center text-[0.72rem] text-sanatan-maroon/70">{notice}</p>}
        </div>

        {/* settings */}
        <AnimatePresence>
          {settingsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-y border-sanatan-gold-2/40 bg-sanatan-cream-2/60">
              <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-6">
                <label className="flex flex-wrap items-center gap-2 text-xs font-medium text-sanatan-maroon">
                  <Languages className="h-4 w-4 shrink-0 text-sanatan-saffron" aria-hidden />
                  {STRINGS.voice[lang]}:
                  <Select value={chosenVoice?.voiceURI ?? "auto"} onValueChange={(v) => setVoiceURI(v === "auto" ? "" : v)}>
                    <SelectTrigger className="w-full border-sanatan-gold-2/60 bg-sanatan-parchment text-xs text-sanatan-maroon data-[size=default]:h-10 sm:w-56 sm:data-[size=default]:h-9 [&>svg]:text-sanatan-saffron">
                      <SelectValue placeholder="Auto (Indian accent)" />
                    </SelectTrigger>
                    <SelectContent className="max-h-64 border-sanatan-gold-2/60 bg-sanatan-parchment">
                      <SelectItem value="auto" className="text-xs text-sanatan-maroon">Auto · Indian accent</SelectItem>
                      {langVoices.map((v) => (
                        <SelectItem key={v.voiceURI} value={v.voiceURI} className="text-xs text-sanatan-maroon">
                          {v.name} ({v.lang}){v.localService ? "" : " · online"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
                <label className="flex items-center gap-2 text-xs font-medium text-sanatan-maroon">
                  <Sparkles className="h-4 w-4 text-sanatan-saffron" aria-hidden />
                  {STRINGS.autoSpeak[lang]}
                  <Switch checked={autoSpeak} onCheckedChange={setAutoSpeak} className="data-[state=checked]:bg-sanatan-saffron" />
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* conversation */}
        <ScrollArea className="min-h-0 flex-1">
          <div ref={scrollRef} className="px-4 py-3 sm:px-5 sm:py-4">
            {turns.length === 0 ? (
              <div className="flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-5 text-center sm:min-h-0 sm:py-2">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-sanatan-gold">{STRINGS.suggestions[lang]}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {chips.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => void ask(c)}
                      className="rounded-full border border-sanatan-gold-2/70 bg-sanatan-parchment px-3.5 py-2 text-[0.78rem] text-sanatan-maroon shadow-sm transition-all hover:-translate-y-0.5 hover:border-sanatan-saffron hover:bg-sanatan-gold/15 active:translate-y-0">
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {turns.map((t) => (
                  <div key={t.id} className="space-y-2">
                    <div className="flex justify-end">
                      <p className="max-w-[86%] rounded-2xl rounded-br-sm bg-sanatan-maroon px-3.5 py-2 text-[0.82rem] leading-relaxed text-sanatan-cream-2 shadow-sm break-words">
                        {t.question}
                      </p>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-sanatan-gold-2/60 bg-sanatan-parchment px-3.5 py-2.5 shadow-sm break-words">
                        <div className="text-[0.82rem] leading-relaxed text-foreground/85">
                          {renderMarkdown(t.answer)}
                        </div>
                        <button
                          type="button"
                          onClick={() => speakReply(t.answer, langMode)}
                          className="mt-1.5 inline-flex items-center gap-1 py-1 text-[0.68rem] font-medium text-sanatan-gold hover:text-sanatan-saffron">
                          <Volume2 className="h-3 w-3" aria-hidden />
                          {phase === "speaking" ? STRINGS.speaking[lang] : STRINGS.autoSpeak[lang]}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {phase === "thinking" && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1.5 rounded-2xl border border-sanatan-gold-2/60 bg-sanatan-parchment px-3.5 py-2.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ opacity: [0.25, 1, 0.25] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          className="h-1.5 w-1.5 rounded-full bg-sanatan-saffron"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </ScrollArea>

        {/* mic + typing */}
        <div className="flex shrink-0 flex-col items-center gap-2.5 border-t border-sanatan-gold-2/40 bg-sanatan-cream-2/50 px-4 pb-[calc(0.85rem+env(safe-area-inset-bottom))] pt-3">
          {typingMode || !sttOk ? (
            <form
              className="flex w-full max-w-lg items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const q = typed.trim();
                setTyped("");
                void ask(q);
              }}>
              <input
                ref={typedInputRef}
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                onFocus={(e) => e.target.scrollIntoView({ block: "nearest" })}
                placeholder={STRINGS.typePlaceholder[lang]}
                aria-label={STRINGS.typePlaceholder[lang]}
                enterKeyHint="send"
                autoCapitalize="none"
                autoCorrect="off"
                className="h-11 min-w-0 flex-1 rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment px-3.5 text-base text-sanatan-maroon placeholder:text-sanatan-gold/70 focus:border-sanatan-saffron focus:outline-none focus:ring-2 focus:ring-sanatan-saffron/30"
              />
              <Button type="submit" disabled={!typed.trim() || phase === "thinking"} className="h-11 gap-1.5 bg-sanatan-maroon px-4 text-sanatan-cream-2 hover:bg-sanatan-maroon-2">
                <Sparkles className="h-4 w-4" aria-hidden />
                {STRINGS.ask[lang]}
              </Button>
              {sttOk && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setTypingMode(false)}
                  aria-label="Use voice"
                  className="h-11 w-11 shrink-0 border-sanatan-gold-2/60 bg-sanatan-parchment text-sanatan-maroon hover:bg-sanatan-gold/15">
                  <Mic className="h-4.5 w-4.5" />
                </Button>
              )}
            </form>
          ) : (
            <div className="flex items-center gap-4 sm:gap-5">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTypingMode(true)}
                aria-label="Type instead"
                className="h-11 w-11 rounded-full border-sanatan-gold-2/60 bg-sanatan-parchment text-sanatan-maroon hover:bg-sanatan-gold/15">
                <Keyboard className="h-4.5 w-4.5" />
              </Button>
              <button
                type="button"
                onClick={toggleMic}
                aria-label={phase === "listening" ? STRINGS.stop[lang] : STRINGS.listenHint[lang]}
                className={`flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-lg transition-all active:scale-95 ${
                  phase === "listening"
                    ? "border-sanatan-saffron bg-sanatan-saffron text-white shadow-[0_10px_30px_rgba(227,130,30,0.45)]"
                    : "border-sanatan-maroon bg-sanatan-maroon text-sanatan-gold-2 hover:bg-sanatan-maroon-2"
                }`}>
                {phase === "listening" ? <Square className="h-6 w-6" aria-hidden /> : <Mic className="h-7 w-7" aria-hidden />}
              </button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => (phase === "speaking" ? stopAll() : speakReply(turns[turns.length - 1]?.answer ?? STRINGS.greeting[lang], langMode))}
                disabled={turns.length === 0 && phase !== "speaking"}
                aria-label="Replay answer"
                className="h-11 w-11 rounded-full border-sanatan-gold-2/60 bg-sanatan-parchment text-sanatan-maroon hover:bg-sanatan-gold/15 disabled:opacity-40">
                {phase === "speaking" ? <MicOff className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
              </Button>
            </div>
          )}
          <p className="pt-0.5 text-center text-[0.6rem] text-foreground/50">
            SANATAN HI voice · {SPEECH_LANG_LABEL[answerLang]} · Indian accent · ॐ
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
