import { motion } from 'framer-motion'
import { FaLaptopCode, FaRocket, FaCode, FaEnvelope } from 'react-icons/fa'

export const SobreMim = () => {
  return (
    <section className="mx-auto py-12">
      <motion.h2
        className="text-3xl font-bold text-green-400  mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Sobre mim
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-12 text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {/* Texto principal */}
        <div className="space-y-5 leading-relaxed">
          <p>
            Olá! Sou <span className="text-white font-semibold">Janiele Cristina Fernandes</span>, estudante de Ciência da Computação (7º período), apaixonada por desenvolvimento web, especialmente com React.
          </p>
          <p>
            Comecei com HTML & CSS, depois mergulhei em JavaScript e hoje construo interfaces modernas e acessíveis. Amo transformar design em código.
          </p>
          <p>
            Busco oportunidades para crescer como desenvolvedora Front-End e contribuir em projetos reais.
          </p>
        </div>

        {/* Blocos visuais com ícones */}
        <div className="space-y-6">
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaLaptopCode className="text-green-400 text-xl mt-1" />
            <div>
              <h3 className="text-white font-medium">Habilidades</h3>
              <p className="text-sm">HTML, CSS, JavaScript, React, Tailwind, Git, GitHub</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaCode className="text-green-400 text-xl mt-1" />
            <div>
              <h3 className="text-white font-medium">Estudando</h3>
              <p className="text-sm">UI/UX Design, Firebase, lógica de programação</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaRocket className="text-green-400 text-xl mt-1" />
            <div>
              <h3 className="text-white font-medium">Objetivo</h3>
              <p className="text-sm">Conquistar uma vaga como Dev Front-End Jr e evoluir 💻</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FaEnvelope className="text-green-400 text-xl mt-1" />
            <div>
              <h3 className="text-white font-medium">Contato</h3>
              <p className="text-sm">✉️ janielecristina539@gmail.com</p>
              <p className="text-sm">🔗 github.com/JanieleCristina006</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
