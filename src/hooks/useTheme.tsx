"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "obsidian" | "paper";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("obsidian");
  const [isMounted, setIsMounted] = useState(false);

  const applyThemeToDOM = (t: Theme) => {
    document.documentElement.setAttribute("data-theme", t);
    if (t === "obsidian") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light", "paper");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light", "paper");
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("qfive-theme") as Theme | null;
    const initialTheme: Theme = savedTheme === "paper" || savedTheme === "obsidian" ? savedTheme : "obsidian";
    setThemeState(initialTheme);
    applyThemeToDOM(initialTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("qfive-theme", newTheme);
    applyThemeToDOM(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "obsidian" ? "paper" : "obsidian";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
