"use client";

import React from "react";

/**
 * Tiny, safe markdown renderer for SANATAN HI replies.
 * Supports **bold**, *italic*, bullets (•/-), numbered lines and paragraphs.
 * No dangerouslySetInnerHTML — pure React nodes.
 */
export function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];
  lines.forEach((line, i) => {
    if (!line.trim()) {
      nodes.push(<div key={i} className="h-2" aria-hidden />);
      return;
    }
    nodes.push(
      <p key={i} className="leading-relaxed">
        {inline(line, i)}
      </p>
    );
  });
  return nodes;
}

function inline(line: string, keyBase: number | string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let idx = 0;
  while ((m = regex.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      out.push(
        <strong key={`${keyBase}-b-${idx}`} className="font-semibold text-sanatan-maroon">
          {tok.slice(2, -2)}
        </strong>
      );
    } else if (tok.startsWith("`")) {
      out.push(
        <code key={`${keyBase}-c-${idx}`} className="rounded bg-sanatan-cream-2 px-1 py-0.5 text-[0.9em]">
          {tok.slice(1, -1)}
        </code>
      );
    } else {
      out.push(
        <em key={`${keyBase}-i-${idx}`} className="italic">
          {tok.slice(1, -1)}
        </em>
      );
    }
    last = m.index + tok.length;
    idx++;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}
