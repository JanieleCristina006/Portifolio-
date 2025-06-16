import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Foto from './../assets/menina.png';

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
       <section className="w-full min-h-screen bg-zinc-900 text-white px-4 sm:px-6 py-12">
  {/* Título */}
  <motion.div
    className="mb-12 text-center max-w-3xl mx-auto"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">Fale comigo</h2>
    <p className="text-gray-300 text-base sm:text-lg px-2">
      Ficarei feliz em saber mais sobre você, suas ideias ou qualquer oportunidade que queira compartilhar. 😊
    </p>
  </motion.div>

  {/* Grid responsivo */}
  <motion.div
    className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-xl shadow-lg overflow-hidden bg-zinc-800"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* IMAGEM */}
    <div className="hidden md:flex items-center justify-center bg-zinc-700">
      <img
        src={Foto}
        alt="Janiele Cristina"
        className="w-full h-full object-cover"
      />
    </div>

    {/* FORMULÁRIO */}
    <div className="w-full p-6 sm:p-10 flex flex-col justify-center bg-zinc-800">
      <motion.h3
        className="text-xl sm:text-2xl font-semibold text-green-400 mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contato direto
      </motion.h3>

      <form ref={form} onSubmit={sendEmail} className="space-y-5 w-full">
        <motion.input
          type="text"
          name="from_name"
          placeholder="Nome completo"
          required
          className="w-full border-b border-zinc-500 bg-transparent py-2 px-1 text-white placeholder-zinc-400 focus:outline-none focus:border-green-400 transition"
        />
        <motion.input
          type="email"
          name="reply_to"
          placeholder="E-mail"
          required
          className="w-full border-b border-zinc-500 bg-transparent py-2 px-1 text-white placeholder-zinc-400 focus:outline-none focus:border-green-400 transition"
        />
        <motion.textarea
          name="message"
          placeholder="Sua mensagem"
          rows="4"
          required
          className="w-full border-b border-zinc-500 bg-transparent py-2 px-1 text-white placeholder-zinc-400 resize-none focus:outline-none focus:border-green-400 transition"
        ></motion.textarea>

        <motion.button
          type="submit"
          className="w-full bg-white text-black px-6 py-3 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 ease-in-out"
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
