import React from 'react';
import { Perfil } from '../components/Perfil';
import { Botoes } from '../components/Botoes';
import { Conteudo } from './Conteudo';

export const Home = () => {
  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white px-4 py-6 gap-4 overflow-hidden">
      
      <div className="w-[70px] h-fit flex-shrink-0 bg-[#1a1a1a] rounded-2xl p-4 flex flex-col items-center shadow-lg">
        <Botoes />
      </div>

      
      <aside className="w-[300px] h-fit bg-[#1f1f1f] rounded-2xl p-4 flex flex-col items-center shadow-lg">
        <Perfil />
      </aside>

      <main className="flex-1 overflow-y-auto bg-[#1f1f1f] rounded-2xl p-8 shadow-lg">
        <Conteudo />
      </main>
    </div>
  );
};
