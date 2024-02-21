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
    // l33t: "4b0ut",
    path: "#aboutSection",
  },
  {
    title: "Proyectos",
    // l33t: "Pr0j3ct5",
    path: "#projectSection",
  },
  {
    title: "Contacto",
    // l33t: "C0nt4ct5",
    path: "#contactSection",
  },
];

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed  top-0 left-0 right-0 z-10 bg-gradienteNavbar bg-opacity-100 border-b border-[#33353f]">
      <div className="flex container lg:py-4 flex-wrap item-center justify-between mx-auto px-4 py-2 ">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            className="fill-white w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
            src={PGlogo}
            alt="pablo garcia logo"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-text-white"
            >
              <Bars3Icon className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-text-white"
            >
              <XMarkIcon className="h-5 w-5 " />
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
                <Navlink href={link.path} title={link.title} l33t={link.l33t} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
