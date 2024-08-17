import { motion } from "framer-motion";
import { GrLinkedinOption, GrGithub, GrInstagram } from "react-icons/gr";

export const Footer = () => {
  return (
    <div className="flex justify-center py-8"
      style={{
        backgroundImage:"url('/footer.gif')",
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
      }}
    >
      <div className="w-screen flex flex-col items-center md:px-10 px-5 lg:px-20 backdrop-blur-3xl">
        <p className="font-playfair md:text-lg text-gray-800">
          <span className="md:text-2xl">©</span> 
          <span className="font-bold">2024 Soham Padia</span> 
          <span className="italic"> — All Rights Reserved.</span>
        </p>
        <p className="font-playfair text-sm text-gray-500 mt-1">
          Built with <span className="text-red-500">♥</span> by Soham Padia
        </p>
        <div className="flex items-center gap-5 mt-5">
          <motion.a
            href="https://www.linkedin.com/in/soham-padia-6865341b7/"
            target={"_blank"}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-transparent cursor-pointer"
          >
            <GrLinkedinOption size={20} />
          </motion.a>
          <motion.a
            href="https://github.com/soham-padia"
            target={"_blank"}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-transparent cursor-pointer"
          >
            <GrGithub size={20} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/sohampadia/"
            target={"_blank"}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-transparent cursor-pointer"
          >
            <GrInstagram size={20} />
          </motion.a>
          <motion.a
            href="Soham_Padia-Resume.pdf"
            target="_blank"
            className="p-2 bg-transparent cursor-pointer"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            My Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};


