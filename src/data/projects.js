// src/data/projects.js
import proj1 from "../assets/images/proj1.jpg";
import proj2 from "../assets/images/proj2.jpg";
import proj3 from "../assets/images/proj3.jpg";

export const projects = [
  {
    id: 1,
    title: "Site Fazzio Madeiras",
    desc: "Site institucional focado em geração de orçamento para marcenarias e construtoras.",
    img: proj1,
    tech: ["React", "Node.js", "MySQL"],
    demo: "https://www.fazziomadeiras.com.br",
  },
  {
    id: 2,
    title: "Doce Sabor",
    desc: "Site estático para confeitaria local com foco em cardápio visual e contato via WhatsApp.",
    img: proj2,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://gustavoevieira.github.io/docesabor/",
    github: "https://github.com/gustavoevieira/docesabor",
  },
  {
    id: 3,
    title: "VyraOne Dashboard",
    desc: "Dashboard administrativo com área de login, cards e base para automações internas.",
    img: proj3,
    tech: ["React", "APIs"],
    demo: "#",
  },
];
