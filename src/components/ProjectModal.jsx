// src/components/ProjectModal.jsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import "../styles/Projects.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          <img
            src={project.img}
            alt={project.title}
            className="modal-thumb"
          />

          <h4>{project.title}</h4>
          <p className="muted">{project.desc}</p>

          {project.tech && (
            <div className="techs">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}

          <div className="modal-actions">
            {project.demo && (
              <a
                className="btn"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Ver projeto
              </a>
            )}
            {project.github && (
              <a
                className="btn ghost"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Código no GitHub
              </a>
            )}
            <button className="btn ghost" onClick={onClose}>
              Fechar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body // <--- O SEGREDO PARA O MODAL FICAR NO LUGAR CERTO
  );
}
