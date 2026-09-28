import { profile } from "@/data/content";

// Rotating circular badge with a lime center dot. Pure CSS/SVG, no JS.
export function AvailableBadge({ size = 128 }: { size?: number }) {
  const text = `${profile.availability} · `.toUpperCase();
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-label={profile.availability}
    >
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow h-full w-full motion-reduce:animate-none"
      >
        <defs>
          <path
            id="badge-ring"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
            fill="none"
          />
        </defs>
        <text className="fill-ink-warm font-mono text-[7.5px] tracking-[0.18em]">
          <textPath href="#badge-ring" startOffset="0">
            {text.repeat(2)}
          </textPath>
        </text>
      </svg>
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime ring-4 ring-lime/30" />
    </div>
  );
}
