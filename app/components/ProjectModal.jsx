import React, { useState } from "react";
import Image from "next/image";
import closeIcon from "../../public/images/close-icon.svg";
import Pagoda from "../../public/images/projects/Pagoda Blanca.png";
import CamisetaSouleck from "../../public/images/projects/Pull Off Negra.png";
import Vidriera from "../../public/images/projects/Vidriera Black.png";
import Chapas from "../../public/images/projects/Chapas pagoda.png";
import Poster from "../../public/images/projects/Megamatas Poster Clippers.png";
import SouleckCD from "../../public/images/projects/Souleck CD.png";
import FishermansCD from "../../public/images/projects/FishermansCD.png";
import Tarjeta from "../../public/images/projects/Business Card.png";
import EPK from "../../public/images/projects/Booklet EPK mockup.png";
import Banner from "../../public/images/projects/Banner.png";
import Reloj1 from "../../public/images/projects/reloj1.jpg";
import Reloj2 from "../../public/images/projects/reloj2.jpg";
import Postal from "../../public/images/projects/postcard.png";
import illustrator from "../../public/images/illustrator-icon.svg";
import Photoshop from "../../public/images/photoshop-icon.svg";


const Merchandising = <div className="text-white p-2 sm:p-4 lg:p-8 md:p-4">
<h1 className=" text-3xl sm:text-5xl md:text-5xl font-bold pt-8 text-center justify-center text-[#e8e5ee] mb-4 ">
  MERCHANDISING
</h1>
<div className="divisor h-[2px] md:h-[3px]  bg-white/50 mb-2 md:mb-4 lg:mb-6 rounded-xl"></div>
<h3 className="flex justify-center md:text-2xl sm:text-2xl text-lg">
  PARA BANDAS
</h3>
<div className="camisetas mt-8">
  <div className=" flex flex-col lg:grid lg:grid-cols-3 mb-8 ">
    <div className="pagoda h-full flex justify-center">
      <Image
        className="w-[60%] h-[60%] sm:w-[50%] sm:h-[50%] md:h-[60%] md:w-[60%] lg:w-full lg:h-full  hover:scale-110 drop-shadow-2xl hover:drop-shadow-glow"
        src={Pagoda}
        alt="camiseta blanca con dibujo negro"
      />
    </div>
    <div className="vidriera h-full flex justify-center">
      <Image
        className="w-[60%] h-[60%] sm:w-[50%] sm:h-[50%] md:h-[60%] md:w-[60%] lg:w-full lg:h-full hover:scale-110 drop-shadow-2xl hover:drop-shadow-glow"
        src={Vidriera}
        alt="camiseta negra con dibujo colores"
      />
    </div>
    <div className="vidriera h-full flex justify-center">
      <Image
        className="w-[60%] h-[60%] sm:w-[50%] sm:h-[50%]  md:h-[60%] md:w-[60%] lg:w-full lg:h-full hover:scale-110 drop-shadow-2xl hover:drop-shadow-glow"
        src={CamisetaSouleck}
        alt="camiseta negra con dibujo glitch"
      />
    </div>
  </div>
  <p className="text-lg sm:text-xl   lg:text-xl xl:text-xl text-justify">
    He tenido la suerte de poder diseñar merchandising para bandas
    increíbles como{" "}
    <a
      className="font-semibold"
      href="https://shorturl.at/tEIO1"
      target="_blank"
    >
      Fisherman's Horizon
    </a>{" "}
    y{" "}
    <a
      className="font-semibold  "
      href="https://shorturl.at/inwA6"
      target="_blank"
    >
      Souleck{" "}
    </a>
    tratando de capturar el espíritu friki y divertido en el caso de
    Fisherman's Horizon y plasmar rabia y el sufrimiento de las
    letras de Souleck. Todos los diseños fueron realizados con
    Photoshop e Illustrator y maquetados con Indesign.
    <br></br>
  </p>
</div>

<div className=" CDs mt-32 lg:grid lg:grid-cols-2 lg:items-center mb-32  ">
  <Image
    className="drop-shadow-2xl w-[100%] h-[100%] lg:w-[100%] lg:h-[100%]  lg:place-self-center   "
    src={SouleckCD}
    alt="CD Souleck"
  />
  <div className="justify-center ">
    <p className="text-3xl font-semibold mb-2 text-center lg:text-start lg:text-4xl">
      Souleck
    </p>
    <p className="text-2xl mb-2 text-center lg:text-start lg:text-3xl">
      Game Over
    </p>
    <p className="text-sm mb-2 text-center sm:text-lg lg:text-start">
      2015
    </p>
    <p className="text-lg sm:text-xl text-justify">
      Souleck debutan con Game Over, un disco de rock gótico
      alternativo madurado durante años que es una declaración de
      intenciones. El diseño del CD y del libreto refleja el
      sentimiento que abraza su obra y que te atrapa desde el primer
      momento.{" "}
    </p>
  </div>
</div>

