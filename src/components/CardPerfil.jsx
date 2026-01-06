import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import FotoPerfil from "../assets/jani_perfil.png";
import { Tooltip } from "primereact/tooltip";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

export const CardPerfil = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 w-full px-4 sm:px-6">
      
    
      <div className="w-40 h-52 sm:w-52 sm:h-64 rounded-xl overflow-hidden border border-gray-700 shadow-md">
  <img
    src={FotoPerfil}
    alt="Foto de perfil"
    className="w-full h-full object-cover"
  />
</div>


      <h2 className="text-lg sm:text-xl font-semibold text-white">
        Janiele Cristina
      </h2>

      
      <Tooltip target=".tooltip-linkedin" position="top"  />
      <Tooltip target=".tooltip-github" position="top"  />
      <Tooltip target=".tooltip-email" position="top"  />
      <Tooltip target=".tooltip-whatsapp" position="top"  />
      <Tooltip target=".tooltip-cv" position="top"  />

    
      <div className="flex gap-3 text-white">
        <a
          href="https://www.linkedin.com/in/janiele-cristina"
          target="_blank"
          rel="noreferrer"
          className="tooltip-linkedin bg-[#1a1a1a] p-2 rounded-full hover:bg-green-500 transition"
          data-pr-tooltip="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/JanieleCristina006"
          target="_blank"
          rel="noreferrer"
          className="tooltip-github bg-[#1a1a1a] p-2 rounded-full hover:bg-green-500 transition"
          data-pr-tooltip="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:janielecristina539@gmail.com"
          className="tooltip-email bg-[#1a1a1a] p-2 rounded-full hover:bg-green-500 transition"
          data-pr-tooltip="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-6 w-full max-w-xs">
        <a
          href="https://wa.me/5535997554926"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip-whatsapp flex items-center justify-center gap-2 bg-zinc-900 text-white font-medium px-4 py-3 rounded-lg hover:bg-green-500 hover:text-black transition"
          data-pr-tooltip="Falar no WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
          Contato
        </a>

        <a
          href="/curriculo.pdf"
          download
          className="tooltip-cv flex items-center justify-center gap-2 bg-zinc-900 text-white font-medium px-4 py-3 rounded-lg hover:bg-zinc-700 transition"
          data-pr-tooltip="Baixar Currículo"
        >
          <FiDownload className="text-xl" />
          Currículo
        </a>
      </div>

    </div>
  );
};
