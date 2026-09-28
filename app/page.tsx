import Link from "next/link";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { NodeGraph } from "@/components/NodeGraph";
import type { Graph } from "@/data/casestudies";
import { projects, profile } from "@/data/content";

const heroGraph: Graph = {
  caption: "",
  w: 420,
  h: 340,
  nodes: [
    { id: "orch", x: 210, y: 170, label: "Orchestrator", circle: true, variant: "lime" },
    { id: "planner", x: 82, y: 78, label: "Planner", variant: "outline" },
    { id: "retriever", x: 338, y: 78, label: "Retriever", variant: "outline" },
    { id: "critic", x: 82, y: 262, label: "Critic", variant: "outline" },
    { id: "tools", x: 338, y: 262, label: "Tools", variant: "outline" },
  ],
  edges: [
    { from: "orch", to: "planner" },
    { from: "orch", to: "retriever" },
    { from: "orch", to: "critic" },
    { from: "orch", to: "tools" },
  ],
};

export default function Home() {
  return (
    <Room room="paper">
      {/* Hero */}
      <section className="mx-auto max-w-page px-6 pb-20 pt-6 md:px-10 md:pb-28 md:pt-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <p className="label text-xs text-muted">
              {profile.name} · Ahmedabad
            </p>
            <h1 className="mt-5 text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tightest">
              <Rise>I wire AI</Rise>
              <Rise delay={0.08}>
                <span className="box-decoration-clone bg-lime px-2 text-ink">agents</span>{" "}
                into
              </Rise>
              <Rise delay={0.16} className="text-cobalt">
                real software.
              </Rise>
            </h1>
            <FadeUp delay={0.3} className="mt-8 max-w-xl">
              <p className="text-lg leading-snug text-body md:text-xl">
                Senior Full-Stack Engineer and AI Solutions Architect. Open to
                senior IC and architect roles on AI-native products.
              </p>
            </FadeUp>
            <FadeUp delay={0.4} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work"
                className="label rounded-full bg-ink px-6 py-3 text-center text-sm text-paper transition-colors hover:bg-cobalt"
              >
                See the work
              </Link>
              <Link
                href="/contact"
                className="label rounded-full border border-ink/25 px-6 py-3 text-center text-sm transition-colors hover:border-ink"
              >
                Let&rsquo;s talk
              </Link>
            </FadeUp>
          </div>

          {/* Hero agent graph */}
          <div className="order-1 md:order-2">
            <NodeGraph graph={heroGraph} tone="light" panel={false} />
          </div>
        </div>
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
                className="group grid grid-cols-1 items-center gap-2 border-t border-ink/15 py-7 md:grid-cols-12 md:py-8"
              >
                <span className="label hidden text-xs text-muted md:col-span-1 md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-4xl font-bold tracking-tightest transition-colors group-hover:text-cobalt md:col-span-4 md:text-5xl">
                  {p.title}
                </h3>
                <p className="text-body md:col-span-6">{p.tagline}</p>
                <span className="hidden justify-end text-3xl text-cobalt transition-transform group-hover:translate-x-1 md:col-span-1 md:flex">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
          <li className="border-t border-ink/15" />
        </ul>
      </section>
    </Room>
  );
}
