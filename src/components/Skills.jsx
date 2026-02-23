// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { Glass, GlassPill, GlassButton } from "./glass";
import SkillWeb from "./SkillWeb";

const LANGUAGES = [
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
  "React",
  "Angular",
  "Django",
  "Blender",
  "Microservices",
  "Google Cloud",
  "Docker",
  "Kubernetes",
];

const PLATFORMS = ["Linux", "Windows", "Android", "Web", "MacOS"];

export const Skills = () => {
  const scrollToProjects = () =>
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });

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
          <p className="section-subtitle">What I use to design, build, and ship applied AI systems.</p>
          <div className="section-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className="flex items-center justify-center">
          <Glass className="glass-card p-3 md:p-4 overflow-hidden">
            <SkillWeb variant="compact" />
          </Glass>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <Glass className="glass-card p-5">
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
              Languages
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {LANGUAGES.map((item) => (
                <GlassPill key={item}>{item}</GlassPill>
              ))}
            </div>
          </Glass>

          <Glass className="glass-card p-5">
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
              Technologies / Frameworks
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {TECH.map((item) => (
                <GlassPill key={item}>{item}</GlassPill>
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
                  <GlassPill key={item}>{item}</GlassPill>
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
