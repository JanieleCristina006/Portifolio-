import {
  FaCode,
  FaCss3Alt,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiTypescript } from "react-icons/si";
import AboutBrush from "../assets/about-brush-purple.png";
import AboutPhoto from "../assets/about-photo-sobre-mim.png";
import HeroPhoto from "../assets/eu.jpg";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { FloatingSideNav } from "../components/FloatingSideNav";
import { MobileBubbleMenu } from "../components/MobileBubbleMenu";
import { ProjectsShowcase } from "../components/ProjectsShowcase";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const heroSkills = [
  { label: "HTML", icon: <FaHtml5 aria-hidden="true" /> },
  { label: "CSS", icon: <FaCss3Alt aria-hidden="true" /> },
  { label: "JavaScript", icon: <FaJs aria-hidden="true" /> },
  { label: "React", icon: <FaReact aria-hidden="true" /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" /> },
  { label: "TypeScript", icon: <SiTypescript aria-hidden="true" /> },
  { label: "Firebase", icon: <SiFirebase aria-hidden="true" /> },
  { label: "Git", icon: <FaGitAlt aria-hidden="true" /> },
  { label: "GitHub", icon: <FaGithub aria-hidden="true" /> },
];

export const Home = () => {
  return (
    <div className="portfolio-page" id="outer-container">
      <MobileBubbleMenu items={navItems} />
      <FloatingSideNav />

      <div id="page-wrap">
        <header className="portfolio-header">
          <a className="portfolio-brand" href="#inicio">
            Janiele Cristina
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main>
          <section className="hero-section" id="inicio">
            <div className="hero-visual" aria-hidden="true">
              <svg
                viewBox="0 0 1028 528"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  fill="#7A64DC"
                  d="
                    M 592 0
                    H 1028
                    V 374
                    C 984 418, 924 448, 850 454
                    C 765 462, 740 419, 710 382
                    C 676 340, 618 326, 560 318
                    C 505 310, 486 278, 506 235
                    C 523 198, 554 168, 566 129
                    C 582 78, 598 38, 592 0
                    Z
                  "
                />
              </svg>
            </div>

            <div className="hero-inner">
              <div className="hero-copy">
                <p className="hero-kicker">Desenvolvedora Front-End</p>
                <h1 className="hero-title">Olá, meu nome é Janiele Cristina</h1>
                <p className="hero-description">
                  Crio interfaces modernas, responsivas e acessíveis com React,
                  JavaScript e Tailwind. Gosto de transformar ideias em telas
                  claras, bonitas e fáceis de usar.
                </p>

                <div className="hero-actions" aria-label="Links principais">
                  <a className="button button-primary" href="#projetos">
                    Projetos
                  </a>
                  <a
                    className="button button-outline"
                    href="https://www.linkedin.com/in/janiele-cristina"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="hero-photo">
                <span className="hero-tech-badge hero-tech-react">
                  <FaReact aria-hidden="true" />
                </span>
                <span className="hero-tech-badge hero-tech-js">
                  <FaJs aria-hidden="true" />
                </span>
                <span className="hero-tech-badge hero-tech-tailwind">
                  <SiTailwindcss aria-hidden="true" />
                </span>
                <span className="hero-tech-badge hero-tech-code">
                  <FaCode aria-hidden="true" />
                </span>
                <img src={HeroPhoto} alt="Janiele Cristina sorrindo" />
              </div>
            </div>

            <div className="hero-skills-strip" aria-label="Skills principais">
              <div className="hero-skills-track">
                {[0, 1].map((group) => (
                  <div
                    className="hero-skills-group"
                    key={group}
                    aria-hidden={group === 1}
                  >
                    {heroSkills.map((skill) => (
                      <span className="hero-skill-item" key={`${group}-${skill.label}`}>
                        {skill.icon}
                        {skill.label}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="about-section" id="sobre">
            <div className="about-visual">
              <img className="about-brush" src={AboutBrush} alt="" />
              <div className="about-photo-frame">
                <img
                  className="about-photo-space"
                  src={AboutPhoto}
                  alt="Janiele Cristina sorrindo"
                />
              </div>
            </div>

            <div className="about-copy">
              <p className="section-kicker">Sobre</p>
              <h2>Sobre Mim</h2>
              <p>
                Sou Janiele Cristina Fernandes, estudante de Ciência da
                Computação e desenvolvedora Front-End em evolução constante.
                Tenho experiência prática com HTML, CSS, JavaScript, React,
                Tailwind, Git e GitHub.
              </p>
              <p>
                Busco minha primeira oportunidade como Desenvolvedora Front-End
                Júnior para contribuir com projetos reais, aprender em equipe e
                construir experiências digitais com cuidado, organização e boa
                usabilidade.
              </p>

              <div className="about-social" aria-label="Redes e contato">
                <a
                  href="https://github.com/JanieleCristina006"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub de Janiele Cristina"
                >
                  <FaGithub aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/janiele-cristina"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn de Janiele Cristina"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
                <a
                  href="mailto:janielecristina539@gmail.com"
                  aria-label="Enviar email para Janiele Cristina"
                >
                  <FaEnvelope aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <ExperienceSection />
          <ProjectsShowcase />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};
