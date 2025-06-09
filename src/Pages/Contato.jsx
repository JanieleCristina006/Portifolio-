import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Foto from './../assets/menina.png'

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
          alert("✅ Obrigada pelo contato! Retornarei em breve 💌");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Ocorreu um erro. Tente novamente.");
        }
      );
  };

  return (
    <section className="h-[650px] flex flex-col items-center justify-center bg-zinc-900 text-white px-6 py-4">
      {/* Header da seção */}
      <motion.div
        className="mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-green-400 mb-4">Fale comigo</h2>
        <p className="text-gray-300 text-lg">
          Ficarei feliz em saber mais sobre você, suas ideias ou qualquer oportunidade que queira compartilhar. 😊
        </p>
      </motion.div>

      {/* Container do formulário */}
      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-2 bg-zinc-800 rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Lado esquerdo - imagem */}
        <div className="bg-zinc-700 hidden md:flex items-center justify-center">
          <img
            src={Foto}
            alt="Janiele Cristina"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lado direito - formulário */}
        <div className="p-10 space-y-6 flex flex-col justify-center">
          <motion.h3
            className="text-2xl font-semibold text-green-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contato direto
          </motion.h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <motion.input
              type="text"
              name="from_name"
              placeholder="Nome completo"
              required
              className="w-full border-b border-zinc-500 bg-transparent p-2 text-white placeholder-zinc-400 focus:outline-none focus:border-green-400 transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="reply_to"
              placeholder="E-mail"
              required
              className="w-full border-b border-zinc-500 bg-transparent p-2 text-white placeholder-zinc-400 focus:outline-none focus:border-green-400 transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Sua mensagem"
              rows="4"
              required
              className="w-full border-b border-zinc-500 bg-transparent p-2 text-white placeholder-zinc-400 resize-none focus:outline-none focus:border-green-400 transition"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="mt-4 cursor-pointer bg-white text-black px-6 py-3 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              Enviar mensagem
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
