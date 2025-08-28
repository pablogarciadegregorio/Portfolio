import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";

const RivasRuido = () => {
 

  return (
    <div className="flex flex-col items-center  mx-auto xl:my-16 text-white ">
      <div className="z-10  w-[100px] h-auto">
        <Image
          className=""
          src="/images/projects/rr-mouth.svg"
          alt="Logo Rivas Ruido"
          width={1212}
          height={32768}
        />
      </div>
      <a
        href="https://www.rivasruido.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-center my-4 hover:underline hover:text-[rgba(180,125,242,1)]"
      >
        Visitar sitio web
      </a>

      <div className="flex flex-col px-8 my-8 text-center gap-y-4">
        <p className="text-white text-4xl font-bold">
          25 aniversario de la asociación musical Rivas Ruido
        </p>
        <p className="text-white text-lg">
          <span className="font-bold">Objetivo</span>: Identidad visual y página
          web funcional en un plazo de una semana
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-auto h-auto gap-8 md:gap-8 lg:gap-32 my-16 z-10">
        <Image
          alt="Mockup web Rivas Ruido"
          className="w-[350px] md:w-[450px] lg:w-auto lg:h-auto"
          src="/images/projects/rivasruido-webmockup.png"
          width={1670 / 3}
          height={1005 / 3}
        />
        <Image
          alt="Mockup móvil Rivas Ruido"
          className="w-[150px] md:w-[130px] lg:w-[170px] shadow-[8px_8px_16px_0_rgba(0,0,0,0.25)]"
          src="/images/projects/rivasruido-mobilemockup.png"
          width={1207 / 3}
          height={2484 / 3}
        />
      </div>
      <div className="summary-container text-white text-center mt-8 flex flex-col gap-y-16 items-center z-10">
        <div className=" flex flex-col items-center gap-y-4">
          <h1 className="font-bold text-3xl w-fit py-3 px-6 rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] ">
            Tareas
          </h1>
          <ul className="flex flex-col gap-y-2 text-xl justify-center text-center list-inside m-4">
            <li>Cartelería y publicidad impresa</li>
            <li>Diseño y prototipo</li>
            <li>Página Web con generación de entradas numeradas</li>
            <li>Creación de identidad visual</li>
            <li>Vídeos, post y estrategia para redes sociales</li>
          </ul>
        </div>
        <div className=" flex flex-col items-center gap-y-12 mt-16">
          <h1 className="font-bold text-3xl w-fit py-3 px-6 rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] ">
            Identidad Visual
          </h1>
          <div className="identidad flex flex-col gap-y-16 md:gap-y-0 md:flex-row mt-6 md:gap-x-6 lg:gap-x-8">
            <div className="flex flex-col items-center justify-between md:w-[150px] lg:w-[200px] w-auto h-auto md:h-[286px]  ">
              <Image
                className="w-auto md:w-[150px] h-auto my-auto"
                src="/images/projects/rr-logo.png"
                alt="Logotipo"
                width={250}
                height={250}
              />
              <div className=" text-white rounded-b-xl text-wrap  w-full pt-6 ">
                <h5 className="text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">Logotipo</h5>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:justify-between md:w-[150px] lg:w-[200px] w-auto h-auto md:h-[286px]  ">
              <Image
                className="w-auto md:w-[150px] h-auto"
                src="/images/projects/rr-cartel.jpg"
                alt="Logotipo"
                width={250}
                height={250}
              />
              <div className=" text-white rounded-b-xl text-wrap  w-full pt-6 ">
                <h5 className="text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">Cartel</h5>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between md:w-[150px] lg:w-[200px] xl:w-[250px] w-auto h-auto md:h-[286px]  ">
              <Image
                className="w-auto md:w-[250px] my-auto"
                src="/images/projects/rr-entrada.jpg"
                alt="Logotipo"
                width={250}
                height={250}
              />
              <div className=" text-white rounded-b-xl text-wrap  w-full pt-6 ">
                <h5 className="text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">Entradas</h5>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between md:w-[150px] lg:w-[200px] w-auto h-auto md:h-[286px]   ">
              <Image
                className="w-auto md:w-[180px] h-auto"
                src="/images/projects/rr-flyer.png"
                alt="Logotipo"
                width={250}
                height={250}
              />
              <div className=" text-white rounded-b-xl text-wrap  w-full pt-6 ">
                <h5 className="text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">Flyers</h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-y-8 mt-16">
          <h1 className="font-bold text-3xl w-fit py-3 px-6 rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] ">
            Web
          </h1>

          <ul className="flex flex-col text-xl justify-center text-center list-inside m-4 gap-y-16">
            <li className="grid grid-cols-1 md:grid-cols-2">
              <Image
                alt="landing page Rivas Ruido"
                className="w-[80vw] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[550px] h-auto mx-auto md:mx-0"
                src="/images/projects/rivasruido-web.jpg"
                width={1670 / 3}
                height={1005 / 3}
              />
              <div className="mt-8 md:mt-0 col-span-1">
                <h1 className="text-4xl font-bold text-center md:text-start mb-4">
                  Landing Page
                </h1>
                <p className="text-center md:text-start">
                  Diseño responsive en Tailwind y React con generación de
                  entradas numeradas y envío por correo usando php y MySQL.
                </p>
                <p className="text-center md:text-start">
                  Reproductor de música, lista de colaboradores y artistas.
                </p>
                <div className="flex flex-row mt-8 gap-x-4 justify-around md:justify-normal   lg:h-auto">
                  <Image
                  className=""
                    alt="Icono Tailwind CSS"
                    src="/images/about/tailwind.png"
                    width={56}
                    height={35}
                  />
                 
                  <Image
                    alt="icono react"
                    src="/images/about/react.png"
                    width={55}
                    height={49}
                  />
                 
                  <Image
                    alt="icono mysql"
                    src="/images/about/mysql.png"
                    width={80}
                    height={49}
                  />
                 
                  <Image
                    alt="icono php"
                    src="/images/about/php.png"
                    width={80}
                    height={49}
                  />
                 
                </div>
              </div>
            </li>
            <li className="grid grid-cols-1   md:grid-cols-2 mt-8 md:mt-0">
              <div className="col-span-1 text-center md:text-end md:mr-16">
                <h1 className="text-4xl font-bold mb-4 ">Email</h1>
                <p className="">
                  Email personalizado con entrada numerada adjunta usando
                  PHPMailer. La base de datos controla la numeración de las
                  entradas y genera el código html del email y lo envía a la
                  dirección del formulario del frontend.
                </p>
              </div>
              <Image
              className="mx-auto md:mx-0 mt-8 md:mt-0"
              alt="Email Rivas Ruido"
                src="/images/projects/rivasruido-email.png"
                width={1670 / 3}
                height={1005 / 3}
              />
            </li>
          </ul>
        </div>
        <div className=" flex flex-col items-center gap-y-8 mt-16">
          <h1 className="font-bold text-3xl w-fit py-3 px-6 rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] ">
            Redes Sociales
          </h1>
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
};

export default RivasRuido;
