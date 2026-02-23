import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** SkillWeb — compact/full variants to avoid overflow/clutter
 * props:
 *   variant: "compact" | "full" (default "compact")
 *   className?: string
 *   domains?, tools?, methods?, extraEdges?  (same API as before)
 */

const cx = 50, cy = 50;
const rDomains = 22, rTools = 34, rMethods = 46;

// helpers
const pos = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
};
const spread = (count, start = -90) =>
  Array.from({ length: count }, (_, i) => start + (360 / count) * i);

// label helpers
const SHORT = {
  "Computer Vision": "CV",
  "Reinforcement Learning": "RL",
  "Weights & Biases": "W&B",
  "HF/Transformers": "HF",
  "TensorFlow": "TF",
  "Scientific Computing": "Sci Comp",
  "Biomedical AI": "Bio AI",
  "Docker/K8s": "Docker",
};
const shorten = (s) => SHORT[s] || s;

// multi-line wrap for SVG labels (2 lines max)
function wrapLabel(label, maxLine = 10) {
  const words = label.split(" ");
  const lines = [];
  let curr = "";
  for (const w of words) {
    if ((curr + " " + w).trim().length <= maxLine) {
      curr = (curr ? curr + " " : "") + w;
    } else {
      if (curr) lines.push(curr);
      curr = w;
    }
  }
  if (curr) lines.push(curr);
  return lines.slice(0, 2); // cap to 2 lines
}

