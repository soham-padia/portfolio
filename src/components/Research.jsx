// src/components/Research.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Glass, GlassButton, GlassPill } from "./glass";

export const Research = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}papers.json`)
      .then(r => r.json())
      .then(setPapers)
      .catch(() => {});
  }, []);

  return (
    <section id="research" className="section-wrap">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-kicker">Publications</p>
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle">
            Selected research work across NLP, multimodal systems, and reinforcement learning.
          </p>
          <div className="section-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {papers.map((paper, idx) => (
            <motion.div
              key={`${paper.title}-${paper.year}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
            >
              <Glass className="glass-card h-full p-5 md:p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-meta text-xs uppercase tracking-[0.1em] text-emerald-600 dark:text-emerald-300">
                    {paper.venue}
                  </p>
                  <span className="rounded-full bg-black/5 px-3 py-1 font-meta text-xs uppercase tracking-[0.08em] text-slate-700 ring-1 ring-black/10 dark:bg-white/10 dark:text-white/75 dark:ring-white/20">
                    {paper.year}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-slate-900 dark:text-white">
                  {paper.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-white/80">
                  {paper.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <GlassPill key={tag}>{tag}</GlassPill>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {paper.link ? (
                    <a href={paper.link} target="_blank" rel="noopener noreferrer">
                      <GlassButton variant="secondary">Read Paper</GlassButton>
                    </a>
                  ) : (
                    <GlassPill>Preprint coming soon</GlassPill>
                  )}
                </div>
              </Glass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
