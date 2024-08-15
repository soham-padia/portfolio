import React from "react";
import { motion } from "framer-motion";

export const ProjectSection = (props) => {
  return (
    <div 
      className="w-full min-h-[40rem] h-auto flex items-center relative" 
      style={{ backgroundColor: props.bgColor, backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div> {/* This creates a dark overlay */}
      
      <motion.div 
        className="relative z-10 w-full md:w-3/4 lg:w-1/2 p-10" 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold mb-4" style={{ color: props.textColor }}>{props.title}</h1>
        <p className="text-lg mb-8" style={{ color: props.textColor }}>{props.description}</p>
        <motion.a 
          href={props.gitLink} 
          target="_blank" 
          className="text-lg border-2 px-6 py-2 inline-block" 
          style={{ color: props.textColor, borderColor: props.textColor }}
          whileHover={{ backgroundColor: props.textColor, color: props.bgColor }}
        >
          View Project
        </motion.a>
      </motion.div>
    </div>
  );
};