export default function SkillWeb({
  variant = "compact",
  domains = [
    { id: "nlp", label: "NLP" },
    { id: "cv", label: "Computer Vision" },
    { id: "rl", label: "Reinforcement Learning" },
    { id: "speech", label: "Speech" },
    { id: "bioai", label: "Biomedical AI" },
    { id: "sci", label: "Scientific Computing" },
  ],
  tools = [
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
  ],
  methods = [
    { id: "llms", label: "LLMs" },
    { id: "slms", label: "SLMs" },
    { id: "lora", label: "LoRA/PEFT" },
    { id: "rlhf", label: "RLHF" },
    { id: "metric", label: "Metric Learning" },
  ],
  extraEdges = [],
  className = "",
}) {
  const reduced = useReducedMotion();
  const ids = React.useId();

  // layout angles
  const domAngles = domains.map((d, i) => d.angle ?? spread(domains.length)[i]);
  const toolAngles = tools.map((t, i) => t.angle ?? spread(tools.length, -70)[i]);
  const methAngles = methods.map((m, i) => m.angle ?? spread(methods.length, -110)[i]);

  // sizes by variant
  const nodeCoreR = variant === "compact" ? 7.2 : 8;
  const nodeDomR  = variant === "compact" ? 3.6 : 4;
  const nodeToolR = variant === "compact" ? 3.0 : 3.3;
  const nodeMethR = variant === "compact" ? 3.2 : 3.6;

  const fontSize   = variant === "compact" ? 2.7 : 3.05;
  const labelPad   = variant === "compact" ? 3.3 : 4.0;
  const glowAdd    = variant === "compact" ? 1.0 : 1.3;
  const strokeThin = variant === "compact" ? 0.45 : 0.5;
  const edgeAlpha  = variant === "compact" ? "stroke-black/20 dark:stroke-white/20" : "stroke-black/25 dark:stroke-white/30";
  const edgeDash   = variant === "compact" ? "3 6" : "4 6";

  // nodes
  const nodes = [
    { id: "core", label: "Research ↔ Product", x: cx, y: cy, r: nodeCoreR, t: "core" },
    ...domains.map((d, i) => ({ id: d.id, label: d.label, ...pos(rDomains, domAngles[i]), r: nodeDomR, t: "domain" })),
    ...tools.map((t, i) => ({ id: t.id, label: t.label, ...pos(rTools, toolAngles[i]), r: nodeToolR, t: "tool" })),
    ...methods.map((m, i) => ({ id: m.id, label: m.label, ...pos(rMethods, methAngles[i]), r: nodeMethR, t: "method" })),
  ];
  const nodeById = Object.fromEntries(nodes.map(n => [n.id, n]));

  // edges (thinned in compact: fewer cross-links)
  const baseEdges = [
    // core → domains
    ...domains.map(d => ["core", d.id]),
    // domains → typical tools
    ["nlp","pytorch"],["nlp","hf"],["nlp","nltk"],
    ["cv","pytorch"],["cv","tf"],["cv","opencv"],
    ["rl","pytorch"],["rl","docker"],
    ["speech","tf"],
    ["bioai","pytorch"],["bioai","gcp"],
    ["sci","jupyter"],
    // methods → frameworks
    ["llms","hf"],["llms","pytorch"],
    ["slms","hf"],["slms","tf"],
    ["lora","pytorch"],["lora","hf"],
    ["rlhf","pytorch"],
  ];
  const fullExtras = [
    ["rlhf","wandb"],["metric","pytorch"],
    ["wandb","pytorch"],["wandb","tf"],
    ["docker","aws"],["docker","gcp"],
    ["react","next"],["react","gcp"],
  ];
  const edges = [
    ...baseEdges,
    ...(variant === "compact" ? [] : fullExtras),
    ...extraEdges,
  ];

  // theme helpers
  const themeStrokeFaint = "stroke-black/10 dark:stroke-white/10";
  const themeFillText = "fill-slate-900 dark:fill-white";

  const defIds = {
    blur: `${ids}-blur`,
    gradCore: `${ids}-gradCore`,
    gradDomain: `${ids}-gradDomain`,
    gradTool: `${ids}-gradTool`,
    gradMethod: `${ids}-gradMethod`,
  };

  const Edge = ({ a, b, i }) => {
    const A = nodeById[a], B = nodeById[b];
    if (!A || !B) return null;
    return (
      <motion.line
        x1={A.x} y1={A.y} x2={B.x} y2={B.y}
        className={edgeAlpha}
        strokeWidth={strokeThin}
        strokeLinecap="round"
        strokeDasharray={edgeDash}
        initial={false}
        animate={reduced ? { strokeDashoffset: 0 } : { strokeDashoffset: [-18, 0] }}
        transition={reduced ? undefined : { duration: 8 + (i % 5), repeat: Infinity, ease: "linear" }}
      />
    );
  };

  const Node = ({ n }) => {
    const fill =
      n.t === "core"   ? `url(#${defIds.gradCore})` :
      n.t === "domain" ? `url(#${defIds.gradDomain})` :
      n.t === "tool"   ? `url(#${defIds.gradTool})` :
                         `url(#${defIds.gradMethod})`;

    // label (shorter in compact)
    const rawLabel = variant === "compact" ? shorten(n.label) : n.label;
    const lines = wrapLabel(rawLabel, variant === "compact" ? 9 : 12);
    const fs = fontSize;
    const labelY0 = n.r + labelPad;

    return (
      <motion.g
        initial={{ x: n.x, y: n.y }}
        animate={{ x: n.x, y: n.y }}
        whileHover={{ scale: 1.08, translateY: -0.25 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{ cursor: "default", transformBox: "fill-box", transformOrigin: "center" }}
        tabIndex={0}
        aria-label={rawLabel}
      >
        <circle r={n.r + glowAdd} className="fill-black/5 dark:fill-white/10" filter={`url(#${defIds.blur})`} />
        <circle r={n.r} fill={fill} />
        <circle r={n.r} fill="none" className="stroke-black/25 dark:stroke-white/30" strokeWidth={strokeThin} />
        {/* label (1–2 lines) */}
        <text x={0} y={labelY0} className={themeFillText} textAnchor="middle" style={{ fontSize: fs, letterSpacing: 0.12, lineHeight: 1.1 }}>
          {lines.map((ln, idx) => (
            <tspan key={idx} x={0} dy={idx === 0 ? 0 : fs * 1.1}>{ln}</tspan>
          ))}
        </text>
        <title>{n.label}</title>
      </motion.g>
    );
  };

  return (
    <motion.svg
      // extra margin in viewBox so labels don't clip inside container
      viewBox="-8 -8 116 116"
      preserveAspectRatio="xMidYMid meet"
      className={`block mx-auto w-[min(86vw,560px)] md:w-[min(44vw,560px)] aspect-square ${className}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      role="img"
      aria-label="Skill network"
    >
      <defs>
        <filter id={defIds.blur}><feGaussianBlur stdDeviation="1.05" /></filter>

        <radialGradient id={defIds.gradCore} cx="50%" cy="45%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#c6b8ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8fc2ff" stopOpacity="0.7" />
        </radialGradient>
        <radialGradient id={defIds.gradDomain} cx="50%" cy="40%">
          <stop offset="0%" stopColor="#eef3ff" stopOpacity="0.98" />
          <stop offset="70%" stopColor="#b9d0ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#90b4ff" stopOpacity="0.8" />
        </radialGradient>
        <radialGradient id={defIds.gradTool} cx="50%" cy="40%">
          <stop offset="0%" stopColor="#f7edff" stopOpacity="0.98" />
          <stop offset="70%" stopColor="#e0c6ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#caa9ff" stopOpacity="0.8" />
        </radialGradient>
        <radialGradient id={defIds.gradMethod} cx="50%" cy="40%">
          <stop offset="0%" stopColor="#e7fff6" stopOpacity="0.98" />
          <stop offset="70%" stopColor="#b9f0d9" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#90e2c7" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      {/* guide rings */}
      <circle cx={cx} cy={cy} r={rDomains} className={`fill-none ${themeStrokeFaint}`} strokeWidth={strokeThin} />
      <circle cx={cx} cy={cy} r={rTools}   className={`fill-none ${themeStrokeFaint}`} strokeWidth={strokeThin} />
      <circle cx={cx} cy={cy} r={rMethods} className={`fill-none ${themeStrokeFaint}`} strokeWidth={strokeThin} />

      {/* edges */}
      {edges.map(([a,b], i) => <Edge key={`${a}-${b}-${i}`} a={a} b={b} i={i} />)}

      {/* nodes */}
      {nodes.map((n) => <Node key={n.id} n={n} />)}
    </motion.svg>
  );
}
