"use client";

import { motion, useReducedMotion } from "framer-motion";

type Badge = "gold" | "silver" | "top10" | "award";

const achievements = [
  {
    year: "2025",
    title: "UWW U20 World Championships",
    result: "10th Place",
    detail: "Napoles, Italy",
    badge: "top10" as Badge,
  },
  {
    year: "2025",
    title: "UWW U20 Pan-American Championships",
    result: "Silver Medalist",
    detail: "2nd Place",
    badge: "silver" as Badge,
  },
  {
    year: "2024",
    title: "UWW World Team Trials U20",
    result: "Champion",
    detail: "1st Place",
    badge: "gold" as Badge,
  },
  {
    year: "2023",
    title: "California State Championships",
    result: "Champion",
    detail: "1st Place",
    badge: "gold" as Badge,
  },
  {
    year: "2023",
    title: "OC Female Wrestler of the Year",
    result: "Award Recipient",
    detail: "Orange County",
    badge: "award" as Badge,
  },
  {
    year: "2023",
    title: "Triple Crown Winner",
    result: "Champion",
    detail: "Triple Crown",
    badge: "gold" as Badge,
  },
];

const badgeConfig: Record<Badge, { label: string; bg: string; text: string }> = {
  gold: { label: "Gold", bg: "bg-gold-500", text: "text-navy-950" },
  silver: { label: "Silver", bg: "bg-white/80", text: "text-navy-900" },
  top10: { label: "Top 10", bg: "bg-navy-600", text: "text-gold-300" },
  award: { label: "Award", bg: "bg-gold-500/20", text: "text-gold-300" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const card = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Achievements() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="achievements" className="bg-navy-900 py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 text-xs tracking-[0.35em] uppercase mb-4 font-sans">
            Competition Record
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Achievements
          </h2>
          <div className="gold-rule w-24 mx-auto" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={prefersReduced ? undefined : container}
          initial={prefersReduced ? undefined : "hidden"}
          whileInView={prefersReduced ? undefined : "show"}
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((a, i) => {
            const badge = badgeConfig[a.badge];
            return (
              <motion.div
                key={i}
                variants={prefersReduced ? undefined : card}
                whileHover={prefersReduced ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="card-glass p-6 group cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-serif text-4xl font-bold text-white/10 leading-none select-none">
                    {a.year}
                  </span>
                  <span className={`text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 ${badge.bg} ${badge.text}`}>
                    {badge.label}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-white leading-snug mb-2 group-hover:text-gold-300 transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-gold-400 text-sm font-sans font-semibold mb-1">{a.result}</p>
                <p className="text-white/40 text-xs font-sans tracking-wide">{a.detail}</p>

                {/* Bottom rule */}
                <div className="mt-5 h-px bg-gradient-to-r from-gold-500/40 via-gold-300/20 to-transparent" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
