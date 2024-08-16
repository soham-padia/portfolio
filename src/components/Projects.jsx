import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectSection } from "./ProjectSection";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div id="project" className="flex flex-col gap-10 p-5 md:p-10">
      {projects.map((project, index) => (
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
