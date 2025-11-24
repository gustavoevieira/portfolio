// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import VyraSection from "./components/VyraSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Services from "./components/Services";
import ChatBot from "./components/ChatBot";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="stats">
          <Stats />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="vyra">
          <VyraSection />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}
