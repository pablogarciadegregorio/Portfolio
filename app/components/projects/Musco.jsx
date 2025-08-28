import React from "react";
import Image from "next/image";

const Musco = () => {
  const images = [];
  const start = 29;
  const end = 71;

  for (let i = start; i <= end; i++) {
    const filename = `1756255184892-9c05d1cd-370c-437e-988b-3e1e3a52f118_${i}.jpg`;
    images.push(`/images/projects/musco-naming/${filename}`);
  }

  return (
    <div className="flex flex-col items-center w-full px-4 2xl:w-[800px] mx-auto xl:my-16  z-10">
      <div className="flex flex-col items-center">
        
        {images.map((imagePath, index) => (
          <div key={index} className="my-2 sm:my-4 z-20 flex">
            <Image
            className="z-20"
              src={imagePath}
              alt={`Musco naming ${index + 29}`}
              width={800} // 
              height={800} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Musco;
