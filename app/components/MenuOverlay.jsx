import React from "react";
import Navlink from "./Navlink";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return <ul className="flex flex-col py-4 items-center text-2xl gap-y-8 h-screen ">
            
             {links.map((link,index) => (
             <li 
             key={index}>
             <Navlink href={link.path} title={link.title} setNavbarOpen={setNavbarOpen} />
             </li>
             ))}
            
        </ul>;
};

export default MenuOverlay;
