// src/components/Contact.jsx
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnim from "../assets/lotties/contact.json";
import "../styles/Contact.css";

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
    alert("Aqui você pode integrar com EmailJS ou backend próprio 😉");
  };

  return (
    <section className="card contact">
      <motion.div
        className="contact-form-wrapper"
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3>Contato</h3>
        <p className="muted">
          Me conte sobre seu projeto, problema ou ideia. Eu te
          respondo com uma proposta objetiva.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Fale sobre o projeto, prazo, orçamento..."
            required
          />
          <button className="btn" type="submit">
            Enviar mensagem
          </button>
        </form>
      </motion.div>

      <motion.div
        className="contact-anim"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Lottie
          animationData={contactAnim}
          loop
          style={{ width: 320, maxWidth: "100%" }}
        />
      </motion.div>
    </section>
  );
}
