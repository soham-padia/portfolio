// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";
import StatsComponent from "./StatsComponent";
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
    // Claim full viewport height and stack content + footer
    <section id="contact" className="snap-center min-h-screen flex flex-col">
      {/* CONTENT: grows to fill, keeping footer at bottom */}
      <div className="mx-auto max-w-6xl w-full px-4 justify-center flex flex-col md:px-6 py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center flex flex-col items-stretch">
          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="h-full justify-center flex flex-col"
          >
            <Glass className="h-full p-6 md:p-8 text-center flex flex-col justify-center">
              <h1 className="font-mono font-light text-3xl mb-4">Contact Me</h1>

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

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="h-full"
          >
            <StatsComponent className="h-full" />
          </motion.div>

          {/* Boston map card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
            <Glass className="h-full p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-3">Based in Boston, MA</h3>
              <Map />
            </Glass>
          </motion.div>
        </div>
      </div>

      {/* FOOTER: stays at the end of this page section */}
      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
