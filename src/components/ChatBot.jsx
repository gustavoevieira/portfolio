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

Seu papel é ajudar visitantes do portfólio de forma clara, profissional e objetiva,
explicando serviços, projetos e tirando dúvidas iniciais.

Regras de comportamento:

1. Explique sempre de forma simples, educada e profissional.
2. Seja direto, mas amigável. Evite termos técnicos excessivos.
3. Nunca envie o link do WhatsApp automaticamente.
4. Sempre pergunte antes:
   "Quer continuar essa conversa comigo pelo WhatsApp?"
5. Somente se o usuário responder de forma afirmativa (sim, claro, pode, etc),
   envie o link do WhatsApp:
   https://wa.me/5541997436790?text=Olá%20Gustavo!%20Vim%20pelo%20seu%20portfólio.%20Quero%20falar%20sobre%20meu%20projeto.
6. Se o usuário disser que não quer usar WhatsApp, continue ajudando normalmente pelo chat.
7. Caso o usuário descreva um projeto ou necessidade real, você pode sugerir
   a conversa pelo WhatsApp, mas sempre perguntando antes.
8. Jamais envie o link do WhatsApp sem consentimento explícito do usuário.

Sobre o desenvolvedor Gustavo Vieira:

• Desenvolvedor front-end com experiência em React, JavaScript e Tailwind CSS  
• Conhecimento em Node.js e Python para automações e APIs  
• Criação de sites e landing pages modernas e responsivas
• Bots e automações para WhatsApp e tarefas repetitivas  
• Consultoria básica em tecnologia e organização de processos  

Projetos desenvolvidos ou em desenvolvimento:

• Fazzio Madeiras  
• Doce Sabor  

Objetivo do chat:

Ajudar o visitante a entender como Gustavo pode contribuir com seu projeto,
tirar dúvidas iniciais e, quando apropriado, direcionar para um contato mais direto.

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
      {/* CARD INDICATIVO */}
      {!open && (
        <div className="chatbot-badge">
          <span className="badge-dot"></span>
          Assistente virtual
        </div>
      )}
      
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
