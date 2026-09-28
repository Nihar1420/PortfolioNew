import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { AvailableBadge } from "@/components/AvailableBadge";
import { ProjectRow } from "@/components/ProjectRow";
import { profile, projects, skills } from "@/data/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-page px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-9">
            <p className="eyebrow mb-6 font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
              {profile.name} · {profile.location}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              I build{" "}
              <span className="text-cobalt">AI-native products</span> and lead
              the teams that ship them.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink-muted md:text-xl">
              {profile.blurb}
            </p>
            <p className="mt-4 font-display text-lg text-ink-warm">
              {profile.lookingFor}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-full bg-cobalt px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-ink"
              >
                See the work
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-paper-400 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="hidden justify-end md:col-span-3 md:flex">
            <AvailableBadge size={140} />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-page px-6 py-16 md:px-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            Selected work
          </h2>
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-[0.15em] text-cobalt hover:text-ink"
          >
            All projects &rarr;
          </Link>
        </div>
        <div>
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectRow project={p} index={i} />
            </Reveal>
          ))}
          <div className="border-t border-paper-300" />
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-page px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint md:col-span-3">
            What I work with
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

      {/* Contact CTA */}
      <section className="mx-auto max-w-page px-6 py-24 md:px-10">
        <div className="rounded-3xl bg-ink px-8 py-16 text-paper md:px-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">
            {profile.availability}
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Have an AI-native product to build? Let&rsquo;s talk.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block rounded-full bg-lime px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
        </div>
      </section>
    </>
  );
}
