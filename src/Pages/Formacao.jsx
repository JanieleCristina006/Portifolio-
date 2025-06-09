import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Formacao = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const graduacoes = [
    {
      curso: "Bacharelado em Ciência da Computação",
      instituicao: "Cruzeiro do Sul Virtual",
      periodo: "Nov de 2023 – Dez de 2025",
      status: "Em andamento",
    },
    {
      curso: "Bacharelado em Ciência da Computação",
      instituicao: "UNIFENAS – Universidade Prof. Edson Antônio Velano",
      periodo: "2022 – (trancado)",
      status: "Trancado",
    },
  ];

  return (
    <section className="text-white px-6 py-12 max-w-4xl mx-auto">
      {/* Título principal */}
      <motion.h2
        className="text-3xl font-bold text-green-500 mb-10 flex items-center gap-2"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <FaGraduationCap className="text-green-500 text-3xl" />
        Formação Acadêmica
      </motion.h2>

      {/* Lista de graduações */}
      <div className="space-y-6 mb-12">
        {graduacoes.map((item, index) => (
          <motion.div
            key={index}
            className="bg-zinc-800 border-l-4 border-green-500 p-5 rounded-lg shadow-md"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">{item.curso}</h3>
              <p className="text-sm text-gray-300">{item.instituicao}</p>
              <p className="text-sm text-gray-400 italic">{item.periodo}</p>
              <span className={`mt-2 inline-block text-xs font-medium px-2 py-1 rounded-full ${
                item.status === "Em andamento"
                  ? "bg-green-600/20 text-green-400"
                  : "bg-red-600/20 text-red-400"
              }`}>
                {item.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificados */}
      <motion.h3
        className="text-2xl font-bold text-green-500 mb-6 flex items-center gap-2"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <FaCertificate className="text-green-500 text-2xl" />
        Certificados
      </motion.h3>

      <motion.div
        className="bg-zinc-800 border-l-4 border-green-500 p-5 rounded-lg shadow-md"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">NLW Unite - ReactJS</h4>
          <p className="text-sm text-gray-300">Rocketseat</p>
          <p className="text-sm text-gray-400 italic">Emitido em abril de 2024</p>
          <a
            href="https://app.rocketseat.com.br/certificates/0341edbc-b135-4e90-9e87-3a9b9bfc9308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 text-sm underline hover:text-green-300 mt-2"
          >
            Ver credencial
          </a>
        </div>
      </motion.div>
    </section>
  );
};
