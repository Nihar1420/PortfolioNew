import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { AvailableBadge } from "@/components/AvailableBadge";
import { about, skills, profile } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: profile.blurb,
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-page px-6 pb-12 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          {/* Portrait (arch) */}
          <div className="md:col-span-4">
            <div className="arch relative aspect-[3/4] w-full max-w-xs overflow-hidden bg-paper-300">
              {/* TODO(you): drop portrait.jpg into /public and swap this block for:
                  <Image src="/portrait.jpg" alt="Nihar Ranjan Hota" fill className="object-cover" /> */}
              <div className="flex h-full items-center justify-center p-6 text-center font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                Portrait
                <br />
                (add /public/portrait.jpg)
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <p className="eyebrow mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
              About
            </p>
            <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              {profile.role}.
            </h1>
            <div className="mt-8 space-y-5 text-lg text-ink-muted">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-page px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint md:col-span-3">
            Toolkit
          </h2>
          <div className="grid gap-10 md:col-span-9 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-display text-2xl text-ink">{group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-paper-400 px-3 py-1 font-mono text-[11px] text-ink-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-page px-6 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint md:col-span-3">
            Enterprise delivery
          </h2>
          <ul className="space-y-4 md:col-span-9">
            {about.clients.map((c, i) => (
              <li key={i} className="flex gap-3 text-ink-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Availability + resume */}
      <section className="mx-auto max-w-page px-6 py-20 md:px-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <AvailableBadge size={120} />
          <h2 className="max-w-2xl font-display text-3xl text-ink md:text-4xl">
            {profile.lookingFor}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-cobalt px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-ink"
            >
              Email me
            </a>
            {about.resumeUrl && (
              <a
                href={about.resumeUrl}
                className="rounded-full border border-paper-400 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
              >
                Download resume
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
