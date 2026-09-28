// Case-study content + architecture-diagram graphs (paper room pages).

export type GNodeVariant = "lime" | "cobalt" | "outline" | "dashed";
export type GNode = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub?: string;
  circle?: boolean;
  variant?: GNodeVariant;
};
export type GEdge = { from: string; to: string };
export type Graph = {
  caption: string;
  w: number;
  h: number;
  nodes: GNode[];
  edges: GEdge[];
};

export type Shot = { label: string; variant: "ink" | "cobalt" | "lime" | "gray"; big?: boolean };

export type CaseStudy = {
  slug: string;
  index: number;
  title: string;
  lede: string;
  role: string;
  statusLabel: string;
  statusValue: string;
  stack: string;
  links: { label: string; href: string }[];
  graph: Graph;
  problem: { heading: string; body: string };
  decision: { heading: string; body: string };
  stats: { big: string; label: string }[];
  shots: Shot[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "githancer",
    index: 1,
    title: "Githancer",
    lede: "Plan and rebuild a repository's commit history across a date range, straight from the terminal. Built for migrations, offline work and timezone clean-ups.",
    role: "Solo · design to publish",
    statusLabel: "Ships as",
    statusValue: "githancer-cli on npm",
    stack: "NestJS · Next.js · Commander · pnpm",
    links: [
      { label: "Repo", href: "https://github.com/Nihar1420/Githancer" },
      { label: "npm", href: "https://www.npmjs.com/package/githancer-cli" },
    ],
    graph: {
      caption: "One engine, two front doors",
      w: 1000,
      h: 340,
      nodes: [
        { id: "engine", x: 500, y: 170, label: "Scheduling engine", circle: true, variant: "lime" },
        { id: "cli", x: 185, y: 100, label: "Commander CLI", variant: "outline" },
        { id: "dash", x: 185, y: 245, label: "Next.js dashboard", variant: "outline" },
        { id: "api", x: 815, y: 100, label: "NestJS API", variant: "cobalt" },
        { id: "oauth", x: 815, y: 245, label: "GitHub OAuth", variant: "outline" },
      ],
      edges: [
        { from: "engine", to: "cli" },
        { from: "engine", to: "dash" },
        { from: "engine", to: "api" },
        { from: "api", to: "oauth" },
      ],
    },
    problem: {
      heading: "Rewriting Git history by hand is slow and easy to get wrong.",
      body: "Moving a repo between hosts, catching up on work done offline, or fixing timestamps from the wrong timezone all mean reconstructing commits over a date range. Githancer turns that into a planned, repeatable job.",
    },
    decision: {
      heading: "One deterministic engine, shared by the CLI and the dashboard.",
      body: "Instead of two implementations drifting apart, a pnpm monorepo holds a single scheduling engine. The Commander CLI and the Next.js dashboard both call it, backed by a NestJS API with GitHub OAuth. Same inputs, same timeline, wherever you run it.",
    },
    stats: [
      { big: "v1.0.8", label: "Published on npm" },
      { big: "27/27", label: "Commits · built solo" },
      { big: "1 engine", label: "Two interfaces" },
    ],
    shots: [
      { label: "CLI in terminal", variant: "ink", big: true },
      { label: "Dashboard timeline", variant: "cobalt" },
      { label: "Scheduling screen", variant: "lime" },
    ],
  },
  {
    slug: "agenthire",
    index: 2,
    title: "Agenthire",
    lede: "An autonomous multi-agent system that finds job and freelance work, enriches every lead and sends the outreach, around the clock.",
    role: "[TODO: your role]",
    statusLabel: "Runs",
    statusValue: "24/7 on cron",
    stack: "Groq · Gemini · Playwright · Resend",
    links: [{ label: "Repo", href: "https://github.com/Nihar1420/Agenthire-2.0" }],
    graph: {
      caption: "An orchestrator with specialists",
      w: 1050,
      h: 340,
      nodes: [
        { id: "cron", x: 110, y: 170, label: "Cron", variant: "dashed" },
        { id: "orch", x: 430, y: 170, label: "Orchestrator", sub: "Groq / Gemini", circle: true, variant: "lime" },
        { id: "disc", x: 760, y: 90, label: "Discovery", variant: "outline" },
        { id: "enr", x: 760, y: 170, label: "Enrichment", variant: "outline" },
        { id: "out", x: 760, y: 250, label: "Outreach", variant: "outline" },
        { id: "imap", x: 945, y: 250, label: "IMAP + Resend", variant: "cobalt" },
      ],
      edges: [
        { from: "cron", to: "orch" },
        { from: "orch", to: "disc" },
        { from: "orch", to: "enr" },
        { from: "orch", to: "out" },
        { from: "out", to: "imap" },
      ],
    },
    problem: {
      heading: "Finding work is a full-time job on top of your job.",
      body: "Searching boards, researching each lead and writing tailored outreach eats hours every week. Agenthire runs that whole loop on its own schedule, so the pipeline keeps moving while you work.",
    },
    decision: {
      heading: "Specialist sub-agents, each routed to the right model.",
      body: "One orchestrator delegates to discovery, enrichment and outreach agents, with per-role routing between Groq and Gemini so each job gets the model that suits it. Playwright handles browsing with stealth automation, and an IMAP plus Resend pipeline sends and tracks email on cron.",
    },
    stats: [
      { big: "3", label: "Specialist agents" },
      { big: "24/7", label: "Unattended on cron" },
      { big: "[TODO]", label: "Applications sent / response rate" },
    ],
    shots: [
      { label: "Hirer queue / dashboard", variant: "cobalt", big: true },
      { label: "An agent run", variant: "ink" },
      { label: "Generated outreach", variant: "lime" },
    ],
  },
  {
    slug: "reel-purpose",
    index: 3,
    title: "Reel Purpose",
    lede: "A full multi-vendor storefront for a fishing-accessories brand, from vendor catalogues to a tax-aware Stripe checkout. Live in production.",
    role: "[TODO: your role]",
    statusLabel: "Status",
    statusValue: "Live",
    stack: "Next.js · Prisma · Stripe · S3 · NextAuth",
    links: [
      { label: "Live", href: "https://reelpurpose.fishing" },
      { label: "Repo", href: "https://github.com/Nihar1420/reel-purpose" },
    ],
    graph: {
      caption: "Many sellers, one checkout",
      w: 1000,
      h: 340,
      nodes: [
        { id: "next", x: 500, y: 170, label: "Next.js", sub: "+ NextAuth", circle: true, variant: "lime" },
        { id: "vendors", x: 180, y: 100, label: "Vendors", variant: "outline" },
        { id: "shoppers", x: 180, y: 245, label: "Shoppers", variant: "outline" },
        { id: "prisma", x: 815, y: 95, label: "Prisma · multi-vendor", variant: "outline" },
        { id: "stripe", x: 820, y: 170, label: "Stripe · server-side tax", variant: "cobalt" },
        { id: "s3", x: 815, y: 250, label: "S3 media", variant: "outline" },
      ],
      edges: [
        { from: "next", to: "vendors" },
        { from: "next", to: "shoppers" },
        { from: "next", to: "prisma" },
        { from: "next", to: "stripe" },
        { from: "next", to: "s3" },
      ],
    },
    problem: {
      heading: "A growing brand needed more than a single-seller shop.",
      body: "Reel Purpose sells fishing accessories and wanted several vendors under one storefront, with real payments, product media and customer accounts.",
    },
    decision: {
      heading: "Model vendors properly, and keep tax on the server.",
      body: "A multi-vendor Prisma schema keeps ownership of products and orders explicit. Stripe checkout handles tax on the server, S3 holds media, and NextAuth handles accounts.",
    },
    stats: [
      { big: "Live", label: "reelpurpose.fishing" },
      { big: "Multi", label: "Vendor marketplace" },
      { big: "[TODO]", label: "Orders, GMV or vendors" },
    ],
    shots: [
      { label: "Shop", variant: "lime", big: true },
      { label: "Product page", variant: "cobalt" },
      { label: "Checkout", variant: "ink" },
      { label: "Vendor admin", variant: "gray" },
    ],
  },
  {
    slug: "audiodj-drops",
    index: 4,
    title: "AudioDJ Drops",
    lede: "Custom voiced DJ drops, fully automated: pick a voice, preview it, pay, and get the finished files delivered. Live in production.",
    role: "[TODO: your role]",
    statusLabel: "Status",
    statusValue: "Live",
    stack: "ffmpeg · Stripe · Cloudflare R2 · cron",
    links: [
      { label: "Live", href: "https://generator.audiodjdrops.com" },
      { label: "Repo", href: "https://github.com/Nihar1420/GeneratorAudioDrops" },
    ],
    graph: {
      caption: "Order to inbox, no hands",
      w: 1060,
      h: 200,
      nodes: [
        { id: "voice", x: 110, y: 100, label: "Voice + preview", variant: "outline" },
        { id: "stripe", x: 340, y: 100, label: "Stripe webhooks", variant: "cobalt" },
        { id: "ffmpeg", x: 565, y: 100, label: "ffmpeg", sub: "Server-side", circle: true, variant: "lime" },
        { id: "r2", x: 800, y: 100, label: "Cloudflare R2", variant: "outline" },
        { id: "zip", x: 965, y: 100, label: "Zip + email", variant: "dashed" },
      ],
      edges: [
        { from: "voice", to: "stripe" },
        { from: "stripe", to: "ffmpeg" },
        { from: "ffmpeg", to: "r2" },
        { from: "r2", to: "zip" },
      ],
    },
    problem: {
      heading: "Every custom drop was a manual job.",
      body: "Generating a voiced drop, taking payment and sending the files each needed a person in the loop. The generator automates the whole path from a customer's first preview to delivery.",
    },
    decision: {
      heading: "Process audio on the server, driven by payment events.",
      body: "A server-side ffmpeg pipeline with voice preview keeps output consistent. Stripe plans and VIP tiers fire webhooks that trigger the work, files live on Cloudflare R2, and a cron job zips and emails every order automatically.",
    },
    stats: [
      { big: "Live", label: "generator.audiodjdrops.com" },
      { big: "Auto", label: "Order to delivery" },
      { big: "[TODO]", label: "Customers, drops or MRR" },
    ],
    shots: [
      { label: "Generator · voice pick + preview", variant: "lime", big: true },
      { label: "Premade catalog", variant: "ink" },
      { label: "Plans / checkout", variant: "cobalt" },
    ],
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
