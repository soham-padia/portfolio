import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ProjectSection = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786);

  // Setup event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div
        className="relative w-full min-h-[24rem] md:min-h-[40rem] flex items-center p-4 md:p-8"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: props.bgColor, // Dynamic background color
        }}
      >
        <div
          className="w-full h-full absolute top-0 left-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${props.image}')` }}
        />
        {/* Content overlay */}
        <motion.div
          className="z-10 w-full md:w-3/4 lg:w-1/2 p-5 md:p-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ backgroundColor: props.bgColor }}
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: props.textColor }}
          >
            {props.title}
          </h1>
          <p
            className="text-base md:text-xl font-semibold mb-8"
            style={{ color: props.textColor }}
          >
            {props.description}
          </p>
          <motion.a
            href={props.gitLink}
            target="_blank"
            className="text-base md:text-lg border-2 px-4 md:px-6 py-2 inline-block"
            style={{
              color: props.textColor,
              borderColor: props.textColor,
              backgroundColor: props.bgColor,
            }}
            whileHover={{
              backgroundColor: props.textColor,
              color: props.bgColor,
            }}
          >
            View Project
          </motion.a>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div
        className="p-8"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: props.bgColor, // Dynamic background color
        }}
      >
        <div
          className="w-full min-h-[40rem] h-auto flex items-center relative"
          style={{
            backgroundImage: `url('${props.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: props.bgColor, // Dynamic background color
          }}
        >
          {/* Content overlay */}
          <motion.div
            className="absolute z-10 w-full md:w-3/4 lg:w-1/2 p-10"
            style={{ background: props.bgColor }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1
              className="text-5xl font-bold mb-4"
              style={{ color: props.textColor }}
            >
              {props.title}
            </h1>
            <p
              className="text-xl font-bold mb-8"
              style={{ color: props.textColor }}
            >
              {props.description}
            </p>
            <motion.a
              href={props.gitLink}
              target="_blank"
              className="text-lg border-2 px-6 py-2 inline-block"
              style={{
                color: props.textColor,
                borderColor: props.textColor,
                background: props.bgColor,
              }}
              whileHover={{
                backgroundColor: props.textColor,
                color: props.bgColor,
              }}
            >
              View Project
            </motion.a>
          </motion.div>
        </div>
      </div>
    );
  }
};
