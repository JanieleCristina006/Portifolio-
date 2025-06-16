import React from 'react';
import { Perfil } from '../components/Perfil';
import { Botoes } from '../components/Botoes';
import { Conteudo } from './Conteudo';

export const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-[#0f0f0f] text-white px-4 py-6 gap-4 overflow-auto">
      
      {/* MENU LATERAL */}
      <div className="w-full lg:w-[70px] h-fit flex-shrink-0 bg-[#1a1a1a] rounded-2xl p-4 flex flex-row lg:flex-col justify-center lg:items-center shadow-lg gap-4 lg:gap-0">
        <Botoes />
      </div>

      {/* PERFIL */}
      <aside className="w-full lg:w-[300px] h-fit bg-[#1f1f1f] rounded-2xl p-4 flex flex-col items-center shadow-lg">
        <Perfil />
      </aside>

      {/* CONTEÚDO */}
      <main className="w-full flex-1 overflow-visible lg:overflow-y-auto bg-[#1f1f1f] rounded-2xl p-6 lg:p-8 shadow-lg">
        <Conteudo />
      </main>
    </div>
  );
};
