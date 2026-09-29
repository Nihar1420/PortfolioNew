"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { TimelinePlanner } from "@/components/toys/TimelinePlanner";
import { OrchestratorRun } from "@/components/toys/OrchestratorRun";
import { StorefrontCart } from "@/components/toys/StorefrontCart";
import { AudioPlayer } from "@/components/toys/AudioPlayer";

const projects = [
  {
    id: "githancer",
    meta: "01 · Published npm CLI · Solo",
    title: "Githancer",
    desc: "Plan and rebuild a repository's commit history across a date range, from the terminal. One deterministic engine behind both the CLI and the dashboard.",
    tech: "NestJS · Next.js · Commander · GitHub OAuth",
    href: "/work/githancer",
  },
  {
    id: "agenthire",
    meta: "02 · Multi-agent · Runs 24/7",
    title: "Agenthire",
    desc: "An orchestrator hands work to specialist agents that find openings, profile each lead and write the outreach, then Playwright and cron keep it running without me.",
    tech: "Groq · Gemini · Playwright · IMAP · Resend",
    href: "/work/agenthire",
  },
  {
    id: "reel-purpose",
    meta: "03 · Live · reelpurpose.fishing",
    title: "Reel Purpose",
    desc: "A multi-vendor storefront for a fishing-accessories brand: many sellers, one checkout, tax handled on the server.",
    tech: "Next.js · Prisma · Stripe · S3 · NextAuth",
    href: "/work/reel-purpose",
  },
  {
    id: "audiodj-drops",
    meta: "04 · Live · generator.audiodjdrops.com",
    title: "AudioDJ Drops",
    desc: "Type a drop, pick a voice, preview it, pay, and get the files by email. Server-side ffmpeg does the heavy lifting.",
    tech: "ffmpeg · Stripe webhooks · Cloudflare R2 · cron",
    href: "/work/audiodj-drops",
  },
];

export function ProjectsShowcase() {
  const [tried, setTried] = useState<Set<string>>(new Set());
  const mark = (id: string) => setTried((s) => (s.has(id) ? s : new Set(s).add(id)));

  const toy = (id: string) => {
    const onTried = () => mark(id);
    if (id === "githancer") return <TimelinePlanner onTried={onTried} />;
    if (id === "agenthire") return <OrchestratorRun onTried={onTried} />;
    if (id === "reel-purpose") return <StorefrontCart onTried={onTried} />;
    return <AudioPlayer onTried={onTried} />;
  };

  return (
    <section id="projects" className="mx-auto max-w-page px-6 py-16 md:px-10">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-d3 font-bold tracking-tightest">
          Projects to <span className="text-cobalt">talk about.</span>
        </h2>
        <div className="text-right">
          <p className="max-w-xs text-sm text-body">
            Each one comes with a tiny working toy. Press the buttons.
          </p>
          <div className="mt-3 flex items-center justify-end gap-3">
            <span className="label rounded-full border border-rule px-3 py-1 text-[10px] dark:border-bone/20">
              {tried.size}/4 toys tried
            </span>
            <Link href="/work" className="label text-[10px] text-cobalt hover:underline">
              All projects →
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {projects.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={p.id} className="grid items-center gap-8 md:grid-cols-2">
              <div className={cn(flip && "md:order-2")}>{toy(p.id)}</div>
              <div className={cn(flip && "md:order-1")}>
                <p className="label text-[10px] text-cobalt">{p.meta}</p>
                <h3 className="mt-3 text-4xl font-bold tracking-tightest md:text-5xl">{p.title}</h3>
                <p className="mt-4 max-w-md text-body">{p.desc}</p>
                <p className="mt-4 label text-[10px] text-muted">{p.tech}</p>
                <Link
                  href={p.href}
                  className="mt-5 inline-block font-bold text-cobalt hover:underline"
                >
                  Read the case study →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
