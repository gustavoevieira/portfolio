// src/components/Projects.jsx
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import "../styles/Projects.css";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="card projects-section">
      <div className="projects-header">
        <h3>Projetos</h3>
        <p className="muted">
          Alguns dos trabalhos e experimentos que desenvolvi.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => setActive(project)}
          >
            <div
              className="project-thumb"
              style={{ backgroundImage: `url(${project.img})` }}
            />
            <h4>{project.title}</h4>
            <p className="muted small">{project.desc}</p>
          </article>
        ))}
      </div>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
