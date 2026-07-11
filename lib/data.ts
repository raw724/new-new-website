export type Item = {
  slug: string;
  title: string;
  meta?: string;
  blurb: string;
  body: string[];
};

export const profile = {
  name: "Russell Walton",
  location: "Jersey — Exeter",
  phone: "+44 7392 577186",
  email: "russellwalton99@icloud.com",
  contactEmail: "me@russellwalton.com",
  site: "russellwalton.com",
  tagline: "Computer Science student. Sailor. Hyrox athlete.",
};

export const about =
  "I study Computational Mathematics at Exeter, race Hobie 16 catamarans, and run the floor at Pizza Express on the weekends. Driven, energetic, a bit restless — I like being good at more than one thing at once.";

export const education: Item[] = [
  {
    slug: "university-of-exeter",
    title: "University of Exeter",
    meta: "2025 — Present",
    blurb: "BSc Computational Mathematics.",
    body: [
      "Studying Computational Mathematics at Exeter, having started in 2025.",
      "The course sits between pure maths and computer science — a natural next step after A-Level Maths, Physics and Computer Science.",
      "Alongside lectures, I'm getting involved with university societies and looking for ways to keep sailing and training through term time.",
    ],
  },
  {
    slug: "victoria-college",
    title: "Victoria College",
    meta: "2019 — 2025",
    blurb: "A-Levels and GCSEs, Jersey.",
    body: [
      "Six years at Victoria College in Jersey, finishing with A-Levels in Mathematics (A), Physics (B) and Computer Science (B).",
      "11 GCSEs at grade 7 or above.",
      "Served as a school prefect through sixth form, alongside helping organise student-run charity and parent events.",
    ],
  },
];

export const experience: Item[] = [
  {
    slug: "manager-on-duty",
    title: "Manager on Duty",
    meta: "Pizza Express, Jersey · Oct 2022 — Present",
    blurb: "Running shifts, rotas and service since 2022.",
    body: [
      "Promoted to Manager on Duty, responsible for running a full shift: staff rotas, customer flow, and service standards.",
      "Own opening and closing, cash management, stock levels and site safety.",
      "Keep energy and consistency high through the busiest periods, like Christmas, so every table gets the same standard of service.",
    ],
  },
  {
    slug: "senior-dinghy-instructor",
    title: "Senior Dinghy Instructor",
    meta: "RYA · Jul 2021 — Present",
    blurb: "Teaching sailing and mentoring instructors since 2021.",
    body: [
      "Qualified as an RYA Senior Dinghy Instructor, managing safety, boat equipment and lesson plans out on the water.",
      "Supervise students and junior instructors, adapting each lesson to the group's skill level.",
      "A seasonal role that runs alongside racing, and one of the reasons I ended up teaching as much as competing.",
    ],
  },
  {
    slug: "game-developer",
    title: "Game Developer",
    meta: "Scientific Games · Oct 2024",
    blurb: "Work experience building gambling-based games.",
    body: [
      "A couple of weeks of work experience as a game developer, working on the design, coding and logic behind online gambling-based games.",
      "Used Java and TypeScript alongside a commercial IDE and server integration systems — an early, practical look at professional software development ahead of starting my Computer Science degree.",
    ],
  },
];

export const interests: Item[] = [
  {
    slug: "sailing",
    title: "Sailing",
    blurb: "Racing Hobie 16 catamarans since age ten.",
    body: [
      "Racing since I was ten years old, moving from single-handed dinghies up to the Hobie 16 catamaran.",
      "Competed at the Hobie Dragoon Europeans in La Rochelle (2019) and Costa Brava (2021), the Hobie 16 Worlds in Costa Brava (2022), the Hobie Europeans in Lake Garda (2024), and the Hobie 16 Nationals in Poole (2025).",
      "Next on the course: the Hobie 16 Europeans in Bordeaux, 2026.",
    ],
  },
  {
    slug: "hyrox",
    title: "Hyrox",
    blurb: "Functional fitness racing.",
    body: [
      "Three Hyrox races completed so far, across Mixed Doubles, Open Solo and Men's Doubles.",
      "Training centres on strength work, running, and drilling the eight functional-movement stations that make up each race.",
      "A good counterweight to sailing — less reading the wind, more just getting the work done.",
    ],
  },
  {
    slug: "tech",
    title: "Tech",
    blurb: "Computer Science at Exeter, building things.",
    body: [
      "Studying Computational Mathematics at Exeter, with a couple of weeks' experience as a game developer at Scientific Games working in Java and TypeScript.",
      "This site — and russellwalton.com — are both things I build and maintain myself.",
      "Interested in where maths, sailing telemetry, and software actually overlap.",
    ],
  },
];

export const certifications = [
  "RYA Senior Instructor",
  "RYA Dinghy Instructor",
  "RYA Powerboat Level 2",
  "RYA Day Skipper",
  "RYA First Aid",
];

export const contact = {
  email: profile.email,
  contactEmail: profile.contactEmail,
  phone: profile.phone,
  site: profile.site,
};
