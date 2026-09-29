"use client";

import { useState } from "react";

// Original, simple line illustrations of fishing gear (no external images).
function ReelArt() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="28" cy="34" r="14" />
      <circle cx="28" cy="34" r="4" />
      <path d="M28 6v10M22 6h12" />
      <path d="M42 30l12-6M50 24v10" />
    </svg>
  );
}
function LureArt() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 24c10-10 24-10 30 0-6 10-20 10-30 0z" />
      <circle cx="20" cy="24" r="1.6" fill="currentColor" />
      <path d="M44 24c6 2 8 8 8 14M52 38c-4 0-6-3-6-6" />
    </svg>
  );
}
function LineArt() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <rect x="18" y="14" width="28" height="36" rx="4" />
      <path d="M18 22h28M18 30h28M18 38h28" />
      <path d="M14 14v36M50 14v36" />
    </svg>
  );
}

const PRODUCTS = [
  { v: "Vendor A", n: "Spinning reel", Art: ReelArt, tint: "bg-cobalt/15 text-cobalt" },
  { v: "Vendor B", n: "Soft lure pack", Art: LureArt, tint: "bg-ink/10 text-ink" },
  { v: "Vendor C", n: "Braided line", Art: LineArt, tint: "bg-lime/40 text-ink" },
];

export function StorefrontCart({ onTried }: { onTried?: () => void }) {
  const [cart, setCart] = useState(0);
  return (
    <div className="rounded-3xl bg-lime p-6 text-ink">
      <div className="flex items-center justify-between">
        <span className="label text-[10px] text-ink/60">Storefront mock · illustrative</span>
        <span className="rounded-full bg-ink px-3 py-1 label text-[10px] text-paper">Cart {cart}</span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {PRODUCTS.map((p) => (
          <div key={p.n} className="rounded-2xl bg-paper p-3">
            <div className={`flex aspect-square items-center justify-center rounded-lg ${p.tint}`}>
              <p.Art />
            </div>
            <p className="mt-2 label text-[9px] text-ink/50">{p.v}</p>
            <p className="text-sm font-bold leading-tight">{p.n}</p>
            <button
              onClick={() => {
                setCart((c) => c + 1);
                onTried?.();
              }}
              className="mt-2 w-full rounded-full border border-ink/30 py-1.5 text-[11px] font-bold transition-colors hover:bg-ink hover:text-paper"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span>Three vendors, one cart, one Stripe checkout.</span>
        <span className="label text-ink/50">Stripe · server-side tax</span>
      </div>
    </div>
  );
}
