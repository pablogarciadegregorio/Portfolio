import React from "react";
import PGlogo from "../../public/images/projects/PGlogowhite.svg";
import Image from "next/image";



const Footer = ({modalIsOpen}) => {
  return (
    <footer className={"bg-footer/70  footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white" + (modalIsOpen ? " hidden" : " CERRADO")}>
      <div className=" p-10 flex items-center justify-between">
        
        <Image
            className="fill-white w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
            src={PGlogo}
            alt="pablo garcia logo"
       />
        <p className="text-slate-6 flex justify-end">Hecha por Pablo García</p>
      </div>
    </footer>
  );
};

export default Footer;
