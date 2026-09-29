"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const VOICES = ["Deep", "Hype", "Robot"];

export function AudioPlayer({ onTried }: { onTried?: () => void }) {
  const [voice, setVoice] = useState("Hype");
  const [playing, setPlaying] = useState(false);
  return (
    <div className="rounded-3xl bg-ink p-6 text-paper dark:bg-raised">
      <div className="flex items-center justify-between">
        <span className="label text-[10px] text-paper/50">AudioDJ Drops · Generator</span>
        <span className="label text-[10px] text-lime">Press play →</span>
      </div>
      <p className="mt-6 label text-[10px] text-paper/50">Pick a voice</p>
      <div className="mt-2 flex gap-2">
        {VOICES.map((v) => (
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
          onClick={() => {
            setPlaying((p) => !p);
            onTried?.();
          }}
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
