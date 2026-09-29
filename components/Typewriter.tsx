"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export type Seg = { text: string; accent?: boolean };

export function Typewriter({
  segments,
  className,
  accentClass = "text-accent",
  speed = 14,
}: {
  segments: Seg[];
  className?: string;
  accentClass?: string;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const total = segments.reduce((a, s) => a + s.text.length, 0);
  const [n, setN] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setN(total);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const id = setInterval(() => {
            i += 1;
            setN(i);
            if (i >= total) clearInterval(id);
          }, speed);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce, total, speed]);

  const done = n >= total;
  let remaining = n;

  return (
    <p ref={ref} className={className}>
      {segments.map((s, idx) => {
        const show = Math.max(0, Math.min(s.text.length, remaining));
        remaining -= s.text.length;
        return (
          <span key={idx} className={s.accent ? accentClass : undefined}>
            {s.text.slice(0, show)}
          </span>
        );
      })}
      {!done && (
        <span className="ml-0.5 inline-block animate-pulse" aria-hidden>
          |
        </span>
      )}
    </p>
  );
}
