"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Moon, Sun, Menu, MessageSquarePlus, WifiOff, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChatInput } from "@/components/sanatan/chat-input";
import { ChatMessage, TypingIndicator, type ChatMessageData } from "@/components/sanatan/chat-message";
import { Hero } from "@/components/sanatan/hero";
import { SidebarContent } from "@/components/sanatan/sidebar-content";
import { OmSigil } from "@/components/sanatan/book-icons";
import { askSanatan } from "@/lib/client/ask";

type LangMode = "auto" | "hi" | "en" | "sa" | "es";
type ChatView = "menu" | "chat";

/** history-state marker placed on the entry that holds an open conversation */
const CHAT_HISTORY_FLAG = "sanatanChat";

const STORAGE_KEY = "sanatan-hi-chat-v2";

const LANG_LABELS: Record<LangMode, string> = {
  auto: "Auto detect",
  hi: "हिंदी Hindi",
  en: "English",
  sa: "संस्कृत Sanskrit",
  es: "Español",
};

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function SanatanHIPage() {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [view, setView] = useState<ChatView>("menu");
  const [langMode, setLangMode] = useState<LangMode>("en");
  const [sending, setSending] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  /* mirrors for history/back-button handlers (they fire outside the render cycle) */
  const viewRef = useRef<ChatView>("menu");
  const messagesRef = useRef<ChatMessageData[]>([]);
  const pushedHistoryRef = useRef(false);

  useEffect(() => setMounted(true), []);

  /* restore conversation from localStorage */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw) as { messages?: ChatMessageData[]; lang?: LangMode };
        if (Array.isArray(data.messages)) setMessages(data.messages);
        if (data.lang) setLangMode(data.lang);
        if (Array.isArray(data.messages) && data.messages.length > 0) {
          viewRef.current = "chat";
          setView("chat");
        }
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);
    /* if we start inside an open conversation, put a clean "menu" entry beneath it
       so the browser / hardware back button returns to the menu instead of leaving */
    if (viewRef.current === "chat") {
      try {
        window.history.replaceState(null, "", window.location.href);
        window.history.pushState({ [CHAT_HISTORY_FLAG]: true }, "", window.location.href);
        pushedHistoryRef.current = true;
      } catch {
        /* ignore */
      }
    }
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

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  /* browser back (desktop), Android hardware back and iOS swipe-back:
     while the chat is open, return to the menu instead of navigating away */
  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      const isChatEntry = Boolean((e.state as Record<string, unknown> | null)?.[CHAT_HISTORY_FLAG]);
      if (isChatEntry) {
        /* forward/back into a chat entry — reopen the conversation */
        if (messagesRef.current.length > 0) {
          viewRef.current = "chat";
          setView("chat");
          pushedHistoryRef.current = true;
        }
      } else {
        /* navigated to a menu entry — if the chat is open, treat this as "back" */
        pushedHistoryRef.current = false;
        if (viewRef.current === "chat") {
          viewRef.current = "menu";
          setView("menu");
        }
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  /* menu → chat (keeps the menu in the history stack) */
  const enterChat = useCallback(() => {
    if (viewRef.current === "chat") return;
    viewRef.current = "chat";
    setView("chat");
    try {
      window.history.pushState({ [CHAT_HISTORY_FLAG]: true }, "", window.location.href);
      pushedHistoryRef.current = true;
    } catch {
      /* ignore */
    }
  }, []);

  /* chat → menu via the top-right ✕ (or after "New conversation") */
  const exitChat = useCallback(() => {
    if (viewRef.current !== "chat") return;
    if (pushedHistoryRef.current) {
      /* pop our chat entry; the popstate handler switches back to the menu */
      pushedHistoryRef.current = false;
      try {
        window.history.back();
      } catch {
        /* ignore */
      }
      /* safety net: if popstate never arrives, close the chat directly */
      window.setTimeout(() => {
        if (viewRef.current === "chat") {
          viewRef.current = "menu";
          setView("menu");
        }
      }, 350);
    } else {
      viewRef.current = "menu";
      setView("menu");
    }
  }, []);

  const scrollToBottom = useCallback((smooth = true) => {
    const el = scrollRef.current?.querySelector("[data-radix-scroll-area-viewport]");
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    const el = scrollRef.current?.querySelector("[data-radix-scroll-area-viewport]");
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTo({ top: 0, behavior: "auto" });
      });
    }
  }, []);

  /* the chat scrolls to its latest message; the menu starts at its top */
  useEffect(() => {
    if (view === "menu") scrollToTop();
    else scrollToBottom();
  }, [messages, sending, view, scrollToBottom, scrollToTop]);

  const send = useCallback(
    async (text: string) => {
      const message = text.trim();
      if (!message || sending) return;
      enterChat();
      const userMsg: ChatMessageData = { id: uid(), role: "user", text: message };
      setMessages((prev) => [...prev, userMsg]);
      setSending(true);

      try {
        const data = await askSanatan(message, langMode);
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
    [sending, langMode, enterChat]
  );

  const newChat = () => {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    exitChat();
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
                  className="lg:hidden h-11 w-11 sm:h-9 sm:w-9 text-sanatan-gold-2 hover:bg-white/10 hover:text-sanatan-gold-2"
                  aria-label="Open scripture corpus"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[290px] gap-0 border-sanatan-gold-2/50 bg-sanatan-cream p-0">
                <SheetTitle className="sr-only">Scripture Corpus</SheetTitle>
                <SheetDescription className="sr-only">
                  Browse the offline scripture collections and start a new conversation.
                </SheetDescription>
                {/* new chat + theme — live in the drawer on mobile (header is compact) */}
                <div className="flex gap-2 border-b border-sanatan-gold-2/40 p-3 lg:hidden">
                  <Button
                    variant="outline"
                    onClick={() => {
                      newChat();
                      setSheetOpen(false);
                    }}
                    disabled={messagesEnd}
                    className="h-10 flex-1 justify-start gap-2 border-sanatan-gold-2/60 bg-sanatan-parchment text-sm text-sanatan-maroon hover:bg-sanatan-gold/15 hover:text-sanatan-maroon disabled:opacity-40"
                  >
                    <MessageSquarePlus className="h-4 w-4" />
                    New conversation
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    aria-label="Toggle theme"
                    className="h-10 w-10 shrink-0 border-sanatan-gold-2/60 bg-sanatan-parchment text-sanatan-maroon hover:bg-sanatan-gold/15 hover:text-sanatan-maroon"
                  >
                    {mounted && <Sun className={isDark ? "hidden h-4.5 w-4.5" : "h-4.5 w-4.5"} />}
                    {mounted && <Moon className={isDark ? "h-4.5 w-4.5" : "hidden h-4.5 w-4.5"} />}
                  </Button>
                </div>
                <div className="flex min-h-0 flex-1 flex-col">
                  <SidebarContent onQuery={(q) => void send(q)} onNavigate={() => setSheetOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>

            {/* brand */}
            <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
              <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-sanatan-gold-2 bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 sm:flex">
                <OmSigil className="text-xl text-sanatan-gold-2 om-glow" />
              </span>
              <div className="min-w-0 leading-tight">
                <h1 className="truncate font-display text-[1.05rem] font-semibold tracking-wide text-sanatan-gold-2 sm:text-lg">
                  SANATAN <span className="text-sanatan-cream-2">HI</span>{" "}
                  <span className="hidden text-[0.56rem] font-medium tracking-[0.12em] text-sanatan-gold-2/90 md:inline">
                    [ HUMAN INTELLIGENCE ]
                  </span>
                </h1>
                <p className="hidden truncate text-[0.62rem] text-sanatan-cream-2/70 md:block">
                  Offline Sanatan Dharma AI · Gita · Ramayan · Mahabharat · Vedas · Puranas
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
                  aria-label="Choose answer language"
                  className="h-10 w-[7.1rem] border-sanatan-gold-2/50 bg-transparent text-xs text-sanatan-cream-2 hover:bg-white/10 sm:h-9 sm:w-36 [&>svg]:text-sanatan-gold-2"
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
                    className="hidden h-9 w-9 text-sanatan-gold-2 hover:bg-white/10 sm:inline-flex"
                    aria-label="Toggle theme"
                  >
                    {mounted && <Sun className={isDark ? "hidden" : "h-4.5 w-4.5"} />}
                    {mounted && <Moon className={isDark ? "h-4.5 w-4.5" : "hidden"} />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-sanatan-maroon text-sanatan-cream-2 text-xs">Toggle theme</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={newChat}
                    disabled={messagesEnd}
                    className="hidden h-9 w-9 text-sanatan-gold-2 hover:bg-white/10 disabled:opacity-40 sm:inline-flex"
                    aria-label="New conversation"
                  >
                    <MessageSquarePlus className="h-4.5 w-4.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-sanatan-maroon text-sanatan-cream-2 text-xs">New conversation</TooltipContent>
              </Tooltip>

              {/* ✕ close chat → return to the previous menu (top-right) */}
              {view === "chat" && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={exitChat}
                      className="h-11 w-11 text-sanatan-gold-2 hover:bg-white/15 hover:text-sanatan-cream-2 sm:h-9 sm:w-9"
                      aria-label="Close chat and return to menu"
                    >
                      <X className="h-5 w-5 sm:h-4.5 sm:w-4.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-sanatan-maroon text-sanatan-cream-2 text-xs">Close chat · back to menu</TooltipContent>
                </Tooltip>
              )}
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
                {view === "chat" && messages.length > 0 ? (
                  <div className="space-y-5">
                    {messages.map((m) => (
                      <ChatMessage key={m.id} message={m} onSuggestion={(s) => void send(s)} />
                    ))}
                  </div>
                ) : (
                  <Hero
                    onSuggestion={(s) => void send(s)}
                    onResume={messages.length > 0 ? enterChat : undefined}
                    resumeCount={messages.length}
                  />
                )}
                {sending && <TypingIndicator />}
              </div>
            </ScrollArea>

            {/* input */}
            <div className="relative z-10 shrink-0 bg-gradient-to-t from-sanatan-cream via-sanatan-cream to-transparent px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 sm:px-5">
              <ChatInput onSend={(v) => void send(v)} disabled={sending} />
              <p className="mt-1.5 text-center text-[0.62rem] text-foreground/50">
                SANATAN HI answers from a local scripture corpus · English · हिंदी · संस्कृत · Español ·{" "}
                <span className="font-deva">॥ शुभम् भवतु ॥</span>
              </p>
            </div>
          </main>
        </div>

        {/* ── footer (always bottom, respects iOS safe area) ── */}
        <footer className="mt-auto shrink-0 bg-gradient-to-r from-sanatan-maroon-2 via-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-y-0.5 px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] text-center text-[0.64rem] sm:flex-row sm:gap-x-4 sm:gap-y-1 sm:pb-2">
            <span className="text-sanatan-cream-2/90">
              SANATAN HI [ HUMAN INTELLIGENCE ]
              <span className="hidden md:inline"> · Bhagavad Gita · Ramayana · Mahabharata · Bhagavata & Shiva Purana · Vedas · Upanishads</span>
            </span>
            <span className="text-sanatan-gold-2/80">
              100% Offline Corpus · Sanskrit · Hindi · English · Español ·{" "}
              <span aria-hidden>🙏</span>
            </span>
          </div>
        </footer>
      </TooltipProvider>
    </div>
  );
}
