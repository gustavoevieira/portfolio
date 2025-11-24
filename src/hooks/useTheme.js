// src/hooks/useTheme.js
import { useEffect, useState } from "react";

const THEMES = ["dark", "light"];

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return THEMES.includes(stored) ? stored : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
