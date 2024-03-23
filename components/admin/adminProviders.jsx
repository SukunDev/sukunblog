"use client";

import { createContext, useContext, useState } from "react";

const AdminThemeContext = createContext({});

export const AdminThemeContextProvider = ({ children, user }) => {
  const [data, setData] = useState({
    user: user,
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
    <AdminThemeContext.Provider value={{ data, handleDataChange }}>
      {children}
    </AdminThemeContext.Provider>
  );
};

export const useAdminThemeContext = () => useContext(AdminThemeContext);
