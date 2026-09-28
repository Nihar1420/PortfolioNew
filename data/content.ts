// Single source of truth for site content. Edit here.

export const profile = {
  name: "Nihar Ranjan Hota",
  role: "Senior Full-Stack Engineer and AI Solutions Architect",
  location: "Ahmedabad, India",
  blurb:
    "Senior Full-Stack Engineer and AI Solutions Architect. About 7 years building full-stack systems, now focused on LLM agents, RAG, and multi-agent architectures.",
  lookingFor: "Open to senior IC and architect roles on AI-native products.",
  availability: "Available · senior AI roles · 2026",
  email: "niharranjanhota864@gmail.com",
  linkedin: "https://www.linkedin.com/in/nihar-ranjan-hota/",
  github: "https://github.com/Nihar1420",
  // TODO: replace with your custom domain if you set one up
  domain: "https://nihar-dev.vercel.app",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  npmUrl?: string;
  // TODO(you): add a real metric if you have one; otherwise leave undefined.
  metric?: string;
};

export const projects: Project[] = [
  {
    slug: "githancer",
    title: "Githancer",
    tagline:
      "Git timeline manager shipped as a published npm CLI. One deterministic scheduling engine powers both a Next.js dashboard and the terminal.",
    year: "2026",
    tech: ["NestJS", "Next.js", "TypeScript", "pnpm monorepo", "PostgreSQL"],
    repoUrl: "https://github.com/Nihar1420/Githancer",
    npmUrl: "https://www.npmjs.com/package/githancer-cli",
    metric: "Published npm package (githancer-cli)",
  },
  {
    slug: "agenthire",
    title: "Agenthire",
    tagline:
      "Autonomous multi-agent job and freelance application agent. An orchestrator routes work to specialised sub-agents across Groq and Gemini.",
    year: "2026",
    tech: ["Node.js", "Multi-agent", "Groq / Gemini", "Playwright", "Cron"],
    repoUrl: "https://github.com/Nihar1420/Agenthire-2.0",
  },
  {
    slug: "reel-purpose",
    title: "Reel Purpose",
    tagline:
      "Full-stack, multi-vendor e-commerce for fishing accessories, with Stripe checkout, tax handling, and vendor onboarding.",
    year: "2025",
    tech: ["Next.js", "Prisma", "Stripe", "PostgreSQL", "S3"],
    liveUrl: "https://reelpurpose.fishing",
    repoUrl: "https://github.com/Nihar1420/reel-purpose",
  },
  {
    slug: "audiodj-drops",
    title: "AudioDJ Drops",
    tagline:
      "A DJ-drops generation platform: voice generation and preview, ffmpeg audio processing, subscription plans, and automated delivery.",
    year: "2025",
    tech: ["Next.js", "ffmpeg", "Stripe", "Cloudflare R2", "Prisma"],
    liveUrl: "https://generator.audiodjdrops.com",
    repoUrl: "https://github.com/Nihar1420/GeneratorAudioDrops",
  },
];

export const skills = {
  "Full-stack": [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "NestJS",
    ".NET / C#",
    "PHP / Laravel",
  ],
  "AI / LLM": [
    "Anthropic Claude API",
    "LangChain",
    "LangGraph",
    "AutoGen",
    "CrewAI",
    "RAG pipelines",
    "Multi-agent systems",
    "MCP",
  ],
};

export const about = {
  paragraphs: [
    "I design and ship AI-native products, and lead a small senior engineering team delivering them to enterprise clients across Germany, Italy, and the UAE.",
    "My work sits where full-stack engineering meets applied AI: LLM agents, RAG pipelines, and multi-agent architectures, wrapped in production systems that real businesses depend on.",
    "Recognised internally as Emerging Team Lead and Best Performer. I care about systems that are correct, legible, and genuinely useful, not demos.",
  ],
  // TODO(you): confirm company/title/years, then flip `show` to true.
  timeline: {
    show: false,
    roles: [
      { period: "TODO", title: "TODO title", org: "TODO company" },
    ],
  },
  // Anonymised until you confirm you can name them.
  clients: [
    "CRM and LLM quotation automation for an international architecture firm (Zoho CRM, a custom 14-stage production pipeline, Mistral-based quotations).",
    "AI-integrated systems for enterprise clients across Germany, Italy, and the UAE.",
  ],
  // TODO(you): drop resume.pdf into /public and set to "/resume.pdf".
  resumeUrl: "",
};

export const openSource = {
  title: "Open source",
  items: [
    {
      text: "Identified and submitted a fix for a cross-tenant data-isolation bug in langchain-ai/deepagentsjs; maintainers confirmed it and addressed it upstream.",
      url: "https://github.com/langchain-ai/deepagentsjs/pull/796",
    },
  ],
};
