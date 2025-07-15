import { motion } from 'framer-motion'

const Header = () => (
  <header>
      <motion.h2
        className="text-3xl font-bold text-green-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projetos
      </motion.h2>
  </header>
)

export default Header