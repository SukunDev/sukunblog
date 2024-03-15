"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [data, setData] = useState({
    menuOpened: false,
    categories: [
      { name: "info", href: "/category/info" },
      { name: "tips & trick", href: "/category/tips-and-trick" },
      { name: "tutorial", href: "/category/tutorial" },
      { name: "tech", href: "/category/tech" },
    ],
    pages: [
      { name: "home", href: "/" },
      { name: "about", href: "/p/about" },
      { name: "contact", href: "/p/contact" },
      { name: "desclaimer", href: "/p/desclaimer" },
    ],
    socialMedia: [
      "https://github.com",
      "https://www.youtube.comn",
      "https://www.instagram.com",
      "https://tiktok.com",
    ],
  });
  const handleDataChange = (e) => {
    setData((prevState) => {
      const newState = { ...prevState };
      Object.entries(e).forEach(([key, value]) => {
        newState[key] = value;
      });
      return newState;
    });
  };
  return (
    <ThemeContext.Provider value={{ data, handleDataChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
