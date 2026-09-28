import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ProjectRow } from "@/components/ProjectRow";
import { projects, openSource } from "@/data/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects: AI agents, developer tools, and full-stack products.",
};

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-page px-6 pb-8 pt-20 md:px-10 md:pt-28">
        <p className="eyebrow mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
          Work
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-ink md:text-6xl">
          Products, tools, and agents I have designed and shipped.
        </h1>
      </section>

      <section className="mx-auto max-w-page px-6 py-8 md:px-10">
        <div>
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <ProjectRow project={p} index={i} />
            </Reveal>
          ))}
          <div className="border-t border-paper-300" />
        </div>
      </section>

      {/* Open source */}
      <section className="mx-auto max-w-page px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint md:col-span-3">
            {openSource.title}
          </h2>
          <ul className="space-y-4 md:col-span-9">
            {openSource.items.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-3 text-ink-muted transition-colors hover:text-ink"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  <span>
                    {item.text}{" "}
                    <span className="font-mono text-xs text-cobalt group-hover:underline">
                      View &rarr;
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
