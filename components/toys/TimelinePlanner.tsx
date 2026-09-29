"use client";

import { useState } from "react";

export function TimelinePlanner({ onTried }: { onTried?: () => void }) {
  const [spread, setSpread] = useState(false);
  const dots = Array.from({ length: 14 });
  return (
    <div className="rounded-3xl bg-ink p-6 text-paper dark:bg-raised">
      <div className="flex items-center justify-between">
        <span className="label text-[10px] text-paper/50">Githancer · Timeline planner</span>
        <span className="label text-[10px] text-lime">Try it →</span>
      </div>
      <p className="mt-6 text-2xl font-bold tracking-tightest">
        {spread ? "14 commits, spread across the range" : "14 commits, all stuck on one day"}
      </p>
      <div className="relative mt-6 h-20">
        {dots.map((_, i) => (
          <span
            key={i}
            className="absolute h-7 w-7 rounded-md bg-lime transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={
              spread
                ? { left: `calc(${(i / (dots.length - 1)) * 100}% - 14px)`, top: "28px" }
                : { left: `${i * 5}px`, top: `${(i % 4) * 6}px` }
            }
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between label text-[9px] text-paper/40">
        <span>Range start</span>
        <span>Range end</span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-xs text-paper/50">Plan → preview → apply. Same result in CLI or dashboard.</span>
        <button
          onClick={() => {
            setSpread((s) => !s);
            onTried?.();
          }}
          className="label shrink-0 rounded-full bg-lime px-4 py-2 text-xs text-ink"
        >
          {spread ? "Cluster again" : "Spread them out"}
        </button>
      </div>
    </div>
  );
}
