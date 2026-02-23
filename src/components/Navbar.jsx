// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GrLinkedinOption, GrGithub, GrInstagram } from "react-icons/gr";
import { Glass, GlassButton, GlassPill, useTheme } from "./glass";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const scroller = document.querySelector(".overflow-scroll");

    const onScroll = () => {
      const top = scroller ? scroller.scrollTop : window.scrollY;
      setIsScrolled(top > 50);
    };

    if (scroller) {
      scroller.addEventListener("scroll", onScroll);
    } else {
      window.addEventListener("scroll", onScroll);
    }

    onScroll(); // set initial state

    return () => {
      if (scroller) scroller.removeEventListener("scroll", onScroll);
      else window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-50 w-screen">
      {/* Liquid-glass nav container */}
      <Glass
        as="nav"
        className={`mx-auto mt-3 max-w-6xl px-4 transition-all ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left: logo + brand pill */}
          <div className="flex items-center gap-3">
            <img
              src="img/transparent_logo.png"
              alt="SOHAM PADIA"
              className={`object-cover transition-all ${
                isScrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
            />
            <GlassPill className="hidden sm:inline-flex">Soham Padia</GlassPill>
          </div>

          {/* Center: nav links (lg+) */}
          <ul className="hidden lg:flex items-center gap-6">
            {[
              { id: "hero", label: "Home" },
              { id: "skill", label: "Skills" },
              { id: "project", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <motion.li
                key={item.id}
                className="cursor-pointer text-slate-900/90 dark:text-white/90"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                {item.label}
              </motion.li>
            ))}
          </ul>

          {/* Right: search + actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search (expands on focus) */}
            {/* <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search…"
                className={[
                  "w-40 focus:w-72 transition-[width] duration-200 ease-out",
                  "rounded-xl bg-white/10 text-white/90 placeholder:text-white/60",
                  "ring-1 ring-white/25 focus:ring-white/40",
                  "px-3 py-1.5 outline-none",
                ].join(" ")}
              />
            </div> */}

            {/* Hire CTA */}
            <GlassButton
              variant="secondary"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hidden sm:inline-flex"
            >
              Hire Now
            </GlassButton>

            {/* Socials */}
            <div className="flex items-center">
              <motion.a
                href="https://www.linkedin.com/in/soham-padia/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-2"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <GrLinkedinOption />
              </motion.a>
              <motion.a
                href="https://github.com/soham-padia"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-2"
                aria-label="GitHub"
                title="GitHub"
              >
                <GrGithub />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/sohampadia/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-2"
                aria-label="Instagram"
                title="Instagram"
              >
                <GrInstagram />
              </motion.a>
            </div>

            {/* Resume */}
            <a
              href="Soham_Padia-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block"
              title="Resume"
            >
              <GlassButton variant="secondary">Resume</GlassButton>
            </a>

            {/* Theme toggle */}
            <GlassButton
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </GlassButton>
          </div>
        </div>
      </Glass>
    </div>
  );
};
