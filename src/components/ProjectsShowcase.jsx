import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import FeaturedImage from "../assets/ponto.png";
import SecondaryImage from "../assets/mensalidades.jpg";
import TertiaryImage from "../assets/image.png";
import CarImage from "../assets/img_car.jpg";
import DevAlunoImage from "../assets/DevAluno.png";
import MariaVitoriaImage from "../assets/maria-vitoria-estetica.png";
import PizzariaImage from "../assets/pizzaria.jpg";
import BrushImage from "../assets/pincelada-roxa-crop.png";
import AdmLojaImage from "../assets/adm-loja-preview.png";

const tabs = [
  { id: "frontend", label: "Front-end" },
  { id: "backend", label: "Back-end" },
];

const projects = [
  {
    number: "01",
    title: "Gerenciador de Loja",
    type: "frontend",
    category: "Dashboard mobile",
    description:
      "Painel responsivo para administrar lojas, produtos, vendas, entregadores e perfil com uma experiencia mobile clara e objetiva.",
    image: AdmLojaImage,
    tags: ["React", "Dashboard", "Mobile UI", "Gestao de loja"],
    live: "https://adm-loja.vercel.app/login",
    github: "",
  },
  {
    number: "02",
    title: "Maria Vitória Estética",
    type: "frontend",
    category: "Landing page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo euismod, posuere massa sed, facilisis lorem.",
    image: MariaVitoriaImage,
    tags: ["React", "Landing Page", "Vercel"],
    live: "https://mariavitoriaestetica.vercel.app/",
    github: "",
  },
  {
    number: "03",
    title: "PontoWeb",
    type: "frontend",
    category: "Aplicação web",
    description:
      "Sistema de ponto eletrônico com registro de jornada, modo visitante e gráficos de desempenho.",
    image: FeaturedImage,
    tags: ["React", "Tailwind", "Firebase"],
    live: "https://ponto-eletronico-wn8a.vercel.app/",
    github: "https://github.com/JanieleCristina006/ponto_eletronico",
  },
  {
    number: "04",
    title: "WebCarros",
    type: "frontend",
    category: "Aplicação web",
    description:
      "Plataforma para cadastro, busca e gerenciamento de anúncios de carros novos e usados.",
    image: CarImage,
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    live: "https://webcarros-teal.vercel.app/",
    github: "https://github.com/JanieleCristina006/web_carros",
  },
  {
    number: "05",
    title: "Adivinhe",
    type: "frontend",
    category: "Jogo web",
    description:
      "Jogo interativo onde o usuário precisa descobrir a palavra secreta com base em dicas.",
    image: TertiaryImage,
    tags: ["React", "CSS Modules"],
    live: "https://adivinhe-jade.vercel.app/",
    github: "https://github.com/JanieleCristina006/Adivinhe",
  },
  {
    number: "06",
    title: "Mensalidades API",
    type: "backend",
    category: "API backend",
    description:
      "API para gerenciamento de clientes, assinaturas, mensalidades, cobranças e autenticação.",
    image: SecondaryImage,
    tags: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "JWT"],
    live: "",
    github: "https://github.com/JanieleCristina006/api-sistema-mensalidades",
  },
  {
    number: "07",
    title: "Pizzaria API",
    type: "backend",
    category: "API backend",
    description:
      "API para pedidos de pizzaria, autenticação de usuários, produtos e organização de pedidos.",
    image: PizzariaImage,
    tags: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "JWT"],
    live: "",
    github: "https://github.com/JanieleCristina006/pizzaria-api",
  },
  {
    number: "08",
    title: "Devaluno",
    type: "backend",
    category: "CRUD full stack",
    description:
      "Aplicação para cadastro, listagem, edição e exclusão de alunos com Node.js e MySQL.",
    image: DevAlunoImage,
    tags: ["Node.js", "Express", "MySQL", "Handlebars", "Render", "Railway"],
    live: "https://node-express-crud-alunos.onrender.com/",
    github: "https://github.com/JanieleCristina006/node-express-crud-alunos",
  },
];

export const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const visibleProjects = projects.filter((project) => project.type === activeTab);
  const activeIndex = activeProjectIndex % visibleProjects.length;
  const featured = visibleProjects[activeIndex];
  const sideProjects = visibleProjects.filter(
    (_, index) => index !== activeIndex
  ).slice(0, 2);

  const selectTab = (tabId) => {
    setActiveTab(tabId);
    setActiveProjectIndex(0);
  };

  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) =>
      (currentIndex - 1 + visibleProjects.length) % visibleProjects.length
    );
  };

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) => (currentIndex + 1) % visibleProjects.length);
  };

  return (
    <section className="projects-showcase" id="projetos">
      <img className="projects-brush" src={BrushImage} alt="" />
      <svg
        viewBox="0 0 700 700"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="projects-blob"
      >
        <path
          fill="#7961DF"
          d="
            M700 90
            C620 55 580 70 520 54
            C450 36 420 5 350 22
            C278 40 262 104 218 151
            C174 198 94 226 69 293
            C45 357 90 410 119 455
            C153 508 128 558 172 610
            C220 667 293 676 363 648
            C438 619 488 635 551 601
            C622 562 625 496 663 441
            C697 391 683 333 670 284
            C657 232 677 178 700 145
            Z
          "
        />
      </svg>

      <div className="projects-shell">
        <div className="projects-heading">
          <div>
            <p className="projects-kicker">Trabalhos selecionados</p>
            <h2>Projetos em destaque</h2>
            <p>
              Uma seleção organizada entre experiências Front-end e soluções
              Back-end, com as tecnologias usadas em cada projeto.
            </p>
          </div>

          <div className="projects-toolbar" aria-label="Filtros e navegação">
            <div className="project-filters" role="tablist" aria-label="Categorias">
              {tabs.map((tab) => (
                <button
                  aria-selected={activeTab === tab.id}
                  className={activeTab === tab.id ? "active" : ""}
                  key={tab.id}
                  onClick={() => selectTab(tab.id)}
                  role="tab"
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="project-arrows" aria-label="Navegar projetos">
              <button type="button" onClick={showPreviousProject} aria-label="Projeto anterior">
                <FaArrowLeft aria-hidden="true" />
              </button>
              <button
                className="active"
                type="button"
                onClick={showNextProject}
                aria-label="Próximo projeto"
              >
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          <article className="project-card project-card-featured">
            <div className="project-copy">
              <div className="project-meta">
                <span>{featured.number}</span>
                <strong>Em destaque</strong>
              </div>

              <h3>{featured.title}</h3>
              <p className="project-category">{featured.category}</p>
              <p>{featured.description}</p>

              <div className="project-tags">
                {featured.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                {featured.live && (
                  <a href={featured.live} target="_blank" rel="noreferrer">
                    Ver projeto
                    <FiExternalLink aria-hidden="true" />
                  </a>
                )}
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="project-featured-image">
              <img src={featured.image} alt={`Preview do projeto ${featured.title}`} />
            </div>
          </article>

          <div className="project-side-list">
            {sideProjects.map((project) => (
              <article className="project-card project-card-small" key={project.number}>
                <div className="project-side-copy">
                  <span>{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <div className="project-tags project-tags-small">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${project.title}`}
                  >
                    <FiExternalLink aria-hidden="true" />
                  </a>
                </div>
                <img src={project.image} alt={`Preview do projeto ${project.title}`} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
