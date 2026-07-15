export type Item = {
  slug: string;
  title: string;
  meta?: string;
  blurb: string;
  body: string[];
};

export const profile = {
  name: "Russell Walton",
  firstName: "Russell",
  lastName: "Walton",
  location: "Jersey — Exeter",
  phone: "+44 7392 577186",
  email: "me@russellwalton.com",
  contactEmail: "me@russellwalton.com",
  site: "russellwalton.com",
  tagline: "computer science student. sailor. manager on duty.",
};

export const about =
  "Computer Science undergrad with strong leadership experience managing teams in <i>hospitality</i> and <i>water sports</i>. Skilled and motivated to deliver outstanding customer experiences — and able to take initiative in <i>fast-paced environments</i>, thriving in <i>complex problems</i>.";

export const education: Item[] = [
  {
    slug: "university-of-exeter",
    title: "University of Exeter",
    meta: "2025 — Present",
    blurb: "BSc Computer Science.",
    body: [
      "Studying for a BSc in Computer Science at Exeter, having started in 2025.",
      "The degree builds on A-Level Maths, Physics and Computer Science, covering everything from core programming and algorithms through to the mathematical foundations underneath them.",
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
      "Studying <i>Computer Science</i> at Exeter, with hands-on experience as a <i>game developer</i> at Scientific Games, working across Java and TypeScript.",
      "This site — and russellwalton.com — are both <i>built and maintained by me</i>, end to end.",
      "Mostly interested in where <i>sailing data</i>, <i>fitness tracking</i> and <i>software</i> actually meet.",
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
