// src/components/SkillWeb.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * SkillWeb
 * - SVG network (viewBox 0..100) so it scales cleanly in your Glass card
 * - Theme-aware strokes/fills via Tailwind classes
 * - Gentle, Apple-ish motion (edge dash drift, node float on hover)
 *
 * No extra deps beyond framer-motion.
 */

const cx = 50; // center x
const cy = 50; // center y
const ring1R = 24; // inner ring radius
const ring2R = 36; // outer ring radius

// Helpers for polar to cartesian
const pos = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
};

// Nodes (two rings + core)
const nodes = [
  { id: "core", label: "Research ↔ Product", x: cx, y: cy, r: 8, t: "core" },

  // Ring 1 — domains
  { id: "nlp", label: "NLP", ...pos(ring1R, -90), r: 4, t: "domain" },
  { id: "cv", label: "CV", ...pos(ring1R, -18), r: 4, t: "domain" },
  { id: "rl", label: "RL", ...pos(ring1R, 54), r: 4, t: "domain" },
  { id: "speech", label: "Speech", ...pos(ring1R, 126), r: 4, t: "domain" },
  { id: "analytics", label: "Analytics", ...pos(ring1R, 198), r: 4, t: "domain" },

  // Ring 2 — stack/tools
  { id: "pytorch", label: "PyTorch", ...pos(ring2R, -60), r: 3.2, t: "tool" },
  { id: "hf", label: "HF/Transformers", ...pos(ring2R, -20), r: 3.2, t: "tool" },
  { id: "tf", label: "TensorFlow", ...pos(ring2R, 20), r: 3.2, t: "tool" },
  { id: "react", label: "React", ...pos(ring2R, 60), r: 3.2, t: "tool" },
  { id: "tailwind", label: "Tailwind", ...pos(ring2R, 100), r: 3.2, t: "tool" },
  { id: "gcp", label: "GCP", ...pos(ring2R, 140), r: 3.2, t: "tool" },
  { id: "docker", label: "Docker/K8s", ...pos(ring2R, 180), r: 3.2, t: "tool" },
];

// Edges (core -> ring1; ring1 -> ring2)
const edges = [
  // core to domains
  ["core", "nlp"],
  ["core", "cv"],
  ["core", "rl"],
  ["core", "speech"],
  ["core", "analytics"],
  // domains to tools (a few reasonable connections)
  ["nlp", "pytorch"],
  ["nlp", "hf"],
  ["cv", "pytorch"],
  ["cv", "tf"],
  ["rl", "pytorch"],
  ["rl", "docker"],
  ["speech", "tf"],
  ["analytics", "gcp"],
  ["react", "tailwind"],
  ["react", "gcp"],
];

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

const Edge = ({ a, b, i }) => {
  const A = nodeById[a];
  const B = nodeById[b];
  return (
    <motion.line
      x1={A.x}
      y1={A.y}
      x2={B.x}
      y2={B.y}
      className="stroke-black/20 dark:stroke-white/25"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeDasharray="4 6"
      // a very gentle, perpetual dash drift
      animate={{ strokeDashoffset: [-20, 0] }}
      transition={{ duration: 8 + (i % 5), repeat: Infinity, ease: "linear" }}
    />
  );
};

const Node = ({ n }) => {
  const fill =
    n.t === "core"
      ? "url(#gradCore)"
      : n.t === "domain"
      ? "url(#gradDomain)"
      : "url(#gradTool)";
  return (
    <motion.g
      transform={`translate(${n.x} ${n.y})`}
      whileHover={{ scale: 1.08, y: -0.2 }}
      whileTap={{ scale: 0.98 }}
      style={{ cursor: "default" }}
    >
      {/* soft glow */}
      <circle
        r={n.r + 1.4}
        className="fill-black/5 dark:fill-white/10"
        filter="url(#blur)"
      />
      {/* node */}
      <circle r={n.r} fill={fill} className="ring-1" />
      {/* ring */}
      <circle
        r={n.r}
        fill="none"
        className="stroke-black/25 dark:stroke-white/30"
        strokeWidth={0.5}
      />
      {/* label */}
      <text
        x={0}
        y={n.r + 3.6}
        style={{ fontSize: 3.2 }}
        className="fill-slate-900 dark:fill-white"
        textAnchor="middle"
      >
        {n.label}
      </text>
    </motion.g>
  );
};

export default function SkillWeb() {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-[min(80vw,520px)] aspect-square"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <defs>
        {/* gentle blur for glows */}
        <filter id="blur">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>

        {/* gradients for nodes */}
        <radialGradient id="gradCore" cx="50%" cy="45%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#b794ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#84b6ff" stopOpacity="0.65" />
        </radialGradient>

        <radialGradient id="gradDomain" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#e9ecff" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#b1c8ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#89aaff" stopOpacity="0.75" />
        </radialGradient>

        <radialGradient id="gradTool" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#f5e9ff" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#d8b8ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c5a2ff" stopOpacity="0.75" />
        </radialGradient>
      </defs>

      {/* faint rings */}
      <circle
        cx={cx}
        cy={cy}
        r={ring1R}
        className="fill-none stroke-black/10 dark:stroke-white/10"
        strokeWidth={0.4}
      />
      <circle
        cx={cx}
        cy={cy}
        r={ring2R}
        className="fill-none stroke-black/10 dark:stroke-white/10"
        strokeWidth={0.4}
      />

      {/* edges */}
      {edges.map(([a, b], i) => (
        <Edge key={`${a}-${b}`} a={a} b={b} i={i} />
      ))}

      {/* nodes */}
      {nodes.map((n) => (
        <Node key={n.id} n={n} />
      ))}
    </motion.svg>
  );
}
