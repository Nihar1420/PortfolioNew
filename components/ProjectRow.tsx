import Link from "next/link";
import type { Project } from "@/data/content";

// Work list row. Lime floods up on hover, text flips to ink, arrow turns up-right.
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden border-t border-paper/20 dark:border-bone/15"
    >
      <span className="absolute inset-0 -z-0 translate-y-full bg-lime transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

      <div className="relative z-10 grid grid-cols-1 gap-3 px-1 py-7 transition-colors duration-300 group-hover:text-ink md:grid-cols-12 md:items-center md:py-9">
        <div className="md:col-span-7">
          <p className="label text-[10px] opacity-70">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h3 className="mt-2 text-4xl font-bold tracking-tightest md:text-6xl">
            {project.title}
          </h3>
        </div>

        <p className="max-w-sm text-sm leading-snug opacity-90 md:col-span-4">
          {project.tagline}
        </p>

        <div className="hidden justify-end md:col-span-1 md:flex">
          <span className="inline-block text-3xl transition-transform duration-300 group-hover:-rotate-45">
            &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
