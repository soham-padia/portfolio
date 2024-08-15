import React from "react";
import { motion } from "framer-motion";
import { ProjectSection } from "./ProjectSection";

export const Projects = () => {
  
  const projectInfo = [
    {
      title: "Enhancing Public Speaking Skills through AI-Powered Analysis and Feedback",
      description:
        "This research paper presents an AI-driven application designed to enhance public speaking skills through personalized feedback on voice modulation, facial expressions, and speech content. The system integrates technologies like SpaCy, NLTK, OpenCV, YOLO, OpenAI-Whisper, and SpeechRecognition.",
      image: "img/research1.gif",  // Replace with an appropriate image
      bgColor: "#dedede",  // Dark background
      textColor: "#2a2a2a",  // Off-white text color
      gitLink: "/path-to-research-paper-1.pdf"  // Link to the PDF
    },
    {
      title: "Chi Square for Goodness of Fit and Test for Independence Using NLP",
      description:
        "This paper explores the application of NLP techniques to improve the chi-square test for goodness of fit and independence, enhancing accuracy and efficiency in statistical analysis.",
      image: "img/research2.gif",  // Replace with an appropriate image
      bgColor: "#2a2a2a",  // Muted blue/gray background
      textColor: "#dedede",  // Off-white text color
      gitLink: "/path-to-research-paper-2.pdf"  // Link to the PDF
    },
    {
      title: "My Portfolio Project",
      description:
        "Through building this project with React, I gained a wealth of knowledge about Tailwind, JavaScript, and Framer Motion. It even served as a foundation for developing my portfolio website.",
      image: "img/sal.gif",
      bgColor: "#dedede",  // Dark background
      textColor: "#2a2a2a",  // Off-white text color
      gitLink: "https://github.com/soham-padia/portfolio"
    },
    {
      title: "A bookings website",
      description:
        "Developed with GoLang, this project taught me a lot about Go, Html, CSS, and Postgresql, and laid the groundwork for a hotel booking website.",
      image: "img/p.gif",
      bgColor: "#2a2a2a",  // Muted blue/gray background
      textColor: "#dedede",  // Off-white text color
      gitLink: "https://github.com/soham-padia/bookings"
    },
    {
      title: "An Angular website with Supabase as Backend",
      description:
        "Built with Angular, Tailwind, Supabase, and TypeScript, this project helped me improve my Angular and coding skills.",
      image: "img/p.gif",
      bgColor: "#dedede",  // Dark background
      textColor: "#2a2a2a", // Off-white text color
      gitLink: "https://github.com/soham-padia/neoe"
    },
  ]

  return (
    <div id="project" className="flex flex-col gap-10 p-10 py-10">
      {projectInfo.map((project, index) => (
        <ProjectSection 
          key={index}
          title={project.title} 
          description={project.description} 
          image={project.image} 
          bgColor={project.bgColor}
          textColor={project.textColor}
          gitLink={project.gitLink}
        />
      ))}
    </div>
  );
};
