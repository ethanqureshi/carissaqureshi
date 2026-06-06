"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "3.9", label: "GPA" },
  { value: "2×", label: "Junior World Team Member" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center bg-navy-gradient overflow-hidden">
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,18,48,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,18,48,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-navy-600/40 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 w-full pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            variants={prefersReduced ? undefined : containerVariants}
            initial={prefersReduced ? undefined : "hidden"}
            animate={prefersReduced ? undefined : "show"}
            className="order-2 lg:order-1"
          >
            <motion.p variants={prefersReduced ? undefined : fadeUp} className="text-gold-400 text-xs tracking-[0.35em] uppercase mb-4 font-sans">
              North Central College · Political Science & Criminology
            </motion.p>

            <motion.h1 variants={prefersReduced ? undefined : fadeUp} className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-2">
              Carissa
            </motion.h1>
            <motion.h1 variants={prefersReduced ? undefined : fadeUp} className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient-gold mb-6">
              Qureshi
            </motion.h1>

            <div className="gold-rule w-24 mb-6" />

            <motion.p variants={prefersReduced ? undefined : fadeUp} className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg font-sans mb-8">
              World Team wrestler, 3.9 student, and driven leader seeking to bring elite-level discipline to public service.
            </motion.p>

            {/* Stats */}
            <motion.div variants={prefersReduced ? undefined : fadeUp} className="flex gap-8 mb-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-bold text-gold-400">{s.value}</div>
                  <div className="text-xs tracking-widest uppercase text-white/50 mt-1 font-sans max-w-[120px] leading-snug">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Seeking tag */}
            <motion.div variants={prefersReduced ? undefined : fadeUp} className="mb-8">
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-gold-400/80 border border-gold-500/30 px-4 py-1.5 font-sans">
                Seeking Policy &amp; Legal Intern Roles
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={prefersReduced ? undefined : fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3 bg-gold-500 text-navy-950 text-sm font-semibold tracking-widest uppercase hover:bg-gold-300 transition-all duration-300 font-sans"
              >
                Get in Touch
              </a>
              <a
                href="#achievements"
                className="px-7 py-3 border border-gold-500/60 text-gold-400 text-sm font-semibold tracking-widest uppercase hover:border-gold-400 hover:bg-gold-500/10 transition-all duration-300 font-sans"
              >
                View Achievements
              </a>
            </motion.div>
          </motion.div>

          {/* Right — headshot */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: 40 }}
            animate={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold frame */}
              <div className="absolute -inset-3 border border-gold-500/30" />
              <div className="absolute -inset-1.5 border border-gold-500/15" />
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-gold-500" />
              <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-gold-500" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-gold-500" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-gold-500" />

              <div className="w-56 h-64 sm:w-72 sm:h-80 lg:w-96 lg:h-[480px] relative overflow-hidden">
                <Image
                  src="/hero-headshot.png"
                  alt="Carissa Qureshi"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
