"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/data/content";
import { rooms, type RoomName } from "@/lib/rooms";
import { cn } from "@/lib/cn";

export function Nav({ room }: { room: RoomName }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const r = rooms[room];

  return (
    <header className="relative z-50">
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className={cn("text-2xl font-bold tracking-tightest", r.text)}>
          nihar<span className={r.accentText}>.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("label text-sm transition-colors", active ? r.active : r.link)}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/contact"
            className={cn("label rounded-full px-5 py-2 text-sm transition-colors", r.pill)}
          >
            Let&rsquo;s talk
          </a>
        </div>

        <button
          className={cn("md:hidden", r.text)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-7">
            <span className={cn("absolute left-0 h-0.5 w-7 bg-current transition-transform", open ? "top-2 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 top-2 h-0.5 w-7 bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("absolute left-0 h-0.5 w-7 bg-current transition-transform", open ? "top-2 -rotate-45" : "top-4")} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <ul className="mx-auto flex max-w-page flex-col px-6 pb-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn("block py-2 text-5xl font-bold tracking-tightest", r.text)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
