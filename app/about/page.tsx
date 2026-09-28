import type { Metadata } from "next";
import Image from "next/image";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { StatBand } from "@/components/StatBand";
import { about, skills, profile } from "@/data/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Room room="lime">
      <section className="mx-auto max-w-page px-6 pt-6 md:px-10 md:pt-10">
        <div className="grid gap-10 md:grid-cols-12">
          <h1 className="text-d2 font-bold tracking-tightest md:col-span-8">
            <Rise>{about.headline.lead}</Rise>
            <Rise delay={0.08} className="text-cobalt">
              {about.headline.accent}
            </Rise>
          </h1>
          <div className="md:col-span-4 md:flex md:justify-end">
            <div className="arch relative aspect-[3/4] w-full max-w-[15rem] overflow-hidden border border-ink/10 bg-paper">
              <Image
                src="/portrait.jpg"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 70vw, 240px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {about.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p className="leading-snug text-body md:text-lg">{p}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Stat band */}
      <section className="mx-auto max-w-page px-6 py-14 md:px-10">
        <StatBand />
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-page px-6 pb-14 md:px-10">
        <div className="grid gap-6 md:grid-cols-12">
          <h2 className="text-4xl font-bold tracking-tightest md:col-span-3">
            Where I&rsquo;ve worked
          </h2>
          <ol className="md:col-span-9">
            {about.timeline.map((r, i) => (
              <li
                key={i}
                className="grid gap-1 border-t border-ink/20 py-6 md:grid-cols-12 md:gap-4"
              >
                <span className="label text-xs opacity-60 md:col-span-3">
                  {r.period}
                </span>
                <div className="md:col-span-7">
                  <p className="text-xl font-bold">{r.title}</p>
                  <p className="text-body">{r.org}</p>
                </div>
                <span className="label text-xs text-cobalt md:col-span-2 md:text-right">
                  {r.tag}
                </span>
              </li>
            ))}
            <div className="border-t border-ink/20" />
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-page px-6 pb-14 md:px-10">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="grid gap-4 border-t border-ink/20 py-8 md:grid-cols-12 md:items-center"
          >
            <h2 className="text-4xl font-bold tracking-tightest md:col-span-3">
              {group}
            </h2>
            <ul className="flex flex-wrap gap-2 md:col-span-9">
              {items.map((s) => (
                <li
                  key={s}
                  className="label rounded-full border border-ink/40 px-4 py-2 text-xs"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border-t border-ink/20" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-page px-6 pb-20 md:px-10">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="label rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-cobalt"
          >
            Email me
          </a>
          {about.resumeUrl && (
            <a
              href={about.resumeUrl}
              className="label rounded-full border border-ink/30 px-6 py-3 text-sm transition-colors hover:border-ink"
            >
              Download resume
            </a>
          )}
        </div>
      </section>
    </Room>
  );
}
