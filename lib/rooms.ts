// Per-page "rooms". Light theme uses the concept's colour blocking
// (paper for Home/About/Contact/cases, cobalt for Work). Dark theme
// collapses every room to Night with Bone text + lifted accents.

export type RoomName = "paper" | "cobalt" | "lime" | "ink";

export const rooms: Record<
  RoomName,
  {
    bg: string;
    text: string;
    link: string;
    active: string;
    pill: string;
    rule: string;
    wipe: string;
    accentText: string;
  }
> = {
  paper: {
    bg: "bg-paper dark:bg-night",
    text: "text-ink dark:text-bone",
    link: "text-ink/60 hover:text-accent dark:text-bone/60 dark:hover:text-accent",
    active: "text-accent",
    pill: "bg-ink text-paper hover:bg-cobalt dark:bg-bone dark:text-ink dark:hover:bg-cobalt",
    rule: "border-rule",
    wipe: "bg-cobalt",
    accentText: "text-accent",
  },
  cobalt: {
    bg: "bg-cobalt dark:bg-night",
    text: "text-paper dark:text-bone",
    link: "text-paper/70 hover:text-lime dark:text-bone/70 dark:hover:text-lime",
    active: "text-lime",
    pill: "bg-lime text-ink hover:bg-paper dark:hover:bg-bone",
    rule: "border-paper/20 dark:border-bone/15",
    wipe: "bg-lime",
    accentText: "text-lime",
  },
  lime: {
    bg: "bg-lime dark:bg-night",
    text: "text-ink dark:text-bone",
    link: "text-ink/60 hover:text-accent dark:text-bone/60 dark:hover:text-accent",
    active: "text-accent dark:text-accent",
    pill: "bg-ink text-paper hover:bg-cobalt dark:bg-bone dark:text-ink",
    rule: "border-ink/15 dark:border-bone/15",
    wipe: "bg-cobalt",
    accentText: "text-accent",
  },
  ink: {
    bg: "bg-ink dark:bg-night",
    text: "text-paper dark:text-bone",
    link: "text-paper/60 hover:text-lime dark:text-bone/60 dark:hover:text-lime",
    active: "text-lime",
    pill: "bg-lime text-ink hover:bg-paper dark:hover:bg-bone",
    rule: "border-paper/15 dark:border-bone/15",
    wipe: "bg-cobalt",
    accentText: "text-lime",
  },
};
