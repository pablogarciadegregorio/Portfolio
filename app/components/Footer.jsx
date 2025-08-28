"use client";
import React from "react";
import Link from "next/link";
import PGlogo from "../../public/images/projects/PGlogowhite.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = ({ modalIsOpen }) => {
  const pathname = usePathname();
  const isProjectPage = pathname.includes("projects");

  const linksData = [
    { title: "Sobre mí", path: "aboutSection" },
    { title: "Trabajos", path: "projectSection" },
    { title: "Contacto", path: "contactSection" },
  ];

  return (
    <footer
      className={
        "bg-footer/70  footer z-10 border bg-[radial-gradient(circle,rgba(29,15,58,1)_0%,rgba(16,8,29,1)_65%)] border-t-[#33353F] border-l-transparent border-r-transparent text-white" +
        (modalIsOpen ? " hidden" : " CERRADO")
      }
    >
      <div className=" p-10 flex flex-col items-center justify-center gap-4 lg:text-xl">
        <a
          href={"/"}
          className="cursor-pointer hover:text-[rgba(180,125,242,1)]
         "
        >
          Inicio
        </a>
       {linksData.map((link) => {
         
          const Tag = isProjectPage ? "a" : Link;
          const href = isProjectPage ? `/#${link.path}` : `#${link.path}`;

          return (
            <Tag
              key={link.title}
              href={href}
              className="cursor-pointer hover:text-[rgba(180,125,242,1)]"
            >
              {link.title}
            </Tag>
          );
        })}
        <Image
          className="fill-white w-[25px] h-[25px] md:w-[40px] md:h-[40px] mt-8"
          src={PGlogo}
          alt="pablo garcia logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
