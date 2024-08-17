import React, { useState, useEffect } from "react";
import { GrLinkedinOption, GrGithub, GrInstagram } from "react-icons/gr";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollElement = document.querySelector(".overflow-scroll");
      if (scrollElement.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollElement = document.querySelector(".overflow-scroll");
    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-screen z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-transparent dm-mono-medium"
          : "py-4 dm-mono-regular"
      }`}
      style={{
        backgroundImage: isScrolled ? "none" : "url('/footer.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`flex justify-center sm:w-full ${
          isScrolled
            ? "backdrop-blur-xl py-2"
            : "backdrop-blur-2xl drop-shadow-2xl"
        }`}
      >
        <div className="flex justify-between items-center w-full md:px-10 px-5 lg:px-20">
          <div className="flex items-center gap-12">
            <img
              src="img/transparent_logo.png"
              alt="SOHAM PADIA"
              className={`object-cover transition-all duration-300 ${
                isScrolled ? "h-10 w-10" : "h-14 w-14"
              }`}
            />
            <ul className="lg:flex hidden gap-5 list-none">
              <motion.li
                onClick={() =>
                  document.getElementById("hero").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                Home
              </motion.li>
              <motion.li
                onClick={() =>
                  document.getElementById("skill").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                Skills
              </motion.li>
              <motion.li
                onClick={() =>
                  document.getElementById("project").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                Projects
              </motion.li>
              <motion.li
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                Contact
              </motion.li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <motion.button
              onClick={() =>
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                })
              }
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 p-2 bg-transparent cursor-pointer"
            >
              Hire Now
            </motion.button>
            <div className="flex gap-2">
              <motion.a
                href="https://www.linkedin.com/in/soham-padia-6865341b7/"
                target={"_blank"}
              >
                <motion.button
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-transparent cursor-pointer"
                >
                  <GrLinkedinOption />
                </motion.button>
              </motion.a>
              <motion.a href="https://github.com/soham-padia" target={"_blank"}>
                <motion.button
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-transparent cursor-pointer"
                >
                  <GrGithub />
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
                  <GrInstagram />
                </motion.button>
              </motion.a>
              <motion.a
                href="Soham_Padia-Resume.pdf"
                target="_blank"
                className=" md:pl-5"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-transparent cursor-pointer"
                >
                  My Resume
                </motion.button>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
