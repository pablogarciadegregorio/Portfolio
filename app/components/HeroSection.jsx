"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [imageHover, setImageHover] = useState(false);
  return (
    <section className="relative z-11 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-2 text-type sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold sm:flex-1 " >
            <span className="text-transparent bg-clip-text bg-gradienteBoton">
              Hola, soy {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Pablo",
                2000, // 
                "Software Developer",
                1500,
                "UX Designer",
                1500,
                "Mobile Developer",
                1500,
                "Diseñador Gráfico",
                1500,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
              Desarrollador de Software y Diseñador UX. Comprometido con la discapacidad.<br className="hidden sm:block  "></br> Apasionado del diseño gráfico, el deporte y la música.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4  font-bold bg-gradienteBoton hover:bg-gradienteBotonHover text-white">
              Contacto
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full font-bold bg-gradient-to-br bg-gradienteBoton hover:bg-[#2c1f46] text-white  mt-3">
              <span className="block bg-[#261647] hover:bg-[#513b7d] rounded-full px-5 py-2">
                Descargar CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-circleImage bg-gradienteBoton w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              onMouseOver={() => setImageHover(true)}
              onMouseOut={() => setImageHover(false)}
              src={imageHover? "/images/raqa memoji.png" : "/images/memoji.png"}
              alt="Hero Image"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
