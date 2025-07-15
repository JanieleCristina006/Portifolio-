import React, { useEffect, useState } from "react";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiEdit2,
  FiMail
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { Tooltip } from "primereact/tooltip";
import { MobileSidebar } from "./MobileSidebar";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

export const Botoes = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = [
      "inicio",
      "sobre",
      "experiencia",
      "formacao",
      "projetos",
      "contato"
    ];

    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.6 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  if (isMobile) {
    return (
      <MobileSidebar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    );
  }

  
  return (
    <>
      
      <Tooltip target=".tooltip-home" />
      <Tooltip target=".tooltip-user" />
      <Tooltip target=".tooltip-edit" />
      <Tooltip target=".tooltip-educacao" />
      <Tooltip target=".tooltip-folder" />
      <Tooltip target=".tooltip-map" />

     
      <nav className="hidden md:flex flex-col gap-6 text-white items-center">
        
        <button
          className={`tooltip-home p-3 cursor-pointer rounded-full transition ${
            activeSection === "inicio" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Início"
          onClick={() => scrollToSection("inicio")}
        >
          <FiHome size={20} />
        </button>

       
        <button
          className={`tooltip-user p-3 cursor-pointer rounded-full transition ${
            activeSection === "sobre" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Sobre"
          onClick={() => scrollToSection("sobre")}
        >
          <FiUser size={20} />
        </button>

        
        <button
          className={`tooltip-edit p-3 cursor-pointer rounded-full transition ${
            activeSection === "experiencia" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Experiência"
          onClick={() => scrollToSection("experiencia")}
        >
          <FiEdit2 size={20} />
        </button>

        
        {/* <button
          className={`tooltip-educacao p-3 cursor-pointer rounded-full transition ${
            activeSection === "formacao" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Formação"
          onClick={() => scrollToSection("formacao")}
        >
          <FaGraduationCap size={20} />
        </button> */}

        
        <button
          className={`tooltip-folder p-3 cursor-pointer rounded-full transition ${
            activeSection === "projetos" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Projetos"
          onClick={() => scrollToSection("projetos")}
        >
          <FiFolder size={20} />
        </button>

        <button
          className={`tooltip-map p-3 cursor-pointer rounded-full transition ${
            activeSection === "contato" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Contato"
          onClick={() => scrollToSection("contato")}
        >
          <FiMail size={20} />
        </button>
      </nav>
    </>
  );
};
