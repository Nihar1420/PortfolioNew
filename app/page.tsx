import Link from "next/link";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { projects, profile } from "@/data/content";

export default function Home() {
  return (
    <Room room="paper">
      {/* Hero */}
      <section className="mx-auto max-w-page px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-14">
        <p className="label text-xs text-muted">
          AI Solutions Architect · Full-Stack Lead
        </p>
        <h1 className="mt-8 text-d1 font-bold tracking-tightest">
          <Rise>I design agents</Rise>
          <Rise delay={0.08} className="text-cobalt">
            that ship.
          </Rise>
        </h1>
        <FadeUp delay={0.25} className="mt-10 max-w-2xl">
          <p className="text-xl leading-snug text-body md:text-2xl">
            {profile.blurb}
          </p>
          <p className="mt-3 text-lg text-cobalt">{profile.lookingFor}</p>
        </FadeUp>
        <FadeUp delay={0.35} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="label rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-cobalt"
          >
            See the work
          </Link>
          <Link
            href="/contact"
            className="label rounded-full border border-ink/20 px-6 py-3 text-sm transition-colors hover:border-ink"
          >
            Get in touch
          </Link>
        </FadeUp>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-page px-6 pb-24 md:px-10">
        <div className="mb-2 flex items-baseline justify-between">
          <p className="label text-xs text-muted">Selected work</p>
          <Link href="/work" className="label text-xs text-cobalt hover:text-ink">
            All projects &rarr;
          </Link>
        </div>
        <ul>
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-1 items-baseline gap-2 border-t border-ink/10 py-6 md:grid-cols-12"
              >
                <span className="label hidden text-xs text-muted md:col-span-1 md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl font-bold tracking-tightest transition-colors group-hover:text-cobalt md:col-span-4 md:text-4xl">
                  {p.title}
                </h3>
                <p className="text-body md:col-span-6">{p.tagline}</p>
                <span className="hidden text-2xl text-cobalt md:col-span-1 md:block md:text-right">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
          <li className="border-t border-ink/10" />
        </ul>
      </section>
    </Room>
  );
}
