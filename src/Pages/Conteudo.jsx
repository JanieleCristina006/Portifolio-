import Foto from '../assets/menina.gif';
import { Apresentacao } from '../components/Apresentacao';
import { TimelineEstudo } from '../components/TimelineEstudo';
import { SobreMim } from '../components/SobreMim';

import { Experiencia } from './experiencia';
import { Projetos } from './Projetos/Projetos';
import { Contato } from './Contato';
import { Formacao } from './Formacao';

export const Conteudo = () => {
 

  return (
    <div className=" scroll-smooth space-y-16 text-white relative">
  
    <section id="inicio" className="space-y-12 px-4 max-w-6xl mx-auto">
 
  <Apresentacao />

  <div className="flex flex-col md:flex-row items-start justify-between gap-10">
    {/* Lado esquerdo: imagem */}
    <img
      src={Foto}
      alt="GIF desenvolvedora"
      className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
    />

    <div className="md:w-1/2 space-y-8">
      <TimelineEstudo />

  
    </div>
  </div>
</section>


  
  <section id="sobre">
    <SobreMim />
  </section>

 
  <section id="experiencia">
    <Experiencia />
  </section>

  <section id='formacao'>
    <Formacao />
  </section>

 
  <section id="projetos">
    <Projetos />
  </section>

  {/* Contato */}
  <section id="contato">
    <Contato />
  </section>

    </div>

  );
};
