import { CardPerfil } from '../components/CardPerfil';
import { Botoes } from '../components/Botoes';
import { Conteudo } from './Conteudo';


export const Home = () => {
  return (
  <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-[#0f0f0f] text-white lg:px-4 lg:py-6 gap-4 overflow-auto">
  
    <div className="w-full lg:w-[70px] bg-transparent lg:bg-[#1a1a1a] h-fit flex-shrink-0 rounded-2xl p-4 flex flex-row lg:flex-col justify-center lg:items-center shadow-lg gap-4 lg:gap-0">
      <Botoes />
    </div>

    <aside
  className="w-full lg:w-[300px] h-fit rounded-2xl p-4 flex flex-col items-center shadow-lg"
  style={{
    background: 'linear-gradient(135deg, #0f0f0f, #0f3325)', 
  }}
>
  <CardPerfil />
</aside>


    <main
      className="w-full flex-1 overflow-visible lg:overflow-y-auto rounded-2xl p-6 lg:p-8 shadow-lg"
      style={{ background: 'linear-gradient(135deg, #0d0d0d, #0f3325)' }}
    >
      <Conteudo />
    </main>

</div>

  );
};
