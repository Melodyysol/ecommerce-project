import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "../hooks/useTheme";
import type { Theme } from "../types/theme";


const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "winter";
    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "dracula" ? "dracula" : "winter";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dracula" ? "winter" : "dracula"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
