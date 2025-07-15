import { motion } from 'framer-motion';
import {
  FaSearch,
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaCode,
  FaLightbulb,
} from 'react-icons/fa';

export const ApresentacaoCompleta = () => {
  const qualidades = [
    {
      icone: <FaSearch />,
      texto: 'Curiosa e focada em aprender continuamente',
    },
    {
      icone: <FaLaptopCode />,
      texto: 'Experiência prática com projetos pessoais',
    },
    {
      icone: <FaPalette />,
      texto: 'Foco em criar interfaces acessíveis e modernas',
    },
    {
      icone: <FaRocket />,
      texto: 'Pronta para atuar como Desenvolvedora Front-End',
    },
    {
      icone: <FaCode />,
      texto: 'Conhecimentos sólidos em HTML, CSS, JavaScript e React',
    },
    {
      icone: <FaLightbulb />,
      texto: 'Transformo ideias em soluções visuais intuitivas',
    },
  ];

  return (
    <div className="space-y-8 text-left">
      <motion.p
        className="italic text-gray-500"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        "Transformando linhas de código em experiências incríveis."
      </motion.p>

      <div className="space-y-4">
        {qualidades.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-green-400 text-lg mt-1">{item.icone}</div>
            <p className="text-sm text-gray-300 font-medium">{item.texto}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
