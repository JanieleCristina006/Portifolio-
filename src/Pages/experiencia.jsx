import { Timeline } from 'rsuite';
import 'rsuite/Timeline/styles/index.css';

export const Experiencia = () => (
  <section className="space-y-6 mt-8">
    <h2 className="text-2xl md:text-3xl font-semibold text-green-400">
      Experiência Profissional
    </h2>

    <Timeline
      style={{
        '--rs-timeline-dot-bg': '#22c55e',
      }}
    >
      <Timeline.Item
        dot={<div className="w-3 h-3 bg-green-500 rounded-full" />}
      >
        <p className="text-sm text-gray-400">Nov 2024 - Fev 2025</p>
        <h3 className="text-lg font-semibold text-white">Desenvolvedora Front-End Jr</h3>
        <p className="text-gray-400 text-sm">
          Grupo Awtech · Presencial · Alfenas, MG<br />
          Tecnologias: Vue.js, Git, entre outras.
        </p>
      </Timeline.Item>

      <Timeline.Item
        dot={<div className="w-3 h-3 bg-green-500 rounded-full" />}
      >
        <p className="text-sm text-gray-400">Mar 2024 - Ago 2024</p>
        <h3 className="text-lg font-semibold text-white">Desenvolvedora / Mentora</h3>
        <p className="text-gray-400 text-sm">
          Programar Com Você · Estágio Remoto<br />
          Tecnologias: HTML, CSS, JavaScript, React, Styled Components. Git e GitHub.
        </p>
      </Timeline.Item>
    </Timeline>
  </section>
);
