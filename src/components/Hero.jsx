// src/components/Hero.jsx
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnim from "../assets/lotties/hero.json";
import "../styles/Hero.css";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="card hero">
      <div className="hero-left">
        <motion.h1
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Olá, eu sou{" "}
          <span className="accent-text">Gustavo Vieira</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Desenvolvedor Fullstack focado em{" "}
          <strong>web sites, automações, sistemas e dashboards</strong> para
          negócios.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.35 }}
        >
          <a href="#projects" className="btn">
            Ver projetos
          </a>
          <a href="#contact" className="btn ghost">
            Fale comigo
          </a>
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <Lottie
          animationData={heroAnim}
          loop
          style={{ width: 340, maxWidth: "100%" }}
        />
      </motion.div>
    </section>
  );
}
