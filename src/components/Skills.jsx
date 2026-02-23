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

const METHODS = [
  { id: "llms", label: "LLMs" },
  { id: "slms", label: "SLMs" },
  { id: "lora", label: "LoRA/PEFT" },
  { id: "rlhf", label: "RLHF" },
  { id: "metric", label: "Metric Learning" },
];

const TOOLS = [
  { id: "pytorch", label: "PyTorch" },
  { id: "hf", label: "HF/Transformers" },
  { id: "tf", label: "TensorFlow" },
  { id: "opencv", label: "OpenCV" },
  { id: "nltk", label: "NLTK" },
  { id: "jupyter", label: "Jupyter" },
  { id: "wandb", label: "Weights & Biases" },
  { id: "docker", label: "Docker/K8s" },
  { id: "aws", label: "AWS" },
  { id: "gcp", label: "GCP" },
  { id: "react", label: "React" },
  { id: "next", label: "Next.js" },
];

// Optionally tweak domain labels if you want longer text:
const DOMAINS = [
  { id: "nlp", label: "NLP" },
  { id: "cv", label: "Computer Vision" },
  { id: "rl", label: "Reinforcement Learning" },
  { id: "speech", label: "Speech" },
  { id: "bioai", label: "Biomedical AI" },
  { id: "sci", label: "Scientific Computing" },
];

const PLATFORMS = ["Linux", "Windows", "Android", "Web", "MacOS"];

export const Skills = () => {
  const scrollToProjects = () =>
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.section
      id="skill"
      className="md:h-screen flex snap-center justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.25 }}
    >
      <div className="w-screen max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-8">
        {/* Left: Skill web inside a glass frame */}
        <div className="flex items-center justify-center">
          <Glass className="p-3 md:p-4 overflow-hidden">
            <SkillWeb variant="compact" />
          </Glass>
        </div>


        {/* Right: Skills content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div>
            <h1 className="font-mono text-4xl md:text-5xl tracking-tight">
              SKILLS
            </h1>
            <p className="mt-1 text-[#25b15d]">What I work with</p>
          </div>

          {/* Languages */}
          <Glass className="p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Languages
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {LANGUAGES.map((item) => (
                <GlassPill key={item}>{item}</GlassPill>
              ))}
            </div>
          </Glass>

          {/* Technologies / Frameworks */}
          <Glass className="p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Technologies / Frameworks
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {TECH.map((item) => (
                <GlassPill key={item}>{item}</GlassPill>
              ))}
            </div>
          </Glass>

          {/* Platforms + CTA */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Glass className="p-5 sm:col-span-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Platforms
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {PLATFORMS.map((item) => (
                  <GlassPill key={item}>{item}</GlassPill>
                ))}
              </div>
            </Glass>

            <Glass className="p-5 flex items-center justify-center">
              <GlassButton onClick={scrollToProjects} className="w-full">
                See Projects
              </GlassButton>
            </Glass>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
