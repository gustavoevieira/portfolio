// src/components/VyraSection.jsx
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import vyraAnim from "../assets/lotties/vyra.json";
import "../styles/VyraSection.css";

export default function VyraSection() {
  return (
    <section className="card vyra">
      <div className="vyra-text">
        <h3>VyraOne · Plataforma de automações</h3>
        <p>
          A VyraOne é uma central para{" "}
          <strong>dashboards, automações e integrações</strong> com
          ERPs, bancos de dados e APIs. Ideal para empresas que
          precisam organizar processos e ganhar eficiência sem
          complicação.
        </p>

        <ul className="vyra-list">
          <li>Dashboards personalizados</li>
          <li>Integração com bancos de dados e APIs</li>
          <li>Bots e automações internas</li>
        </ul>

        <a href="#contact" className="btn">
          Quero saber mais
        </a>
      </div>

      <motion.div
        className="vyra-anim"
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Lottie
          animationData={vyraAnim}
          loop
          style={{ width: 320, maxWidth: "100%" }}
        />
      </motion.div>
    </section>
  );
}
