import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "../styles/SocialLinks.css";

export default function SocialLinks() {
  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/gustavoevieira",
      label: "GitHub",
    },
    // {
    //   icon: <FaLinkedin />,
    //   url: "https://linkedin.com/in/seuUsuario",
    //   label: "LinkedIn",
    // },
    // {
    //   icon: <FaInstagram />,
    //   url: "https://instagram.com/seuUsuario",
    //   label: "Instagram",
    // },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/5541997436790?text=Olá,%20vim%20pelo%20seu%20portfólio!",
      label: "WhatsApp",
    },
    // {
    //   icon: <FaYoutube />,
    //   url: "https://youtube.com/@seuCanal",
    //   label: "YouTube",
    // },
  ];

  return (
    <div className="social-links">
      {socials.map((s, i) => (
        <a 
          key={i}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          aria-label={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
