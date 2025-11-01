"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const Collagenious = () => {
  const semanas = [
    {
      label: "Abr 1-7",
      value: 1,
      descripcion: "Reunión con el cliente y definición de objetivos",
    },
    { label: "Abr 8-15", value: 2, descripcion: "Diseño de identidad visual y prototipos" },
    { label: "Abr 16-23", value: 3, descripcion: "Desarrollo de web y backend e integración con CRMs" },
    { label: "Abr 24-30", value: 4, descripcion: "Correcciones, pruebas y entrega final" },
  ];

  const [currentWeek, setCurrentWeek] = useState(semanas[0].value);

  const handleWeekClick = (value) => {
    setCurrentWeek(value);
  };

  const currentWeekData = semanas.find(
    (semana) => semana.value === currentWeek
  );
  const maxWeeks = semanas.length;
  const dynamicProgressPercentage = ((currentWeek - 1) / (maxWeeks - 1)) * 100;

  return (
    <div className="relative flex flex-col items-center 2xl:w-[800px] mx-auto my-16">
      <Image
        className="w-[250px] sm:w-[300px] md:w-[450px] cursor-pointer"
        src="/images/projects/collagenious-logo.svg"
        alt="Logo Collagenious"
        width={300}
        height={100}
        onClick={() => window.open("https://www.collagenious.com", "_blank")}
      />

      <div className="video-container flex flex-col justify-center w-9/10 sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-full my-8">
        <video
          src="/images/projects/collagenious-video.mp4"
          controls
          playsInline
          className="w-full h-auto rounded-lg  z-20"
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
        <p className="px-4 sm:px-0 text-white text-center mt-4">
          Dale al play y activa el sonido para ver un resumen del trabajo
        </p>
      </div>
      <div className="explanation text-white text-center mt-8 flex flex-col gap-y-16 items-center ">
        <div className="objectives flex flex-col items-center gap-y-4 ">
          <h1 className="font-bold text-4xl sm:text-4xl md:text-4xl lg:text-5xl w-[80vw] sm:w-fit pt-8 sm:pt-16 px-6 ">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
              Objetivos y necesidades<br className="md:hidden"></br>
            </span>{" "}
            del cliente <br></br>
          </h1>
          <div className="objectives-container flex flex-col items-center md:items-start md:flex-row mt-18 sm:mt-24 z-20 gap-y-24 sm:gap-y-32 md:gap-y-0 md:gap-x-8 lg:gap-x-16">
            <div className="container01">
              <div className="image-container relative flex flex-col justify-end h-[432px] w-[300px] sm:h-[432px] sm:w-[300px] md:h-[288px] md:w-[200px] lg:h-[360px] lg:w-[250px] xl:h-[527px] xl:w-[366px] p-6 rounded-3xl  bg-[url('https://images.pexels.com/photos/6608880/pexels-photo-6608880.jpeg')] bg-cover bg-center shadow-md">
                <div className="absolute inset-x-0 bottom-0 h-2/3 md:h-9/10 lg:h-2/3 xl:h-1/2  bg-gradient-to-t  from-[rgba(102,65,211,1)]    to-transparent   rounded-b-3xl"></div>
                <div className="text relative z-20">
                  <div className="bg-white h-[1px] mb-4 md:mb-1 lg:mb-2 xl:mb-8"></div>
                  <h1 className="font-bold text-2xl md:text-xl lg:text-2xl xl:text-4xl pb-4 md:pb-1 lg:pb-2   xl:pb-4">Página Web</h1>
                  <p className="font-regular text-lg md:text-md lg:text-md xl:text-lg pb-4">
                    Solicita una página web incluya portfolio, servicios y túnel
                    de ventas
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -top-10 left-[50%] transform -translate-x-1/2 h-[80px] w-[80px] bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] rounded-xl shadow-md">
                  <h1 className="number font-bold text-4xl">01.</h1>
                </div>
              </div>
            </div>
            <div className="container02">
              <div className="image-container relative flex flex-col justify-end h-[432px] w-[300px] sm:h-[432px] sm:w-[300px] md:h-[288px] md:w-[200px] lg:h-[360px] lg:w-[250px] xl:h-[527px] xl:w-[366px] p-6 rounded-3xl  bg-[url('https://images.pexels.com/photos/6475707/pexels-photo-6475707.jpeg')] bg-cover bg-center shadow-md">
                <div className="absolute inset-x-0 bottom-0 h-2/3 md:h-9/10 lg:h-2/3 xl:h-1/2  bg-gradient-to-t  from-[rgba(102,65,211,1)]    to-transparent   rounded-b-3xl"></div>
                <div className="text relative z-20">
                  <div className="bg-white h-[1px] mb-4 lg:mb-2 xl:mb-8"></div>
                  <h1 className="font-bold text-2xl md:text-xl lg:text-2xl xl:text-4xl pb-4 md:pb-1 lg:pb-2   xl:pb-4">Identidad Visual</h1>
                  <p className="font-regular text-lg lg:text-md xl:text-lg pb-4">
                    Necesita profesionalizar y unificar su imagen de marca
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -top-10 left-[50%] transform -translate-x-1/2 h-[80px] w-[80px] bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] rounded-xl shadow-md">
                  <h1 className="number font-bold text-4xl">02.</h1>
                </div>
              </div>
            </div>
            <div className="container03">
              <div className="image-container relative flex flex-col justify-end h-[432px] w-[300px] sm:h-[432px] sm:w-[300px] md:h-[288px] md:w-[200px] lg:h-[360px] lg:w-[250px] xl:h-[527px] xl:w-[366px] p-6 rounded-3xl  bg-[url('https://images.pexels.com/photos/10525450/pexels-photo-10525450.jpeg')] bg-cover bg-center shadow-md">
                <div className="absolute inset-x-0 bottom-0 h-2/3 md:h-9/10 lg:h-2/3 xl:h-1/2  bg-gradient-to-t  from-[rgba(102,65,211,1)]    to-transparent   rounded-b-3xl"></div>
                <div className="text relative z-20">
                  <div className="bg-white h-[1px] mb-4 lg:mb-2 xl:mb-8"></div>
                  <h1 className="font-bold text-2xl md:text-xl lg:text-2xl xl:text-4xl sm:pb-4 md:pb-1 lg:pb-2   xl:pb-4">Email Marketing</h1>
                  <p className="font-regular text-lg lg:text-md xl:text-lg pb-4">
                    Quiere conectar su web con su CRM y plataforma de email
                    marketing
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -top-10 left-[50%] transform -translate-x-1/2 h-[80px] w-[80px] bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] rounded-xl shadow-md">
                  <h1 className="number font-bold text-4xl">03.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-regular text-3xl sm:text-3xl md:text-3xl lg:text-4xl w-[90vw] sm:w-fit sm:pt-8 md:pt-16 sm:px-16 md:px-16 lg:px-6 ">
          Realizamos una
          <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
            {" "}
            primera entrevista
          </span>{" "}
          con el cliente <br className="hidden lg:block"></br>
          en la que se definieron los{" "}
          <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
            KPIs
          </span>
          , objetivos y necesidades del proyecto.
        </h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 w-[80vw] sm:w-8/10 md:w-7/10 lg:w-8/10 xl:w-full xl:h-fit font-semibold lg:text-xl xl:text-2xl text-start p-6 sm:p-6 md:p-6 lg:p-8 xl:p-16 gap-6 sm:gap-0 lg:gap-8 xl:gap-16 border-1 rounded-4xl border-[rgba(202,169,240,0.3)] bg-[#332264] bg-[linear-gradient(180deg,#332264_0%,#231940)_83%)] shadow-xl shadow-[#26103f] ">
          <div className="flex flex-col gap-6 sm:gap-4 md:gap-8 lg:gap-16">
            <div className="flex flex-row gap-4">
              <p>✅</p>
              <p> Portfolio y muestra de servicios (sin precios públicos)</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>✅</p>
              <p> Landing Pages para captación de clientes</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>✅</p>
              <p> Diseño de la identidad visual</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:gap-4 md:gap-8 lg:gap-16">
            <div className="flex flex-row gap-4">
              <p>✅</p>
              <p> Integración del frontend con su CRM</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>✅</p>
              <p>
                {" "}
                Urgencia para tener el producto completo (acortaremos ciertos
                procesos y priorizaremos)
              </p>
            </div>
          </div>
        </div>

        <h1 className="font-regular text-4xl w-[80vw] sm:w-fit sm:pt-8 md:pt-16 px-6 ">
          Definimos la
          <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
            {" "}
            Identidad Visual
          </span>{" "}
        </h1>
        <p className="text-[22px] max-w-prose w-[80vw] sm:w-fit sm:px-16 md:px-32 lg:px-0">
          Tradujimos la visión del cliente en una identidad visual audaz,
          respetando los tonos beige y rosados. Adaptamos el estilo scrapbook
          cutout retro vintage.
        </p>
        <div className="brand-images relative flex flex-col sm:flex-row sm:w-fit lg:w-[800px] xl:w-full justify-center gap-y-10 sm:gap-x-10">
          <div className="card flex flex-col justify-end  items-center translate-z-0 transform rounded-3xl w-[200px] h-[266px] sm:w-[120px] sm:h-[160px] md:w-[150px] md:h-[200px] lg:w-[200px] lg:h-[266px] xl:w-[220px] xl:h-[293px] sm:rotate-[-8deg] p-6 sm:translate-y-6 border-2 border-[#513b6c]   bg-[url('/images/projects/Collagenious/stickers02.png')] bg-cover overflow-hidden  shadow-[#2c1c41]">
            <h1 className="text-white  absolute text-xl z-20">Logotipo</h1>
            <div className="absolute inset-x-0 bottom-0 h-7/9 bg-gradient-to-t from-[#000000] to-transparent rounded-b-3xl "></div>
          </div>
          <div className="card flex flex-col justify-end  items-center translate-z-0 transform rounded-3xl w-[200px] h-[266px] sm:w-[120px] sm:h-[160px] md:w-[150px] md:h-[200px] lg:w-[200px] lg:h-[266px] xl:w-[220px] xl:h-[293px] sm:rotate-[-3deg] p-6 border-2 border-[#513b6c]   bg-[url('/images/projects/Collagenious/paleta.png')] bg-cover overflow-hidden  shadow-[#2c1c41]">
            <h1 className="text-white  absolute text-xl z-20">
              Paleta de colores
            </h1>
            <div className="absolute inset-x-0 bottom-0 h-7/9 bg-gradient-to-t from-[#000000] to-transparent rounded-b-3xl "></div>
          </div>
          <div className="card flex flex-col justify-end  items-center translate-z-0 transform rounded-3xl w-[200px] h-[266px] sm:w-[120px] sm:h-[160px] md:w-[150px] md:h-[200px] lg:w-[200px] lg:h-[266px] xl:w-[220px] xl:h-[293px] sm:rotate-[3deg] p-6  border-2 border-[#513b6c]  bg-[url('/images/projects/Collagenious/imprimibles02.png')] bg-cover overflow-hidden shadow-lg shadow-[#2c1c41]">
            <h1 className="text-white  absolute text-xl z-20">Imprimibles</h1>
            <div className="absolute inset-x-0 bottom-0 h-7/9 bg-gradient-to-t from-[#000000] to-transparent rounded-b-3xl "></div>
          </div>
          <div className="card flex flex-col justify-end  items-center translate-z-0 transform rounded-3xl w-[200px] h-[266px] sm:w-[120px] sm:h-[160px] md:w-[150px] md:h-[200px] lg:w-[200px] lg:h-[266px] xl:w-[220px] xl:h-[293px] sm:rotate-[8deg] p-6 sm:translate-y-6 border-2 border-[#513b6c]  bg-[url('/images/projects/Collagenious/assets.png')] bg-cover overflow-hidden  shadow-[#2c1c41]">
            <h1 className="text-white  absolute text-xl z-20">
              Elementos gráficos
            </h1>
            <div className="absolute inset-x-0 bottom-0 h-7/9 bg-gradient-to-t from-[#000000] to-transparent rounded-b-3xl "></div>
          </div>
        </div>
        <div className="tecnologias flex flex-row gap-x-8">
          <img src="/images/about/photoshop.png" alt="photoshop" />
          <img src="/images/about/illustrator.png" alt="illustrator" />
          <img src="/images/about/figma.png" alt="figma" />
        </div>
        <p className="text-[22px] max-w-prose w-[80vw] sm:w-fit sm:px-16 md:px-16 lg:px-0">
          Construimos un lenguaje visual único, perfectamente adaptable al
          dinamismo del marketing digital y el contenido UGC.
        </p>
        <div className="text-center w-[80vw] sm:w-fit">
          <h1 className="font-regular text-2xl sm:text-2xl md:text-2xl lg:text-4xl w-full pt-8 sm:pt-16 px-6 ">
            Realizamos un primer boceto con el
          </h1>
          <h1 className="frankenstein text-5xl sm:text-5xl md:text-6xl lg:text-8xl text-transparent font-terror pt-4 bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
            MÉTODO FRANKENSTEIN
          </h1>{" "}
          <p className="text-[18px]  w-full mx-auto max-w-prose sm:px-28 md:px-0 py-8">
            Que consiste en unir retales para crear una estructura que sirva
            como guía. Nos acerca de manera rápida a un estilo y una estructura
            visual definida.
          </p>
          <div className="relative mx-auto sm:w-[500px] md:w-[650px] md:mx-auto lg:w-full h-[400px] bg-[url('/images/projects/Collagenious/boceto.png')] bg-cover mt-8 rounded-3xl">
            <div className="absolute hidden sm:block h-[150px] w-[250px] bg-cover bg-[url(https://images.squarespace-cdn.com/content/v1/5e7d0e87853917613964998c/1586365377311-5U14I8VN4HY3NVLWV2FM/f2e1ab082e83ac27c667ae2d6102a3fe.jpg)] rounded-2xl -right-10 top-10 border-2 border-[#513b6c]"></div>
            <div className="absolute hidden sm:block h-[150px] w-[250px] bg-cover bg-[url(https://source.washu.edu/app/uploads/2018/09/frankenstein.jpg)] rounded-2xl -right-10 top-50 border-2 border-[#513b6c]"></div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 w-[80vw] sm:w-fit">
          <h1 className="font-regular text-3xl sm:text-2xl md:text-2xl lg:text-4xl sm:w-[500px] md:w-[650px] mx-auto lg:w-fit md:pt-8 lg:pt-16  lg:px-6 ">
            Con esta base realizamos los
            <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
              {" "}
              PROTOTIPOS
            </span>{" "}
            adaptables e{" "}
            <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
              iteramos <br className="hidden lg:block"></br>
            </span>{" "}
            hasta llegar al diseño final
          </h1>
          <ReactCompareSlider
            className="relative sm:w-[500px] md:w-[650px] lg:w-[800px] lg:h-[500px] mx-auto my-16 rounded-3xl border-2 border-[rgba(144,111,241,1)]"
            itemOne={
              <div className="relative">
                <img
                  src="/images/projects/Collagenious/hero01.png"
                  alt="Imagen antes del procesamiento"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 mx-auto bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] w-fit h-fit px-4 py-2 top-5 sm:top-10 rounded-lg text-white items-center text-sm sm:text-[22px]">
                  PRIMER PROTOTIPO
                </div>
              </div>
            }
            itemTwo={
              <div className="relative">
                <img
                  src="/images/projects/Collagenious/hero02.png"
                  alt="Imagen después del procesamiento"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 mx-auto bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] w-fit h-fit px-4 py-2 top-35 sm:top-50 md:top-80 lg:top-100 rounded-lg text-white items-center text-sm sm:text-[22px]">
                  PROTOTIPO FINAL
                </div>
              </div>
            }
            position={50}
            handle={
              <ReactCompareSliderHandle
                style={{ color: "rgba(144,111,241,1)" }}
              />
            }
          />
          <p className="text-[22px]  w-full mx-auto max-w-prose sm:px-16 md:px-16 lg:px-0 md:py-8 lg:py-16">
            Cambiamos el estilo a uno más <strong>artesanal</strong>,
            incorporamos una tipografía de <strong>máquina de escribir</strong>{" "}
            que acentúa la estética <strong>scrapbook</strong>, cambiamos los
            títulos por pegatinas de etiquetado y disponemos los elementos
            gráficos de forma <strong>orgánica</strong> para dar una sensación
            más <strong>hecho a mano</strong>{" "}
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center pt-16 gap-8">
            <ReactCompareSlider
              className="relative  sm:w-[438px] sm:h-[657px] rounded-3xl border-2 border-[rgba(144,111,241,1)]"
              itemOne={
                <div className="relative">
                  <img
                    src="/images/projects/Collagenious/infografia01.png"
                    alt="Imagen antes del procesamiento"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 mx-auto bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] w-fit h-fit px-4 py-2 top-10 rounded-lg text-white items-center text-md sm:text-[22px]">
                    PRIMER PROTOTIPO
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative">
                  <img
                    src="/images/projects/Collagenious/infografia02.png"
                    alt="Imagen después del procesamiento"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 mx-auto bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] w-fit h-fit px-4 py-2 top-100 sm:top-140 rounded-lg text-white items-center text-md sm:text-[22px]">
                    PROTOTIPO FINAL
                  </div>
                </div>
              }
              position={50}
              handle={
                <ReactCompareSliderHandle
                  style={{ color: "rgba(144,111,241,1)" }}
                />
              }
            />

            <ReactCompareSlider
              className="relative sm:w-[438px] sm:h-[657px] rounded-3xl border-2 border-[rgba(144,111,241,1)]"
              itemOne={
                <div className="relative">
                  <img
                    src="/images/projects/Collagenious/video01.png"
                    alt="Imagen antes del procesamiento"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 mx-auto bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] w-fit h-fit px-4 py-2 top-10 rounded-lg text-white items-center text-md sm:text-[22px]">
                    PRIMER PROTOTIPO
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative">
                  <img
                    src="/images/projects/Collagenious/video02.png"
                    alt="Imagen después del procesamiento"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 mx-auto bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] w-fit h-fit px-4 py-2 top-100 sm:top-140 rounded-lg text-white items-center text-md sm:text-[22px]">
                    PROTOTIPO FINAL
                  </div>
                </div>
              }
              position={50}
              handle={
                <ReactCompareSliderHandle
                  style={{ color: "rgba(144,111,241,1)" }}
                />
              }
            />
          </div>
        </div>

        <div className="development w-[80vw] sm:w-fit  sm:mt-16">
          <h1 className="font-regular text-3xl sm:text-3xl md:text-4xl lg:text-4xl w-fit pt-16 md:px-10 lg:px-6 ">
            Programamos la página web en
            <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
              {" "}
              React
            </span>{" "}
            y{" "}
            <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
              Tailwind <br className="hidden lg:block"></br>
            </span>{" "}
            y creamos una base de datos en{" "}
            <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
              {" "}
              PHP
            </span>
          </h1>
          <p className="text-xl sm:text-[22px]  w-full mx-auto max-w-prose sm:px-12 lg:px-0 py-8">
            Conectamos el <strong>frontend</strong> con el{" "}
            <strong>backend</strong>, que a su vez se comunica con sus CRM{" "}
            <strong>Hubspot</strong> y <strong>Brevo</strong>, creando usuarios
            y enviando emails con el submit de un formulario
          </p>
          <img
            src="/images/projects/Collagenious/chart.png"
            alt="Diagrama de flujo"
            className="w-[600px] h-auto object-cover mx-auto my-16"
          />
        </div>
        <div className="timeline w-[90vw] sm:w-fit">
          <h1 className="font-bold text-5xl w-fit sm:pt-8 md:pt-16 px-6 ">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">
              Evolución
            </span>{" "}
            del proyecto <br></br>
          </h1>
          <div className="timeline-container text-start border-2 border-[rgba(202,169,240,0.3)] rounded-2xl bg-[#332264] bg-[linear-gradient(180deg,#332264_0%,#231940)_83%)] px-8 pt-8 pb-16 mt-16 shadow-xl shadow-[#26103f]">
            <h1 className="text-2xl pb-4">📅 Semana {currentWeek}</h1>
            <p 
            className="text-xl ">
              {currentWeekData
                ? currentWeekData.descripcion
                : "Descripción no disponible"}
            </p>
            <div className="relative h-2 bg-gray-700 rounded-full mb-4 my-8">
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-in-out bg-[linear-gradient(90deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]"
                style={{ width: `${dynamicProgressPercentage}%` }}
              ></div>
              {semanas.map((semana, index) => {
                const positionPercentage = (index / (maxWeeks-1)) * 100;
                const isActive = semana.value <= currentWeek;
                const isSelected = semana.value === currentWeek;

                return (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer "
                    style={{ left: `${positionPercentage}%`, top: "50%" }}
                    onClick={() => handleWeekClick(semana.value)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ease-in-out ${
                        isActive
                          ? "bg-purple-500 border-purple-500"
                          : "bg-gray-700 border-gray-500"
                      } ${isSelected ? "shadow-xl shadow-purple-400 scale-120 border-white" : ""}`}
                    ></div>
                  </div>
                );
              })}
              <div className="flex justify-between text-base text-gray-400  sm:font-semibold translate-y-8 gap-x-8 sm:gap-x-0">
                {semanas.map((semana, index) => (
                  <span
                    key={index}
                    className={semana.value === currentWeek ? "text-white" : ""}
                  >
                    {semana.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
        className=" cursor-pointer text-xl hover:text-[rgba(144,111,241,1)]"
        onClick={() => window.open("https://collagenious.com", "_blank")}
        > 🌐 <span className="hover:underline">VISITAR WEB</span></div>
      </div>
    </div>
  );
};

export default Collagenious;
