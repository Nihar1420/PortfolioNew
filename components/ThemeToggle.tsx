"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Theme = "light" | "dark";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
  }, []);

  function apply(next: Theme) {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  function toggle(e: React.MouseEvent) {
    const next: Theme = theme === "dark" ? "light" : "dark";
    // Circle-reveal from the click point, where supported.
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };
    if (
      !doc.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      apply(next);
      return;
    }
    const x = e.clientX;
    const y = e.clientY;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const t = doc.startViewTransition(() => apply(next));
    t.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 550, easing: "cubic-bezier(0.76,0,0.24,1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-current/30 transition-colors hover:border-current",
        className,
      )}
    >
      {theme === "dark" ? (
        // sun
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        // moon
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
