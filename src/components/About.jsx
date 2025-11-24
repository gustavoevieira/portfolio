// src/components/About.jsx
import "../styles/About.css";

export default function About() {
  return (
    <section className="card about">
      <h3>Sobre mim</h3>
      <p>
        Sou desenvolvedor fullstack com foco em criar{" "}
        <strong>soluções reais para empresas</strong>: sites,
        sistemas internos, dashboards e automações que conectam
        processos, pessoas e dados.
      </p>

      <ul className="about-tags">
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Automações</li>
        <li>Integrações com ERP</li>
      </ul>
      
    </section>
  );
}
