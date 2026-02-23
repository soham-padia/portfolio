// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Glass, GlassButton } from "./glass";

const ROTATION_MS = 2800;
const ROLE_SLIDES = [
  {
    title: "ML ENGINEER",
    proof: "Built and shipped a real-time inference API with 6 endpoints and p95/p99 tracking.",
  },
  {
    title: "AI ENGINEER",
    proof: "Published 3 peer-reviewed AI papers across NLP, multimodal feedback, and multi-agent learning.",
  },
  {
    title: "LLM ENGINEER",
    proof: "Designed retrieval-grounded prompting pipelines to improve answer reliability and reduce hallucinations.",
  },
  {
    title: "RAG ENGINEER",
    proof: "Built a FAISS-backed RAG assistant over 500+ pages with iterative chunking and embedding evaluation.",
  },
  {
    title: "MLOPS ENGINEER",
    proof: "Containerized services with health checks, CI/CD, and observability for latency and error-rate regressions.",
  },
  {
    title: "AI SYSTEMS ENGINEER",
    proof: "Ran 16-node adversarial simulations with reproducible experiments and F1 scores up to 1.00.",
  },
];

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % ROLE_SLIDES.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="section-wrap min-h-[calc(100vh-6rem)] flex items-center">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="flex flex-col justify-center gap-5"
        >
          <div className="mb-1">
            <Glass className="glass-card inline-block p-1.5">
              <img
                src="/img/profile-hero.jpeg"
                alt="Portrait of Soham Padia"
                className="h-36 w-36 md:h-44 md:w-44 rounded-xl object-cover object-center ring-1 ring-white/30"
              />
            </Glass>
          </div>

          <h1 className="font-display text-4xl md:text-6xl leading-[1.08] tracking-tight">
            I build ML systems that solve real problems.
          </h1>
          <p className="font-meta text-sm tracking-[0.14em] uppercase text-emerald-600 dark:text-emerald-300">
            research → prototype → ship
          </p>
          <h2 className="text-lg md:text-2xl text-slate-800/90 dark:text-white/85 leading-relaxed">
            Feature selection for NLP, AI speaking feedback, secure RL; stack: PyTorch, TensorFlow, React/Next.js.
          </h2>

          <div className="flex gap-2">
            <GlassButton onClick={() => scrollTo("skill")}>Learn More</GlassButton>
            <GlassButton variant="secondary" onClick={() => scrollTo("project")}>
              View Projects
            </GlassButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="flex md:p-2 flex-col justify-center items-start gap-5"
        >
          <div className="w-full text-slate-800 dark:text-white">
            <div className="font-display text-4xl md:text-6xl flex w-fit items-baseline gap-1 leading-tight">
              <p className="whitespace-pre-wrap">Hi, I'm Soham Padia</p>
            </div>

            <div
              className="mt-1 w-full max-w-3xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="mb-3 w-full max-w-[24ch]">
                <div className="relative h-6 flex items-center">
                  <span className="absolute left-0 right-0 h-px bg-black/20 dark:bg-white/25" />
                  <div className="relative z-10 flex w-full items-center justify-between">
                    {ROLE_SLIDES.map((slide, idx) => {
                      const active = idx === activeSlide;
                      return (
                        <button
                          key={slide.title}
                          type="button"
                          onClick={() => setActiveSlide(idx)}
                          aria-label={`Show role ${idx + 1}: ${slide.title}`}
                          className="group rounded-full p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/45"
                        >
                          <motion.span
                            animate={{
                              width: active ? 10 : 7,
                              height: active ? 10 : 7,
                              opacity: active ? 1 : 0.6,
                            }}
                            transition={{ duration: 0.2 }}
                            className="block rounded-full bg-emerald-500 dark:bg-emerald-300 group-hover:opacity-100"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[24ch] min-h-[3.5rem] md:min-h-[6.5rem]">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={ROLE_SLIDES[activeSlide].title}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display whitespace-nowrap text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none"
                  >
                    {ROLE_SLIDES[activeSlide].title}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <div className="min-h-[2.5rem] md:min-h-[3rem] w-full max-w-[44ch]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={ROLE_SLIDES[activeSlide].proof}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="text-sm md:text-base text-slate-700/85 dark:text-white/80 leading-relaxed"
                  >
                    {ROLE_SLIDES[activeSlide].proof}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <h1 className="font-meta text-lg md:text-xl w-fit opacity-90">LEARNER</h1>

            <div className="md:flex w-full mt-4 text-slate-700/90 dark:text-white/80">
              <p className="w-full md:w-auto md:pr-3 font-meta text-sm uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-300">
                About me
              </p>
              <p className="max-w-[65ch] leading-relaxed">
                Master’s student in Artificial Intelligence at Northeastern University with experience in machine learning, deep learning, and full-stack development. Driven by a passion for building impactful solutions that enhance everyday life and by a commitment to sharing knowledge through open-source and research contributions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
