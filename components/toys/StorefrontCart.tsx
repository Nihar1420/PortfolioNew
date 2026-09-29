"use client";

import { useState } from "react";

const PRODUCTS = [
  { v: "Vendor A", n: "Spinning reel" },
  { v: "Vendor B", n: "Soft lure pack" },
  { v: "Vendor C", n: "Braided line" },
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
            <div className="flex aspect-square items-center justify-center rounded-lg bg-ink/10 label text-[8px] text-ink/40">
              [photo]
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
