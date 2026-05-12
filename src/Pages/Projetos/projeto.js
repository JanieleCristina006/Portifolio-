import Projeto2 from '../../assets/ponto.png';
import Projeto3 from '../../assets/image.png';
import Car from '../../assets/img_car.jpg';
import DevalunoImg from '../../assets/DevAluno.png';
import ProjetoMensalidades from '../../assets/mensalidades.jpg';
import PizzariaApiImg from '../../assets/pizzaria.jpg';

export const projeto = [
  {
    id: 1,
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
    id: 2,
    titulo: 'Pizzaria API',
    descricao:
      'API backend desenvolvida para gerenciamento de pedidos de pizzaria, autenticação de usuários, controle de produtos e organização de pedidos em tempo real.',
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
    id: 3,
    titulo: 'WebCarros',
    descricao:
      'Plataforma para cadastro, busca e gerenciamento de anúncios de carros novos e usados. Desenvolvida com React, TypeScript, Tailwind CSS e Supabase.',
    imagem: Car,
    github: 'https://github.com/JanieleCristina006/web_carros',
    live: 'https://webcarros-teal.vercel.app/',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },

  {
    id: 4,
    titulo: 'Devaluno – CRUD de Alunos',
    descricao:
      'Aplicação Full Stack para cadastro, listagem, edição e exclusão de alunos utilizando Node.js, Express, MySQL e Handlebars.',
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
    id: 5,
    titulo: 'PontoWeb - Sistema de Ponto Eletrônico',
    descricao:
      'Sistema completo de ponto eletrônico com registro de jornada, relatórios, login administrativo, modo visitante e gráficos de desempenho.',
    imagem: Projeto2,
    github: 'https://github.com/JanieleCristina006/ponto_eletronico',
    live: 'https://ponto-eletronico-wn8a.vercel.app/',
    techs: ['React', 'Tailwind CSS', 'Firebase'],
  },

  {
    id: 6,
    titulo: 'Adivinhe - Jogo da Palavra Misteriosa',
    descricao:
      'Jogo interativo onde o usuário precisa descobrir a palavra secreta com base em dicas e número limitado de tentativas.',
    imagem: Projeto3,
    github: 'https://github.com/JanieleCristina006/Adivinhe',
    live: 'https://adivinhe-jade.vercel.app/',
    techs: ['React', 'CSS Modules'],
  },
];