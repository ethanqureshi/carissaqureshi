"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="contact" className="bg-navy-950 py-24 lg:py-32 relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <p className="text-gold-400 text-xs tracking-[0.35em] uppercase mb-4 font-sans">
            Let’s Connect
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to bring
            <br />
            <span className="text-gradient-gold">elite discipline</span>
            <br />
            to public service.
          </h2>
          <div className="gold-rule w-24 mx-auto mb-8" />
          <p className="text-white/60 font-sans text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Seeking Congressional internships and government roles where drive, discipline, and academic excellence can make a real impact. Open to introductions, informational interviews, and opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <motion.a
              href="mailto:carissadaniellequreshi@gmail.com"
              whileHover={prefersReduced ? undefined : { scale: 1.03 }}
              whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-950 text-sm font-semibold tracking-widest uppercase hover:bg-gold-300 transition-colors duration-300 font-sans"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send Email
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/carissa-qureshi-a34914208/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReduced ? undefined : { scale: 1.03 }}
              whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-3 px-8 py-4 border border-gold-500/60 text-gold-400 text-sm font-semibold tracking-widest uppercase hover:border-gold-400 hover:bg-gold-500/10 transition-all duration-300 font-sans"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
