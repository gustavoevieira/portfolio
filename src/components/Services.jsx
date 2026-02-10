// src/components/Services.jsx
import { motion } from "framer-motion";
import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      title: "Desenvolvimento Front-end",
      desc: "Criação de interfaces modernas, responsivas e bem estruturadas.",
      items: [
        "React com JSX",
        "Estilização com Tailwind CSS",
        "Componentização e boas práticas",
      ],
    },
    {
      title: "Aplicações Web",
      desc: "Projetos web focados em organização, usabilidade e código limpo.",
      items: [
        "Formulários e validações",
        "Consumo de APIs",
        "Layouts responsivos",
      ],
    },
    {
      title: "Aprendizado contínuo",
      desc: "Sempre evoluindo e estudando novas tecnologias.",
      items: [
        "Boas práticas de desenvolvimento",
        "Versionamento com Git",
        "Evolução para full stack",
      ],
    },
  ];

  return (
    <section className="card services">
      <h3>O que eu desenvolvo</h3>
      <p className="muted">
        Áreas nas quais tenho experiência prática e venho me aprofundando
        constantemente como desenvolvedor.
      </p>

      <div className="services-grid">
        {services.map((s, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4>{s.title}</h4>
            <p>{s.desc}</p>

            <ul>
              {s.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <a href="#contact" className="btn services-cta">Entrar em contato</a>
    </section>
  );
}
