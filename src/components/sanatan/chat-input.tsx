"use client";

import { useRef, useState } from "react";
import { SendHorizonal, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({ onSend, disabled, placeholder }: ChatInputProps) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const submit = () => {
    const v = value.trim();
    if (!v || disabled) return;
    onSend(v);
    setValue("");
    if (ref.current) ref.current.style.height = "auto";
  };

  return (
    <div
      className="mx-auto w-full max-w-3xl rounded-2xl border border-sanatan-gold-2/70 bg-sanatan-parchment p-2 shadow-[0_4px_20px_rgba(105,32,15,0.10)] focus-within:border-sanatan-saffron"
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          submit();
        }
      }}
    >
      <div className="flex items-end gap-2">
        <div className="flex items-center pl-2 text-sanatan-saffron" aria-hidden>
          <Wand2 className="h-5 w-5" />
        </div>
        <Textarea
          ref={ref}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
          }}
          rows={1}
          maxLength={600}
          placeholder={placeholder ?? "पूछें — जैसे 'कर्म क्या है?', 'गीता 2.47', 'हनुमान चालीसा'…"}
          aria-label="अपना प्रश्न लिखें"
          className="max-h-[140px] min-h-[40px] flex-1 resize-none border-0 bg-transparent px-1 py-2 text-[0.92rem] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-sanatan-gold/70"
          disabled={disabled}
        />
        <Button
          onClick={submit}
          disabled={disabled || !value.trim()}
          size="icon"
          aria-label="भेजें"
          className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-sanatan-saffron to-sanatan-saffron-2 text-white shadow-sm transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          <SendHorizonal className="h-4.5 w-4.5" />
        </Button>
      </div>
    </div>
  );
}
