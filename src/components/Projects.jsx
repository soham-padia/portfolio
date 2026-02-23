// src/components/Projects.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Glass, GlassButton, GlassPill } from "./glass";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [state, setState] = useState({ loading: true, error: null });
  // replace fetch('/projects.json') ...
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/projects.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (alive) {
          setProjects(Array.isArray(data) ? data : []);
          setState({ loading: false, error: null });
        }
      } catch (e) {
        if (alive) setState({ loading: false, error: e.message || "Failed to load projects" });
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (state.loading) {
    // Skeleton shimmer
    return (
      <section id="project" className="p-5 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Glass key={i} className="p-4 sm:p-5">
              <div className="animate-pulse">
                <div className="h-40 w-full rounded-xl bg-white/10 mb-4" />
                <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />
                <div className="h-4 w-5/6 bg-white/10 rounded mb-6" />
                <div className="h-9 w-28 bg-white/10 rounded" />
              </div>
            </Glass>
          ))}
        </div>
      </section>
    );
  }

  if (state.error) {
    return (
      <section id="project" className="p-5 md:p-10">
        <Glass className="p-5">
          <p className="text-red-300 dark:text-red-300">
            Couldn’t load projects: {state.error}
          </p>
        </Glass>
      </section>
    );
  }

  return (
    <section id="project" className="p-5 md:p-10">
      <div className="mx-auto max-w-6xl mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Projects
        </h2>
        <p className="opacity-80 text-slate-800 dark:text-white/80">
          A few things I’ve built and shipped.
        </p>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title ?? idx}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, delay: idx * 0.03 }}
          >
            <Glass className="group h-full p-4 sm:p-5 flex flex-col">
              {/* Image */}
              {p.image ? (
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={p.image}
                    alt={p.title || "Project image"}
                    loading="lazy"
                    className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {/* optional overlay tint if bg needs contrast */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ) : (
                <div className="h-44 rounded-xl bg-white/5 ring-1 ring-white/10 mb-4" />
              )}

              {/* Title + description */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {p.title || "Untitled Project"}
              </h3>
              {p.tags && Array.isArray(p.tags) && p.tags.length > 0 && (
                <div className="mt-2 mb-1 flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t, i) => (
                    <GlassPill key={i}>{t}</GlassPill>
                  ))}
                </div>
              )}
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-white/80">
                {p.description || "No description provided."}
              </p>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Actions */}
              <div className="mt-4 flex items-center gap-2">
                {p.gitLink && (
                  <a href={p.gitLink} target="_blank" rel="noopener noreferrer">
                    <GlassButton>GitHub</GlassButton>
                  </a>
                )}
                {p.liveLink && (
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer">
                    <GlassButton variant="secondary">Live</GlassButton>
                  </a>
                )}
              </div>
            </Glass>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
