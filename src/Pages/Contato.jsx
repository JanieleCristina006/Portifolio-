import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FiMail,
  FiMapPin,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

export const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_90o4w4e",
        "template_zwru7sh",
        form.current,
        "nqBfWnWy3IM9RL64W"
      )
      .then(
        () => {
          alert("✅ Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Ocorreu um erro. Tente novamente.");
        }
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-900 text-white px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
        {/* Lado esquerdo - imagem */}
        <div className="bg-zinc-700 flex items-center justify-center">
          <img
            src="/foto.jpg"
            alt="Janiele Cristina"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lado direito - formulário */}
        <div className="p-10 space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Contato</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="from_name"
              placeholder="Nome completo"
              required
              className="w-full border-b border-zinc-500 bg-transparent p-2 text-white placeholder-zinc-400 focus:outline-none focus:border-green-400 transition"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="E-mail"
              required
              className="w-full border-b border-zinc-500 bg-transparent p-2 text-white placeholder-zinc-400 focus:outline-none focus:border-green-400 transition"
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows="4"
              required
              className="w-full border-b border-zinc-500 bg-transparent p-2 text-white placeholder-zinc-400 resize-none focus:outline-none focus:border-green-400 transition"
            ></textarea>

              <button
                type="submit"
                className="mt-4 bg-white cursor-pointer text-black px-6 py-3 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 ease-in-out"
              >
                Enviar mensagem
              </button>  
          </form>

        </div>
      </div>
    </section>
  );
};
