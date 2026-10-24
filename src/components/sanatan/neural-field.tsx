"use client";

import { useEffect, useRef } from "react";

/**
 * Neural Mantra Field — the futuristic "cyber-Vedanta" layer.
 *
 * A canvas of golden neural particles connected by light filaments, with
 * Devanagari mantra glyphs drifting through the network and a breathing
 * Om-core at the centre. Palette is the existing SANATAN theme
 * (maroon / gold / saffron) — futuristic without changing the colours.
 *
 * Honours prefers-reduced-motion (renders a single static frame).
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  glyph?: string;
  glyphSize?: number;
  phase: number;
}

const GLYPHS = ["ॐ", "राम", "शिव", "कृष्ण", "धर्म", "मंत्र", "वेद", "योग", "गीता"];
const LINK_DIST = 120;

export function NeuralMantraField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) draw(0); /* static frame for reduced-motion users */
    };

    const seed = () => {
      const count = Math.max(26, Math.min(64, Math.round((width * height) / 16000)));
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.9,
        glyph: i % 6 === 0 ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)] : undefined,
        glyphSize: Math.random() * 10 + 13,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (dt: number) => {
      t += dt;
      const dark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, width, height);

      /* central radial glow — breathing Om core */
      const cx = width / 2;
      const cy = height * 0.46;
      const breathe = 0.5 + 0.5 * Math.sin(t / 1400);
      const glowR = Math.min(width, height) * (0.32 + 0.05 * breathe);
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      grad.addColorStop(0, dark ? "rgba(227,130,30,0.16)" : "rgba(227,130,30,0.10)");
      grad.addColorStop(1, "rgba(227,130,30,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      /* filaments between nearby particles */
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * (dark ? 0.34 : 0.22);
            ctx.strokeStyle = `rgba(185,130,36,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      /* particles + glyph drift */
      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -30) p.x = width + 30;
          if (p.x > width + 30) p.x = -30;
          if (p.y < -30) p.y = height + 30;
          if (p.y > height + 30) p.y = -30;
        }
        const tw = 0.5 + 0.5 * Math.sin(t / 900 + p.phase);
        if (p.glyph) {
          ctx.font = `${p.glyphSize}px var(--font-deva, serif)`;
          ctx.fillStyle = `rgba(105,32,15,${(dark ? 0.3 : 0.18) * (0.6 + 0.4 * tw)})`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p.glyph, p.x, p.y);
        } else {
          ctx.fillStyle = `rgba(227,130,30,${(dark ? 0.75 : 0.5) * (0.5 + 0.5 * tw)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* HUD ring around the core — futuristic instrument feel */
      const ringR = Math.min(width, height) * 0.4;
      ctx.strokeStyle = dark ? "rgba(217,180,92,0.28)" : "rgba(185,130,36,0.20)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, t / 3000, t / 3000 + Math.PI * 1.6);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (!reduced) raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
