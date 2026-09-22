import Projeto2 from '../../assets/ponto.png';
import Projeto3 from '../../assets/image.png';
import Car from '../../assets/img_car.jpg';
import DevalunoImg from '../../assets/DevAluno.png';
import ProjetoMensalidades from '../../assets/mensalidades.jpg';
import PizzariaApiImg from '../../assets/pizzaria.jpg';
import AdmLojaImg from '../../assets/adm-loja-preview.png';

export const projeto = [
  {
    id: 1,
    titulo: 'Gerenciador de Loja',
    descricao:
      'Dashboard responsivo para administrar lojas, produtos, vendas, entregadores e perfil. A interface prioriza uma navegação simples, indicadores claros e uma experiência otimizada para o dia a dia da loja.',
    imagem: AdmLojaImg,
    github: '',
    live: 'https://adm-loja.vercel.app/login',
    techs: ['React', 'Dashboard', 'Mobile UI', 'Gestão de Loja'],
  },

  {
    id: 2,
    titulo: 'API Sistema de Mensalidades',
    descricao:
      'API backend para gerenciamento de clientes, assinaturas e mensalidades. Conta com autenticação JWT, controle financeiro, geração de cobranças e arquitetura organizada utilizando Node.js, Express, Prisma e PostgreSQL.',
    imagem: ProjetoMensalidades,
    github:
      'https://github.com/JanieleCristina006/api-sistema-mensalidades',
    live: '',
    techs: [
      'Node.js',
      'Express',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'JWT',
    ],
  },

  {
    id: 3,
    titulo: 'Pizzaria API',
    descricao:
      'API backend desenvolvida para o gerenciamento de pedidos de uma pizzaria, com autenticação de usuários, controle de produtos e organização de pedidos em tempo real.',
    imagem: PizzariaApiImg,
    github: 'https://github.com/JanieleCristina006/pizzaria-api',
    live: '',
    techs: [
      'Node.js',
      'Express',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'JWT',
    ],
  },

  {
    id: 4,
    titulo: 'WebCarros',
    descricao:
      'Plataforma para cadastro, busca e gerenciamento de anúncios de carros novos e usados. Desenvolvida com React, TypeScript, Tailwind CSS e Supabase.',
    imagem: Car,
    github: 'https://github.com/JanieleCristina006/web_carros',
    live: 'https://webcarros-teal.vercel.app/',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },

  {
    id: 5,
    titulo: 'DevAluno – CRUD de Alunos',
    descricao:
      'Aplicação Full Stack para cadastro, listagem, edição e exclusão de alunos, utilizando Node.js, Express, MySQL e Handlebars.',
    imagem: DevalunoImg,
    github:
      'https://github.com/JanieleCristina006/node-express-crud-alunos',
    live: 'https://node-express-crud-alunos.onrender.com/',
    techs: [
      'Node.js',
      'Express',
      'MySQL',
      'Handlebars',
      'Render',
      'Railway',
    ],
  },

  {
    id: 6,
    titulo: 'PontoWeb - Sistema de Ponto Eletrônico',
    descricao:
      'Sistema completo de ponto eletrônico com registro de jornada, relatórios, login administrativo, modo visitante e gráficos de desempenho.',
    imagem: Projeto2,
    github: 'https://github.com/JanieleCristina006/ponto_eletronico',
    live: 'https://ponto-eletronico-wn8a.vercel.app/',
    techs: ['React', 'Tailwind CSS', 'Firebase'],
  },

  {
    id: 7,
    titulo: 'Adivinhe - Jogo da Palavra Misteriosa',
    descricao:
      'Jogo interativo em que o usuário precisa descobrir a palavra secreta com base em dicas e em um número limitado de tentativas.',
    imagem: Projeto3,
    github: 'https://github.com/JanieleCristina006/Adivinhe',
    live: 'https://adivinhe-jade.vercel.app/',
    techs: ['React', 'CSS Modules'],
  },
];