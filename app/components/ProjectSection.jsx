"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTags";
import { motion, useInView } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "Collagenious",
    description:
      "Identidad visual, caso de estudio, diseño, front y backend. Email marketing.",
    image: "images/projects/collagenious.jpg",
    tag: ["Todos", "Web", "Diseño", "UX"],
    previewUrl: "/",
    slug: "collagenious",
  },
  {
    id: 2,
    title: "25 Aniversario Rivas Ruido",
    description:
      "Identidad visual y desarrollo web. Generación de entradas. Redes sociales.",
    image: "images/projects/rivasruido.jpg",
    tag: ["Todos", "Web", "Diseño", "UX"],
    previewUrl: "/",
    slug: "rivas-ruido",
  },
  {
    id: 6,
    title: "Naming Musco",
    description: "Investigación y propuesta de naming para farmacia.",
    image: "/images/projects/musco-naming/musco-thumbnail-lite.jpg",
    tag: ["Todos", "Diseño", "UX"],
    previewUrl: "/",
    slug: "musco",
  },
  {
    id: 3,
    title: "Polo Guru",
    description:
      "Herramienta todo en uno para entrenadores de waterpolo. Caso de estudio.",
    image: "/images/projects/pologuru.jpg",
    tag: ["Todos", "UX"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "polo-guru",
  },
  {
    id: 4,
    title: "Gamer Groove",
    description: " Quiz de música de videojuegos estilo pixel-art.",
    image: "/images/projects/gamer-groove.jpg",
    tag: ["Todos", "Web"],
    previewUrl: "https://videogame-music-quiz.vercel.app/",
    slug: "gamer-groove",
  },

  {
    id: 5,
    title: "Waterpolo Tactic Board",
    description: "Pizarra táctica de waterpolo con elementos arrastrables.",
    image: "/images/projects/wp-tactic.jpg",
    tag: ["Todos", "Web"],
    previewUrl: "https://waterpolo-tactic-board.vercel.app/",
    slug: "waterpolo-tactic-board",
  },
];

const ProjectSection = ({ modalState, handleModalState }) => {
  const [projectName, setProjectName] = useState("");
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section className="relative scroll-mt-32 px-4" id="projectSection">
      <h2 className="text-center text-4xl  sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white md:mb-4">
        Mis Trabajos
      </h2>

      <div className="text-white  md:flex-row justify-center items-center flex flex-wrap gap-2 py-8  2xl:mb-8">
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

      <ul
        ref={ref}
        className="flex flex-row overflow-x-auto whitespace-nowrap scrollbar-hide h-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 md:gap-12 -z-1"
      >
        {filteredProjects.map((project, index) => (
          <motion.li className="z-10">
            <ProjectCard
              className="-z-1 "
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              slug={project.slug}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
