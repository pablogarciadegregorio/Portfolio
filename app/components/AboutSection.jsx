"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";



const TAB_DATA = [

    {
        title:"Habilidades",
        id:"skills",
        content:(
            <ul className="grid grid-cols-[40%,60%] gap-y-1 sm:grid sm:grid-cols-[30%,30%,40%] list-disc pl-2">
                <li>React</li>
                <li>Javascript</li>
                <li>HTML</li>   
                <li>Bootstrap</li>   
                <li>Scrum</li>   
                <li>CSS</li>   
                <li>Tailwind</li>
            </ul>
        )

    },

    {
        title:"Educación",
        id:"education",
        content:(
            <ul className=" list-disc pl-2 grid grid-cols-1 gap-y-1">
                <li>Fullstack 4Geeks Academy</li>
                <li>UX Designer por Google</li>               
            </ul>
        )

    },

    {
        title:"Certificiones",
        id:"certifications",
        content:(
            <ul className=" list-disc pl-2 grid grid-cols-1 gap-y-1">
                <li>EF SET English C2 Certificate</li>
                <li>Gestión de proyectos con metodología Agile por Google</li>
                
            </ul>
        )

    },
    {
        title:"Herramientas",
        id:"tools",
        content:(
            <ul className="grid grid-cols-[40%,60%] sm:grid sm:grid-cols-[30%,70%] gap-y-1 list-disc pl-2">
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Premiere</li>
                
            </ul>
        )

    },

]



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="aboutSection"  className="z-9 relative text-white scroll-mt-16">
      <div className="md:grid md:grid-cols-2 gap-8  py-8  px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="hidden sm:block aspect-square rounded-circleImage" src="/images/prueba01.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white pt-8 md:pt-0">Sobre mí</h2>
          <p className="text-base text-justify lg:text-lg mt-4">
            Soy un Desarrollador de Software y Diseñador de Experiencia de Usuario
            apasionado por la creación de aplicaciones y herramientas que solucionen problemas concretos.
            Mi mayor motivación es el <strong>aprendizaje continuo</strong>. Aprendo rápido y siempre estoy buscando ampliar mis conocimientos y habilidades.
            Soy firme defensor del <em>trabajo en equipo</em> y trato de crear equipos unidos y competentes
            <br></br>
            Tengo un amplio background del mundo del deporte, la diversidad funcional y la música, que me han ayudado a 
            ser disciplinado, paciente y creativo.
            
          </p>
          <div className=" sm:inline-block lg:flex lg:flex-row justify-start mt-8">
            <TabButton selectTab={()=>handleTabChange("skills")} active={tab === "skills"}>
            {""}
            Habilidades
            {""}
            </TabButton>
            <TabButton selectTab={()=>handleTabChange("education")} active={tab === "education"}>
            {""}
            Estudios
            {""}
            </TabButton>
            <TabButton selectTab={()=>handleTabChange("certifications")} active={tab === "certifications"}>
            {""}
            Certificaciones
            {""}
            </TabButton>
            <TabButton selectTab={()=>handleTabChange("tools")} active={tab === "tools"}>
            {""}
            Herramientas
            {""}
            </TabButton>
           
          </div>
          <div className="mt-8 ">{TAB_DATA.find((t)=> t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
