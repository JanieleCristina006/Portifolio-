import { motion } from 'framer-motion'
import {
  FaLaptopCode,
  FaRocket,
  FaCode,
  FaGraduationCap
} from 'react-icons/fa'

export const SobreMim = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 text-gray-300">
      <motion.h2
        className="text-3xl font-bold text-green-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Sobre mim
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
        <div className="space-y-5 leading-relaxed text-base sm:text-lg">
          <p>
            Sou <span className="text-white font-semibold">Janiele Cristina Fernandes</span>, estudante de Ciência da Computação (7º período) com foco em desenvolvimento Front-End e grande interesse por interfaces modernas e acessíveis.
          </p>
          <p>
            Tenho experiência prática com <span className="text-white font-semibold">HTML, CSS, JavaScript, React e Tailwind</span>, desenvolvendo projetos responsivos e com atenção à usabilidade. Estou sempre buscando novas formas de transformar design em código eficiente.
          </p>
          <p>
            Busco minha primeira oportunidade como <span className="text-white font-semibold">Desenvolvedora Front-End Júnior</span>, com o objetivo de contribuir com projetos reais, crescer em equipe e evoluir constantemente na área.
          </p>
        </div>

      
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaLaptopCode className="text-green-400 text-2xl mt-1" />
            <div>
              <h3 className="text-white font-medium">Habilidades</h3>
              <p className="text-sm">
                HTML, CSS, JavaScript, React, Tailwind, Git, GitHub
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCode className="text-green-400 text-2xl mt-1" />
            <div>
              <h3 className="text-white font-medium">Em evolução</h3>
              <p className="text-sm">
                UI/UX Design, Firebase e aprofundamento em desenvolvimento Front-End
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaRocket className="text-green-400 text-2xl mt-1" />
            <div>
              <h3 className="text-white font-medium">Objetivo</h3>
              <p className="text-sm">
                Atuar como Dev Front-End Jr e crescer na área com projetos reais 🚀
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaGraduationCap className="text-green-400 text-2xl mt-1" />
            <div>
              <h3 className="text-white font-medium">Formação Acadêmica</h3>
              <p className="text-sm">
                <span className="font-semibold text-white">Cruzeiro do Sul Virtual</span><br />
                Bacharelado em Ciência da Computação<br />
                <span className="text-xs italic text-gray-400">Nov 2023 – Dez 2026 • Em andamento</span>
              </p>
              <p className="text-sm mt-2">
                <span className="font-semibold text-white">UNIFENAS</span><br />
                Bacharelado em Ciência da Computação<br />
                <span className="text-xs italic text-gray-400">2022 – 2023</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
