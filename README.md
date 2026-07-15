# Russell Walton — CV

A minimal, centered CV built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## What's here

- **Ambient background** — two soft orange shapes that drift with scroll and mouse position
  (`components/AmbientShapes.tsx`). No 3D library — just Framer Motion and blurred divs.
- **Custom cursor** — a subtle ring that follows the pointer and grows over anything clickable
  (`components/CustomCursor.tsx`), mounted globally in `app/layout.tsx`. Only activates on
  devices with a precise pointer (skips touch).
- **Education, Job Experience, and Hobbies/Interests** sections, each a clickable list. Every
  item links to its own detail page with more information.
- **Detail pages** at `/education/[slug]`, `/experience/[slug]`, `/interests/[slug]` — statically
  generated at build time from `lib/data.ts`.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel (same flow as russellwalton.com)

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Next.js** (leave build command as default).
4. Deploy. No environment variables are required.

## Editing content

Everything — job titles, blurbs, detail-page copy, education, interests — lives in `lib/data.ts`.
Add a new item to any of the `education`, `experience`, or `interests` arrays (give it a unique
`slug`) and it automatically appears in its section's list and gets its own detail page — no
routing changes needed.

## Structure

```
app/
  layout.tsx              fonts + global CustomCursor
  page.tsx                assembles the homepage
  globals.css             base styles, reduced-motion handling
  education/[slug]/       education detail pages
  experience/[slug]/      job experience detail pages
  interests/[slug]/       hobbies/interests detail pages
components/
  AmbientShapes.tsx        orange background shapes (scroll + mouse parallax)
  CustomCursor.tsx         hover-aware custom cursor
  Flow.tsx                 reusable section wrapper (scroll-linked fade/shift)
  ItemList.tsx             clickable list used by Education/Experience/Interests
  DetailPage.tsx           shared layout for the /[slug] detail pages
  Nav.tsx, Hero.tsx, About.tsx, Contact.tsx
  Education.tsx, Experience.tsx, Interests.tsx
lib/data.ts                all CV content — the single source of truth
```

## Notes

- Respects `prefers-reduced-motion`.
- Colors: `porcelain #FBFAF7`, `ink #12110F`, `signal #FF5A1F`, `ember #C2410C`, set in
  `tailwind.config.ts`.
- I corrected "Senior Finchy Instructor" to **Senior Dinghy Instructor** to match your RYA
  qualification on the CV — flag it if you actually meant something else.
- The contact section currently opens the visitor's email client via a `mailto:` link. If you
  want an in-page form that emails you directly, that needs a small backend piece (an API route
  plus a transactional email service like Resend) — happy to add it whenever you want it.

## Latest refinements

- **iOS scroll fix:** removed `overflow-x-hidden` from `<body>` (it can break `position: fixed`
  descendants during momentum scrolling on iOS Safari), switched `100vh`-based section heights to
  `100svh` (stable across the address-bar show/hide animation), and replaced the ambient
  background's `filter: blur()` shapes with radial gradients — blurred, transformed, animated
  layers are one of the more expensive things to composite on iOS and were the main source of the
  jank.
- **Grey, not black:** the `ink` color token is now a warm charcoal grey (`#44403C`) instead of
  near-black, everywhere it's used (text and the dark section backgrounds).
- **Two-font title:** the hero name now pairs italic Fraunces (first name) with bold uppercase
  Inter (last name).
- **Emphasis styling:** any body copy in `lib/data.ts` can wrap words in `<i>...</i>` and they'll
  render in orange, italic Fraunces — see `about` and the `tech` interest for examples. Handled by
  `lib/emphasis.tsx`.
