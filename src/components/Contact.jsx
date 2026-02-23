// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";
import { Glass, GlassButton } from "./glass";
import Map from "./Map";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "padia.so+p@northeastern.edu";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    } finally {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section id="contact" className="section-wrap min-h-screen flex flex-col">
      <div className="section-inner w-full flex flex-col flex-1">
        <div className="section-header">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s Build Something Useful</h2>
          <p className="section-subtitle">
            Open to Summer 2026 internships and collaboration opportunities in ML, AI systems, and product engineering.
          </p>
          <div className="section-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="h-full justify-center flex flex-col"
          >
            <Glass className="glass-card h-full p-6 md:p-8 text-center flex flex-col justify-center">
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4">Contact Me</h3>

              <a
                href={`mailto:${email}?subject=Contact from Portfolio`}
                className="text-l font-semibold text-[#25b15d] hover:underline"
                rel="noopener noreferrer"
              >
                {email}
              </a>

              <div className="mt-4 flex items-center justify-center gap-3">
                <GlassButton onClick={copyToClipboard}>Copy Email</GlassButton>
                <a
                  href={`mailto:${email}?subject=Contact from Portfolio`}
                  rel="noopener noreferrer"
                >
                  <GlassButton variant="secondary">Email Me</GlassButton>
                </a>
              </div>

              <p className="mt-4 text-lg opacity-80">
                Click the email above to send me a message directly, or copy the address using the button.
              </p>

              {copied && (
                <div
                  className="mt-3 text-sm text-emerald-600 dark:text-emerald-300"
                  aria-live="polite"
                >
                  Copied to clipboard ✓
                </div>
              )}
            </Glass>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="h-full"
          >
            <Glass className="glass-card h-full p-4 md:p-6">
              <h3 className="font-display text-2xl font-semibold mb-3">Based in Boston, MA</h3>
              <Map />
            </Glass>
          </motion.div>
        </div>
      </div>

      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
