import Projeto1 from '../../assets/refund.png';
import Projeto2 from '../../assets/ponto.png';
import Projeto3 from '../../assets/image.png';
import Car from '../../assets/img_car.jpg'

export const projeto = [

   {
    id: 1,
    titulo: 'WebCarros ',
    descricao: ' Cadastre, busque e gerencie anúncios de carros novos e usados com facilidade. Sistema moderno desenvolvido em React + TypeScript, estilizado com Tailwind CSS, formulários ágeis com React Hook Form e backend completo via Supabase. 🚀 Tecnologias',
    imagem: Car,
    github: 'https://github.com/JanieleCristina006/web_carros',
    live: 'https://webcarros-teal.vercel.app/',
    techs: ['React','Supabase']
  },
  {
    id: 2,
    titulo: 'Refund - Sistema de Reembolso',
    descricao: 'Projeto para registrar e acompanhar reembolsos com categorias e valor.',
    imagem: Projeto1,
    github: 'https://github.com/JanieleCristina006/refund',
    live: 'https://refund-app.vercel.app',
    techs: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    titulo: 'PontoWeb - Sistema de Ponto Eletrônico',
    descricao: 'Sistema completo de ponto eletrônico com registro de jornada, relatórios, login admin, modo visitante e gráficos de desempenho.',
    imagem: Projeto2,
    github: 'https://github.com/JanieleCristina006/ponto_eletronico',
    live: 'https://ponto-eletronico-wn8a.vercel.app/',
    techs: ['React', 'Tailwind CSS', 'Firebase']
  },

   {
  id: 4,
  titulo: 'Adivinhe - Jogo da Palavra Misteriosa',
  descricao: 'Jogo onde o usuário precisa adivinhar a palavra secreta com base em uma dica e número limitado de tentativas.',
  imagem: Projeto3,
  github: 'https://github.com/JanieleCristina006/Adivinhe', 
  live: 'https://adivinhe-jade.vercel.app/', 
  techs: ['React', 'CSS Modules']
}

];
