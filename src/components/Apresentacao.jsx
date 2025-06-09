import { motion } from 'framer-motion'

export const Apresentacao = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 space-y-8">
      <motion.h1
        className="text-3xl md:text-4xl font-semibold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Olá, eu sou a <span className="text-green-400">Janiele Cristina</span>
      </motion.h1>

      <motion.h2
        className="inline-block bg-green-500 text-black font-bold text-xl px-4 py-1 rounded-md shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Desenvolvedora Front-End
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Apaixonada por tecnologia e interfaces modernas, estou sempre aprimorando minhas habilidades com <strong>HTML, CSS, JavaScript, React</strong> e <strong>UI/UX</strong>. Busco criar experiências intuitivas e acessíveis.
      </motion.p>
    </section>
  )
}
