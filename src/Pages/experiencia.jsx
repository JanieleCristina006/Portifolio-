import { motion } from 'framer-motion'

const experiencias = [
  {
    data: 'Nov 2024 – Fev 2025',
    titulo: 'Desenvolvedora Front-End Jr',
    empresa: 'Grupo Awtech',
    local: 'Presencial · Alfenas, MG',
    tecnologias: 'Vue.js, Git, entre outras.'
  },
  {
    data: 'Mar 2024 – Ago 2024',
    titulo: 'Desenvolvedora / Mentora',
    empresa: 'Programar Com Você',
    local: 'Estágio Remoto',
    tecnologias: 'HTML, CSS, JavaScript, React, Styled Components, Git e GitHub.'
  }
]

export const Experiencia = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-green-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experiência
      </motion.h2>

      <div className="relative border-l-[3px] border-green-500 ml-2 sm:ml-4">
        {experiencias.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 sm:mb-12 pl-6 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="absolute left-[-9px] top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-zinc-900"></span>

            <div className="bg-zinc-900 shadow-md p-4 sm:p-6 rounded-xl">
              <p className="text-xs sm:text-sm text-gray-400 mb-1">{exp.data}</p>
              <h3 className="text-base sm:text-lg font-semibold text-white">{exp.titulo}</h3>
              <p className="text-sm text-gray-300 italic mb-1">
                {exp.empresa} · {exp.local}
              </p>
              <p className="text-sm text-gray-400">Tecnologias: {exp.tecnologias}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
