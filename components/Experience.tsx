"use client";

import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    role: "Youth Wrestling Coach",
    org: "OC Regional Training Center",
    location: "Huntington Beach, CA",
    dates: "May 2022 – Present",
    bullets: [
      "Develop individualized training programs for youth wrestlers across all skill levels",
      "Lead technique sessions, conditioning, and competitive preparation",
      "Mentored athletes who have advanced to state-level competition",
    ],
  },
  {
    role: "Olympic Training Center Elite Accelerator Program",
    org: "USA Olympic Training Center",
    location: "Colorado Springs, CO",
    dates: "Jan – Aug 2025",
    bullets: [
      "Trained at the national Olympic Training Center alongside elite-level athletes",
      "Developed advanced technique under USA Wrestling coaching staff",
    ],
  },
  {
    role: "Youth Wrestling Coach",
    org: "Premier Wrestling Facility",
    location: "Placentia, CA",
    dates: "2021 – March 2022",
    bullets: [
      "Coached youth wrestlers in fundamentals, takedowns, and live drilling",
      "Collaborated with head coaching staff to design weekly practice plans",
    ],
  },
  {
    role: "Three-Season Varsity Captain",
    org: "Marina High School",
    location: "Huntington Beach, CA",
    dates: "2019 – 2023",
    bullets: [
      "Led team culture, accountability, and match-day preparation as captain",
      "Competed at the varsity level across three consecutive seasons",
      "Served as a bridge between coaching staff and athletes",
    ],
  },
  {
    role: "Youth Martial Arts Instructor",
    org: "Gracie Barra HQ",
    location: "Irvine, CA",
    dates: "2015 – 2018",
    bullets: [
      "Instructed children ages 5–12 in Brazilian jiu-jitsu fundamentals",
      "Developed patience, communication, and instruction skills at a young age",
    ],
  },
  {
    role: "Youth Tournament Referee",
    org: "Youth Wrestling Circuit",
    location: "CA & CO",
    dates: "2021 – 2023",
    bullets: [
      "Officiated youth wrestling tournaments, ensuring fair play and rule compliance",
      "Demonstrated deep understanding of USA Wrestling ruleset",
    ],
  },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Experience() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="experience" className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="text-gold-600 text-xs tracking-[0.35em] uppercase mb-4 font-sans">
            Background
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy-900 mb-4">
            Experience
          </h2>
          <div className="gold-rule w-16" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={prefersReduced ? undefined : "hidden"}
                whileInView={prefersReduced ? undefined : "show"}
                variants={prefersReduced ? undefined : fadeUp}
                viewport={{ once: true, amount: 0.2 }}
                className="pl-8 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gold-500 -translate-x-[3.5px]" />

                <div className="mb-3">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-navy-900">
                      {exp.role}
                    </h3>
                    <span className="text-gold-600 font-sans text-sm">&mdash; {exp.org}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-0.5">
                    <span className="text-xs tracking-widest uppercase text-navy-600/60 font-sans">{exp.dates}</span>
                    <span className="text-xs text-navy-600/50 font-sans">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-navy-700 font-sans text-sm leading-relaxed flex gap-3">
                      <span className="text-gold-500 mt-[3px] shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-12 border-t border-gold-500/20"
        >
          <p className="text-gold-600 text-xs tracking-[0.35em] uppercase mb-6 font-sans">Skills</p>
          <div className="flex flex-wrap gap-3">
            {[
              "Written Communication",
              "Research",
              "Public Speaking",
              "Professional Correspondence",
              "Microsoft Office",
              "Google Workspace",
              "Leadership",
              "Team Management",
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs font-sans tracking-wide px-4 py-2 border border-navy-700/30 text-navy-700 bg-white hover:border-gold-500/50 hover:text-gold-700 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
