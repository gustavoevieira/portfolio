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

  const lastMessageRef = useRef(null);

  function scrollToMessageTop() {
    if (!lastMessageRef.current) return;

    const container = lastMessageRef.current.parentElement;

    container.scrollTop = lastMessageRef.current.offsetTop - 10;
  }

  useEffect(() => {
    scrollToMessageTop();
  }, [messages]);

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

Seu comportamento deve seguir estas regras:

1. Explique sempre de forma simples, profissional e objetiva.
2. Nunca envie o link do WhatsApp automaticamente.
3. Sempre pergunte antes:  
   "Quer continuar comigo pelo WhatsApp?"
4. Se o usuário disser que SIM, aí você envia o link:
   https://wa.me/5541997436790?text=Olá%20Gustavo!%20Vim%20pelo%20seu%20portfólio.%20Quero%20falar%20sobre%20meu%20projeto.
5. Se o usuário responder que NÃO, apenas continue ajudando pelo chat normalmente.
6. Caso o usuário descreva um projeto, você pode sugerir a opção de falar no WhatsApp, mas SEMPRE perguntando antes.
7. Jamais envie o link do WhatsApp sem que o usuário tenha concordado.

Informações do Gustavo:

• Criação de sites e landing pages  
• Bots e automações (WhatsApp e Python)  
• Dashboards e sistemas internos  
• Consultoria em tecnologia  
• Tecnologias usadas: React, Node.js, Python, MySQL, Git, GitHub  
• Projetos reais: Fazzio Madeiras, Doce Sabor, VyraOne Dashboard  

Seja educado, direto, profissional e amigável.
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
        <Lottie animationData={roboAnim} loop autoplay />
      </div>

      {/* JANELA DO CHAT */}
      {open && (
        <div className="chatbot-window">

          {/* HEADER */}
          <div className="chatbot-header">
            <div className="bot-avatar">
              <Lottie animationData={roboAnim} loop />
            </div>

            <h4>Assistente Virtual</h4>

            <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* LISTA DE MENSAGENS */}
          <div className="chatbot-messages" onScroll={handleScroll}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`msg ${msg.sender}`}
                ref={index === messages.length - 1 ? lastMessageRef : null}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            ))}

            {typing && (
              <div className="typing-indicator">
                <Lottie animationData={roboAnim} loop />
                <span className="dots"><span>.</span><span>.</span><span>.</span></span>
              </div>
            )}
          </div>

          {/* BOTÃO ↓ PARA IR AO TOPO DA ÚLTIMA MENSAGEM */}
          {showScrollDown && (
            <button className="scroll-down-btn" onClick={scrollToMessageTop}>
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
