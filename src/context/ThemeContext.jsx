import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem("themeMode");
    return savedMode || "dark";
  });

  // Save preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
