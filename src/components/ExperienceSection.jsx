import ExperienceBrush from "../assets/pincelada-roxa-crop.png";

const experience = {
  period: "2024 - 2025",
  company: "Programar Com Você",
  role: "Desenvolvedora/Mentora",
  description:
    "Atuei no desenvolvimento Front-End de interfaces web, criando telas responsivas, componentes reutilizáveis e layouts com foco em usabilidade e experiência do usuário. Também apoiei outras pessoas desenvolvedoras em dúvidas técnicas, fortalecendo comunicação, colaboração e organização em projetos.",
  activities: [
    "Desenvolvimento de interfaces web responsivas com React e Tailwind CSS",
    "Criação de componentes reutilizáveis e organização de layouts",
    "Versionamento de código com Git e GitHub",
    "Aplicação de boas práticas de usabilidade e experiência do usuário",
    "Colaboração em projetos e organização de tarefas",
  ],
  tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub"],
};

export const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experiencia">
      <div className="experience-accent" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <img className="experience-brush" src={ExperienceBrush} alt="" />

      <div className="experience-shell">
        <div className="experience-intro">
          <p className="experience-kicker">Minha trajetória</p>
          <h2>Experiência Profissional</h2>
          <p>
            Uma experiência prática unindo desenvolvimento Front-End,
            colaboração e apoio técnico.
          </p>
        </div>

        <article className="experience-card">
          <div className="experience-card-head">
            <div>
              <span className="experience-period">{experience.period}</span>
              <h3>{experience.company}</h3>
            </div>
            <strong>{experience.role}</strong>
          </div>

          <div className="experience-card-body">
            <div className="experience-summary">
              <span>Resumo</span>
              <p>{experience.description}</p>
            </div>

            <div className="experience-activities">
              <span>Principais atividades</span>
              <ul>
                {experience.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="experience-tags" aria-label="Tecnologias usadas">
            {experience.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
