import type { Project } from "@/data/content";

// Editorial index row: number, title, tagline, tech, year, and the best available link.
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const href = project.liveUrl ?? project.repoUrl ?? project.npmUrl ?? "#";
  const linkLabel = project.liveUrl
    ? "Visit"
    : project.npmUrl
      ? "npm"
      : "Code";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block border-t border-paper-300 py-8 transition-colors hover:bg-paper-100"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-baseline">
        <div className="hidden font-mono text-xs text-ink-faint md:col-span-1 md:block">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="md:col-span-4">
          <h3 className="font-display text-3xl text-ink transition-colors group-hover:text-cobalt md:text-4xl">
            {project.title}
          </h3>
          <span className="mt-2 inline-block font-mono text-xs uppercase tracking-[0.15em] text-cobalt opacity-0 transition-opacity group-hover:opacity-100">
            {linkLabel} &rarr;
          </span>
        </div>
        <p className="text-ink-muted md:col-span-5">{project.tagline}</p>
        <div className="font-mono text-xs text-ink-faint md:col-span-2 md:text-right">
          {project.year}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 md:ml-[8.333%]">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-paper-400 px-3 py-1 font-mono text-[11px] text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
