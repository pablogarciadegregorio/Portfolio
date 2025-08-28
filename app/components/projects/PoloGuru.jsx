import React from "react";
import Image from "next/image";

const PoloGuru = () => {
  return (
    <div className="flex flex-col items-center 2xl:w-[800px] mx-auto xl:my-16 " >
      <Image
        className="z-10"
        src="/images/projects/pologuru-case.jpg"
        alt="Polo Guru caso de estudio"
        width={1212}
        height={32768}
      />

    </div>
  );
};

export default PoloGuru;
