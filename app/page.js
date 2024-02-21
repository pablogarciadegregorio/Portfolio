"use client";

import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Background from "./components/background";
import Quiz from "./components/Quiz";

export default function Home() {
  const [modalState, setModalState] = useState(false);

  // NO SCROLL WITH MODAL OPEN

  const handleModalState = (modalOpen) => {
    setModalState(modalOpen);

    !modalState
      ? (document.body.classList.add("overflow-hidden"),
        document.body.classList.remove("overflow-y-scroll"))
      : (document.body.classList.add("overflow--y-scroll"),
        document.body.classList.remove("overflow-hidden"));
  };

  return (
    <main
      className={
        `flex min-h-screen flex-col bg-gradienteFondo overflow-x-hidden` +
        (modalState ? " sticky" : " ")
      }
    >
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24 relative ">
        <Background/>
        <HeroSection/>
        {/* <AchievementsSection />  */}
        <AboutSection/>
        {/* <Quiz/> */}
        <ProjectSection
        
          modalState={modalState}
          handleModalState={handleModalState}
        />
        <EmailSection modalIsOpen={modalState}/>
      </div>
      <Footer modalIsOpen={modalState}/>
    </main>
  );
}
