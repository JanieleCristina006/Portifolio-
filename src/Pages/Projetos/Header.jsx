import { motion } from 'framer-motion'

const Header = () => (
  <header>
      <motion.h2
        className="projects-title"
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
