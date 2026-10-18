"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Moon, Sun, Menu, MessageSquarePlus, WifiOff } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChatInput } from "@/components/sanatan/chat-input";
import { ChatMessage, TypingIndicator, type ChatMessageData } from "@/components/sanatan/chat-message";
import { Hero } from "@/components/sanatan/hero";
import { SidebarContent } from "@/components/sanatan/sidebar-content";
import { OmSigil } from "@/components/sanatan/book-icons";

type LangMode = "auto" | "hi" | "en" | "sa";

const STORAGE_KEY = "sanatan-hi-chat-v1";

const LANG_LABELS: Record<LangMode, string> = {
  auto: "स्वतः (Auto)",
  hi: "हिंदी",
  en: "English",
  sa: "संस्कृतम्",
};

interface ApiChatResponse {
  ok: boolean;
  reply: string;
  verses: ChatMessageData["verses"];
  suggestions: string[];
  intent: string;
  lang: string;
  meta: { matched: number; timeMs: number; corpusSize: number };
}

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function SanatanHIPage() {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [langMode, setLangMode] = useState<LangMode>("auto");
  const [sending, setSending] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* restore conversation from localStorage */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw) as { messages?: ChatMessageData[]; lang?: LangMode };
        if (Array.isArray(data.messages)) setMessages(data.messages);
        if (data.lang) setLangMode(data.lang);
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  /* persist */
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, lang: langMode }));
    } catch {
      /* ignore */
    }
  }, [messages, langMode, loaded]);

  const scrollToBottom = useCallback((smooth = true) => {
    const el = scrollRef.current?.querySelector("[data-radix-scroll-area-viewport]");
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, sending, scrollToBottom]);

  const send = useCallback(
    async (text: string) => {
      const message = text.trim();
      if (!message || sending) return;
      const userMsg: ChatMessageData = { id: uid(), role: "user", text: message };
      setMessages((prev) => [...prev, userMsg]);
      setSending(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, language: langMode }),
        });
        const data: ApiChatResponse = await res.json();
        if (!data.ok) throw new Error("api error");
        const aiMsg: ChatMessageData = {
          id: uid(),
          role: "assistant",
          text: data.reply,
          verses: data.verses,
          suggestions: data.suggestions,
          intent: data.intent,
          timeMs: data.meta?.timeMs ?? 0,
        };
        setMessages((prev) => [...prev, aiMsg]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: "assistant",
            text: "🙏 क्षमा करें — ग्रंथ-कोश तक पहुँच में त्रुटि हुई। कृपया पुनः प्रयास करें।\n\n*Sorry — a local error occurred while consulting the corpus. Please try again.*",
          },
        ]);
      } finally {
        setSending(false);
      }
    },
    [sending, langMode]
  );

  const newChat = () => {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  const isDark = (theme ?? resolvedTheme) === "dark";
  const messagesEnd = useMemo(() => messages.length === 0, [messages]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-sanatan-cream text-foreground">
      <TooltipProvider delayDuration={250}>

        {/* ── header ── */}
        <header className="relative z-20 shrink-0 bg-gradient-to-r from-sanatan-maroon-2 via-sanatan-maroon to-sanatan-maroon-2 text-sanatan-cream-2 shadow-[0_2px_18px_rgba(74,21,9,0.35)]">
          <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 sm:px-4">
            {/* mobile menu */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-9 w-9 text-sanatan-gold-2 hover:bg-white/10 hover:text-sanatan-gold-2"
                  aria-label="ग्रंथ-कोश खोलें"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[290px] border-sanatan-gold-2/50 bg-sanatan-cream p-0">
                <SheetTitle className="sr-only">ग्रंथ-कोश</SheetTitle>
                <SidebarContent onQuery={(q) => void send(q)} onNavigate={() => setSheetOpen(false)} />
              </SheetContent>
            </Sheet>

            {/* brand */}
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-sanatan-gold-2 bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2">
                <OmSigil className="text-xl text-sanatan-gold-2 om-glow" />
              </span>
              <div className="min-w-0 leading-tight">
                <h1 className="font-display text-lg font-semibold tracking-wide text-sanatan-gold-2">
                  SANATAN <span className="text-sanatan-cream-2">HI</span>{" "}
                  <span className="text-[0.56rem] font-medium tracking-[0.12em] text-sanatan-gold-2/90">[ HUMAN INTELLIGENCE ]</span>
                </h1>
                <p className="hidden truncate text-[0.62rem] text-sanatan-cream-2/70 sm:block">
                  ऑफ़लाइन सनातन-ज्ञान AI · गीता · रामायण · महाभारत · वेद · पुराण
                </p>
              </div>
              <span className="ml-1 hidden items-center gap-1 rounded-full border border-sanatan-gold-2/50 px-2 py-0.5 text-[0.6rem] text-sanatan-gold-2 md:inline-flex">
                <WifiOff className="h-3 w-3" aria-hidden />
                Offline AI
              </span>
            </div>

            {/* actions */}
            <div className="ml-auto flex items-center gap-1.5">
              <Select value={langMode} onValueChange={(v) => setLangMode(v as LangMode)}>
                <SelectTrigger
                  aria-label="उत्तर की भाषा चुनें"
                  className="h-9 w-[7.4rem] sm:w-36 border-sanatan-gold-2/50 bg-transparent text-xs text-sanatan-cream-2 hover:bg-white/10 [&>svg]:text-sanatan-gold-2"
                >
                  <SelectValue placeholder={LANG_LABELS[langMode]} />
                </SelectTrigger>
                <SelectContent className="border-sanatan-gold-2/60 bg-sanatan-parchment">
                  {Object.entries(LANG_LABELS).map(([v, l]) => (
                    <SelectItem key={v} value={v} className="text-sm text-sanatan-maroon focus:bg-sanatan-gold/20">
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    className="h-9 w-9 text-sanatan-gold-2 hover:bg-white/10"
                    aria-label="थीम बदलें"
                  >
                    {mounted && <Sun className={isDark ? "hidden" : "h-4.5 w-4.5"} />}
                    {mounted && <Moon className={isDark ? "h-4.5 w-4.5" : "hidden"} />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-sanatan-maroon text-sanatan-cream-2 text-xs">थीम बदलें</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={newChat}
                    disabled={messagesEnd}
                    className="h-9 w-9 text-sanatan-gold-2 hover:bg-white/10 disabled:opacity-40"
                    aria-label="नई बातचीत"
                  >
                    <MessageSquarePlus className="h-4.5 w-4.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-sanatan-maroon text-sanatan-cream-2 text-xs">नई बातचीत</TooltipContent>
              </Tooltip>
            </div>
          </div>
          {/* bhagwa strip */}
          <div className="h-1 w-full bg-gradient-to-r from-sanatan-saffron via-sanatan-gold to-sanatan-saffron" aria-hidden />
        </header>

        {/* ── body ── */}
        <div className="relative mx-auto flex w-full max-w-7xl min-h-0 flex-1 overflow-hidden">
          {/* desktop sidebar */}
          <aside className="hidden w-72 shrink-0 border-r border-sanatan-gold-2/40 bg-sanatan-cream-2/50 lg:block">
            <SidebarContent onQuery={(q) => void send(q)} />
          </aside>

          {/* chat area */}
          <main className="relative flex min-w-0 flex-1 flex-col">
            <div className="sanatan-watermark pointer-events-none absolute inset-0" aria-hidden />

            <ScrollArea className="sanatan-scroll relative z-10 min-h-0 flex-1">
              <div ref={scrollRef} className="mx-auto w-full max-w-3xl px-3 py-4 sm:px-5">
                {messages.length === 0 ? (
                  <Hero onSuggestion={(s) => void send(s)} />
                ) : (
                  <div className="space-y-5">
                    {messages.map((m) => (
                      <ChatMessage key={m.id} message={m} onSuggestion={(s) => void send(s)} />
                    ))}
                  </div>
                )}
                {sending && <TypingIndicator />}
              </div>
            </ScrollArea>

            {/* input */}
            <div className="relative z-10 shrink-0 bg-gradient-to-t from-sanatan-cream via-sanatan-cream to-transparent px-3 pb-3 pt-2 sm:px-5">
              <ChatInput onSend={(v) => void send(v)} disabled={sending} />
              <p className="mt-1.5 text-center text-[0.62rem] text-foreground/50">
                सनातन HI स्थानीय ग्रंथ-कोश से उत्तर देता है · Sanskrit · हिंदी · English ·{" "}
                <span className="font-deva">॥ शुभम् भवतु ॥</span>
              </p>
            </div>
          </main>
        </div>

        {/* ── footer (always bottom) ── */}
        <footer className="mt-auto shrink-0 bg-gradient-to-r from-sanatan-maroon-2 via-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-[0.64rem]">
            <span className="font-deva text-sanatan-cream-2/90">
              सनातन HI [ HUMAN INTELLIGENCE ] · श्रीमद्भगवद्गीता · रामायण · महाभारत · भागवत · शिव पुराण · वेद · उपनिषद्
            </span>
            <span className="text-sanatan-gold-2/80">
              100% Offline Corpus · Sanskrit + Hindi + English ·{" "}
              <span aria-hidden>🙏</span>
            </span>
          </div>
        </footer>
      </TooltipProvider>
    </div>
  );
}
