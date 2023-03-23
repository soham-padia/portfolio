import { useState } from "react";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className=" bg-gradient-to-br h-screen scrollbar-hide from-[#202020] w-screen  via-black to-[#2e2e2e] text-white">
      <div className="backdrop-blur-lg absolute backdrop-filter bg-opacity-30 w-screen bg-transparent top-0 z-50">
        <Navbar></Navbar>
      </div>
      <div className="h-screen md:snap-y scrollbar-hide snap-mandatory scroll-smooth overflow-scroll  ">
        <div className="snap-center h-fit md:h-screen shrink-0">
          <Hero />
        </div>
        <div className="md:h-screen h-fit snap-center shrink-0">
          <Skills />
        </div>
        <div className="md:h-screen h-fit snap-center shrink-0">
          <Projects />
        </div>
        <div className="snap-center shrink-0">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
