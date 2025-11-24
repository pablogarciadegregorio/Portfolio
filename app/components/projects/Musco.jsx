"use client";
import React, { useState } from "react";
import Image from "next/image";

const Musco = () => {
  const [imgCounter, setImgCounter] = useState(29);

  const handleNext = () => {
    if (imgCounter < 71) {
      setImgCounter(imgCounter + 1);
    }
  };

  const handlePrevious = () => {
    if (imgCounter > 29) {
      setImgCounter(imgCounter - 1);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto my-8">
      <Image
        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] mx-auto  my-8"
        src="/images/projects/musco-naming/musco-logo.svg"
        alt="Musco logo"
        width={1000}
        height={1000}
      />
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto my-8">
        <div className="flex flex-col items-center">
          <Image
            className="z-20 rounded-md border-2 border-[rgba(144,111,241,1)] shadow-[#61418b]/30 shadow-2xl w-full sm:w-[600px] md:w-[700px] lg:w-[800px] max-w-[1000px] h-auto mx-auto"
            src={`/images/projects/musco-naming/1756255184892-9c05d1cd-370c-437e-988b-3e1e3a52f118_${imgCounter}.jpg`}
            alt={`Musco naming ${imgCounter}`}
            width={1000}
            height={1000}
          />
          <p className="font-bold text-[rgba(144,111,241,1)] text-lg md:text-xl mt-4 z-20">
            <span>{imgCounter - 28}</span> / 71
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 md:gap-8 mt-6">
          <button
            className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-3xl md:text-5xl text-white font-extrabold rounded-full z-20 transition-all duration-200 ${imgCounter === 29 ? 'bg-gray-400 cursor-not-allowed opacity-50' : 'bg-[linear-gradient(90deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] cursor-pointer'}`}
            onClick={handlePrevious}
            disabled={imgCounter === 29}
            aria-label="Anterior"
          >
            {'↩'}
          </button>
          <button
            className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-3xl md:text-5xl text-white font-extrabold rounded-full z-20 transition-all duration-200 ${imgCounter === 71 ? 'bg-gray-400 cursor-not-allowed opacity-50' : 'bg-[linear-gradient(90deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] cursor-pointer'}`}
            onClick={handleNext}
            disabled={imgCounter === 71}
            aria-label="Siguiente"
          >
            {'↪'}
          </button>
        </div>
      </div>
      <div className="texto text-white w-full max-w-3xl mx-auto px-4 mt-12">
        <section className="mb-26">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pt-8 text-center">
            Rebranding: de <span className="italic">'The Lab'</span> a una{' '}
            <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)]">identidad propia</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-7 text-justify md:text-left lg:text-left">
            La farmacia operaba bajo un nombre heredado (<span className="italic">'The Lab'</span>) que ya no reflejaba la <span className="font-bold">visión</span> ni la <span className="font-bold">personalidad</span> de su nueva dueña. El principal desafío era crear un <span className="font-bold">naming auténtico</span> que resonara profundamente con la clienta y que sirviera como punto de partida para su nueva dirección de negocio.
          </p>
        </section>
        <section className="mb-26">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] mt-8 text-left">La Metodología</h1>
          <ol className="list-decimal list-inside mt-8 text-lg md:text-xl leading-relaxed text-left md:text-left lg:text-left gap-6 flex flex-col">
            <li className="py-2 px-2 rounded-lg bg-[#2d2250]/40 border-l-4 border-[rgba(144,111,241,0.7)]">
              <span className="font-bold text-xl">Entrevistas Personalizadas:</span> <span className="italic">Conversaciones estructuradas</span> con la clienta para identificar la <span className="font-bold">misión</span>, los <span className="font-bold">valores</span> y la <span className="font-bold">personalidad</span>.
            </li>
            <li className="py-2 px-2 rounded-lg bg-[#2d2250]/40 border-l-4 border-[rgba(144,111,241,0.7)]">
              <span className="font-bold text-xl">Formularios Estratégicos:</span> Herramientas de <span className="italic">diagnóstico</span> para delimitar los <span className="font-bold">arquetipos de marca</span> y el <span className="font-bold">tono de voz</span> deseado.
            </li>
            <li className="py-2 px-2 rounded-lg bg-[#2d2250]/40 border-l-4 border-[rgba(144,111,241,0.7)]">
              <span className="font-bold text-xl">Análisis Competitivo:</span> <span className="italic">Mapeo del sector</span> para garantizar que la propuesta final fuera <span className="font-bold">única</span> y <span className="font-bold">registrable</span>.
            </li>
          </ol>
        </section>
        <section className="mb-26">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] mt-8 text-left">El resultado</h1>
          <p className="mt-6 text-lg md:text-xl leading-7 text-justify md:text-left lg:text-left">
            Las <span className="font-bold">diapositivas</span> que mostramos son la prueba de este proceso. No son solo <span className="font-bold">propuestas</span>, sino el <span className="italic">mapa estratégico</span> que conecta la <span className="font-bold">identidad</span> de la dueña con el <span className="font-bold">nombre definitivo</span>. El resultado es un naming que se siente <span className="font-bold">propio</span>, validado por <span className="font-bold">datos</span>, y listo para <span className="font-bold">impulsar el negocio</span>. Pasa las diapositivas para explorar cada fase de la creación del naming, desde la <span className="italic">investigación</span> hasta la <span className="italic">defensa de la propuesta final</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Musco;
