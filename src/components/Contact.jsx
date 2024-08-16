import React from "react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";
import StatsComponent from "./StatsComponent";

export const Contact = () => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText("sohampadia10@gmail.com");
    alert("Email address copied to clipboard!");
  };

  return (
    <div id="contact" className="md:h-screen h-fit snap-center">
      <div className="w-screen md:h-5/6 h-fit flex flex-col md:flex-row justify-between gap-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="basis-1/2 flex flex-col items-center justify-center"
        >
          <div className="w-[500px] flex flex-col items-center justify-center md:gap-6 gap-3 px-4 md:px-0 text-center">
            <h1 className="font-mono font-light text-3xl mb-4">Contact Me</h1>
            <a
              href="mailto:sohampadia10@gmail.com?subject=Contact from Portfolio"
              className="text-2xl font-semibold text-[#25b15d] hover:underline"
            >
              sohampadia10@gmail.com
            </a>
            <button
              onClick={copyToClipboard}
              className="mt-4 bg-[#25b15d] text-white p-2 px-4 rounded-md hover:bg-green-600 transition-all"
            >
              Click to Copy Email
            </button>
            <p className="mt-4 text-lg">Click the email above to send me a message directly, or copy the email address using the button.</p>
          </div>
        </motion.div>
        
        <StatsComponent />
        
      </div>
      <Footer />
    </div>
  );
};
