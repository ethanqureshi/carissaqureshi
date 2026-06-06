"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          {/* Left — heading */}
          <motion.div
            variants={prefersReduced ? undefined : stagger}
            initial={prefersReduced ? undefined : "hidden"}
            whileInView={prefersReduced ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={prefersReduced ? undefined : fadeUp} className="text-gold-600 text-xs tracking-[0.35em] uppercase mb-4 font-sans">
              About
            </motion.p>
            <motion.h2 variants={prefersReduced ? undefined : fadeUp} className="font-serif text-3xl sm:text-5xl font-bold text-navy-900 leading-tight mb-6">
              Athlete.
              <br />
              Scholar.
              <br />
              <span className="text-gold-600">Leader.</span>
            </motion.h2>
            <div className="gold-rule w-16 mb-0" />
          </motion.div>

          {/* Right — bio + education */}
          <motion.div
            variants={prefersReduced ? undefined : stagger}
            initial={prefersReduced ? undefined : "hidden"}
            whileInView={prefersReduced ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={prefersReduced ? undefined : fadeUp} className="text-navy-800 text-base sm:text-lg leading-relaxed font-sans mb-6">
              A two-time World Team wrestler and 4.0 student at North Central College, Carissa Qureshi brings the same relentless discipline to her academic and professional pursuits that has made her an elite international competitor. Competing at the highest levels of UWW competition — including the 2025 World Championships — while maintaining a perfect GPA, she has proven that excellence in one arena translates directly to another.
            </motion.p>
            <motion.p variants={prefersReduced ? undefined : fadeUp} className="text-navy-700 leading-relaxed font-sans mb-10">
              Having trained at the Olympic Training Center in Colorado Springs and coached hundreds of youth athletes over the past decade, Carissa understands how structure, accountability, and team-first thinking drive results. She is now seeking to bring that elite mindset to Congressional internships and public service roles.
            </motion.p>

            {/* Education */}
            <motion.div variants={prefersReduced ? undefined : fadeUp} className="border-l-2 border-gold-500 pl-6">
              <p className="text-xs tracking-[0.25em] uppercase text-gold-600 font-sans mb-2">Education</p>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-1">
                North Central College
              </h3>
              <p className="text-navy-700 font-sans text-sm mb-1">Naperville, IL</p>
              <p className="text-navy-800 font-sans text-sm">
                Double Major: Political Science & Criminology
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <span className="text-xs bg-gold-500/10 text-gold-700 border border-gold-500/30 px-3 py-1 font-sans tracking-wide">
                  GPA 3.9
                </span>
                <span className="text-xs bg-navy-800/10 text-navy-700 border border-navy-700/20 px-3 py-1 font-sans tracking-wide">
                  Expected May 2027
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
