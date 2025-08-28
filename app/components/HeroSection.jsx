"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  // Ahora, todo el código que usa `window` está dentro del useEffect
  // Esto garantiza que solo se ejecute en el navegador
  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };
  
  // Llama a la función al inicio para establecer el valor inicial
  handleResize();

  // Y suscribe al evento de redimensionamiento
  window.addEventListener('resize', handleResize);

  // No olvides limpiar el evento para evitar fugas de memoria
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <section className="relative z-11 px-8 sm:px-0 lg:py-32">
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:px-8 md:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          {!isMobile ? (
            <h1 className="text-white mb-2 text-type sm:text-3xl lg:text-5xl xl:text-7xl lg:leading-normal font-extrabold sm:flex-1 max-w-none text-overflow-visible ">
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)]">
                Hola, soy {""}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Pablo García",
                  4000, //
                  "Diseñador UX/UI",
                  500,
                  "Programador Web",
                  500,
                  "Diseñador Gráfico",
                  500,
                  "Editor de Vídeo",
                  500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          ) : (
            <div className="text-white my-6 text-type text-4xl  font-extrabold ">
              <p className="mb-2 text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)]">
                Hola, soy {""}
              </p>
              <h1>Pablo García</h1>
            </div>
          )}
          <p className="text-[#d0d7dc] text-base mb-6 sm:mb-2 sm:text-lg lg:text-xl sm:max-w-[300px] md:max-w-[400px]  lg:max-w-[500px] xl:max-w-[700px]">
            Diseñador <span className="font-bold">UX/UI</span>, Desarrollador{" "}
            <span className="font-bold">Frontend</span> y{" "}
            <span className="font-bold">Diseñador Gráfico</span>.
          </p>
           
            <p className="mt-2 text-[#d0d7dc] text-base mb-6 sm:text-lg lg:text-xl sm:max-w-[300px] md:max-w-[400px]  lg:max-w-[500px] xl:max-w-[700px]">
              Especializado en soluciones completas partiendo desde la idea
              inicial, evaluando las necesidades, creando la identidad visual,
              prototipado y desarrollo web.
            </p>
          <div className="py-4 sm:py-0">
            <Link href="#contactSection">
              <button className="cursor-pointer px-6 py-3 w-full sm:w-fit rounded-full mr-4  font-bold bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] hover:bg-[linear-gradient(270deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] text-white">
                Contacto
              </button>
            </Link>
            <Link href="#projectSection">
              <button className="cursor-pointer px-1 py-1 w-full sm:w-fit rounded-full font-bold bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] hover:bg-[#2c1f46] text-white  mt-3">
                <span className="block bg-[#261647] hover:bg-[#513b7d] rounded-full h-full w-full px-5 py-2">
                  Ver trabajos
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-16 sm:mt-4 lg:mt-0"
        >
          <div className="rounded-[56%_44%_48%_52%_/_40%_41%_59%_60%] bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className=" absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              src="/images/memoji.png"
              alt="Hero Image"
              width={400}
              height={400}
               style={{
      maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
    }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
