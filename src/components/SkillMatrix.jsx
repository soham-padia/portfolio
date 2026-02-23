// src/components/SkillMatrix.jsx
import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { label: "Publications", value: "3", target: "research" },
  { label: "Projects", value: "8+", target: "project" },
  { label: "PyPI Downloads", value: "4K+", href: "https://pypi.org/project/text-to-number/" },
];

const GROUPS = [
  {
    id: "ai_ml",
    title: "AI / ML",
    items: [
      { label: "LLMs + RAG", level: 92 },
      { label: "NLP", level: 90 },
    ],
  },
  {
    id: "rl_systems",
    title: "RL Systems",
    items: [
      { label: "Reinforcement Learning", level: 86 },
      { label: "Adversarial Simulation", level: 84 },
    ],
  },
  {
    id: "research",
    title: "Research",
    items: [
      { label: "Experiment Design", level: 88 },
      { label: "Reproducibility", level: 91 },
    ],
  },
  {
    id: "model_eval",
    title: "Model Evaluation",
    items: [
      { label: "Metrics + Error Analysis", level: 89 },
      { label: "Ablation / Interpretability", level: 87 },
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    items: [
      { label: "Python + APIs", level: 92 },
      { label: "Testing + CI", level: 84 },
    ],
  },
  {
    id: "production",
    title: "Production",
    items: [
      { label: "Docker / MLOps", level: 83 },
      { label: "Monitoring", level: 85 },
    ],
  },
];

export const SkillMatrix = ({
  className = "",
  activeGroup = null,
  onSelectGroup = () => {},
  onClear = () => {},
  onNavigate = () => {},
}) => {
  return (
    <div className={["w-full", className].join(" ")}>
      <div className="mb-4 flex items-center justify-between">
        <p className="font-meta text-xs uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">
          Capability Map
        </p>
        <button
          type="button"
          onClick={onClear}
          className="hidden sm:inline font-meta text-[11px] uppercase tracking-[0.12em] text-slate-700/70 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
        >
          {activeGroup ? "Reset" : "Snapshot"}
        </button>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-2">
        {STATS.map((stat) => (
          <button
            key={stat.label}
            type="button"
            onClick={() => {
              if (stat.href) {
                window.open(stat.href, "_blank", "noopener,noreferrer");
                return;
              }
              if (stat.target) onNavigate(stat.target);
            }}
            className="rounded-lg bg-black/5 p-2 ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/20 text-center transition-all hover:-translate-y-0.5 hover:ring-emerald-400/45 dark:hover:ring-emerald-300/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/45"
            aria-label={stat.target ? `Go to ${stat.label}` : stat.label}
          >
            <p className="font-display text-lg leading-none font-semibold text-slate-900 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-700/75 dark:text-white/65">
              {stat.label}
            </p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {GROUPS.map((group, idx) => {
          const isActive = activeGroup === group.id;
          return (
          <motion.button
            key={group.title}
            type="button"
            onClick={() => onSelectGroup(group.id)}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.25, delay: idx * 0.04 }}
            className={[
              "w-full rounded-xl bg-black/5 p-3 ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/20 text-left",
              "transition-all hover:-translate-y-0.5 hover:ring-emerald-400/45 dark:hover:ring-emerald-300/45",
              isActive
                ? "ring-emerald-400/55 bg-emerald-400/10 dark:ring-emerald-300/55 dark:bg-emerald-300/10"
                : "",
            ].join(" ")}
          >
            <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              {group.title}
            </h4>
            <div className="mt-2 space-y-2.5">
              {group.items.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="text-[12px] text-slate-800/85 dark:text-white/80">
                      {item.label}
                    </span>
                    <span className="shrink-0 font-meta text-[10px] tracking-[0.08em] text-slate-700/70 dark:text-white/65">
                      {item.level}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/15">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="h-full rounded-full bg-emerald-500/85 dark:bg-emerald-300/85"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.button>
        )})}
      </div>
    </div>
  );
};

export default SkillMatrix;
