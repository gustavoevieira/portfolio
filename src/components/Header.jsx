// src/components/Header.jsx
import "../styles/Header.css";
import logo from "../assets/images/logo.png";


export default function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-img-wrapper">
          <img src={logo} alt="Logo Gustavo Vieira" className="logo-img" />
        </div>

        <div>
          <h2>Gustavo Vieira</h2>
          <span className="muted">Desenvolvedor Front-end</span>
        </div>

      </div>
      <div className="header-right">
        <nav className="nav">
          <a href="#about">Sobre</a>
          <a href="#stats">Stats</a>
          <a href="#skills">Skills</a>
          <a href="#services">Serviços</a>
          <a href="#vyra">VyraOne</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
