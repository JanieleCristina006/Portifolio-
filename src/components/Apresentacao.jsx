import { motion } from "framer-motion";

export const Apresentacao = () => {
  return (
    <section className=" mx-auto space-y-6 sm:space-y-8 text-left">
      {/* Título */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Olá, eu sou a <span className="text-green-400">Janiele Cristina</span>
      </motion.h1>

      
      <motion.div
        className="inline-block bg-green-500 text-black font-semibold text-sm sm:text-base md:text-lg px-4 py-2 rounded-md shadow-md tracking-wide"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Desenvolvedora Front-End
      </motion.div>

      
      <motion.p
        className="text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Apaixonada por tecnologia e interfaces modernas, estou sempre aprimorando minhas habilidades com{" "}
        <strong>HTML, CSS, JavaScript, React</strong> e <strong>Tailwind</strong>. Busco criar experiências intuitivas e acessíveis.
      </motion.p>
    </section>
  );
};
