"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTags";
import { motion, useInView } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Next.js, Typescript, React, Tailwind y Framer Motion \n ‎‎‎‎‎‎‎",
    image: "images/projects/1.jpg",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Waterpolo Tactic Board",
    description: "Pizarra táctica de WP. React, Tailwind y Framer Motion",
    image: "/images/projects/wp-tactic.jpg",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Gamer Groove",
    description: "Juego de Quiz de música de videojuegos. React y Sass",
    image: "/images/projects/gamer-groove.jpg",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Polo Guru",
    description: "Herramienta todo en uno para entrenadores de waterpolo",
    image: "/images/projects/pologuru.jpg",
    tag: ["Todos", "UX"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 5,
    title: "Merchandising",
    description: "Diseño de productos para bandas",
    image: "/images/projects/pologuru.jpg",
    tag: ["Todos", "Diseño"],
    // gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = ({ modalState, handleModalState }) => {
  const [projectName, setProjectName] = useState("");
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [closeModal, setCloseModal] = useState(!modalState);


  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 100, opacity: 1 },
  };

  const handleCloseModal = (closed) => {
    handleModalState(!closed);
  };

  const handleModalSelect = (name) => {
    setProjectName(name);
  };


  return (
    <section className="relative scroll-mt-32" id="projectSection">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>

      

      <div className="text-white  md:flex-row justify-center items-center flex flex-wrap gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UX"
          isSelected={tag === "UX"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Diseño"
          isSelected={tag === "Diseño"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 -z-1">
        {filteredProjects.map((project, index) => (
          <motion.li
            className="z-1"
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <ProjectCard
              handleModalSelect={handleModalSelect}
              handleCloseModal={handleCloseModal}
              className="-z-1"
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <ProjectModal
        projectName={projectName}
        closeModal={modalState}
        handleCloseModal={handleCloseModal}
        className="z-[1055]"
      />
    </section>
  );
};

export default ProjectSection;
