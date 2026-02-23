// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { GrLinkedinOption, GrGithub, GrInstagram } from "react-icons/gr";
import { Glass } from "./glass";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center py-8">
      <div className="w-screen flex flex-col items-center md:px-10 px-5 lg:px-20">
        <Glass className="w-full max-w-6xl px-6 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Left: copy */}
            <div className="text-sm">
              <p className="text-slate-900/80 dark:text-white/80">
                <span className="text-base align-middle">©</span>{" "}
                <span className="font-semibold">{year} Soham Padia</span>{" "}
                <span className="italic">— All Rights Reserved.</span>
              </p>
              <p className="text-slate-700/70 dark:text-white/60">
                Built with <span className="text-red-500">♥</span> by Soham Padia
              </p>
            </div>

            {/* Middle: quick links */}
            <nav className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:underline text-slate-900/80 dark:text-white/80">
                Privacy
              </a>
              <a href="#" className="hover:underline text-slate-900/80 dark:text-white/80">
                Terms
              </a>
              <a
                href="Soham_Padia-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-slate-900 dark:text-white"
              >
                My Resume
              </a>
            </nav>

            {/* Right: socials */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.linkedin.com/in/soham-padia/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-2"
                title="LinkedIn"
              >
                <GrLinkedinOption size={18} />
              </motion.a>
              <motion.a
                href="https://github.com/soham-padia"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-2"
                title="GitHub"
              >
                <GrGithub size={18} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/sohampadia/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-2"
                title="Instagram"
              >
                <GrInstagram size={18} />
              </motion.a>
            </div>
          </div>
        </Glass>
      </div>
    </footer>
  );
};

export default Footer;
