import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowRight,
  FiArrowUp,
  FiArrowUpRight,
  FiFileText,
  FiMail,
  FiSend,
} from "react-icons/fi";
import ContactBrush from "../assets/pincelada-roxa-crop.png";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/janiele-cristina",
    icon: <FaLinkedinIn aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/JanieleCristina006",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    label: "Currículo",
    href: "/janiele-cristina_curriculo.pdf",
    icon: <FiFileText aria-hidden="true" />,
  },
];

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (
      !emailConfig.serviceId ||
      !emailConfig.templateId ||
      !emailConfig.publicKey
    ) {
      setStatus("Formulario ainda nao configurado para envio.");
      return;
    }

    setStatus("");
    setIsSending(true);

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      );

      setStatus("Mensagem enviada. Retornarei em breve!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Não foi possível enviar agora. Tente novamente pelo e-mail.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contato">
      <img className="contact-brush" src={ContactBrush} alt="" />
      <div className="contact-accent" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="contact-shell">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="contact-kicker">Vamos conversar</p>
            <h2>Tem uma ideia? Vamos criar algo incrível.</h2>
            <p>
              Estou disponível para oportunidades, colaborações e novos
              projetos.
            </p>

            <span className="availability-pill">
              <span aria-hidden="true" />
              Disponível para oportunidades
            </span>

            <a
              className="contact-email"
              href="mailto:janielecristina539@gmail.com"
              aria-label="Enviar e-mail para Janiele Cristina"
            >
              <span>
                <FiMail aria-hidden="true" />
              </span>
              <strong>janielecristina539@gmail.com</strong>
              <FiArrowRight aria-hidden="true" />
            </a>

            <div className="contact-links" aria-label="Links de contato">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.icon}
                  {link.label}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="send-orbit" aria-hidden="true">
              <FiSend />
            </div>

            <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
              <div className="contact-form-title">
                <span aria-hidden="true">
                  <FiMail />
                </span>
                <h3>Envie uma mensagem</h3>
              </div>

              <label>
                <span>Seu nome</span>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Digite seu nome"
                  required
                />
              </label>

              <label>
                <span>Seu e-mail</span>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Digite seu melhor e-mail"
                  required
                />
              </label>

              <label>
                <span>Conte um pouco sobre sua ideia...</span>
                <textarea
                  name="message"
                  placeholder="Compartilhe detalhes sobre o projeto ou oportunidade"
                  rows="4"
                  required
                />
              </label>

              <button type="submit" disabled={isSending}>
                {isSending ? "Enviando..." : "Enviar mensagem"}
                <FiArrowRight aria-hidden="true" />
              </button>

              {status && <p className="contact-status">{status}</p>}
            </form>
          </div>
        </div>

        <footer className="portfolio-footer">
          <div>
            <strong>Janiele Cristina</strong>
            <span>Desenvolvedora Fullstack</span>
          </div>

          <p>&copy; {new Date().getFullYear()}</p>

          <a href="#inicio" aria-label="Voltar ao topo">
            Voltar ao topo
            <span>
              <FiArrowUp aria-hidden="true" />
            </span>
          </a>
        </footer>
      </div>
    </section>
  );
};
