import type { Project } from "@/data/content";

// Work list row. Lime floods up on hover and the text flips to ink.
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const href = project.liveUrl ?? project.repoUrl ?? project.npmUrl ?? "#";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden border-t border-paper/20"
    >
      {/* flood layer */}
      <span className="absolute inset-0 -z-0 translate-y-full bg-lime transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-3 px-1 py-7 transition-colors duration-300 group-hover:text-ink md:grid-cols-12 md:py-8">
        <div className="label hidden text-xs opacity-60 md:col-span-1 md:block">
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="text-4xl font-bold tracking-tightest md:col-span-4 md:text-5xl">
          {project.title}
        </h3>
        <p className="max-w-md text-base leading-snug opacity-90 md:col-span-6">
          {project.tagline}
        </p>
        <div className="hidden justify-end text-3xl md:col-span-1 md:flex">
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
