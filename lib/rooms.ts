// Per-page "rooms" from the design spec:
// Home/case = Paper, Work/404 = Cobalt, About = Lime, Contact = Ink.

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
    wipe: string; // color of the entrance panel that lifts off
    accentText: string; // headline accent color
  }
> = {
  paper: {
    bg: "bg-paper",
    text: "text-ink",
    link: "text-ink/60 hover:text-cobalt",
    active: "text-cobalt",
    pill: "bg-ink text-paper hover:bg-cobalt",
    rule: "border-rule",
    wipe: "bg-cobalt",
    accentText: "text-cobalt",
  },
  cobalt: {
    bg: "bg-cobalt",
    text: "text-paper",
    link: "text-paper/70 hover:text-lime",
    active: "text-lime",
    pill: "bg-lime text-ink hover:bg-paper",
    rule: "border-paper/20",
    wipe: "bg-lime",
    accentText: "text-lime",
  },
  lime: {
    bg: "bg-lime",
    text: "text-ink",
    link: "text-ink/60 hover:text-cobalt",
    active: "text-cobalt",
    pill: "bg-ink text-paper hover:bg-cobalt",
    rule: "border-ink/15",
    wipe: "bg-cobalt",
    accentText: "text-cobalt",
  },
  ink: {
    bg: "bg-ink",
    text: "text-paper",
    link: "text-paper/60 hover:text-lime",
    active: "text-lime",
    pill: "bg-lime text-ink hover:bg-paper",
    rule: "border-paper/15",
    wipe: "bg-cobalt",
    accentText: "text-lime",
  },
};
