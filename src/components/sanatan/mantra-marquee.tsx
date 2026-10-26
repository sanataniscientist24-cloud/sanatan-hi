"use client";

/**
 * SANATAN HI — Mantra Marquee.
 *
 * An infinite horizontal ticker of sacred mantras, rendered as a seamless
 * CSS loop (content duplicated once, track translates -50%). Pauses on
 * hover / focus, freezes to a static row when the visitor prefers reduced
 * motion (handled in globals.css).
 */

const MANTRAS = [
  "॥ धर्मो रक्षति रक्षितः ॥",
  "ॐ नमः शिवाय",
  "श्री राम जय राम जय जय राम",
  "ॐ भूर्भुवः स्वाहा",
  "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
  "ॐ शान्तिः शान्तिः शान्तिः",
  "सत्यमेव जयते",
  "वसुधैव कुटुम्बकम्",
  "ॐ गं गणपतये नमः",
  "ॐ नमो भगवते वासुदेवाय",
  "॥ सर्वे भवन्तु सुखिनः ॥",
  "ॐ तत् सत्",
];

/** one full pass of the ticker — rendered twice for the seamless loop */
function TickerContent({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={`flex shrink-0 items-center whitespace-nowrap ${ariaHidden ? "marquee-dup" : ""}`}
    >
      {MANTRAS.map((m) => (
        <span key={m} className="flex items-center">
          <span className="px-3 font-deva text-[0.78rem] tracking-wide text-sanatan-gold-2">{m}</span>
          <span className="text-[0.62rem] text-sanatan-saffron" aria-hidden>✦</span>
        </span>
      ))}
    </span>
  );
}

export function MantraMarquee() {
  return (
    <div
      className="marquee-band relative overflow-hidden border-y border-sanatan-gold-2/60 bg-gradient-to-r from-sanatan-maroon-2 via-sanatan-maroon to-sanatan-maroon-2 py-1.5"
      role="marquee"
      aria-label="पवित्र मंत्र — sacred mantras"
    >
      {/* soft edge fade so text melts into the band instead of hard-clipping */}
      <span
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-sanatan-maroon-2 to-transparent"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-sanatan-maroon-2 to-transparent"
        aria-hidden
      />
      <div className="marquee-track flex w-max" style={{ ["--marquee-dur" as string]: "46s" }}>
        <TickerContent />
        <TickerContent ariaHidden />
      </div>
    </div>
  );
}
