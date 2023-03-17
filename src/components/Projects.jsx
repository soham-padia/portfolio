import React from "react";

import { motion } from "framer-motion";
import { ProjectSection } from "./ProjectSection";

export const Projects = () => {
  return (
    <motion.div
      id="project"
      className="h-screen font-mono backdrop-blur-lg shadow-inner rounded-lg flex snap-center justify-center"
    >
      <div className="h-9/10 snap-center rounded-lg backdrop-blur-md shadow-[0_0_10px_-1px_rgba(0,0,0,0.1)] shadow-gray-800 m-10 bg-gradient-to-br from-[#111111] via-[#000000] to-[#111111] flex flex-col w-screen  justify-between">
        <p className=" self-center basis-1/12 justify-self-center p-6 text-6xl">
          Notable Projects
        </p>
        <div className=" basis-10/12">
          <div className="flex flex-col h-full p-5 flex-nowrap items-center overflow-y-scroll">
            <motion.div
              className={`basis-3/5 bg-[url('img/website.png')] bg-cover m-3 w-full shadow-md rounded-none flex-shrink-0`}
            >
              <ProjectSection></ProjectSection>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              className={`basis-3/5 bg-[url('img/website.png')] bg-cover m-3 w-full rounded-none flex-shrink-0`}
            >
              <ProjectSection></ProjectSection>
            </motion.div>
          </div>
        </div>
        <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className="basis-1/12 bg-[#333333] w-fit self-end rounded-lg my-2 px-20 mx-4"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          See more
        </motion.button>
      </div>
    </motion.div>
  );
};
