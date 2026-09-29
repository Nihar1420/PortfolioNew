"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

// Original, synthesized preview tones (Web Audio) — no audio files, no licensing.
const VOICES: Record<string, { base: number; type: OscillatorType }> = {
  Deep: { base: 110, type: "sine" },
  Hype: { base: 220, type: "sawtooth" },
  Robot: { base: 165, type: "square" },
};
const SEQ = [0, 4, 7, 12, 7, 4]; // a simple arpeggio in semitones

export function AudioPlayer({ onTried }: { onTried?: () => void }) {
  const [voice, setVoice] = useState("Hype");
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const voiceRef = useRef(voice);

  useEffect(() => {
    voiceRef.current = voice;
  }, [voice]);

  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current);
      ctxRef.current?.close().catch(() => {});
    },
    [],
  );

  function note(freq: number) {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const cfg = VOICES[voiceRef.current];
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = cfg.type;
    o.frequency.value = freq;
    o.connect(g);
    g.connect(ctx.destination);
    const t = ctx.currentTime;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
    o.start(t);
    o.stop(t + 0.3);
  }

  function stop() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    setPlaying(false);
  }

  function toggle() {
    onTried?.();
    if (playing) {
      stop();
      return;
    }
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!ctxRef.current) ctxRef.current = new AC();
    ctxRef.current.resume().catch(() => {});
    let i = 0;
    const play = () => {
      const base = VOICES[voiceRef.current].base;
      note(base * Math.pow(2, SEQ[i] / 12));
      i = (i + 1) % SEQ.length;
    };
    play();
    timerRef.current = setInterval(play, 260);
    setPlaying(true);
  }

  return (
    <div className="rounded-3xl bg-ink p-6 text-paper dark:bg-raised">
      <div className="flex items-center justify-between">
        <span className="label text-[10px] text-paper/50">AudioDJ Drops · Generator</span>
        <span className="label text-[10px] text-lime">Press play →</span>
      </div>
      <p className="mt-6 label text-[10px] text-paper/50">Pick a voice</p>
      <div className="mt-2 flex gap-2">
        {Object.keys(VOICES).map((v) => (
          <button
            key={v}
            onClick={() => {
              setVoice(v);
              onTried?.();
            }}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition-colors",
              voice === v ? "bg-lime text-ink" : "border border-paper/30 text-paper",
            )}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cobalt text-paper"
        >
          {playing ? "❚❚" : "▶"}
        </button>
        <div className="flex h-12 flex-1 items-center gap-1">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className={cn("h-full flex-1 origin-center rounded-sm bg-paper/40", playing && "animate-eq")}
              style={{ transform: playing ? undefined : "scaleY(0.2)", animationDelay: `${(i % 8) * 0.06}s` }}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 flex flex-wrap justify-between gap-2 text-xs text-paper/50">
        <span>Voice: {voice} · press play to preview</span>
        <span className="label">ffmpeg · R2 · Stripe</span>
      </p>
    </div>
  );
}
