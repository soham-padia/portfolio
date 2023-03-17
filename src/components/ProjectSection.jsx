import React from "react";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  return (
    <div className={`h-full`}>
      <div className={`flex flex-row h-full items-center`}>
        <div className="basis-1/2 flex flex-col h-full justify-center">
          <h1 className={`text-4xl font-bold mix-blend-difference`}>My Portfolio website</h1>
          <p className={`text-xl font-semibold mix-blend-difference text-[#fa3030] m-10`}>
          Through building this project with React, I gained a wealth of knowledge about Tailwind, JavaScript, and Framer Motion, among other things. It was a highly enjoyable experience, and I'm proud to say that it even served as a foundation for developing my own portfolio website.
          </p>
          <motion.button className="bg-transparent w-fit self-start border-white border-2 p-2 hover:bg-white hover:text-black">
            Learn more
          </motion.button>
        </div>
        <div className="basis-1/2">
        </div>
      </div>
    </div>
  );
};
