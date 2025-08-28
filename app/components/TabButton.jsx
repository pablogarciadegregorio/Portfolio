import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "cursor-pointer  py-3 px-6 w-full  rounded-full font-bold bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] text-white"
    : "cursor-pointer  py-3 px-6 w-full sm:w-fit rounded-full font-bold bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] hover:bg-[#2c1f46] text-white";

  return (
    <>
      {active ? (
        <div>
          <button className="  lg:w-[140px]" onClick={selectTab}>
            <p
              className={` font-semibold w-full text-md sm:text-lg md:text-lg hover:text-white  cursor-pointer  py-3 px-6  rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] text-white`}
            >
              {children}
            </p>
          </button>
          
        </div>
      ) : (
        <button className="group  lg:w-[140px] py-1 px-1 rounded-full bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)]" onClick={selectTab}>
            <p
              className={` group-hover:bg-[#513b7d] font-semibold w-full text-md sm:text-lg md:text-lg hover:text-white  cursor-pointer  py-2 px-5  rounded-full bg-[#261647] text-white`}
            >
              {children}
            </p>
          </button>
      )}
    </>
  );
};

export default TabButton;
