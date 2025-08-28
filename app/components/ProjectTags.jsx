import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] font-semibold"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white  ";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 border-[rgba(180,125,242,1)] px-6 py-3 text-md sm:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
