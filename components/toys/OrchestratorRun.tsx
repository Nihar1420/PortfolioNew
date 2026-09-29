"use client";

import { useState } from "react";

const LOG = [
  "orchestrator · plan created",
  "discovery · new listings found",
  "enrichment · company + role profiled",
  "outreach · tailored draft written",
  "email · queued via Resend",
  "next run · on cron",
];
const LANES = ["Discovery", "Enrichment", "Outreach"];

export function OrchestratorRun({ onTried }: { onTried?: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [running, setRunning] = useState(false);

  function run() {
    if (running) return;
    onTried?.();
    setRunning(true);
    setLines([]);
    LOG.forEach((l, i) => {
      setTimeout(
        () => {
          setLines((p) => [...p, l]);
          if (i === LOG.length - 1) setRunning(false);
        },
        420 * (i + 1),
      );
    });
  }

  return (
    <div className="rounded-3xl bg-cobalt p-6 text-paper">
      <div className="flex items-center justify-between">
        <span className="label text-[10px] text-paper/60">Agenthire · Orchestrator run</span>
        <button onClick={run} className="label rounded-full bg-lime px-4 py-2 text-xs text-ink">
          ▶ Run the agents
        </button>
      </div>
      <div className="mt-6 space-y-3">
        {LANES.map((l, i) => (
          <div key={l}>
            <p className="text-sm font-bold">{l}</p>
            <div className="mt-1 h-1.5 overflow-hidden rounded bg-paper/20">
              <div
                className="h-full bg-lime transition-all duration-700"
                style={{ width: lines.length > i + 1 ? "100%" : running ? "45%" : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 min-h-[128px] rounded-xl bg-deepcobalt p-4 font-mono text-[11px] leading-relaxed text-paper/80">
        {lines.length === 0 ? (
          <span className="text-paper/40">press run…</span>
        ) : (
          lines.map((l, i) => <div key={i}>{l}</div>)
        )}
      </div>
      <p className="mt-3 label text-[9px] text-paper/50">Routed per role · Groq / Gemini</p>
    </div>
  );
}
