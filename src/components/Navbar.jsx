import React from "react";
import { GrLinkedinOption, GrGithub, GrInstagram } from "react-icons/gr";
import { motion } from "framer-motion";

export const Navbar = () => {



  return (
    <div className="flex justify-center ">
      <div className="w-screen flex justify-between items-center px-20 p-2">
        <div className="flex items-center gap-12">
          <img
            src="img/transparent_logo.png"
            alt="SOHAM PADIA"
            className="object-cover h-20 w-20"
          />
          <ul className="flex gap-5 list-none">
            <motion.li onClick={()=>{document.getElementById('hero').scrollIntoView({behavior:'smooth'})}}  whileHover={{scale:1.2}} whileTap={{scale:0.9}} className="cursor-pointer">Home</motion.li>
            <motion.li onClick={()=>{document.getElementById('skill').scrollIntoView({behavior:'smooth'})}} whileHover={{scale:1.2}} whileTap={{scale:0.9}} className="cursor-pointer">Skills</motion.li>
            <motion.li onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})}} whileHover={{scale:1.2}} whileTap={{scale:0.9}} className="cursor-pointer">Contact</motion.li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <motion.button onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})}} whileHover={{scale:1.2}} whileTap={{scale:0.9}} className="w-24 p-2 bg-transparent cursor-pointer">
            Hire Now
          </motion.button >
          <div>
            <motion.a
              href="https://www.linkedin.com/in/soham-padia-6865341b7/"
              target={"_blank"}
            >
              <motion.button
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-transparent cursor-pointer"
              >
                <GrLinkedinOption></GrLinkedinOption>
              </motion.button>
            </motion.a>
            <motion.a href="https://github.com/soham-padia" target={"_blank"}>
              <motion.button
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-transparent cursor-pointer"
              >
                <GrGithub></GrGithub>
              </motion.button>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/sohampadia/"
              target={"_blank"}
            >
              <motion.button
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-transparent cursor-pointer"
              >
                <GrInstagram></GrInstagram>
              </motion.button>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};
