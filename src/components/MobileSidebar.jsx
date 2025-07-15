import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiEdit2,
  FiFolder,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const links = [
  { id: "inicio", label: "Início", icon: <FiHome /> },
  { id: "sobre", label: "Sobre", icon: <FiUser /> },
  { id: "experiencia", label: "Experiência", icon: <FiEdit2 /> },
  { id: "formacao", label: "Formação", icon: <FaGraduationCap /> },
  { id: "projetos", label: "Projetos", icon: <FiFolder /> },
  { id: "contato", label: "Contato", icon: <FiMail /> },
];

export const MobileSidebar = ({ scrollToSection, activeSection }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <>
      
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white md:hidden"
        onClick={() => setOpen(true)}
      >
        <FiMenu size={24} />
      </button>

      
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

     
      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white z-50 p-6 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <button
          className="absolute top-4 left-4 text-white"
          onClick={() => setOpen(false)}
        >
          <FiX size={24} />
        </button>

      
        <nav className="flex flex-col gap-6 mt-16">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-left transition-all ${
                activeSection === link.id
                  ? "bg-green-600 font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};
