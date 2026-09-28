import Link from "next/link";
import { nav, profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-paper-300 bg-paper-100">
      <div className="mx-auto grid max-w-page gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-2xl text-ink">
            Nihar<span className="text-cobalt">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-ink-muted">
            {profile.role}. Based in {profile.location}.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-warm">
            <span className="h-2 w-2 rounded-full bg-lime ring-4 ring-lime/30" />
            {profile.availability}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-muted transition-colors hover:text-cobalt"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
            Elsewhere
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-ink-muted transition-colors hover:text-cobalt"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-ink-muted transition-colors hover:text-cobalt"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-ink-muted transition-colors hover:text-cobalt"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-page px-6 pb-10 md:px-10">
        <p className="font-mono text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
