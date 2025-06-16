import { motion } from 'framer-motion';
import { FaRocket, FaReact, FaPalette, FaSuitcase } from 'react-icons/fa';

export const ApresentacaoCompleta = () => {
  const passos = [
    {
      icone: <FaRocket />,
      texto: 'Início com HTML & CSS',
      ano: '2022',
    },
    {
      icone: <FaReact />,
      texto: 'Foco em React',
      ano: '2023',
    },
    {
      icone: <FaPalette />,
      texto: 'Estudo em UI/UX',
      ano: '2024',
    },
    {
      icone: <FaSuitcase />,
      texto: 'Em busca de oportunidades',
      ano: '2025',
    },
  ];

  return (
    <div className="space-y-8 text-left">
      {/* Frase superior */}
      <motion.p
        className="italic text-gray-500"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        "Transformando linhas de código em experiências incríveis."
      </motion.p>

      {/* Timeline */}
      <div className="space-y-4">
        {passos.map((passo, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-green-400 text-lg mt-1">{passo.icone}</div>
            <div>
              <p className="text-sm text-gray-300 font-medium">{passo.texto}</p>
              <span className="text-xs text-gray-500">{passo.ano}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
