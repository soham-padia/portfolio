import React from "react";
import { motion } from "framer-motion";

export const ProjectSection = (props) => {
  return (
    <div className={`h-full `}>
      <div className={`flex flex-col-reverse md:flex-row p-4 md:h-full h-fit items-center`}>
        <div className="basis-1/2 flex flex-col md:h-full h-fit justify-center">
          <h1 className={`text-5xl font-bold`}>{props.title}</h1>
          <p className={`text-xl font-semibold  m-10`}>{props.description}</p>
          <motion.a href={`${props.gitLink}`} target="_blank" className="bg-transparent w-fit self-start border-white border-2 p-2 px-6 hover:bg-white hover:text-black">
            Git Link
          </motion.a>
        </div>
        <div className="basis-1/2 h-full">
          <img
            className={`w-full h-full object-cover`}
            src={`${props.image}`}
            alt="My portfolio website"
          />
        </div>
      </div>
    </div>
  );
};
