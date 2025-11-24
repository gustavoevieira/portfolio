// src/components/Footer.jsx
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <SocialLinks />
      <p>© {new Date().getFullYear()} Gustavo Vieira · VyraOne</p>
    </footer>
  );
}
