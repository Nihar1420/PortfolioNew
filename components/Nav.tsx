"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, profile } from "@/data/content";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-300/70 bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Nihar<span className="text-cobalt">.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-cobalt",
                    active && "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-cobalt"
            >
              Say hello
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-6 bg-ink transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-0.5 w-6 bg-ink transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-paper-300 bg-paper md:hidden">
          <ul className="mx-auto flex max-w-page flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper"
              >
                Say hello
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
