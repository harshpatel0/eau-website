import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  function getDarkModeSettingFromLocalStorage() {
    // Attempt to retrieve the darkMode value from local storage
    const darkModeSettingFromLocalStorage =
      window.localStorage.getItem("darkMode");

    // Check if the value exists and is a valid JSON string
    if (darkModeSettingFromLocalStorage !== null) {
      try {
        return JSON.parse(darkModeSettingFromLocalStorage);
      } catch (error) {
        console.error("Error parsing dark mode setting:", error);
        return false; // Fallback to default value
      }
    }

    return false; // Default value
  }

  function toggleTheme() {
    setDarkMode((d) => !darkMode);
  }

  const [darkMode, setDarkMode] = useState(
    getDarkModeSettingFromLocalStorage()
  );

  useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
