// src/components/VyraSection.jsx
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import vyraAnim from "../assets/lotties/vyra.json";
import "../styles/VyraSection.css";

export default function VyraSection() {
  return (
    <section className="card vyra">
      <div className="vyra-text">
        <h3>VyraOne · Projeto conceitual</h3>
        <p>
          A <strong>VyraOne</strong> é uma ideia de projeto que estou
          desenvolvendo como estudo, com foco em organização de dados,
          dashboards e automações internas.
          O objetivo é evoluir essa ideia gradualmente, aplicando
          conceitos de front-end, lógica e integração com APIs.
        </p>

        <ul className="vyra-list">
          <li>Conceito de dashboards interativos</li>
          <li>Estudos de integração com APIs</li>
          <li>Arquitetura pensada para evolução futura</li>
        </ul>

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
