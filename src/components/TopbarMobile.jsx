import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiFolder,
  FiEdit2,
  FiMapPin,
} from "react-icons/fi";

export const TopbarMobile = ({ scrollToSection, activeSection }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { id: "inicio", icon: <FiHome /> },
    { id: "sobre", icon: <FiUser /> },
    { id: "projetos", icon: <FiFolder /> },
    { id: "experiencia", icon: <FiEdit2 /> },
    { id: "contato", icon: <FiMapPin /> },
  ];

  return (
    <>
      {/* Botão flutuante */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="bg-green-500 p-2 rounded-full"
        >
          {menuAberto ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Menu dropdown mobile */}
      {menuAberto && (
        <div className="fixed top-16 left-4 bg-zinc-900 rounded-xl p-4 flex flex-col gap-4 z-40 shadow-lg">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setMenuAberto(false);
              }}
              className={`flex items-center gap-2 p-2 rounded-full transition ${
                activeSection === link.id ? "bg-green-500" : "hover:bg-green-500"
              }`}
            >
              {link.icon}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
