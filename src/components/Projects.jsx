import React from "react";

import { motion } from "framer-motion";
import { ProjectSection } from "./ProjectSection";

export const Projects = () => {
  
  const projectInfo = [
    {
      title: "My Portfolio Project",
      description:
        "Through building this project with React, I gained a wealth of knowledge about Tailwind, JavaScript, and Framer Motion, among other things. It was a highly enjoyable experience, and I'm proud to say that it even served as a foundation for developing my own portfolio website.",
      image: "img/sale.gif",
      bgColor: "#111111",
      textColor: "#ffffff",
      gitLink: "https://github.com/soham-padia/portfolio"
    },
    {
      title: "A bookings website",
      description:
        "By undertaking the development of this project using GoLang, I acquired extensive knowledge about various technologies such as Go, Html, css, and Postgresql. The process of building this project was extremely gratifying, and I am pleased to mention that it even laid the groundwork for creating a hotels booking website.",
      image: "img/p2.gif",
      bgColor: "#fe9c35",
      textColor: "#000000",
      gitLink: "https://github.com/soham-padia/bookings"
    },
    {
      title: "An Angular website with Supabase as Backend",
      description:
        "I invested a lot of effort in creating this web app using Angular, Tailwind, Supabase, and TypeScript. It helped me understand Angular and improve my coding skills. Overall, it was a valuable learning experience for me.",
      image: "img/p3.gif",
      bgColor: "#0097b2",
      textColor: "#000000",
      gitLink: "https://github.com/soham-padia/neoe"
    },
  ];

  return (
    <motion.div
      id="project"
      className="md:h-screen h-fit font-mono backdrop-blur-lg md:shadow-inner md:rounded-lg flex flex-col py-20 snap-center md:justify-center"
    >
      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}} className=" self-center  md:basis-1/12 justify-self-center md:p-4 text-6xl">
        Notable Projects --{">"}
      </motion.p>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}} className=" md:basis-10/12">
        <div className="flex flex-row snap-x snap-mandatory scroll-smooth overflow-x-auto scrollbar-hide md:h-full md:p-5 flex-nowrap items-center">
          {projectInfo.map((project, index) => (
            <motion.div
              className={` bg-[#111111] text-white bg-cover snap-center md:m-3 w-full h-full shadow-md rounded-none flex-shrink-0`}
            >
              <ProjectSection image={project.image} title={project.title} description={project.description} gitLink={project.gitLink}></ProjectSection>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:basis-1/12 bg-[#333333] w-fit self-end rounded-lg p-4 px-20 mx-4"
        initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}}
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        See more
      </motion.button>
    </motion.div>
  );
};
