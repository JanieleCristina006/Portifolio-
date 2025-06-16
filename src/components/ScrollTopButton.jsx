import { FaMouse } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-transparent"
    >
      <div className="w-14 h-14 border-2 border-green-500 rounded-full flex items-center justify-center animate-pulse">
        <FaMouse className="text-green-500 text-xl" />
      </div>
    </motion.button>
  )
}

export default ScrollTopButton
