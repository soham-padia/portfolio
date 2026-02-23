// src/components/glass.jsx
import React, { useEffect, useState } from "react";

/**
 * Persisted theme hook (light/dark).
 * Adds/removes `dark` on <html> and remembers in localStorage.
 */
export function useTheme() {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || (prefersDark ? "dark" : "light")
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

/**
 * Core glass panel
 * - Frosted translucency, specular top edge, soft inner vignette
 * - Theme-aware text colors to stay readable in light & dark
 */
export function Glass({ as: Tag = "div", className = "", children, ...props }) {
  const cls = [
    "relative isolate overflow-hidden rounded-2xl backdrop-blur-xl",
    // surface + default text color per theme
    "bg-white/10 dark:bg-white/5",
    "text-slate-900 dark:text-white",
    // ring + soft shadow
    "ring-1 ring-black/10 dark:ring-white/15",
    "shadow-[0_10px_30px_rgba(0,0,0,0.2)]",
    // top specular
    "before:absolute before:inset-0 before:pointer-events-none",
    "before:[background:linear-gradient(to_bottom,rgba(255,255,255,.35),rgba(255,255,255,0))] before:opacity-60",
    className,
  ].join(" ");

  return (
    <Tag className={cls} {...props}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60 dark:bg-white/25" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_100%_at_50%_0%,black,transparent_70%)] bg-gradient-to-b from-white/20 to-transparent dark:from-white/10" />
      {children}
    </Tag>
  );
}

/** Small glassy pill/badge */
export function GlassPill({ className = "", children, ...props }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
        "bg-black/5 text-slate-900 ring-1 ring-black/10",
        "dark:bg-white/10 dark:text-white/90 dark:ring-white/25",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}

/** Buttons that match the glass style */
export function GlassButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base = "rounded-xl px-4 py-2 text-sm transition";
  const variants = {
    primary: "bg-white/85 text-black hover:bg-white dark:bg-white/85 dark:text-black",
    secondary:
      "text-slate-900 ring-1 ring-black/10 hover:bg-black/5 dark:text-white/90 dark:ring-white/25 dark:hover:bg-white/10",
    ghost:
      "text-slate-900 ring-1 ring-black/10 hover:bg-black/5 backdrop-blur-md dark:text-white/90 dark:ring-white/25 dark:hover:bg-white/10",
  };
  return (
    <button
      className={[base, variants[variant] || variants.primary, className].join(
        " "
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/** Avatar framed in glass */
export function AvatarGlass({ src, alt = "", className = "" }) {
  return (
    <Glass className={["p-1 inline-block", className].join(" ")}>
      <img
        src={src}
        alt={alt}
        className="h-36 w-36 sm:h-44 sm:w-44 object-cover rounded-xl ring-1 ring-white/30"
      />
    </Glass>
  );
}

/** Background bokeh for the scene */
export function BackgroundTint({ className = "" }) {
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      ].join(" ")}
    >
      <div className="absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-10 top-1/4 h-60 w-60 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-300/10 blur-3xl" />
    </div>
  );
}
