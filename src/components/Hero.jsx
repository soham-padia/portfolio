// src/components/Hero.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { AvatarGlass, Glass, GlassButton, GlassPill } from "./glass";

export const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="md:h-screen flex snap-center items-center justify-between flex-col relative"
    >
      <div className="md:h-screen snap-center flex flex-col md:flex-row w-screen md:px-20 px-10 p-2 justify-between">
        {/* Left column: intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="md:basis-2/5 basis-1/2 flex flex-col justify-center gap-5"
        >
          <h1 className="font-mono text-2xl md:text-5xl">
            I build ML systems that solve real problems.
          </h1>
          <p className="text-[#25b15d]">research → prototype → ship</p>
          <h2 className="text-xl md:text-2xl opacity-90">
            Feature selection for NLP, AI speaking feedback, secure RL; stack: PyTorch, TensorFlow, React/Next.js.
          </h2>


          <div className="flex gap-2">
            <GlassButton onClick={() => scrollTo("skill")}>Learn More</GlassButton>
            <GlassButton variant="secondary" onClick={() => scrollTo("project")}>
              View Projects
            </GlassButton>
          </div>
        </motion.div>

        {/* Right column: portrait in liquid glass */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-20 mb-10 md:mb-0 md:mt-0 md:basis-3/5 basis-1/2 flex md:p-2 flex-col w-fit justify-center items-center gap-5 animate-[animate_2s_infinite_ease_alternate]"
        >
          <div className="md:w-3/4 font-mono text-slate-800 dark:text-white">
            <div className="md:text-6xl text-2xl flex w-fit items-baseline gap-1">
              <p className="whitespace-pre-wrap">Hi, I'm </p>
              <span className="inline-block">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Soham Padia")
                      .pauseFor(1000)
                      .deleteChars(11)
                      .typeString("सोहम पडिया")
                      .pauseFor(1000)
                      .deleteChars(10)
                      .typeString("સોહમ પડિયા")
                      .pauseFor(1000)
                      .deleteChars(10)
                      .typeString("Soham Padia")
                      .start();
                  }}
                />
              </span>
            </div>

            {/* Glass-framed portrait */}
            {/* <div className="mt-6 mb-4">
              <AvatarGlass src="img/SOHAM.png" alt="Portrait of Soham Padia" />
            </div> */}

            <h1 className="text-6xl md:text-8xl w-fit tracking-tight">RESEARCHER</h1>
            <h1 className="text-2xl w-fit opacity-90">LEARNER</h1>

            {/* About block (edit this text anytime) */}
            <div className="md:flex w-fit mt-4">
              <p className="w-full md:pr-2 font-semibold">About me:</p>
              <p className="opacity-90">
                Master’s student in Artificial Intelligence at Northeastern University with experience in machine learning, deep learning, and full-stack development. Driven by a passion for building impactful solutions that enhance everyday life and by a commitment to sharing knowledge through open-source and research contributions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom glass badge strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">

        <Glass className="px-3 py-2">
          <div className="flex flex-wrap items-center gap-2">
            {[
              "Applied AI",
              "NLP",
              "Computer Vision",
              "Reinforcement Learning",
              "Product"
            ].map((label) => (
              <motion.span
                key={label}
                whileHover={{ y: -1, scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className={[
                  "relative inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                  // light theme
                  "bg-black/5 text-slate-900 ring-1 ring-black/10",
                  // dark theme
                  "dark:bg-white/10 dark:text-white/90 dark:ring-white/25",
                  // liquid-ish interaction
                  "transition-all hover:px-4 hover:bg-emerald-400/10",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40"
                ].join(" ")}
              >
                <span className="relative pl-2">
                  {/* tiny specular dot */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full
                       bg-emerald-400/70 shadow-[0_0_10px_2px_rgba(16,185,129,0.35)]"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              </motion.span>
            ))}
          </div>
        </Glass>

      </div>
    </section>
  );
};
