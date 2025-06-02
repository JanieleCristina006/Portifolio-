import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import FotoPerfil from '../assets/foto.jpg';


export const Perfil = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Moldura da foto */}
      <div className="bg-black p-1">
        <img
          src={FotoPerfil}
          alt="Foto de perfil"
          className="w-60 h-60 object-cover"
          style={{
            borderRadius: '40% 25% 0% 1% / 25% 0% 25% 25%',
          }}
        />
      </div>

    

      {/* Nome */}
      <h2 className="text-xl font-semibold">Janiele Cristina</h2>

      {/* Ícones sociais */}
      <div className="flex gap-3 text-white">
        <a
          href="https://www.linkedin.com/in/janiele-cristina"
          target="_blank"
          rel="noreferrer"
          className="bg-[#1a1a1a] p-2 rounded-full hover:bg-green-500 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/JanieleCristina006"
          target="_blank"
          rel="noreferrer"
          className="bg-[#1a1a1a] p-2 rounded-full hover:bg-green-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:janielecristina539@gmail.com"
          className="bg-[#1a1a1a] p-2 rounded-full hover:bg-green-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-2 w-full pt-4">
        <a
          href="mailto:janielecristina539@gmail.com"
          className="w-full bg-[#0f0f0f] py-2 rounded-xl hover:bg-green-500 transition"
        >
          Entrar em contato
        </a>
        <a
          href="/Curriculo-Janiele.pdf"
          download="Curriculo-Janiele.pdf"
          className="w-full bg-[#0f0f0f] py-2 rounded-xl hover:bg-green-500 transition"
        >
          Baixar CV
        </a>

      </div>
    </div>
  );
};
