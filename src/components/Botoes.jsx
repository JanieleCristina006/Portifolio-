import React, { useEffect, useState } from "react";
import { FiHome, FiUser, FiFolder, FiEdit2, FiMapPin } from "react-icons/fi";
import { Tooltip } from "primereact/tooltip";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

export const Botoes = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
  const sections = ["inicio", "sobre", "projetos", "experiencia", "contato"];

  const handleScroll = () => {
    const middleY = window.innerHeight / 2;

    let closestSection = sections[0];
    let closestDistance = Infinity;

    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - middleY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = id;
        }
      }
    }

    setActiveSection(closestSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // já calcula a seção atual ao carregar
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <>
      {/* Tooltips */}
      <Tooltip target=".tooltip-home" />
      <Tooltip target=".tooltip-user" />
      <Tooltip target=".tooltip-folder" />
      <Tooltip target=".tooltip-edit" />
      <Tooltip target=".tooltip-map" />

      <nav className="flex flex-col gap-6 text-white items-center">
        <button
          className={`tooltip-home p-3 rounded-full transition ${
            activeSection === "inicio" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Início"
          onClick={() => scrollToSection("inicio")}
        >
          <FiHome size={20} />
        </button>

        <button
          className={`tooltip-user p-3 rounded-full transition ${
            activeSection === "sobre" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Sobre"
          onClick={() => scrollToSection("sobre")}
        >
          <FiUser size={20} />
        </button>

        <button
          className={`tooltip-folder p-3 rounded-full transition ${
            activeSection === "projetos" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Projetos"
          onClick={() => scrollToSection("projetos")}
        >
          <FiFolder size={20} />
        </button>

        <button
          className={`tooltip-edit p-3 rounded-full transition ${
            activeSection === "experiencia"
              ? "bg-green-500"
              : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Experiência"
          onClick={() => scrollToSection("experiencia")}
        >
          <FiEdit2 size={20} />
        </button>

        <button
          className={`tooltip-map p-3 rounded-full transition ${
            activeSection === "contato" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          data-pr-tooltip="Contato"
          onClick={() => scrollToSection("contato")}
        >
          <FiMapPin size={20} />
        </button>
      </nav>
    </>
  );
};
