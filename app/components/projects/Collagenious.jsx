import React from "react";
import Image from "next/image";

const Collagenious = () => {
  return (
    <div className="flex flex-col items-center 2xl:w-[800px] mx-auto my-16">
      <Image
        className="w-[300px] sm:w-[450px]"
        src="/images/projects/collagenious-logo.svg"
        alt="Logo Collagenious"
        width={300}
        height={100}
      />

      <div className="video-container flex flex-col justify-center my-16">
        <p className="px-4 sm:px-0 text-white text-center mb-4">
          Dale al play y activa el sonido para ver un resumen del trabajo
        </p>
        <video
          src="/video/collagenious-video.mp4"
          controls
          playsInline
          className="w-full h-auto rounded-lg  z-20"
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
      <div className="text-white text-center mt-8 flex flex-col gap-y-16 items-center">
        <div className="flex flex-col items-center gap-y-4 ">
          <h1 className="font-bold text-3xl w-fit py-3 px-6 rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] ">
            Página Web <br></br>
          </h1>
          <a 
          href="https://www.collagenious.com" target="_blank" rel="noopener noreferrer"
          className="cursor-pointer text-xl font-normal mt-4 hover:underline hover:text-[rgba(180,125,242,1)]">
            www.collagenious.com
          </a>
        </div>
        <div className=" flex flex-col items-center gap-y-4">
          <h1 className="font-bold text-3xl w-fit py-3 px-6 rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] ">
            Roles
          </h1>
          <ul className="flex flex-col gap-y-2 text-xl list-inside m-4">
            <li>Diseñador UX/UI</li>
            <li>Programador Web</li>
            <li>Diseñador Gráfico</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="font-bold text-3xl w-fit py-3 px-6 rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)]    ">
            Tareas Realizadas
          </h1>
          <ul className="flex flex-col gap-y-2 text-xl list-inside mx-4 mt-4">
            <li>Entrevista con el cliente</li>
            <li>Investigación UX</li>
            <li>Definición de problemas e ideación de soluciones</li>
            <li>Wireframes y prototipos (Figma)</li>
            <li>Creación de logotipo e identidad corporativa</li>
            <li>Diseño de cartelería y publicidad</li>
            <li>Desarrollo del Frontend (React + Tailwind)</li>
            <li>Desarrollo del Backend (php + MySQL)</li>
            <li>Integración con los CRM Brevo y Hubspot</li>
            <li>Landing Pages para campañas de email marketing</li>
            <li>Diseño de emails</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collagenious;
