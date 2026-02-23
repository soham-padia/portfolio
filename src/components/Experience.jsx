// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Glass, GlassPill } from "./glass";

const EXPERIENCE = [
  {
    role: "Graduate Teaching Assistant (CS5800 Algorithms)",
    org: "Northeastern University",
    dates: "Jan 2026 - Present",
    location: "Boston, MA",
    highlights: [
      "Guide students through debugging-heavy algorithmic problems and runtime tradeoffs.",
      "Run pair-programming style sessions focused on memory and performance bottlenecks.",
      "Support problem-solving strategy for complex graph and dynamic programming questions.",
    ],
    tags: ["Algorithms", "Debugging", "Performance"],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Dwarkadas J. Sanghvi College of Engineering",
    dates: "Jun 2023 - Dec 2025",
    location: "Mumbai, India",
    highlights: [
      "Published 3 peer-reviewed papers across NLP, multimodal systems, and multi-agent learning.",
      "Designed adversarial multi-agent RL/DRL/MARL simulations with F1 scores up to 1.00.",
      "Built a 3-stage NLP pipeline (regex + keyword + LLM) with weighted F1 = 0.91.",
    ],
    tags: ["Research", "NLP", "RL", "MARL"],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "EdYou Abroad",
    dates: "Apr 2023 - Sep 2023",
    location: "Mumbai, India",
    highlights: [
      "Built production web features using React and Supabase (PostgreSQL + Auth).",
      "Designed RESTful data flows and optimized queries for around 40% faster page loads.",
      "Improved onboarding flow that contributed to more than 10% growth in signups.",
    ],
    tags: ["React", "Supabase", "PostgreSQL", "REST APIs"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-wrap">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-kicker">Timeline</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Research, teaching, and product engineering work with measurable impact.
          </p>
          <div className="section-rule" />
        </div>

        <div className="relative pl-8 md:pl-10">
          <span className="pointer-events-none absolute left-2.5 md:left-3 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/80 via-emerald-400/70 to-transparent dark:from-emerald-300/90 dark:via-emerald-300/70" />

          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={`${item.role}-${item.org}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative pb-6 md:pb-8 last:pb-0"
            >
              <span className="absolute -left-[25px] md:-left-[33px] top-8 h-4 w-4 rounded-full border-2 border-emerald-500 bg-slate-50 shadow-[0_0_0_4px_rgba(255,255,255,0.5)] dark:border-emerald-300 dark:bg-slate-900 dark:shadow-[0_0_0_4px_rgba(2,6,23,0.45)]" />

              <Glass className="glass-card p-5 md:p-6 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white leading-tight">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm md:text-base font-semibold text-emerald-600 dark:text-emerald-300">
                      {item.org}
                    </p>
                    <p className="font-meta mt-1 text-xs md:text-sm uppercase tracking-[0.08em] text-slate-700/75 dark:text-white/65">
                      {item.location}
                    </p>
                  </div>

                  <span className="self-start rounded-full bg-black/5 px-3 py-1 font-meta text-xs uppercase tracking-[0.08em] text-slate-700 ring-1 ring-black/10 dark:bg-white/10 dark:text-white/75 dark:ring-white/20">
                    {item.dates}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-white/80 list-disc pl-5">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <GlassPill key={tag}>{tag}</GlassPill>
                  ))}
                </div>
              </Glass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
