import type { Metadata } from "next";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { ProjectRow } from "@/components/ProjectRow";
import { projects } from "@/data/content";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <Room room="cobalt">
      <section className="mx-auto max-w-page px-6 pb-8 pt-8 md:px-10 md:pt-14">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="text-d2 font-bold tracking-tightest md:col-span-8">
            <Rise>Selected</Rise>
            <Rise delay={0.08} className="text-lime">
              work.
            </Rise>
          </h1>
          <FadeUp delay={0.2} className="md:col-span-4">
            <p className="text-paper/80 dark:text-bone/70 md:text-lg">
              Four shipped systems: a published CLI, an autonomous agent and two
              live commerce products.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto max-w-page px-6 pb-16 md:px-10">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
        <div className="border-t border-paper/20 dark:border-bone/15" />
      </section>
    </Room>
  );
}
