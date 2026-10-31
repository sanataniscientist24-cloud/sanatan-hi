'use client';

// ── Global audio player store (module-level <audio>, SSR-safe) ────────────────

import { create } from 'zustand';

interface PlayerState {
  currentTitle: string | null;
  audioUrl: string | null;
  isPlaying: boolean;
  isLoading: boolean;
  progress: number; // percent
  currentTime: number; // seconds
  duration: number; // seconds
  load: (title: string, url: string) => void;
  play: (title: string, url: string) => void;
  toggle: () => void;
  stop: () => void;
  setLoading: (v: boolean) => void;
}

let audioEl: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;
  if (!audioEl) {
    audioEl = new Audio();
    audioEl.preload = 'auto';
    audioEl.addEventListener('timeupdate', () => {
      if (!audioEl) return;
      const usePlayer = usePlayerStore.getState();
      const dur = Number.isFinite(audioEl.duration) ? audioEl.duration : 0;
      const pct = dur > 0 ? (audioEl.currentTime / dur) * 100 : 0;
      usePlayerStore.setState({
        currentTime: audioEl.currentTime,
        duration: dur,
        progress: pct,
      });
    });
    audioEl.addEventListener('ended', () => {
      usePlayerStore.setState({ isPlaying: false, progress: 100 });
    });
    audioEl.addEventListener('pause', () => {
      usePlayerStore.setState({ isPlaying: false });
    });
    audioEl.addEventListener('play', () => {
      usePlayerStore.setState({ isPlaying: true });
    });
  }
  return audioEl;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTitle: null,
  audioUrl: null,
  isPlaying: false,
  isLoading: false,
  progress: 0,
  currentTime: 0,
  duration: 0,
  load: (title, url) => {
    set({ currentTitle: title, isLoading: true, progress: 0, currentTime: 0, duration: 0 });
    const a = getAudio();
    if (!a) return;
    a.src = url;
    a.load();
  },
  play: (title, url) => {
    const a = getAudio();
    if (!a) return;
    if (get().audioUrl === url && a.src) {
      a.play().catch(() => undefined);
      return;
    }
    set({ currentTitle: title, audioUrl: url, isLoading: true, progress: 0, currentTime: 0, duration: 0 });
    a.src = url;
    a.play().catch(() => set({ isLoading: false, isPlaying: false }));
  },
  toggle: () => {
    const a = getAudio();
    if (!a || !a.src) return;
    if (a.paused) {
      a.play().catch(() => undefined);
    } else {
      a.pause();
    }
  },
  stop: () => {
    const a = getAudio();
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    a.removeAttribute('src');
    set({ currentTitle: null, audioUrl: null, isPlaying: false, progress: 0, currentTime: 0, duration: 0 });
  },
  setLoading: (v) => set({ isLoading: v }),
}));
