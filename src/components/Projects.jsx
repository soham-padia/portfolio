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
      "I dedicated a considerable amount of effort to creating this web application using Angular, Tailwind, Supabase, and TypeScript as the primary technologies. Not only did this project enable me to gain a strong understanding of the Angular framework, but it also allowed me to explore the benefits of TypeScript and improve my coding skills for the long term. Overall, I am proud of the hard work I invested in this project, and it has been a significant learning experience for me.",
      image: "img/p3.gif",
      bgColor: "#0097b2",
      textColor: "#000000",
      gitLink: "https://github.com/soham-padia/neoe"
    },
  ];

  return (
    <motion.div
      id="project"
      className="h-screen font-mono backdrop-blur-lg shadow-inner rounded-lg flex flex-col py-20 snap-center justify-center"
    >
      <p className=" self-center basis-1/12 justify-self-center p-6 text-6xl">
        Notable Projects --{">"}
      </p>
      <div className=" basis-10/12">
        <div className="flex flex-row snap-x snap-mandatory scroll-smooth overflow-x-auto scrollbar-hide h-full p-5 flex-nowrap items-center">
          {projectInfo.map((project, index) => (
            <motion.div
              className={` bg-[#111111] text-white bg-cover snap-center m-3 w-full h-full shadow-md rounded-none flex-shrink-0`}
            >
              <ProjectSection image={project.image} title={project.title} description={project.description} gitLink={project.gitLink}></ProjectSection>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="basis-1/12 bg-[#333333] w-fit self-end rounded-lg p-4 px-20 mx-4"
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
