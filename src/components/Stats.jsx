// src/components/Stats.jsx
import { motion } from "framer-motion";
import "../styles/Stats.css";

export default function Stats() {
  const stats = [
    { number: "15+", label: "Projetos práticos desenvolvidos" },
    { number: "5+", label: "Tecnologias principais" },
    { number: "1000+", label: "Horas de estudo e prática" },
    { number: "Em andamento", label: "Graduação em tecnologia" },
  ];

  return (
    <section className="card stats">
      <h3>Stats</h3>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="stat-number">{item.number}</span>
            <span className="stat-label">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
