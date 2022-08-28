import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const localData = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(localData || "light");

  const data = {
    theme,
    setTheme,
  };

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
