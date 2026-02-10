// src/components/Skills.jsx
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import "../styles/Skills.css";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, label: "React" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaNode />, label: "Node.js" },
    { icon: <FaDatabase />, label: "MySQL" },
    { icon: <FaGitAlt />, label: "Git" },
    { icon: <FaGithub />, label: "GitHub" },
  ];

  return (
    <section className="card skills">
      <h3>Skills</h3>

      <div className="skills-grid">
        {skills.map((s, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{s.icon}</div>
            <p className="skill-label">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
