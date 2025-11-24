// src/components/Services.jsx
import { motion } from "framer-motion";
import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      title: "Criação de sites e landing pages",
      desc: "Sites modernos, rápidos e responsivos para apresentar seu negócio e captar clientes.",
      items: ["Site institucional", "Landing page de vendas", "Integração com WhatsApp"],
    },
    {
      title: "Dashboards e sistemas sob medida",
      desc: "Painéis internos para organizar dados e facilitar a gestão empresarial.",
      items: ["Painéis administrativos", "Relatórios automáticos", "Controle de vendas/estoque"],
    },
    {
      title: "Bots e automações",
      desc: "Automatizo tarefas repetitivas e crio bots que economizam horas de trabalho.",
      items: ["Bots WhatsApp", "Automação com Python", "Integrações com ERPs"],
    },
    {
      title: "Consultoria em tecnologia",
      desc: "Te ajudo a identificar oportunidades e criar soluções sob medida.",
      items: ["Mapeamento de processos", "Recomendações técnicas", "Acompanhamento estratégico"],
    },
  ];

  return (
    <section className="card services">
      <h3>O que eu faço</h3>
      <p className="muted">
        Soluções tecnológicas criadas para empresas, autônomos e comércios locais.
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
