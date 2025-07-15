import Foto from '../assets/menina.gif';
import { Apresentacao } from '../components/Apresentacao';
import { ApresentacaoCompleta } from '../components/ApresentacaoCompleta';
import { SobreMim } from '../components/SobreMim';
import { Experiencia } from './experiencia';
import { Projetos } from './Projetos/Projetos';
import { Contato } from './Contato';



export const Conteudo = () => {
  return (
    <>
      <div className="scroll-smooth space-y-24 text-white relative">
        
        <section id="inicio" className="px-4 w-full max-w-6xl mx-auto space-y-12  pb-12">
          <Apresentacao />

          <div className="flex flex-col md:flex-row items-start gap-10">
            
            <div className="w-full md:w-1/2">
              <img
                src={Foto}
                alt="GIF desenvolvedora"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <ApresentacaoCompleta />
            </div>
          </div>
        </section>

        <section id="sobre" className="px-4 w-full max-w-6xl mx-auto py-7">
          <SobreMim />
        </section>

        <section id="experiencia" className="px-4 w-full max-w-6xl mx-auto py-7">
          <Experiencia />
        </section>

        
        {/* <section id="formacao" className="px-4 w-full max-w-6xl mx-auto py-7">
          <Formacao />
        </section> */}

        
        <section id="projetos" className="px-4 w-full max-w-6xl mx-auto py-7">
          <Projetos />
        </section>

      
        <section id="contato" className="px-4 w-full max-w-6xl mx-auto py-7">
          <Contato />
        </section>

       

      </div>
    </>
  );
};
