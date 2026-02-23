// src/components/ProjectSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Glass, GlassButton, GlassPill } from "./glass";

/**
 * Apple-style glass project card
 * - Mobile-first single card; responsive without JS resize listeners
 * - Accepts legacy props (bgColor, textColor) for accent compatibility
 * - Optional: tags[], gitLink, liveLink
 */
export const ProjectSection = (props) => {
  const {
    title = "Untitled Project",
    description = "No description provided.",
    image,
    gitLink,
    liveLink,
    tags = [],
    // legacy accent props (optional)
    bgColor,
    textColor,
  } = props;

  const accent = textColor || "#25b15d";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.2 }}
    >
      <Glass className="group h-full p-4 sm:p-5 flex flex-col">
        {/* Image header */}
        {image ? (
          <div className="relative overflow-hidden rounded-xl mb-4">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-44 md:h-56 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            {/* subtle top glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ) : (
          <div className="h-44 md:h-56 rounded-xl bg-white/5 ring-1 ring-white/10 mb-4" />
        )}

        {/* Title + tags */}
        <h3
          className="text-lg font-semibold text-slate-900 dark:text-white"
          style={textColor ? { color: textColor } : undefined}
        >
          {title}
        </h3>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-2 mb-1 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((t, i) => (
              <GlassPill key={i}>{t}</GlassPill>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-white/80">
          {description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="mt-4 flex items-center gap-2">
          {gitLink && (
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <GlassButton>GitHub</GlassButton>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <GlassButton variant="secondary">Live</GlassButton>
            </a>
          )}
        </div>

        {/* Optional accent bar using legacy bgColor */}
        {bgColor && (
          <div
            className="mt-4 h-1 w-full rounded-full opacity-60"
            style={{ background: bgColor }}
          />
        )}

        {/* Optional accent border using legacy textColor */}
        {textColor && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{ boxShadow: `inset 0 0 0 1px ${accent}20` }}
          />
        )}
      </Glass>
    </motion.div>
  );
};

export default ProjectSection;
