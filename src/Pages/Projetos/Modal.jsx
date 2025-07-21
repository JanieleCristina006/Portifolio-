import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaTimes, FaEye } from 'react-icons/fa'

const Modal = ({ isOpen, onClose, projeto }) => {
  if (!projeto) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
         
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-blue-950 text-white p-6 rounded-xl shadow-xl max-w-2xl w-full relative"
            >
             
              <button
                onClick={onClose}
                className="absolute cursor-pointer top-4 right-4 text-green-500 hover:text-white text-xl transition-colors"
              >
                <FaTimes />
              </button>

            
              <Dialog.Title className="text-2xl font-bold text-green-500 mb-1">
                {projeto.titulo}
              </Dialog.Title>

              
              <p className="text-sm text-gray-300 mb-4">{projeto.descricao}</p>

              
              {projeto.imagem && (
                <img
                  src={projeto.imagem}
                  alt={`Preview do projeto ${projeto.titulo}`}
                  className="rounded-lg mb-4"
                />
              )}

              
              {projeto?.techs?.length > 0 && (
                <div className="flex flex-wrap gap-2 text-xs font-medium mb-6">
                  {projeto.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-green-600/10 border border-green-600 px-2 py-1 rounded text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              
              <div className="flex items-center gap-4">
                
                {projeto.live && (
                  <a
                    href={projeto.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative text-white hover:text-green-500 transition-colors duration-200 text-xl"
                  >
                    <FaEye />
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      Live Preview
                    </span>
                  </a>
                )}

               
                {projeto.github && (
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative text-white hover:text-green-500 transition-colors duration-200 text-xl"
                  >
                    <FaGithub />
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      GitHub
                    </span>
                  </a>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default Modal
