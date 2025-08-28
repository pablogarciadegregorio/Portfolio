"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import MailIcon from "../../public/images/mail-icon.svg";
import LinkedInIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = ({ modalIsOpen }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xmh1hjq", "template_nhrcbhn", form.current, {
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
      className={
        "grid sm:grid-cols-1 md:grid-cols-2 md:mt-24 my-12 md:my-12 py-8 md:py-24 gap-4 relative scroll-mt-16" +
        (modalIsOpen ? " hidden" : " CERRADO")
      }
    >
      <div>
        <h5 className="text-4xl font-bold text-white text-center md:text-left md:mt-2 mb-4 md:mb-8 ">
          Contacto
        </h5>
        <p className="text-[#c7d0d6] mb-4 md:max-w-md text-center md:text-left px-8 md:px-0">
          Si tienes alguna
          propuesta o un nuevo proyecto que consideres que mi
          perfil podría impulsar, estaré encantado de conocerlo.
        </p>
        <p className="text-[#c7d0d6] mb-4 md:max-w-md text-center md:text-left px-8 md:px-0">Puedes contactar conmigo directamente a través del formulario adjunto,
          por correo electrónico, o mediante mi perfil de LinkedIn.</p>
        <div className="socials flex  flex-row gap-2 justify-center md:justify-start mt-8 mb-4 ">
          <Link target="_blank" href="mailto:pablo.garcia.degregorio@gmail.com">
            <Image src={MailIcon} alt="Mail Icon" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/pablo-degregorio/">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form
          ref={form}
          className="flex flex-col mt-8 md:mt-0 px-8 md:px-0"
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
              placeholder="Introduce tu correo electrónico"
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
              placeholder="Tu nombre"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Tu Mensaje
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
            className="bg-[linear-gradient(90deg,rgba(180,125,242,1)_0%,rgba(102,65,211,1)_90%)] hover:bg-[linear-gradient(270deg,rgba(144,111,241,1)_0%,rgba(202,169,240,1)_83%)] text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Mensaje enviado. Me pondré en contacto contigo a la mayor brevedad posible{" "}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
