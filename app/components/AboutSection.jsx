"use client";
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TabButton from "./TabButton";
import Quiz from "./Quiz";

const TAB_DATA = [
  {
    title: "Stack",
    id: "stack",
    content: (
      <ul className="flex flex-row gap-x-4 sm:pr-0 sm:gap-x-0 sm:justify-between ">
        <li className="flex-shrink-0 w-[60px] h-[60px] bg-[#130E2F] rounded-[20px] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
          <div className="flex justify-center items-center h-full">
            <Image src="/images/about/html.png" alt="html logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">HTML</p>
        </li>
        <li className="flex-shrink-0 w-[60px] h-[60px] bg-[#130E2F] rounded-[20px] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
          <div className="flex justify-center items-center h-full">
            <Image src="/images/about/css.png" alt="css logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">CSS</p>
        </li>
        <li className="flex-shrink-0 flex flex-col  items-center  ">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/js.png" alt="javascript logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">Javascript</p>
        </li>
        <li className="flex-shrink-0 w-[60px] h-[60px] bg-[#130E2F] rounded-[20px] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
          <div className="flex justify-center items-center h-full">
            <Image src="/images/about/react.png" alt="react logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">React</p>
        </li>
        <li className="flex-shrink-0 ">
          <div className="flex justify-center items-center  w-[60px] h-[60px]  bg-[#130E2F] rounded-[20px] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/tailwind.png" alt="tailwind logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">Tailwind</p>
        </li>
        <li className="w-[16px] h-[60px] flex-shrink-0 bg-transparent sm:hidden"></li>
      </ul>
    ),
  },

  {
    title: "Programas",
    id: "programas",
    content: (
      <ul className="flex flex-row gap-x-4 sm:gap-x-0 sm:justify-between md:gap-x-8 lg:gap-x-16">
        <li className="flex flex-col  items-center  ">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/figma.png" alt="figma logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">Figma</p>
        </li>
        <li className="flex flex-col  items-center  ">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/photoshop.png" alt="photoshop logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">Photoshop</p>
        </li>
        <li className="flex flex-col  items-center  ">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/illustrator.png" alt="illustrator logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">Illustrator</p>
        </li>
        <li className="flex flex-col  items-center  ">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/premiere.png" alt="premiere logo" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold">Premiere</p>
        </li>
        <li className="w-[16px] h-[60px] flex-shrink-0 bg-transparent sm:hidden"></li>
      </ul>
    ),
  },

  {
    title: "Formación",
    id: "formacion",
    content: (
      <ul className="flex flex-row gap-x-4 lg:gap-x-0 md:flex-row lg:flex-row sm:justify-between w-full text-center md:text-[12px] lg:text-[14px] xl:text-[16px] ">
        <li className="flex flex-col  items-center sm:w-1/6   ">
          <div className="w-[60px] h-[60px] md:rounded-[12px] lg:w-[60px] lg:h-[60px] flex justify-center items-center  rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/4Geeks.png" alt="4Geeks logo" className="md:w-[30px] lg:w-[30px]" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold ">Fullstack <br className="break"></br> Developer</p>
          <p className="text-center font-semibold text-[#6D7082]">
            4Geeks{" "}
          </p>
        </li>
        <li className="flex flex-col  items-center w-full  sm:w-1/6">
          <div className="w-[60px] h-[60px] md:rounded-[12px] lg:w-[60px] lg:h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/supercharge.png" alt="supercharge logo" className="md:w-[30px] lg:w-[30px]" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold sm:w-4/5">Advanced <br className="break"></br> Figma</p>
          <p className="text-center font-semibold text-[#6D7082] ">
            Supercharge <br className="break"></br> Design{" "}
          </p>
        </li>
        <li className="flex flex-col  items-center w-full sm:w-1/6">
          <div className="w-[60px] h-[60px] md:rounded-[12px] lg:w-[60px] lg:h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/google.png" alt="google logo" className="md:w-[30px] lg:w-[30px]"  width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold ">Diseño UX</p>
          <p className="text-center font-semibold text-[#6D7082]">
            Google{" "}
          </p>
        </li>
        <li className="flex flex-col  items-center w-full  sm:w-1/6">
          <div className="w-[60px] h-[60px] md:rounded-[12px] lg:w-[60px] lg:h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/diseño.png" alt="diseño logo" className="md:w-[30px] lg:w-[30px]" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold ">Diseñador <br className="break"></br>Gráfico</p>
          <p className="text-center font-semibold text-[#6D7082]">
            Profesiones <br className="break"></br> Artísticas{" "}
          </p>
        </li>
        <li className="flex flex-col  items-center  sm:w-1/6">
          <div className="w-[60px] h-[60px] md:rounded-[12px] lg:w-[60px] lg:h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/coursera.png" alt="coursera logo" className="md:w-[30px] lg:w-[30px]" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold ">Metodología <br className="break"></br> Agile</p>
          <p className="text-center font-semibold text-[#6D7082]">
            Coursera{" "}
          </p>
        </li>
        <li className="flex flex-col  items-center sm:w-1/6 ">
          <div className="w-[60px] h-[60px] md:rounded-[12px] lg:w-[60px] lg:h-[60px] flex justify-center items-center rounded-[20px] bg-[#130E2F] border-[rgba(180,125,242,0.4)] border-1 shadow-[0_27px_8px_0_rgba(153,74,255,0.00),_0_17px_7px_0_rgba(153,74,255,0.01),_0_10px_6px_0_rgba(153,74,255,0.05),_0_4px_4px_0_rgba(153,74,255,0.09),_0_1px_2px_0_rgba(153,74,255,0.10)]">
            <Image src="/images/about/ef.png" alt="ef logo" className="md:w-[30px] lg:w-[30px]" width={30} height={30} />
          </div>
          <p className="text-center mt-2 font-semibold ">English C2<br className="break"></br> Certificate</p>
          <p className="text-center font-semibold text-[#6D7082]">
            EF SET{" "}
          </p>
        </li>
        <li className="w-[16px] h-[60px] flex-shrink-0 bg-transparent sm:hidden"></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("stack");
  const [isPending, startTransition] = useTransition();


  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };



  return (
    <section id="aboutSection" className="z-9 relative text-white  mt-16 sm:mt-16 sm:mb-0 sm:pb-0 md:mt-16 lg:pb-16">
      <div className="sm:grid sm:grid-cols-1  md:grid-cols-5 gap-8  pt-8 xl:gap-16 sm:pt-16 sm:px-4 md:px-0 md:pt-8 md:pb-0">
        <div className="hidden sm:block sm:mx-auto md:mx-auto md:col-span-2 relative w-[250px] h-[250px] lg:w-[300px] xl:w-[400px] xl:h-[400px] lg:left-[-20%]">
          <div className="absolute  rounded-[56%_44%_50%_50%_/_42%_46%_54%_58%] bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]"></div>
          <Image
            className="max-w-none hidden sm:block absolute transform -translate-x-1/2 md:-top-2 lg:-top-2 xl:-top-10 sm:left-[55%] md:left-[55%] lg:left-[65%] xl:left-[55%] sm:w-[330px] md:w-[350px] lg:w-[450px] xl:w-[550px]"
            alt="Skills Illustration"
            src="/images/skills02.png"
            width={972}
            height={792}
            style={{
              maskImage:
                "linear-gradient(to bottom, black 98%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 98%, transparent 100%)",
            }}
          />
        </div>

        <div className="md:col-span-3 mt-4 sm:mt-0 text-left flex flex-col h-full text-[#d0d7d6]">
          <h2 className="text-center  sm:text-center md:text-left text-4xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white pt-4 sm:pt-0">
            Sobre mí
          </h2>
          <p className="text-base text-center sm:text-justify lg:text-lg mt-4 px-8 sm:px-4 md:px-0 lg:px-0">
            Desarrollo productos digitales de manera integral, acompañando a
            cada proyecto desde la concepción de la{" "}
            <span className="font-bold">idea</span> y el diseño de la
            <span className="font-bold"> identidad visual</span> y{" "}
            <span className="font-bold"> redes sociales</span> hasta la creación
            de <span className="font-bold">prototipos</span> y su desarrollo
            completo.
          </p>
          <p className="text-base text-center sm:text-justify lg:text-lg mt-4 px-8 sm:px-4 md:px-0">
            Enfoque en la coordinación y gestión de proyectos, donde cultivo un
            <span className="font-bold"> networking</span> sólido con otros
            profesionales para garantizar una colaboración beneficiosa para todos.
          </p>

          <div className=" flex flex-row gap-4 overflow-x-auto whitespace-nowrap pl-8 sm:pl-0 sm:flex sm:flex-row scrollbar-hide w md:gap-2 sm:justify-around md:justify-start mt-8 lg:gap-4">
            <TabButton
              selectTab={() => handleTabChange("stack")}
              active={tab === "stack"}
            >
              {""}
              Stack
              {""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("programas")}
              active={tab === "programas"}
            >
              {""}
              Programas
              {""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("formacion")}
              active={tab === "formacion"}
            >
              {""}
              Formación
              {""}
            </TabButton>
            <div className="w-[16px] h-[10px] flex-shrink-0 bg-transparent sm:hidden"></div>
            
          </div>
          <div className="mt-8 h-[200px] sm:h-[200px] overflow-x-auto  whitespace-nowrap scrollbar-hide pl-8  sm:pl-0 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
