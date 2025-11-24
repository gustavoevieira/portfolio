console.log(import.meta.env.VITE_OPENROUTER_KEY);

import { useState, useRef, useEffect } from "react";
import "../styles/ChatBot.css";
import ReactMarkdown from "react-markdown";
import Lottie from "lottie-react";
import roboAnim from "../assets/lotties/robo.json";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Olá! 👋 Sou o assistente virtual do Gustavo. Como posso ajudar?"
    },
  ]);
  const [input, setInput] = useState("");
  const [showScrollDown, setShowScrollDown] = useState(false);

  const messagesEndRef = useRef(null);

  function scrollToBottom() {
    if (!messagesEndRef.current) return;

    const parent = messagesEndRef.current.parentElement;

    parent.scrollTo({
      top: messagesEndRef.current.offsetTop - 20,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  function handleScroll(e) {
    const el = e.target;
    const isBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50;
    setShowScrollDown(!isBottom);
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setTyping(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Gustavo Vieira Portfolio Assistant",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          messages: [
            {
              role: "system",
              content: `
Você é o assistente virtual do desenvolvedor Gustavo Vieira.

Explique seus serviços:

• Criação de sites e landing pages  
• Bots e automações (WhatsApp/Python)  
• Dashboards e sistemas internos  
• Consultoria em tecnologia  
• Tecnologias: React, Node.js, Python, MySQL, Git, GitHub  
• Projetos reais: Fazzio Madeiras, Doce Sabor, VyraOne Dashboard  

Seja educado, direto e profissional.
              `,
            },
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: userMsg },
          ],
        }),
      });

      const data = await response.json();

      setTyping(false);

      if (!data?.choices?.[0]?.message?.content) {
        console.error("Resposta da API:", data);
        throw new Error("Resposta inválida da API");
      }

      const botReply = data.choices[0].message.content;
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);

    } catch (err) {
      console.error("Erro:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Ops! Algo deu errado." }
      ]);
      setTyping(false);
    }
  }

  return (
    <>
      {/* BOTÃO ANIMADO */}
      <div
        className={`chatbot-btn ${open ? "opened" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <Lottie animationData={roboAnim} loop={true} autoplay={true} />
      </div>

      {/* JANELA DO CHAT */}
      {open && (
        <div className="chatbot-window">

          {/* HEADER */}
          <div className="chatbot-header">
            <div className="bot-avatar">
              <Lottie animationData={roboAnim} loop={true} />
            </div>

            <h4>Assistente Virtual</h4>

            <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* LISTA DE MENSAGENS */}
          <div className="chatbot-messages" onScroll={handleScroll}>
            {messages.map((msg, index) => (
              <div key={index} className={`msg ${msg.sender}`}>
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            ))}

            {typing && (
              <div className="typing-indicator">
                <Lottie animationData={roboAnim} loop={true} />
                <span className="dots"><span>.</span><span>.</span><span>.</span></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* BOTÃO ↓ PARA VOLTAR AO FINAL */}
          {showScrollDown && (
            <button className="scroll-down-btn" onClick={scrollToBottom}>
              ↓
            </button>
          )}

          {/* INPUT */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}
