import React, { useState } from "react";
import Link from "next/link";

const externalUrls = {
  "gamer-groove": "https://videogame-music-quiz.vercel.app/",
  "waterpolo-tactic-board": "https://waterpolo-tactic-board.vercel.app/",
};


const ProjectCard = ({
  imgUrl,
  title,
  description,
  previewUrl,
  slug,
}) => {


  const isExternal = previewUrl && previewUrl !== "/";

  const Tag = isExternal ? "a" : Link;
  const href = isExternal ? previewUrl : `/projects/${slug}`;


  return (
    <Tag href={href}
    target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      <div className="group cursor-pointer w-[70vw]  sm:w-[280px] md:w-[320px] lg:w-[300px] 2xl:w-[375px] sm:mb-8  ">
        <div
          className="h-[230px]  w-full sm:h-[210px] md:h-[240px]  lg:h-[225px] 2xl:h-[281px] rounded-t-xl relative grayscale-0  z-20"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full
           rounded-t-xl
                         bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] mix-blend-color-mode
                         opacity-0 group-hover:opacity-80
                         transition-all duration-500 blend-color-filter"
          ></div>
        </div>
        <div className=" text-white rounded-b-xl text-wrap bg-[#181818] w-full h-[150px] xl:h-[150px] py-6 px-4 ">
          <h5 className=" text-xl font-bold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </Tag>
  );
};

export default ProjectCard;
