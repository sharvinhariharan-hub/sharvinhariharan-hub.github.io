# Sharvin Hariharan

Personal site for Sharvin Hariharan, Class XII at St. Joseph's CBSE School in Nagercoil. One dark page aimed at a technical reader: AI and software up front, how he thinks about building, skills with AI tools first, a general wins section, and a short note on life outside the screen.

Next.js (App Router), TypeScript, and Tailwind. It deploys on Vercel like any other Next.js app. Connect the repo and leave the build command as `npm run build`.

## Run locally

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Edit the copy

All public text is in [`src/content/site.ts`](src/content/site.ts). Search for `TODO` before treating a line as finished. Do not add facts, numbers, or project details that are not confirmed.

The hero scene is a small three.js wireframe. It follows the pointer, pauses offscreen and when the tab is hidden, and stays still when the visitor prefers reduced motion. It does not take over scrolling.
