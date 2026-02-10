import "../styles/About.css";

export default function About() {
  return (
    <section className="card about">
      <h3>Sobre mim</h3>
      <p>
        Desenvolvedor front-end júnior com base sólida em{" "}
        <strong>React, JavaScript e Tailwind CSS.</strong>Tenho facilidade em aprender novas tecnologias, seguir boas práticas
        e desenvolver interfaces modernas, responsivas e bem estruturadas.
      </p>

      <ul className="about-tags">
        <li>React</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MYSQL</li>
      </ul>

    </section>
  );
}
