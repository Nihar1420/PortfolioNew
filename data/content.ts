// Single source of truth for site content. Edit here.

export const profile = {
  name: "Nihar Ranjan Hota",
  role: "Senior AI Solutions Architect and Full-Stack Engineering Lead",
  location: "Ahmedabad, India",
  timezone: "IST (UTC+5:30)",
  blurb:
    "Senior AI Solutions Architect and Full-Stack Engineering Lead. Seven years across the stack, now building AI-native products: LLM agents, RAG, and multi-agent systems.",
  lookingFor: "Open to senior IC and architect roles on AI-native products.",
  email: "niharranjanhota864@gmail.com",
  linkedin: "https://www.linkedin.com/in/nihar-ranjan-hota/",
  github: "https://github.com/Nihar1420",
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
  category: string;
  tagline: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  npmUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "githancer",
    title: "Githancer",
    category: "Published npm CLI",
    tagline: "Rebuild a repo's commit history from the terminal.",
    tech: ["NestJS", "Next.js", "TypeScript", "pnpm monorepo"],
    repoUrl: "https://github.com/Nihar1420/Githancer",
    npmUrl: "https://www.npmjs.com/package/githancer-cli",
  },
  {
    slug: "agenthire",
    title: "Agenthire",
    category: "Multi-agent",
    tagline: "Specialist agents that find, enrich and pitch work 24/7.",
    tech: ["Node.js", "Multi-agent", "Groq / Gemini", "Playwright"],
    repoUrl: "https://github.com/Nihar1420/Agenthire-2.0",
  },
  {
    slug: "reel-purpose",
    title: "Reel Purpose",
    category: "Live commerce",
    tagline: "Multi-vendor storefront for a fishing brand.",
    tech: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    liveUrl: "https://reelpurpose.fishing",
    repoUrl: "https://github.com/Nihar1420/reel-purpose",
  },
  {
    slug: "audiodj-drops",
    title: "AudioDJ Drops",
    category: "Live automation",
    tagline: "Voiced drops from preview to paid delivery.",
    tech: ["Next.js", "ffmpeg", "Stripe", "Cloudflare R2"],
    liveUrl: "https://generator.audiodjdrops.com",
    repoUrl: "https://github.com/Nihar1420/GeneratorAudioDrops",
  },
];

export const skills = {
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
  "Full-stack": [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "NestJS",
    ".NET / C#",
    "PHP / Laravel",
  ],
};

export const about = {
  headline: { lead: "The agent is never the", accent: "whole system." },
  paragraphs: [
    "I build AI-native products: LLM agents that plan and act, retrieval pipelines that ground them in real data, and multi-agent systems where the hard part is the contract between agents, not the prompt.",
    "Seven years across the stack means I care about everything around the model too: the NestJS service it calls, the Next.js screen people use, the job that retries overnight, and what happens when a model returns nonsense.",
    "I lead a small senior team delivering AI-integrated systems for enterprise clients in Germany, Italy and the UAE. Next, I want to go deeper as a senior IC or architect on a product that is AI-native from day one.",
  ],
  stats: [
    { big: "~7", label: "Years full stack" },
    { big: "DE · IT · AE", label: "Enterprise delivery" },
    { big: "Emerging Team Lead / Best Performer", label: "Recognised internally" },
  ],
  timeline: [
    {
      period: "2022 - Now",
      title: "Senior AI Consultant & Full-Stack Engineering Lead",
      org: "BrainerHub Solutions",
      tag: "Current",
    },
    {
      period: "Client work",
      title: "CRM + LLM quotation automation",
      org: "For an international architecture firm: Zoho CRM, a custom 14-stage production pipeline, and quotations drafted with Mistral.",
      tag: "Enterprise",
    },
    {
      period: "2021 - 2022",
      title: "Full-Stack Developer (MERN), Freelance",
      org: "Upwork / Labanya Pharmaceuticals",
      tag: "Earlier",
    },
  ],
  resumeUrl: "/resume.pdf",
};