<div className=" CDs mt-2 flex flex-col-reverse lg:grid lg:grid-cols-2   lg:items-center xl:mb-32 ">
  <div className="flex flex-col justify-center md:text-end ">
    <p className="text-3xl font-semibold md:float-right mb-2 text-center lg:text-end lg:text-4xl">
      Fisherman's Horizon
    </p>
    <p className="text-2xl mb-2 text-center lg:text-end lg:text-3xl">
      Worlds that Never Were
    </p>
    <p className="text-sm mb-2 text-center sm:text-lg lg:text-end">
      2015
    </p>
    <p className="text-lg text-justify sm:text-xl">
      Worlds that Never Were es una obra coral, compleja,
      fantástica, histriónica y llena de detalles que mezcla el
      humor, el virtuosismo, el metal y el progresivo para causar
      una reacción en el público durante un viaje a través de la
      locura y la música de videojuegos. La mezcla épica-fantástica
      de estilos y temas es el hilo conductor en el diseño.
    </p>
  </div>
  <Image
    className="drop-shadow-2xl  w-[100%] h-[100%] lg:w-full lg:h-80  lg:justify-center lg:place-self-center"
    src={FishermansCD}
    alt="CD Fisherman's Horizon"
  />
</div>

<div className="reloj mt-16">
  <p className="text-lg mb-8 sm:text-xl  md:text-xl text-justify   ">
    Haciendo gala de su espíritu gamer, propusieron un juego para
    los compradores del CD, y quien superase las 12 pruebas
    conseguiría hacerse con un reloj de bolsillo exclusivo
    conmemorativo. Fui el encargado de realizar el diseño del
    imponente premio, que enlazaba la imagen de marca con el diseño
    de la camiseta.
  </p>
  <div className=" CDs mt-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-16 sm:mb-16 md:grid md:grid-cols-2   items-center ">
    <Image
      className="rounded-lg w-[100%] h-[100%] mb-8 sm:mb-0  "
      src={Reloj1}
      alt="Reloj de bolsillo con imagen personalizado"
    />
    <Image
      className="rounded-lg w-[100%] h-[100%] "
      src={Reloj2}
      alt="Reloj de bolsillo con imagen personalizado"
    />
  </div>
</div>

<div className="merchan mt-16  mb-32 xl:mt-32 ">
  <p className="text-lg text-justify mb-8 sm:text-xl  ">
    Como buenos millenials, estos chicos crecieron bombardeados con
    merchandising en la TV, y me encargaron sets completos de
    merchandising para su público, prensa y directos. Chapas,
    tarjetas, posters, banners, banderas y postales.{" "}
  </p>

  <div className="flex flex-col space-y-16 sm:items-center sm:justify-items-center sm:gap-16 md:mt-16 lg:grid lg:grid-cols-2 items-center justify-center ">
    <Image
      className=" drop-shadow-2xl w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] md:w-[50%] md:h-[50%] lg:w-[80%] lg:h-[80%] lg:aspect lg:hover:scale-110 hover:drop-shadow-glow"
      src={Chapas}
      alt="chapas"
    />
    <Image
      className="drop-shadow-2xl w-[80%] h-[80%] sm:w-[60%] sm:h-[60%]  md:w-[50%] md:h-[50%] lg:w-[80%] lg:h-[80%] lg:hover:scale-110 hover:drop-shadow-glow"
      src={Tarjeta}
      alt="tarjeta de visita"
    />
    <Image
      className="drop-shadow-2xl w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] md:w-[60%] md:h-[60%] lg:w-[90%] lg:h-[80%] lg:hover:scale-110 hover:drop-shadow-glow"
      src={Postal}
      alt="tarjeta de visita"
    />
    <Image
      className=" drop-shadow-2xl  w-[80%] h-[80%] sm:w-[60%] sm:h-[60%]  md:w-[60%] md:h-[65%] lg:w-[75%] lg:h-[100%] lg:hover:scale-110 hover:drop-shadow-glow"
      src={Poster}
      alt="Poster"
    />

    <Image
      className=" drop-shadow-2xl w-[80%] h-[80%] sm:w-[60%] sm:h-[60%]  mb-8 md:w-[60%] md:h-[60%] lg:w-[75%] lg:h-[100%] lg:hover:scale-110 hover:drop-shadow-glow"
      src={Banner}
      alt="banner"
    />
  </div>
</div>
</div>




// This function handles which project you are reviewing

const renderModalContent = (project) => {

  if (project == 'Merchandising') return Merchandising
  else return <h1>No Project</h1>
}



//e.StopPropagation onClick prevents closing inside modal.

const Modal = ({ closeModal, handleCloseModal, projectName }) => {
  if (!closeModal) {
    return null;
  }

  return (
    <>
      <div
        onClick={() => handleCloseModal(true)}
        className="overlay w-screen h-screen fixed top-0 left-0 bg-black/[.70] z-8 "
      >
      <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="   z-100
                        modalContainer w-full h-full sm:w-[90%] sm:h-[90%] md:w-[80%] md:h-[85%] overflow-hidden overflow-y-scroll scrollbar-hide rounded-xl p-8 mt-8  flex flex-col 
                        relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       bg-modal"
      >
      <div className="close sticky top-0 ">
            <Image
              onClick={() => handleCloseModal(true)}
              className="mt-4 w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]  float-right hover:cursor-pointer"
              src={closeIcon}
              alt="close button"
      />
          </div>

        {renderModalContent(projectName)}
          {/* {Merchandising} */}
        </div>
      </div>
    </>
  );
};

export default Modal;
