import React from 'react';

import Navbar from "@/app/components/Navbar"; 
import Footer from "@/app/components/Footer";
import Background from "@/app/components/Background"; 

import Collagenious from '@/app/components/projects/Collagenious';
import PoloGuru from '@/app/components/projects/PoloGuru';
import RivasRuido from '@/app/components/projects/RivasRuido';
import Musco from '@/app/components/projects/Musco';

const ProjectComponents = {
  'collagenious': Collagenious,
  'polo-guru': PoloGuru,
  'rivas-ruido': RivasRuido,
  'musco': Musco,   
};

export default function ProjectDetailPage({ params }) {
  const { slug } = params; 

  const SelectedComponent = ProjectComponents[slug] || DefaultProjectDesign;


  return (
    <main
      // Reutiliza las clases del <main> de tu página principal
      className="flex min-h-screen flex-col bg-[radial-gradient(circle,rgba(39,21,77,1)_0%,rgba(16,8,29,1)_65%)] overflow-x-hidden"
    >
      <Navbar /> 
      
      {/* Contenedor principal con padding y fondo decorativo */}
      <div className=" container mx-auto md:px-4 lg:px-8 xl:px-32 py-4 mt-16 sm:mt-24 relative ">
        <Background/>
        
        {/* Aquí se inyecta el contenido específico del proyecto */}
        <SelectedComponent slug={slug} />
        
        {/* NOTA: Eliminamos EmailSection y ProjectSection */}
      </div>
      
      <Footer /> {/* Eliminamos la prop modalIsOpen que ya no usamos */}
    </main>
  );
}