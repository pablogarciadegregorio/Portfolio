"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import PGlogo from "../../public/images/projects/PGlogowhite.svg";

const navLinks = [
  {
    title: "Sobre mí",
    path: "#aboutSection",
  },
  {
    title: "Trabajos",
    path: "#projectSection",
  },
  {
    title: "Contacto",
    path: "#contactSection",
  },
];



const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed  top-0 left-0 right-0 z-50 bg-[radial-gradient(circle,rgba(29,15,58,1)_0%,rgba(16,8,29,1)_65%)] bg-opacity-100 border-b border-[#33353f]">
      <div className="flex container lg:py-4 flex-wrap item-center justify-between mx-auto px-4 lg:px-12 py-2 ">
        <a
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold justify-center items-center flex"
        >
          <Image
            className={ navBarOpen? "hidden" : "fill-white w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex"}
            src={PGlogo}
            alt="pablo garcia logo"
            width={60}
            height={60}
          />
        </a>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2  text-slate-200   "
            >
              <Bars3Icon className="h-10 w-10 " />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2  text-slate-200"
            >
              <XMarkIcon className="h-10 w-10 " />
            </button>
          )}
        </div>

        <div
          className="menu hidden md:items-center md:flex md:w-auto font-semibold"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} setNavbarOpen={setNavBarOpen}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} setNavbarOpen={setNavBarOpen}/> : null}
    </nav>
  );
};

export default Navbar;
