# Nihar Ranjan Hota - Portfolio

Personal portfolio built on the "Cobalt & Lime" design: a warm-paper, editorial
layout with a cobalt-blue primary accent and a lime pop, Kreon serif display type,
and restrained, reduced-motion-aware animation.

## Concept

- Palette: warm paper (#faf9f5) background, warm charcoal ink, cobalt (#1b3fd6) accent, lime (#d4f24a) highlight
- Type: Kreon (serif display) + system sans (body) + monospace (labels)
- Signature: rotating circular "Available" badge (pure SVG/CSS)
- Pages: Home, Work, About, Contact, 404 (project case-study pages to follow)

## Stack

Next.js 14 (App Router) - TypeScript - Tailwind CSS - framer-motion

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Editing content

All copy and project data live in `data/content.ts`. Update that one file.

## TODO (content to add)

- `public/portrait.jpg` - portrait for the About page (rendered in an arch shape)
- Real project metrics in `data/content.ts` (leave blank rather than inventing)
- `public/resume.pdf` - then set `about.resumeUrl` to `/resume.pdf`
- Confirm company/title for the About timeline, then set `about.timeline.show = true`
- Per-project case-study pages
