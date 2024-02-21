import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white "
    : "text-[#ADB7BE]";

  return (
    <button className="mb-2 sm:mb-0" onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#6b4cca] mt-1 sm:mt-2 mr-3 rounded-md"
      ></motion.div>
    </button>
  );
};

export default TabButton;
