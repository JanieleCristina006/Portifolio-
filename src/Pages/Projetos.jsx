import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FiX, FiEye, FiGithub } from "react-icons/fi";

const projetos = [
  {
    titulo: "Sistema de Ponto Eletrônico",
    imagem: "https://www.totvs.com/wp-content/uploads/2022/10/ponto-eletronico-digital.jpg",
    descricao:
      "Sistema completo de ponto eletrônico usando React + Firebase. Possui dashboard, relatórios em PDF, controle de jornada e lógica de próximas ações.",
    link: "https://github.com/seu-usuario/ponto-eletronico",
    preview: "https://ponto-eletronico-theta.vercel.app/",
  },
 
];

export const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <section className="mt-10 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6">
        Meus Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            onClick={() => setProjetoSelecionado(projeto)}
            className="cursor-pointer group relative overflow-hidden rounded-xl shadow-lg bg-black"
          >
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-black bg-opacity-80 p-4 text-white">
              <h3 className="text-lg font-bold">{projeto.titulo}</h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog
  open={!!projetoSelecionado}
  onClose={() => setProjetoSelecionado(null)}
  className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center"
>
  <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

  <div className="relative bg-zinc-900 rounded-lg shadow-xl max-w-lg w-full p-6 z-50 text-white">
    {/* Botão de fechar com ícone */}
    <button
      onClick={() => setProjetoSelecionado(null)}
      className="absolute top-3 right-3 text-white hover:text-gray-300 text-3xl"
      aria-label="Fechar"
    >
      <FiX />
    </button>

    {projetoSelecionado && (
      <>
        <img
          src={projetoSelecionado.imagem}
          alt={projetoSelecionado.titulo}
          className="rounded mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{projetoSelecionado.titulo}</h2>
        <p className="text-sm mb-6 text-gray-300">
          {projetoSelecionado.descricao}
        </p>
        <div className="flex justify-end gap-3">
          {projetoSelecionado.preview && (
            <a
              href={projetoSelecionado.preview}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm transition"
            >
              <FiEye />
              Ver projeto
            </a>
          )}
          <a
            href={projetoSelecionado.link}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-300 rounded text-sm transition"
          >
            <FiGithub />
            GitHub
          </a>
        </div>
      </>
    )}
  </div>
</Dialog>

 
    </section>
  );
};
