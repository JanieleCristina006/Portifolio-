import { useState } from 'react';

import Foto from '../assets/menina.gif';

import { Apresentacao } from '../components/Apresentacao';
import { TimelineEstudo } from '../components/TimelineEstudo';
import { BotaoDestaque } from '../components/BotaoDestaque';
import { ModalStories } from '../components/ModalStories';
import { SobreMim } from '../components/SobreMim';

import { Experiencia } from './experiencia';
import { Projetos } from './Projetos';
import { Contato } from './Contato';


export const Conteudo = () => {
  const [mostrarStories, setMostrarStories] = useState(false);

  const stories = [
    { url: '/fotos/estudo1.jpg', header: { heading: 'Estudando HTML' } },
    { url: '/fotos/estudo2.jpg', header: { heading: 'Estudando React' } },
    { url: '/fotos/estudo3.jpg', header: { heading: 'Praticando UI/UX' } },
  ];

  return (
    <div className="space-y-16 text-white relative">
  {/* Apresentação */}
  <section id="inicio" className="space-y-8">
    <Apresentacao />

    {/* GIF + Timeline */}
    <div className="flex flex-col md:flex-row items-start justify-between gap-8">
      <img
        src={Foto}
        alt="GIF desenvolvedora"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />

      <div className="md:w-1/2">
        <TimelineEstudo />
        <BotaoDestaque onClick={() => setMostrarStories(true)} />
      </div>
    </div>
  </section>

  {/* Sobre mim */}
  <section id="sobre">
    <SobreMim />
  </section>

  {/* Experiência */}
  <section id="experiencia">
    <Experiencia />
  </section>

  {/* Projetos */}
  <section id="projetos">
    <Projetos />
  </section>

  {/* Contato */}
  <section id="contato">
    <Contato />
  </section>

  {/* Modal de Stories */}
  {mostrarStories && (
    <ModalStories
      stories={stories}
      onClose={() => setMostrarStories(false)}
    />
  )}
    </div>

  );
};
