import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import Section, { Container, EntryList, type EntryData } from "@/components/Section";

/* ---------- Affiliations ---------- */

const affiliations = [
  { file: "usa-wrestling", name: "USA Wrestling" },
  { file: "uww", name: "United World Wrestling" },
  { file: "cif", name: "CIF" },
  { file: "north-central-college", name: "North Central College" },
  { file: "uccs", name: "UCCS" },
  { file: "golden-west-college", name: "Golden West College" },
  { file: "marina-high-school", name: "Marina High School" },
  { file: "gracie-barra", name: "Gracie Barra" },
  { file: "stateville-speaks", name: "Stateville Speaks" },
  { file: "partners-for-success", name: "Partners for Success" },
];

export function Affiliations() {
  return (
    <section aria-label="Affiliations">
      <Container>
        <Reveal className="border-t border-navy/10 pb-14 pt-8">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-navy/55">Affiliations</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {affiliations.map((a) => (
              <li key={a.file}>
                <Logo file={a.file} name={a.name} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- 1. Education ---------- */

const education: EntryData[] = [
  {
    title: "B.A., Political Science & Criminology (double major)",
    org: "North Central College",
    location: "Naperville, IL",
    dates: "Aug 2025 to May 2027 (expected)",
    details: ["GPA 4.0"],
    bullets: ['Major research: "Effect of Red-Pill Content on Young Men and Their Gendered Worldview"'],
  },
  {
    title: "Political Science coursework",
    org: "University of Colorado Colorado Springs",
    dates: "Jan 2025 to Aug 2025",
    details: ["GPA 4.0"],
  },
  {
    title: "Psychology coursework",
    org: "Golden West College",
    location: "Huntington Beach, CA",
    dates: "Aug 2023 to Dec 2024",
    details: ["GPA 3.80"],
  },
  {
    title: "High school diploma",
    org: "Marina High School",
    location: "Huntington Beach, CA",
    dates: "Class of 2023",
  },
];

export function Education() {
  return (
    <Section id="education" title="Education">
      <EntryList entries={education} />
    </Section>
  );
}

/* ---------- 2. International Athletic Experience ---------- */

const athletics: EntryData[] = [
  {
    title: "U.S. National Team Athlete, Women's Freestyle Wrestling",
    org: "USA Wrestling and United World Wrestling (UWW)",
    dates: "2023 to 2025",
    bullets: [
      "Represented the United States at the 2024 (Spain) and 2025 (Bulgaria) U20 World Championships, in fields of 650 wrestlers from 50+ nations; placed 10th in 2025.",
      "Won silver at the 2025 U20 Pan-American Championships after winning the 2024 U.S. U20 World Team Trials.",
    ],
  },
  {
    title: "Invited Athlete, USA Wrestling Elite Accelerator Program",
    org: "U.S. Olympic & Paralympic Training Center",
    location: "Colorado Springs, CO",
    dates: "2025",
    bullets: [
      "Invited to the national development program for top emerging athletes.",
      "Trained 20 hours per week while earning a 4.0 GPA at UCCS.",
      "Featured in USA Wrestling's Elite Accelerator Program documentary series.",
    ],
  },
  {
    title: "NCAA Division III Women's Wrestling",
    org: "North Central College",
    location: "Naperville, IL",
    dates: "Aug 2025 to Present",
    bullets: ["Balances a full competition and travel schedule with a double major and a 4.0 GPA."],
  },
];

export function Athletics() {
  return (
    <Section id="athletics" title="International Athletic Experience">
      <EntryList entries={athletics} />
    </Section>
  );
}

/* ---------- 3. Competition Record ---------- */

const record = [
  { year: "2025", event: "UWW U20 World Championships", result: "10th" },
  { year: "2025", event: "UWW U20 Pan-American Championships", result: "2nd" },
  { year: "2024", event: "UWW U20 World Team Trials", result: "Champion" },
  { year: "2023", event: "California State Championships (CIF)", result: "Champion" },
  { year: "2023", event: "Orange County Female Wrestler of the Year", result: "Honoree" },
  { year: "2023", event: "Triple Crown", result: "Winner" },
];

export function Record() {
  return (
    <Section id="record" title="Competition Record">
      <Reveal>
        <table className="w-full border-collapse text-left text-[15px]">
          <thead>
            <tr className="border-b border-navy/25 text-xs uppercase tracking-[0.15em] text-navy/55">
              <th scope="col" className="w-16 py-3 pr-4 font-normal sm:w-24">Year</th>
              <th scope="col" className="py-3 pr-4 font-normal">Event</th>
              <th scope="col" className="py-3 text-right font-normal">Result</th>
            </tr>
          </thead>
          <tbody>
            {record.map((r) => (
              <tr key={r.event} className="border-b border-navy/10 align-baseline">
                <td className="py-4 pr-4 tabular-nums text-navy/60">{r.year}</td>
                <td className="py-4 pr-4">{r.event}</td>
                <td className="py-4 text-right font-serif text-lg font-semibold">{r.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}

/* ---------- 4. Research, Policy & Service ---------- */

const research: EntryData[] = [
  {
    title: "Intern",
    org: "Stateville Speaks",
    location: "Illinois",
    dates: "Sep 2026 to Present",
    bullets: [
      "Research legislation and policy affecting incarcerated people and translate it, with contributors' firsthand perspectives, into accessible newsletter content.",
      "Manage correspondence and records for 2,000 subscribers, ensuring accurate distribution inside correctional facilities.",
    ],
  },
  {
    title: "Student Mentor",
    org: "Partners for Success",
    dates: "Oct 2026 to Present",
    bullets: ["Mentor youth through illustration journaling, building confidence through one-on-one support."],
  },
];

export function Research() {
  return (
    <Section id="research" title="Research, Policy & Service">
      <EntryList entries={research} />
    </Section>
  );
}

/* ---------- 5. Earlier Leadership & Coaching ---------- */

const leadership: EntryData[] = [
  {
    title: "Youth Coach & Mentor",
    org: "Orange County Regional Training Center and Premier Wrestling Facility",
    location: "Huntington Beach and Placentia, CA",
    dates: "Jan 2021 to Apr 2024",
    bullets: [
      "Coached athletes ages 7 to 16.",
      "Partnered with families to reinforce accountability and discipline.",
      "Refereed youth wrestling tournaments.",
    ],
  },
  {
    title: "Youth Instructor",
    org: "Gracie Barra HQ",
    location: "Irvine, CA",
    dates: "2015 to 2018",
    bullets: [
      "Instructed children in Brazilian jiu-jitsu fundamentals.",
      "Developed patience, communication, and instruction skills at a young age.",
    ],
  },
  {
    title: "Varsity Girls Wrestling Captain",
    org: "Marina High School",
    location: "Huntington Beach, CA",
    dates: "Three seasons",
    bullets: [
      "Led team culture, accountability, and match-day preparation as captain.",
      "Served as a bridge between coaching staff and athletes.",
    ],
  },
];

export function Leadership() {
  return (
    <Section id="leadership" title="Earlier Leadership & Coaching">
      <EntryList entries={leadership} />
    </Section>
  );
}

/* ---------- 6. International Experience ---------- */

const countries = ["Spain", "Sweden", "Peru", "Bulgaria", "Japan"];

export function International() {
  return (
    <Section id="international" title="International Experience">
      <Reveal>
        <ul className="flex flex-wrap gap-x-7 gap-y-3 font-serif text-2xl sm:gap-x-0 sm:text-3xl">
          {countries.map((c) => (
            <li key={c} className="sm:border-l sm:border-gold sm:px-6 sm:first:border-l-0 sm:first:pl-0">
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* ---------- 7. Coursework and Skills ---------- */

const skills = [
  {
    label: "Coursework",
    items: ["International Relations", "Criminal Justice", "Scope of Political Science", "Quantitative Research Methods"],
  },
  {
    label: "Research",
    items: [
      "Qualitative and quantitative methods",
      "Legal and policy research",
      "Literature reviews",
      "Survey design and administration",
      "Policy writing",
    ],
  },
  {
    label: "Tools",
    items: ["SPSS", "Excel", "Word", "PowerPoint", "Outlook", "Google Workspace", "Canva"],
  },
  {
    label: "Professional",
    items: ["Written communication", "Public speaking", "Professional correspondence", "Leadership", "Team management"],
  },
];

export function Skills() {
  return (
    <Section id="skills" title="Coursework and Skills">
      <dl className="border-t border-navy/10">
        {skills.map((s) => (
          <Reveal key={s.label} className="grid gap-1 border-b border-navy/10 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
            <dt className="text-xs uppercase tracking-[0.15em] text-navy/55 sm:pt-1">{s.label}</dt>
            <dd className="text-[15px] leading-relaxed text-navy/85">{s.items.join(", ")}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
