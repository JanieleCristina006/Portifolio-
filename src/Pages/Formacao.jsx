import React, { useEffect, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export const Formacao = () => {
  const [isMobile, setIsMobile] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full px-4 py-16 max-w-6xl mx-auto text-white">
      {/* Título */}
      <motion.h2
        className="text-3xl font-bold text-green-500 mb-10 flex items-center gap-2"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <FaGraduationCap className="text-3xl" />
        Formação Acadêmica
      </motion.h2>

      {isMobile ? (
        // 📱 MOBILE: cards simples sem setas
        <div className="flex flex-col items-center gap-6">
          <div className="bg-zinc-800 px-6 py-3 rounded-xl shadow border border-green-500 font-semibold">
            Minha Jornada Acadêmica
          </div>

          {/* Card 1 */}
          <div className="bg-zinc-900 p-5 w-[90%] max-w-xs rounded-xl border-l-4 border-green-500 shadow-md ring-2 ring-green-400/40">
            <FaGraduationCap className="text-green-500 text-xl mb-2" />
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold">Cruzeiro do Sul Virtual</h3>
              <span className="bg-green-600 text-xs px-2 py-0.5 rounded-full font-semibold">
                Atual
              </span>
            </div>
            <p className="text-sm text-gray-300">
              Bacharelado em Ciência da Computação
            </p>
            <p className="text-xs text-gray-400 mt-1 italic">
              Nov 2023 – Dez 2025 • Em andamento
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 p-5 w-[90%] max-w-xs rounded-xl border-l-4 border-green-500 shadow-md">
            <FaGraduationCap className="text-green-500 text-xl mb-2" />
            <h3 className="text-lg font-bold mb-1">UNIFENAS</h3>
            <p className="text-sm text-gray-300">
              Bacharelado em Ciência da Computação
            </p>
            <p className="text-xs text-gray-400 mt-1 italic">2022 – 2023</p>
          </div>
        </div>
      ) : (
        // 🖥️ DESKTOP: roadmap com setas
        <ArcherContainer
          strokeColor="limegreen"
          strokeWidth={2}
          arrowLength={10}
          arrowThickness={1}
        >
          <div className="flex flex-col items-center gap-12">
            {/* Núcleo central */}
            <ArcherElement
              id="nucleo"
              relations={[
                { targetId: "form1", targetAnchor: "top", sourceAnchor: "bottom" },
                { targetId: "form2", targetAnchor: "top", sourceAnchor: "bottom" },
              ]}
            >
              <motion.div
                className="bg-zinc-800 px-6 py-3 rounded-xl shadow border border-green-500 font-semibold"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Minha Jornada Acadêmica
              </motion.div>
            </ArcherElement>

            <div className="flex flex-wrap justify-center items-start gap-12">
              {/* Card 1 */}
              <ArcherElement id="form1">
                <motion.div
                  className="bg-zinc-900 p-5 w-72 rounded-xl border-l-4 border-green-500 shadow-md ring-2 ring-green-400/40 hover:ring-green-300 hover:scale-[1.02] transition-all"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <FaGraduationCap className="text-green-500 text-xl mb-2" />
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold">Cruzeiro do Sul Virtual</h3>
                    <span className="bg-green-600 text-xs px-2 py-0.5 rounded-full font-semibold">
                      Atual
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Bacharelado em Ciência da Computação
                  </p>
                  <p className="text-xs text-gray-400 mt-1 italic">
                    Nov 2023 – Dez 2025 • Em andamento
                  </p>
                </motion.div>
              </ArcherElement>

              {/* Card 2 */}
              <ArcherElement id="form2">
                <motion.div
                  className="bg-zinc-900 p-5 w-72 rounded-xl border-l-4 border-green-500 shadow-md hover:scale-[1.02] transition-all"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FaGraduationCap className="text-green-500 text-xl mb-2" />
                  <h3 className="text-lg font-bold mb-1">UNIFENAS</h3>
                  <p className="text-sm text-gray-300">
                    Bacharelado em Ciência da Computação
                  </p>
                  <p className="text-xs text-gray-400 mt-1 italic">2022 – 2023</p>
                </motion.div>
              </ArcherElement>
            </div>
          </div>
        </ArcherContainer>
      )}
    </div>
  );
};
