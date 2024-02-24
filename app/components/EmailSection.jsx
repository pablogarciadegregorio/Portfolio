"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedInIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = ({modalIsOpen}) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xmh1hjq", "template_zgogwmc", form.current, {
        publicKey: "x9E25zZQrCCzZqwAo",
      })
      .then(
        () => {
          setEmailSubmitted(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contactSection"
      className={"grid md:grid-cols-2 md:mt-24 my-12 md:my-12 py-24 gap-4 relative scroll-mt-16" + (modalIsOpen ? " hidden" : " CERRADO")}
    >
      <div>
        <h5 className="text-3xl font-bold text-white md:mt-2 mb-4 md:mb-8">
          Conectemos
        </h5>
        <p className="text-[#c7d0d6] mb-4 max-w-md">
          {""}
          Has llegado hasta aquí abajo. Y eso que había mogollón de formas y
          colores para entretenerse. Eso desmuestra verdadero interés.
        </p>
        <p className="text-[#c7d0d6] mb-4 max-w-md">
          Por mi parte, también estoy deseando conocerte. Así que, ¿por qué
          dejarlo ahí?
        </p>
        <p className="text-[#c7d0d6] mb-4 max-w-md">¡Es un MATCH!</p>
        <p className="text-[#c7d0d6] mb-4 max-w-md">
          Encuentrame en las redes de abajo o contacta a través del formulario.
        </p>
        <div className="socials flex  flex-row gap-2 mt-8 mb-4 ">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form
          ref={form}
          className="flex flex-col mt-8 md:mt-0"
          onSubmit={sendEmail}
        >
          <div className="mb-6  ">
            <label
              htmlFor="email"
              type="email"
              className="mb-2 text-white block  text-sm font-medium"
            >
              Email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              required
              placeholder="nevergonna@giveyou.up"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="text"
              className="mb-2 text-white block  text-sm font-medium"
            >
              Nombre
            </label>
            <input
              name="user_name"
              type="text"
              id="subject"
              required
              placeholder="Rick Astley"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              ¡Cuéntame! :)
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="¡Hola Pablo! Queria contactar contigo porque..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradienteBoton hover:bg-gradienteBotonHover text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            ¡Allá va!
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Mensaje enviado. Consulta el estado del mensaje{" "}
              <a
                target="_blank"
                href="https://i.makeagif.com/media/7-28-2014/AnSME7.gif"
              >
                aquí
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
