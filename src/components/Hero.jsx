import React from "react";
import { Navbar } from "./Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div
      id="hero"
      className=" md:h-screen flex snap-center items-center justify-between flex-col"
    >
      <div className="mt-40 md:mt-0 md:h-screen snap-center flex flex-col md:flex-row w-screen md:px-20 px-10 p-2 justify-between">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}} className="md:basis-2/5 basis-1/2 flex flex-col justify-center gap-5">
          <h1 className="font-mono text-2xl md:text-5xl">
            “Taking a new step, uttering a new word, is what people fear most.”
          </h1>
          <p className="text-[#da4ea2]">~ Fyodor Dostoevsky</p>
          <h2>I am a coder who likes to code.</h2>
          <motion.button
            whileFocus={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              document
                .getElementById("skill")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#35353533] rounded-md hover:bg-[#353535] p-3"
          >
            Learn More
          </motion.button>
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}} className="mt-20 mb-10 md:mb-0 md:mt-0 md:basis-3/5 basis-1/2 flex md:p-2 flex-col w-fit justify-center items-center gap-5 animate-[animate_2s_infinite_ease_alternate]">
          <div className="text-slate-300 md:w-3/4 font-mono">
            <div className="md:text-6xl text-2xl flex w-fit">
              <p className="whitespace-pre-wrap">Hi, I'm </p>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Soham Padia")
                    .pauseFor(1000)
                    .deleteChars(11)
                    .typeString("सोहम पडिया")
                    .pauseFor(1000)
                    .deleteChars(10)
                    .typeString("સોહમ પડિયા")
                    .pauseFor(1000)
                    .deleteChars(10)
                    .typeString("Soham Padia")
                    .start();
                }}
              />
            </div>
            <h1 className="text-8xl w-fit">CODER</h1>
            <h1 className="text-2xl w-fit">LEARNER</h1>
            <div className="md:flex w-fit">
              
              <p className="w-full">About me:</p>
              <p className="">I am a student of Information Technology Dwarkadas J.
              Sanghvi College of Engineering. I have experience in building
              Android apps, web development and training pre-configured AI
              models using Python. Proficient in React, Angular, and Django
              frameworks. Interested in exploring advanced concepts such as
              microservices, IoT, blockchain, Kubernetes, and Docker</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
