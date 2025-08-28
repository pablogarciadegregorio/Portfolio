// components/Carousel.js
"use client"; 

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[290px] sm:w-full max-w-[400px] ">
      <Slider {...carouselSettings}
      className="flex flex-row justify-center items-center">
        <div className="">
          <video
          src="/images/projects/rivasruido-video.mp4"
          controls
          playsInline
          className=" h-[360px] sm:h-[500px] rounded-lg mx-auto z-20"
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
        </div>
        <div >
          <Image
            className="my-auto"
            src="/images/projects/rivasruido-ryf.jpg"
            alt="Social media post 1"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/images/projects/rivasruido-post1.jpg"
            alt="Social media post 2"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/images/projects/rivasruido-post2.jpg"
            alt="Social media post 3"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/images/projects/rivasruido-post3.jpg"
            alt="Social media post 3"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/images/projects/rivasruido-post4.jpg"
            alt="Social media post 4"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/images/projects/rivasruido-post5.jpg"
            alt="Social media post 5"
            width={500}
            height={500}
          />
        </div>
        <div className="">
          <video
          alt="Video Rivas Ruido"
          src="/images/projects/rivasruido-video2.mp4"
          controls
          playsInline
          className=" h-[360px] sm:h-[500px] rounded-lg mx-auto z-20"
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;