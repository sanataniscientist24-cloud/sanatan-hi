"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Loader2, Mic, SendHorizonal, Square, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { isVoiceSupported, transcribeAudio, VoiceError, VoiceRecorder } from "@/lib/client/voice";

type VoiceState = "idle" | "recording" | "transcribing";

const MAX_RECORDING_SEC = 60;
const MIN_RECORDING_SEC = 0.35; /* accidental taps produce silence — discard */
const BAR_PROFILES = [0.55, 1, 0.7, 0.45, 0.85];

function formatTime(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = Math.floor(totalSec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
  /** called just before the mic opens (e.g. to silence Babaji's narration) */
  onBeforeRecord?: () => void;
}

export function ChatInput({ onSend, disabled, placeholder, onBeforeRecord }: ChatInputProps) {
  const [value, setValue] = useState("");
  const [voiceState, setVoiceState] = useState<VoiceState>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [voiceReady, setVoiceReady] = useState(true);
  const ref = useRef<HTMLTextAreaElement>(null);
  const recorderRef = useRef<VoiceRecorder | null>(null);
  const startedAtRef = useRef(0);
  const meterRafRef = useRef(0);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const { toast } = useToast();

  /* hide the mic on browsers/contexts that can't record (e.g. plain HTTP) */
  useEffect(() => {
    setVoiceReady(isVoiceSupported());
  }, []);

  /* stop recording cleanly if the component unmounts mid-session */
  useEffect(() => {
    return () => {
      recorderRef.current?.abort();
      recorderRef.current = null;
      if (meterRafRef.current) cancelAnimationFrame(meterRafRef.current);
    };
  }, []);

  const resize = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 140) + "px";
    }
  }, []);

  const notify = useCallback(
    (description: string) => {
      toast({
        title: "Voice input",
        description,
        variant: "destructive",
      });
    },
    [toast]
  );

  /* live level meter — drives the equalizer bars without re-rendering */
  const startMeter = useCallback(() => {
    const tick = () => {
      const rec = recorderRef.current;
      if (!rec?.recording) {
        meterRafRef.current = 0;
        return;
      }
      const level = rec.level;
      barRefs.current.forEach((bar, i) => {
        if (!bar) return;
        const target = 0.18 + Math.min(1, level * (0.8 + BAR_PROFILES[i] * 0.9));
        bar.style.transform = `scaleY(${Math.max(0.12, target)})`;
      });
      meterRafRef.current = requestAnimationFrame(tick);
    };
    meterRafRef.current = requestAnimationFrame(tick);
  }, []);

  const stopMeter = useCallback(() => {
    if (meterRafRef.current) cancelAnimationFrame(meterRafRef.current);
    meterRafRef.current = 0;
    barRefs.current.forEach((bar) => {
      if (bar) bar.style.transform = "";
    });
  }, []);

  const insertTranscript = useCallback(
    (text: string) => {
      const clean = text.trim();
      if (!clean) return;
      const merged = value.trim() ? `${value.trimEnd()} ${clean}` : clean;
      if (merged.length > 600) {
        setValue(merged.slice(0, 600));
        notify("Transcription is longer than the 600-character input limit — it was trimmed.");
      } else {
        setValue(merged);
      }
      /* give the textarea a beat to mount the new value, then resize + focus */
      requestAnimationFrame(() => {
        resize();
        ref.current?.focus();
      });
    },
    [value, resize, notify]
  );

  const stopAndTranscribe = useCallback(async () => {
    const recorder = recorderRef.current;
    if (!recorder || !recorder.recording) return;

    stopMeter();
    setVoiceState("transcribing");
    try {
      const { base64, durationSec } = await recorder.stop();
      if (durationSec < MIN_RECORDING_SEC) {
        /* too short to hold speech — treat as an accidental tap */
        setVoiceState("idle");
        setElapsed(0);
        return;
      }
      const text = await transcribeAudio(base64);
      insertTranscript(text);
    } catch (err) {
      notify(err instanceof VoiceError ? err.message : "Voice input failed. Please try again.");
    } finally {
      recorderRef.current = null;
      setVoiceState("idle");
      setElapsed(0);
    }
  }, [stopMeter, insertTranscript, notify]);

  const cancelRecording = useCallback(() => {
    const recorder = recorderRef.current;
    if (!recorder?.recording) return;
    recorder.abort();
    recorderRef.current = null;
    stopMeter();
    setVoiceState("idle");
    setElapsed(0);
  }, [stopMeter]);

  const toggleMic = useCallback(async () => {
    if (disabled || voiceState !== "idle") return;

    onBeforeRecord?.(); /* silence Babaji before opening the mic */

    const recorder = new VoiceRecorder();
    try {
      await recorder.start(); /* AudioContext is created inside the click gesture for iOS */
      recorderRef.current = recorder;
      startedAtRef.current = performance.now();
      setVoiceState("recording");
      setElapsed(0);
      startMeter();
    } catch (err) {
      recorder.abort();
      const name = (err as DOMException)?.name;
      if (name === "NotAllowedError" || name === "SecurityError") {
        notify("Microphone access was denied. Allow it in your browser's site settings to use voice input.");
      } else if (name === "NotFoundError") {
        notify("No microphone was found on this device.");
      } else {
        notify("Could not start the microphone. Please try again.");
      }
    }
  }, [disabled, voiceState, startMeter, notify, onBeforeRecord]);

  /* timer + 60 s auto-stop */
  useEffect(() => {
    if (voiceState !== "recording") return;
    const id = window.setInterval(() => {
      const sec = (performance.now() - startedAtRef.current) / 1000;
      setElapsed(sec);
      if (sec >= MAX_RECORDING_SEC) void stopAndTranscribe();
    }, 250);
    return () => window.clearInterval(id);
  }, [voiceState, stopAndTranscribe]);

  const submit = () => {
    const v = value.trim();
    if (!v || disabled) return;
    onSend(v);
    setValue("");
    if (ref.current) ref.current.style.height = "auto";
  };

  const recording = voiceState === "recording";

  return (
    <div
      className={
        "mx-auto w-full max-w-3xl rounded-2xl border bg-sanatan-parchment p-1.5 shadow-[0_4px_20px_rgba(105,32,15,0.10)] focus-within:border-sanatan-saffron sm:p-2 " +
        (recording
          ? "border-sanatan-maroon/70 shadow-[0_0_0_3px_rgba(153,27,27,0.08)]"
          : "border-sanatan-gold-2/70")
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          submit();
        }
        if (e.key === "Escape" && recording) {
          e.preventDefault();
          cancelRecording();
        }
      }}
    >
      <div className="flex items-end gap-1.5 sm:gap-2">
        {/* left glyph: wand ↔ live equalizer while recording */}
        <div
          className="flex h-11 shrink-0 items-center pl-1.5 text-sanatan-saffron sm:h-10 sm:pl-2"
          aria-hidden
        >
          {recording ? (
            <div className="flex items-center gap-1.5" role="timer" aria-live="off">
              <span className="flex h-5 items-end gap-[2.5px]">
                {BAR_PROFILES.map((_, i) => (
                  <span
                    key={i}
                    ref={(el) => {
                      barRefs.current[i] = el;
                    }}
                    className="w-[3px] origin-bottom rounded-sm bg-sanatan-maroon will-change-transform"
                    style={{ height: `${4 + BAR_PROFILES[i] * 13}px` }}
                  />
                ))}
              </span>
              <span className="flex items-center gap-1 text-[0.68rem] font-semibold tabular-nums text-sanatan-maroon">
                <span className="h-1.5 w-1.5 rounded-full bg-sanatan-maroon animate-pulse" />
                {formatTime(elapsed)}
              </span>
            </div>
          ) : (
            <Wand2 className="h-5 w-5" />
          )}
        </div>

        <Textarea
          ref={ref}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            resize();
          }}
          rows={1}
          maxLength={600}
          placeholder={
            voiceState === "transcribing"
              ? "Transcribing your voice…"
              : recording
                ? "Listening… tap the stop button to transcribe (Esc to cancel)"
                : (placeholder ?? "Ask anything — e.g. 'What is karma?', 'Gita 2.47', 'Hanuman Chalisa', '¿Qué es el dharma?'…")
          }
          aria-label="Type your question"
          className="max-h-[140px] min-h-[44px] flex-1 resize-none border-0 bg-transparent px-1 py-2.5 text-base sm:min-h-[40px] sm:py-2 sm:text-[0.92rem] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-sanatan-gold/70"
          disabled={disabled}
        />

        {voiceReady && (
          <Button
            onClick={recording ? () => void stopAndTranscribe() : () => void toggleMic()}
            disabled={disabled || voiceState === "transcribing"}
            size="icon"
            aria-label={
              voiceState === "transcribing"
                ? "Transcribing"
                : recording
                  ? "Stop recording and transcribe"
                  : "Start voice input"
            }
            aria-pressed={recording}
            className={
              "h-11 w-11 shrink-0 rounded-xl transition-transform active:scale-95 disabled:opacity-50 disabled:hover:scale-100 sm:h-10 sm:w-10 " +
              (recording
                ? "bg-gradient-to-br from-sanatan-maroon-2 to-sanatan-maroon text-white shadow-md hover:scale-105"
                : "border border-sanatan-gold-2/70 bg-sanatan-gold/10 text-sanatan-maroon shadow-sm hover:bg-sanatan-gold/20 hover:text-sanatan-maroon hover:scale-105")
            }
          >
            {voiceState === "transcribing" ? (
              <Loader2 className="h-4.5 w-4.5 animate-spin" />
            ) : recording ? (
              <Square className="h-3.5 w-3.5 fill-current" />
            ) : (
              <Mic className="h-4.5 w-4.5" />
            )}
          </Button>
        )}

        <Button
          onClick={submit}
          disabled={disabled || !value.trim()}
          size="icon"
          aria-label="Send"
          className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-sanatan-saffron to-sanatan-saffron-2 text-white shadow-sm transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 sm:h-10 sm:w-10"
        >
          <SendHorizonal className="h-4.5 w-4.5" />
        </Button>
      </div>

      {/* voice status line (kept in layout flow so the footer never jumps) */}
      <div className="sr-only" aria-live="polite">
        {voiceState === "recording" && `Recording — ${formatTime(elapsed)}`}
        {voiceState === "transcribing" && "Transcribing your recording"}
      </div>
    </div>
  );
}
