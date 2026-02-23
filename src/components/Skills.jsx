// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { Glass, GlassPill, GlassButton } from "./glass";
import SkillMatrix from "./SkillMatrix";

const LANGUAGES = [
  "Python",
  "C",
  "C++",
  "Bash/Shell",
  "Rust",
  "Java",
  "SQL",
  "Dart",
  "TypeScript",
  "JavaScript",
  "Go",
  "HTML",
  "CSS (Tailwind, Bootstrap)",
];

const TECH = [
  "LLMs",
  "LoRA/PEFT",
  "RLHF",
  "Weights & Biases",
  "Docker/K8s",
  "React",
  "Next.js",
  "Firebase",
  "Supabase",
  "Git",
  "Flutter",
  "Angular",
  "Django",
  "Blender",
  "Microservices",
  "Google Cloud",
  "Kubernetes",
];

const PLATFORMS = ["Linux", "Windows", "Android", "Web", "MacOS"];

export const Skills = () => {
  const [activeGroup, setActiveGroup] = React.useState(null);

  const HIGHLIGHT_MAP = {
    ai_ml: {
      languages: ["Python"],
      tech: ["LLMs", "LoRA/PEFT", "RLHF", "Next.js"],
      platforms: [],
    },
    rl_systems: {
      languages: ["Python"],
      tech: ["RLHF", "Docker/K8s", "Kubernetes"],
      platforms: ["Linux"],
    },
    research: {
      languages: ["Python"],
      tech: ["Weights & Biases", "Git"],
      platforms: ["Linux", "Web"],
    },
    model_eval: {
      languages: ["Python", "SQL"],
      tech: ["Weights & Biases", "Git"],
      platforms: ["Web"],
    },
    engineering: {
      languages: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "Bash/Shell"],
      tech: ["React", "Next.js", "Git", "Microservices"],
      platforms: ["Linux", "Web", "MacOS"],
    },
    production: {
      languages: ["Bash/Shell", "SQL"],
      tech: ["Docker/K8s", "Kubernetes", "Google Cloud", "Supabase", "Firebase"],
      platforms: ["Linux", "Web"],
    },
  };

  const isHighlighted = (section, item) => {
    if (!activeGroup) return true;
    return (HIGHLIGHT_MAP[activeGroup]?.[section] || []).includes(item);
  };

  const pillClass = (section, item) =>
    isHighlighted(section, item)
      ? "ring-emerald-400/55 dark:ring-emerald-300/55 bg-emerald-400/10 dark:bg-emerald-300/10"
      : "opacity-45";

  const scrollToProjects = () =>
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.section
      id="skill"
      className="section-wrap"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-inner">
        <div className="section-header">
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            What I use to design, build, and ship applied AI systems. Click a capability tile to highlight matching skills.
          </p>
          <div className="section-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div className="flex items-center justify-center">
            <Glass className="glass-card w-full p-3 md:p-4">
              <SkillMatrix
                activeGroup={activeGroup}
                onSelectGroup={(groupId) =>
                  setActiveGroup((prev) => (prev === groupId ? null : groupId))
                }
                onClear={() => setActiveGroup(null)}
                onNavigate={scrollTo}
              />
            </Glass>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <Glass className="glass-card p-5">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Languages
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {LANGUAGES.map((item) => (
                  <GlassPill key={item} className={pillClass("languages", item)}>
                    {item}
                  </GlassPill>
                ))}
              </div>
            </Glass>

            <Glass className="glass-card p-5">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Technologies / Frameworks
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {TECH.map((item) => (
                  <GlassPill key={item} className={pillClass("tech", item)}>
                    {item}
                  </GlassPill>
                ))}
              </div>
            </Glass>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Glass className="glass-card p-5 sm:col-span-2">
                <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Platforms
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PLATFORMS.map((item) => (
                    <GlassPill key={item} className={pillClass("platforms", item)}>
                      {item}
                    </GlassPill>
                  ))}
                </div>
              </Glass>

              <Glass className="glass-card p-5 flex items-center justify-center">
                <GlassButton onClick={scrollToProjects} className="w-full">
                  See Projects
                </GlassButton>
              </Glass>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
