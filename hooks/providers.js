"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [data, setData] = useState({
    menuOpened: false,
    categories: [
      { name: "info", href: "category/info" },
      { name: "tips & tricks", href: "category/tips-and-tricks" },
      { name: "tutorial", href: "category/tutorial" },
      { name: "tech", href: "category/tech" },
    ],
    pages: [
      { name: "home", href: "" },
      { name: "about", href: "about" },
      { name: "contact", href: "contact" },
      { name: "Privacy Policy", href: "privacy-policy" },
      { name: "Terms of Service", href: "terms-of-service" },
    ],
    socialMedia: [
      "https://github.com/SukunDev/",
      "https://www.youtube.com",
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
