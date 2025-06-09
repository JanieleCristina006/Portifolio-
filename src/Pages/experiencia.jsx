import { Timeline } from 'rsuite'
import 'rsuite/Timeline/styles/index.css'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const experiencias = [
  {
    tipo: 'trabalho',
    data: 'Nov 2024 - Fev 2025',
    titulo: 'Desenvolvedora Front-End Jr',
    local: 'Grupo Awtech · Presencial · Alfenas, MG',
    tecnologias: 'Vue.js, Git, entre outras.',
  },
  {
    tipo: 'trabalho',
    data: 'Mar 2024 - Ago 2024',
    titulo: 'Desenvolvedora / Mentora',
    local: 'Programar Com Você · Estágio Remoto',
    tecnologias: 'HTML, CSS, JavaScript, React, Styled Components, Git e GitHub.',
  },
  
]

export const Experiencia = () => {
  return (
    <section className="space-y-6 mt-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-green-400 text-center">
        Minha Experiência
      </h2>

      <Timeline
        style={{
          '--rs-timeline-dot-bg': '#22c55e',
          '--rs-timeline-item-content-padding': '0.5rem 0',
        }}
        className="!text-white"
      >
        {experiencias.map((exp, index) => {
          const Icon =
            exp.tipo === 'formacao' ? FaGraduationCap : FaBriefcase

          return (
            <Timeline.Item
              key={index}
              dot={
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  <Icon className="text-[10px]" />
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-400">{exp.data}</p>
                <h3 className="text-lg font-semibold text-white">
                  {exp.titulo}
                </h3>
                <p className="text-gray-400 text-sm">{exp.local}</p>
                <p className="text-gray-300 text-sm mt-1">
                  Tecnologias: {exp.tecnologias}
                </p>
              </motion.div>
            </Timeline.Item>
          )
        })}
      </Timeline>
    </section>
  )
}
